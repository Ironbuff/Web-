'use client'

import { traditional } from '@/lib/traditional'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Traditional = () => {
    
    interface img{
        id:number,
        filename:string,
        altText:string,
    }
    
    interface format{
        id:number,
        name:string,
        heading:string,
        footing:string,
        medias:img[],
    }
    
    const[title,setTitle]= useState('')
    const[description,setDescription] = useState('')
    const[footer,setFooter]= useState('')
    const[data,setData]=useState<format|null>(null)
    const api = "https://5m1ql0zh-7256.inc1.devtunnels.ms"


    useEffect(()=>{
        const fetch = async()=>{
            const result = await traditional()
            setTitle(result.data.heading)
            setDescription(result.data.body)
            setFooter(result.data.footing)
            setData(result.data)
            
        }
        fetch()
    },[])

    return (
        <div className='w-full  h-[40rem] flex items-center justify-center'>
            <div className='flex flex-col relative overflow-hidden max-w-7xl bg-cyan-100 gap-y-5  max-h-102 my-auto h-full mx-auto items-center bg justify-center px-20 rounded-2xl'>
                <h1 className='lg:text-5xl text-2xl text-center font-bold '>
                  {title}
                </h1>
                <p className='lg:text-lg text-base text-center leading-relaxed'>
                    {description}
                </p>
                {/* Button  */}
                <div className='flex flex-row items-center justify-center gap-x-2 '>
                    <button className='lg:p-3 p-2 bg-cyan-600 hover:bg-cyan-700 text-neutral-50 rounded-xl transition-all ease-in-out duration-300'>
                        Get Free Demo
                    </button>
                    <button className='text-neutral-800 group hover:bg-neutral-100 flex flex-row items-center gap-x-2 rounded-xl lg:p-3 p-2 transition-all ease-in-out duration-300  bg-white border border-neutral-800'>
                        Get Started
                        <span>
                            <MdKeyboardArrowRight className='group-hover:translate-x-1.5' />
                        </span>
                    </button>
                </div>
                <small className='flex items-center justify-center'>
                    {footer}

                </small>
                <div className='absolute bottom-[-50] right-[-50]'>
                       <Image src={`${api}/${data?.medias[0].filename}`} alt='Bar Chart' width={180} height={640}/>
                </div>
            </div>
        </div>
    )
}

export default Traditional



