'use client'

import React, {  useState } from 'react'
import profile from '../../../public/Blog.svg'
import Image from 'next/image'
import { IoIosArrowDown } from 'react-icons/io'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { FaBars } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'

import Link from 'next/link'
import { getnavitems } from '@/lib/nav'
import { useQuery } from '@tanstack/react-query'
import { toast } from 'react-toastify'


const Navbar = () => {
    
    interface media{
        id:number,
        link:string,
        icon:{
            filename:string,
        }
        displayName:string,
        summary:string,
       
    }
    
    interface data{
        id:number,
        link:string,
        displayName:string,
        children:media[],

    }
    
   
    const [mobilenav, setMobilenav] = useState(false)
    const [isdropped, setIsdropped] = useState<number|null>(null)
   
   const api = process.env.NEXT_PUBLIC_API


   const {data:navitems=[],isError}= useQuery<data[]>({
    queryKey:["navitems"],
    queryFn:async()=>{
        const response = await getnavitems()
        return response?.data
    }
   })

   if(isError){
    toast.error("Failed to Load the Data")
   }
  
   


   
    return (
        <nav className='w-full relative sticky top-0 flex backdrop-blur-3xl flex-row justify-between md:h-[12ch] h-[9ch] bg-white/60 md:px-28 px-5 md:shadow-transparent shadow-md z-50'>
            {/* Image Section */}
            <div className='flex flex-row w-fit items-center justify-between'>
                <Link href={'/'}>
                <Image alt="Logo-Section" src={profile} />
                </Link>
            </div>

            <div className={`md:flex md:items-center ${mobilenav ? "flex" : "hidden"} md:bg-transparent bg-white z-50 md:flex-row items-start px-2 flex-col gap-y-6 absolute md:relative md:top-0 top-30 left-0 md:w-3/4 w-full md:h-full h-[calc(100vh-18ch)] justify-between`}>
                {/* navitems-section */}
                <ul className='list-none flex md:flex-row flex-col gap-y-10 md:items-center items-start relative font-normal justify-between gap-x-20 text-xl'>
                    {navitems.map((items) => (
                        <li key={items.id}>
                            {items.children && items.children.length > 0 ? (
                                <div className='relative'
                                    onMouseEnter={() => setIsdropped(items.id)}
                                    onMouseLeave={() => setIsdropped(null)}
                                >
                                    <Link 
                                        href={items.link || "#"} 
                                        className='flex font-extralight relative group items-center md:justify-center justify-between gap-x-3'
                                    >
                                        {items.displayName}
                                        <span className='group-hover:rotate-180 transition-all ease-in-out duration-300'>
                                            <IoIosArrowDown />
                                        </span>
                                    </Link>
                                    
                                    {isdropped === items.id && (
                                        <ul 
                                            className='md:absolute relative top-0 md:top-15 md:left-0 z-[50] md:w-[65rem] w-[20rem] h-[25ch] md:grid md:grid-cols-3 flex flex-col md:bg-neutral-50 bg-transparent px-8 py-10 space-x-3 rounded-2xl md:shadow-md shadow-transparent'
                                            onMouseEnter={() => setIsdropped(items.id)}
                                            onMouseLeave={() => setIsdropped(null)}
                                        >
                                            {items.children.map((option) => (
                                                <li key={option.id}
                                                    className='hover:bg-neutral-50 rounded-xl space-y-3 hover:shadow-sm flex items-center justify-start p-2 text-center transition-all ease-in-out duration-300'
                                                >
                                                    <Link href={option.link || "#"} className='flex md:flex-row flex-col gap-x-2 items-center justify-center hover:sm:text-cyan-600 transition-all ease-in-out duration-300'>
                                                        {/* icon part */}
                                                        <div className='md:flex hidden items-center justify-center p-2 bg-cyan-600/10 rounded-xl'>
                                                            <Image src={`${api}/${option.icon.filename}`} alt={items.displayName} width={20} height={20}  className='text-cyan-700'/>
                                                        </div>
                                                        <div className='flex flex-col items-start'>
                                                            <h1 className='md:text-base text-sm text-black'>
                                                                {option.displayName}
                                                            </h1>
                                                            <small className='md:flex hidden text-sm font-extralight'>
                                                                {option.summary}
                                                            </small>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            ) : (
                                <Link href={items.link || "#"} className='flex font-extralight relative group items-center md:justify-center justify-between gap-x-3'>
                                    {items.displayName}
                                    <span className='absolute md:flex hidden left-0 top-10 bottom-0 w-0 h-0.5 bg-blue-600 group-hover:w-[70] transition-all ease-in-out duration-300' />
                                </Link>
                            )}
                        </li>
                    ))}
                </ul>

                {/* Getting Started */}
                <button className='border-1 md:w-fit w-full p-3 font-semibold rounded-xl md:border-neutral-800 border-transparent hover:md:bg-neutral-200 hover:bg-sky-800 transition-all ease-in-out duration-200 flex items-center flex-row justify-center md:bg-transparent bg-sky-700 md:text-black text-neutral-100 gap-x-2 group'>
                    Get Started
                    <span className='group-hover:translate-x-1 translate-x-0'>
                        <MdKeyboardArrowRight />
                    </span>
                </button>
            </div>

            <div className='md:hidden flex flex-row items-center justify-center'>
                <button className='p-2' onClick={() => setMobilenav(!mobilenav)}>
                    {mobilenav ? <FaX size={20} /> : <FaBars size={20} />}
                </button>
            </div>
        </nav>
    )
}

export default Navbar