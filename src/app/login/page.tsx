'use client'

import { login } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa';
import { IoLogInOutline } from "react-icons/io5";

const Login = () => {

    

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const router = useRouter()


    const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            const formdata = new FormData()
            formdata.set("email", email)
            formdata.set("password", password)

            const result = await login(formdata)


            if (result.status === 200) {
                alert("Login to System Successfully");

                const data = result.data;
                

                // Use `data` directly here, not `loginData`
                localStorage.setItem("token", data.token);
                localStorage.setItem("refreshToken", data.refreshToken);
                localStorage.setItem("accessTokenExpiresIn", data.accessTokenExpires);
                localStorage.setItem("UserId", data.user.userId);

                router.push('/blog');
            }

        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <section className='h-[calc(100vh-13ch)] max-w-full mx-auto px-28 flex bg-gray-100 flex-col gap-y-3 items-center justify-center'>

            {/* heading for login */}
            <div className='flex items-center justify-center'>
                <h1 className='text-4xl font-semibold leading-relaxed'>
                    Log In
                </h1>
            </div>

            {/* form for login */}
            <div className='min-w-[70%] mx-auto flex '>
                <form
                    onSubmit={handlesubmit}
                    className='flex flex-col gap-y-3 px-10 py-10 items-start justify-center w-3/5 mx-auto bg-white rounded-xl'>



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
                                type='Email'
                                className='w-full bg-transparent outline-none p-3'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
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
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>


                    {/* button and link to sign in section */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <button type='submit' className='p-3 w-full rounded-xl bg-cyan-600 hover:bg-cyan-700 ease-in-out transition-all duration-300 text-neutral-100 shadow-md flex flex-row gap-x-2 items-center justify-center '>
                            Log In <IoLogInOutline size={22} />
                        </button>
                        <p className='text-center'>
                            Dont have a account???
                            <a href='/sign' className='text-cyan-600 hover:underline ease-in-out duration-300 transition-all px-2'>
                                Sign In
                            </a>
                        </p>
                    </div>
                </form>
            </div>

        </section>
    )
}

export default Login