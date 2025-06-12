import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'

const Traditional = () => {


    return (
        <div className='w-full  h-[40rem] flex items-center justify-center'>
            <div className='flex flex-col relative overflow-hidden max-w-7xl bg-cyan-100 gap-y-5  max-h-102 my-auto h-full mx-auto items-center bg justify-center px-20 rounded-2xl'>
                <h1 className='text-5xl text-center font-bold '>
                    Say Goodbye to Traditional ERP Systems
                </h1>
                <p className='text-lg text-center'>
                    Traditional ERP systems are clunky, expensive, and not very intuitive. SumX provides a smart, user-centric alternative, specifically designed for government contractors, not-for-profit, architecture, engineering, and construction firms, among other project-driven industries.
                </p>
                {/* Button  */}
                <div className='flex flex-row items-center justify-center gap-x-2 '>
                    <button className='p-3 bg-cyan-600 hover:bg-cyan-700 text-neutral-50 rounded-xl transition-all ease-in-out duration-300'>
                        Get Free Demo
                    </button>
                    <button className='text-neutral-800 group hover:bg-neutral-100 flex flex-row items-center gap-x-2 rounded-xl p-3 transition-all ease-in-out duration-300  bg-white border border-neutral-800'>
                        Get Started
                        <span>
                            <MdKeyboardArrowRight className='group-hover:translate-x-1.5' />
                        </span>
                    </button>
                </div>
                <small className='flex items-center justify-center'>
                    No #1 Trusted AI-powered ERP

                </small>
                <div className='absolute bottom-[-50] right-[-50]'>
                       <Image src={'https://sumx-website-vercel.vercel.app/_next/static/media/chart.1432451c.svg'} alt='Bar Chart' width={180} height={640}/>
                </div>
            </div>
        </div>
    )
}

export default Traditional



