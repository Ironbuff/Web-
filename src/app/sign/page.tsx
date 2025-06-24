'use client'

import { register } from '@/lib/auth';
import { signupschema } from '@/lib/signupschema';
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa'
import { IoLogInOutline } from 'react-icons/io5'
import { RiLockPasswordFill } from 'react-icons/ri';
import { RxAvatar } from 'react-icons/rx'
import logo from '../../../public/logo.svg'
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';

const SignUp = () => {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [profilePicture, setProfilePicture] = useState<File | null>()
    const [password, setPassword] = useState('')
    const router = useRouter()
    const [seepassword, setSeepassword] = useState(false)
    const [errors, setErrors] = useState<{ [key: string]: string }>({})



    const mutation = useMutation({
        mutationFn:async()=>{
             const formdata = new FormData()

            formdata.set('username', username)
            formdata.set('email', email)
            formdata.set('password', password)
            if (profilePicture){
                formdata.append('profilePicture', profilePicture)
            }
            
            return await register(formdata)
        },
        onSuccess:(result)=>{
          
            if (result.status === 200) {
                alert("New User Added")
                router.push('/login')
            }
  
        },
        onError:(err)=>{
            console.log(err)
        }
    })


   

    const handlesign =  (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault()


       

        const result = signupschema.safeParse({ username, email, password })
        if (!result.success) {
            const newErrors: { [key: string]: string } = {}
            result.error.errors.forEach((err) => {
                const field = err.path[0]
                newErrors[field] = err.message
            })
            setErrors(newErrors)
            return
        }

          mutation.mutate()

     
    }



    return (

        <section
            className='lg:h-[calc(100vh-13ch)] h-full w-full bg-cover mx-auto lg:px-28 px-5 py-20 flex bg-gray-300 flex-col gap-y-3 items-center justify-center'>


            {/* form for login */}
            <div className='lg:w-2/5 w-full mx-auto flex flex-col gap-y-2 bg-neutral-200 shadow-md rounded-xl '>


                {/* heading for login */}
                <div className='flex items-center w-full justify-center relative py-5'>
                    <Image src={logo} width={120} height={120} alt='Logo Section' />
                    <span className='h-[3px] shadow-md  w-[20%] opacity-20 bg-cyan-900 absolute bottom-0'>

                    </span>
                </div>

                <form onSubmit={handlesign}
                    className='flex flex-col gap-y-3 px-10 py-10 items-start justify-center  w-full mx-auto rounded-2xl'>
                    {/* Username */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='username' className='text-lg text-neutral-700 font-medium'>
                            UserName:
                        </label>
                        <div className='flex flex-row gap-x-2 shadow-md bg-gray-200 rounded-xl px-3 w-full items-center hover:ring-2 hover:ring-blue-500'>
                            <span>
                                <RxAvatar size={22} className='text-cyan-500' />
                            </span>
                            <input
                                type='text'
                                className='w-full bg-transparent outline-none p-3'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        {errors.username && (<span className='text-red-600 text-sm'>{errors.username}</span>)}

                    </div>
                    {/* Email */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='Email' className='text-lg text-neutral-700 font-medium'>
                            Email:
                        </label>
                        <div className='flex flex-row gap-x-2 bg-gray-200 shadow-md rounded-xl px-3 w-full items-center hover:ring-2 hover:ring-blue-500'>
                            <span>
                                <FaEnvelope size={22} className='text-cyan-500' />
                            </span>
                            <input
                                type='email'
                                className='w-full bg-transparent outline-none p-3'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        {errors.email && (<span className='text-red-600 text-sm'>{errors.email}</span>)}
                    </div>

                    {/* Profile Picture Upload */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='profile' className='text-lg text-neutral-700 font-medium'>
                            Profile Picture:
                        </label>

                        <label
                            htmlFor='profile'
                            className='flex items-center gap-x-3 cursor-pointer bg-gray-200 hover:ring-2 hover:ring-blue-500 rounded-xl px-4 py-4 shadow-md transition-all duration-200 border border-dotted border-neutral-900'
                        >
                            <span className='text-gray-600'>
                                <CgProfile size={24} className='text-cyan-500' />
                            </span>
                            <span className='text-sm text-gray-500'>Choose an image (JPG, PNG)</span>
                            <input
                                type='file'
                                id='profile'
                                accept='image/*'
                                className='hidden'

                                onChange={(e) => setProfilePicture(e.target.files?.[0] ?? null)}
                            />

                        </label>
                    </div>

                    {/* password */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='Email' className='text-lg text-neutral-700 font-medium'>
                            Password:
                        </label>
                        <div className='flex relative flex-row gap-x-2 bg-gray-200 shadow-md rounded-xl px-3 w-full items-center hover:ring-2 hover:ring-blue-500'>
                            <span>
                                <RiLockPasswordFill size={22} className='text-cyan-500' />
                            </span>
                            <input
                                type={`${seepassword ? "text" : "password"}`}
                                className='w-full bg-transparent outline-none p-3'
                                value={password}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setPassword(value);
                                    // const error = validatepassword(value);
                                    // setPassworderror(error);
                                }}
                            />
                            <span className='relative top-0 right-0'>
                                <button type='button' onClick={() => setSeepassword(!seepassword)}>
                                    {seepassword ? <FaEye size={22} className='text-cyan-500' /> : <FaEyeSlash size={22} className='text-cyan-600' />}
                                </button>
                            </span>
                        </div>
                        {errors.password && (<span className='text-red-600 text-sm'>{errors.password}</span>)}
                    </div>

                    {/* button and link to sign in section */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <button type='submit' className='p-3 w-full rounded-xl bg-cyan-600 hover:bg-cyan-700 ease-in-out transition-all duration-300 text-neutral-300 shadow-md flex flex-row gap-x-2 items-center justify-center '>
                            Sign In <IoLogInOutline size={22} />
                        </button>
                        <p className='text-center text-neutral-700'>
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