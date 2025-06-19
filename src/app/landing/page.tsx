'use client'

import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import Image from 'next/image'
import { gethero } from '@/lib/hero'

const Hero = () => {
  
  
 interface Medias{
    id:number,
    filename:string,
 }
 
interface hero {
    id:number,
    body:string,
    footing:string,
    medias:Medias[],
 }

    
 
 const [landing,setLanding] = useState<hero|null>(null)

  const api = "https://5m1ql0zh-7256.inc1.devtunnels.ms"

  
  
  useEffect(()=>{
    const fetch = async()=>{
        const response =  await gethero()
        setLanding(response.data)
    }
    fetch()
  },[])
  
  
  
  
  
    return (
    <div className='bg-gradient-to-b from-white to-cyan-50 py-15 px-4 sm:px-6 lg:px-8'>
        {/* top Section */}
        <div className='max-w-3xl mx-auto text-center'>
            {/* heading Section */}
            <h1 className='md:text-5xl text-3xl leading-loose  font-extrabold  text-gray-900' >
                Your <span className='text-cyan-700'>Next-Gen</span> ERP Suite
            </h1>
            {/* description Section */}
            <p className='mt-6 md:text-2xl tracking-wide text-gray-600'>
               {landing?.body}
            </p>
            {/* button Section */}
            <div className='flex justify-center flex-row gap-x-3 mt-6 items-center'>
                {/* demon button */}
                <button className='md:p-3 p-2 text-neutral-100 font-semibold bg-cyan-700 rounded-xl '>
                    Get a Free Demo
                </button>
                <button className='md:p-3 p-2 text-neutral-800 bg-neutral-50 group border-1 border-neutral-800 rounded-xl flex items-center justify-center font-semibold gap-x-2'>
                    Contact Us 
                    <span className='group-hover:translate-x-1 translate-x-0 transition-all hover:bg-neutral-100 ease-in-out duration-300'>
                        <MdKeyboardArrowRight size={20} />
                    </span>
                </button>
            </div>
            {/* bounce in animation */}
            <div>
                <h1 className='text-base font-semibold py-10 animate-bounce transition-all ease-in-out duration-1000'>
                    {landing?.footing}
                </h1>
            </div>
        </div>

        {/* Image Section */}
        <div className='max-w-5xl mx-auto shadow-md shadow-blue-500'>
            {landing?.medias.map((item)=>(
                 <Image key={item.id} src={`${api}/${item.filename}`} alt='bill-info' width={1440} height={800} className='object-cover rounded-4xl object-left-top h-[200px] md:h-[300px] w-full scale-100 hover:scale-110 transition-all ease-in-out duration-300 '/>
            ))}
           

        </div>
    </div>
  )
}

export default Hero