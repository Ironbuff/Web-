import React from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaEnvelope } from 'react-icons/fa'
import { IoLogInOutline } from 'react-icons/io5'
import { RxAvatar } from 'react-icons/rx'

const SignUp = () => {
  return (

        <section className='h-[calc(100vh-13ch)] max-w-full mx-auto px-28 flex bg-gray-100 flex-col gap-y-3 items-center justify-center'>
    
            {/* heading for login */}
            <div className='flex items-center justify-center'>
                <h1 className='text-4xl font-semibold leading-relaxed'>
                    Sign In 
                </h1>
            </div>
    
            {/* form for login */}
            <div className='min-w-[70%] mx-auto flex '>
                <form className='flex flex-col gap-y-3 px-10 py-10 items-start justify-center w-3/5 mx-auto bg-white rounded-xl'>
                    {/* Username */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='username' className='text-base text-black font-medium'>
                            UserName:
                        </label>
                        <div className='flex flex-row gap-x-2 shadow-md bg-gray-50 rounded-xl px-3 w-full items-center hover:ring-2 hover:ring-blue-500'>
                             <span>
                                <RxAvatar size={22}/> 
                            </span>  
                            <input type='text' className='w-full bg-transparent outline-none p-3'/>
                        </div>
                        
                    </div>
                    {/* Email */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='Email' className='text-base text-black font-medium'>
                            Email:
                        </label>
                        <div className='flex flex-row gap-x-2 bg-gray-50 shadow-md rounded-xl px-3 w-full items-center hover:ring-2 hover:ring-blue-500'>
                        <span>
                            <FaEnvelope size={22}/>
                        </span>
                        <input type='Email' className='w-full bg-transparent outline-none p-3'/>
                        </div>
                    </div>
    
                    {/* Profile pic showing button */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='Profile' className='text-base text-black font-medium'>
                            Profile pic:
                        </label>
                        <div className='flex flex-row gap-x-2 shadow-md rounded-xl px-3 w-full items-center bg-gray-50 hover:ring-2 hover:ring-blue-500'>
                        <span>
                            <CgProfile size={22} />
                        </span>
                        <input type='file' className='w-full bg-transparent outline-none p-3'/>
                        </div>
                    </div>
                    {/* button and link to sign in section */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <button type='submit' className='p-3 w-full rounded-xl bg-cyan-600 hover:bg-cyan-700 ease-in-out transition-all duration-300 text-neutral-100 shadow-md flex flex-row gap-x-2 items-center justify-center '>
                            Sign In <IoLogInOutline size={22} />
                        </button>
                        <p className='text-center'>
                           Already have a account???
                            <a href='/login' className='text-cyan-600 hover:underline ease-in-out duration-300 transition-all px-2'>
                               Log In 
                            </a>
                        </p>
                    </div>
                </form>
            </div>
    
        </section>
   
  )
}

export default SignUp