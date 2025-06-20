'use client'

import { register } from '@/lib/auth';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaEnvelope } from 'react-icons/fa'
import { IoLogInOutline } from 'react-icons/io5'
import { RxAvatar } from 'react-icons/rx'

const SignUp = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [profilePicture, setProfilePicture] = useState<File|null>()
    const[password,setPassword]= useState('')
    const router = useRouter()

    const handlesign = async (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        try {
            const formdata = new FormData()

            formdata.set('username', username)
            formdata.set('email', email)
            formdata.set('password',password)
            formdata.append('profilePicture', profilePicture)
            

            const result = await register(formdata)

            if(result.status===200){
                alert("New User Added")
                router.push('/login')
            }

        }
        catch(err){
            console.log(err)
        }
   }



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
                <form onSubmit={handlesign} 
                className='flex flex-col gap-y-3 px-10 py-10 items-start justify-center w-3/5 mx-auto bg-white rounded-xl'>
                    {/* Username */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='username' className='text-base text-black font-medium'>
                            UserName:
                        </label>
                        <div className='flex flex-row gap-x-2 shadow-md bg-gray-50 rounded-xl px-3 w-full items-center hover:ring-2 hover:ring-blue-500'>
                            <span>
                                <RxAvatar size={22} />
                            </span>
                            <input 
                            type='text' 
                            className='w-full bg-transparent outline-none p-3'
                            value={username}
                            onChange={(e)=>setUsername(e.target.value)}
                            />
                        </div>

                    </div>
                    {/* Email */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='Email' className='text-base text-black font-medium'>
                            Email:
                        </label>
                        <div className='flex flex-row gap-x-2 bg-gray-50 shadow-md rounded-xl px-3 w-full items-center hover:ring-2 hover:ring-blue-500'>
                            <span>
                                <FaEnvelope size={22} />
                            </span>
                            <input 
                            type='email' 
                            className='w-full bg-transparent outline-none p-3'
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>
                    </div>

                    {/* Profile Picture Upload */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='profile' className='text-base text-black font-medium'>
                            Profile Picture:
                        </label>

                        <label
                            htmlFor='profile'
                            className='flex items-center gap-x-3 cursor-pointer bg-gray-50 hover:ring-2 hover:ring-blue-500 rounded-xl px-4 py-3 shadow-md transition-all duration-200'
                        >
                            <span className='text-gray-600'>
                                <CgProfile size={24} />
                            </span>
                            <span className='text-sm text-gray-500'>Choose an image (JPG, PNG)</span>
                            <input
                                type='file'
                                id='profile'
                                accept='image/*'
                                className='hidden'
                                onChange={(e)=>setProfilePicture(e.target.files?.[0]??null)}
                            />
                        </label>
                    </div>

                      {/* password */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='Email' className='text-base text-black font-medium'>
                            password:
                        </label>
                        <div className='flex flex-row gap-x-2 bg-gray-50 shadow-md rounded-xl px-3 w-full items-center hover:ring-2 hover:ring-blue-500'>
                            <span>
                                <FaEnvelope size={22} />
                            </span>
                            <input 
                            type='password' 
                            className='w-full bg-transparent outline-none p-3'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            />
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