'use client'

import { login, refreshAccessToken } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import { FaEnvelope, FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoLogInOutline } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = () => {



    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [seepassword, setSeepassword] = useState(false)



    const router = useRouter()


    const refresh = () => {
        const interval = setInterval(async () => {
            const accessTokenExpires = localStorage.getItem("tokenExpires");

            if (accessTokenExpires && new Date(accessTokenExpires).getTime() <= Date.now()) {
                try {
                    await refreshAccessToken(); // Renew access token
                    console.log("Access token refreshed successfully.");
                } catch (error) {
                    console.error("Token refresh failed, logging out...");
                    localStorage.removeItem("token");
                    localStorage.removeItem("refreshToken");
                    localStorage.removeItem("tokenExpires");
                    router.push("/login");
                    console.log(error)
                }
            }
        }, 60000); // Check every 1 min

        return () => clearInterval(interval);
    }




    useEffect(() => {
        refresh()
    }, [])



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
                localStorage.setItem("tokenExpires", data.tokenExpires);
                localStorage.setItem("UserId", data.user.userId);

                router.push('/blog');
            }


        }
        catch (err: any) {
            if (err?.response?.status === 401) {
                alert("Please Enter The Correct Credential");
            } else {
                console.error(err);
                alert("Something went wrong. Please try again.");
            }
        }
    }

    return (
        <section className='min-h-3/4  w-full px-6 md:px-10 lg:px-28 py-10 flex flex-col gap-y-6 items-center justify-center bg-gray-50 bg-[url(https://cdn.pixabay.com/photo/2024/09/12/06/02/ai-generated-9041388_1280.jpg)] bg-repeat bg-cover '>

            {/* heading for login */}
            <div className='flex items-center justify-center py-5 w-full relative'>
                <h1 className='text-3xl font-semibold leading-relaxed text-cyan-600'>
                    Welcome Back !!
                </h1>
                <span className='h-[1px] w-[20%] opacity-20 absolute bottom-[-5] bg-cyan-900'>

                </span>
            </div>

            {/* form for login */}
            <div className='lg:w-[70%] w-full  mx-auto flex h-full items-center justify-center'>
                <form
                    onSubmit={handlesubmit}
                    className='flex flex-col gap-y-3 px-10 py-10 items-start justify-center lg:w-3/5 w-full mx-auto bg-neutral-700/50 backdrop-blur-lg rounded-xl'>



                    {/* Email */}
                    <div className='flex flex-col gap-y-2 w-full '>
                        <label htmlFor='Email' className='text-lg text-neutral-300 font-medium'>
                            Email:
                        </label>
                        <div className='flex flex-row gap-x-2 bg-gray-200/50 shadow-md rounded-xl px-3 w-full items-center hover:ring-2 hover:ring-blue-500'>
                            <span>
                                <FaEnvelope size={22} className='text-cyan-400' />
                            </span>
                            <input
                                type='Email'
                                className='w-full bg-transparent outline-none p-3'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    {/* password */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <label htmlFor='Email' className='text-lg text-neutral-300 font-medium'>
                            Password:
                        </label>
                        <div className='flex relative flex-row gap-x-2 bg-gray-200/50 shadow-md rounded-xl px-3 w-full items-center hover:ring-2 hover:ring-blue-500 '>
                            <span>
                                <RiLockPasswordFill size={22} className='text-cyan-400' />
                            </span>
                            <input
                                type={`${seepassword ? "text" : "password"}`}
                                className='w-full bg-transparent outline-none p-3'
                                value={password}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    setPassword(value);
                                }}
                                required
                            />

                            <span className='top-0 right-0'>
                                <button type='button' onClick={() => setSeepassword(!seepassword)}>
                                    {seepassword ? <FaEye size={22}  className='text-cyan-300'/> : <FaEyeSlash size={22} className='text-cyan-400' />}
                                </button>
                            </span>
                        </div>

                    </div>


                    {/* button and link to sign in section */}
                    <div className='flex flex-col gap-y-2 w-full'>
                        <button type='submit' className='p-3 w-full rounded-xl bg-cyan-600 hover:bg-cyan-700 ease-in-out transition-all duration-300 text-neutral-100 shadow-md flex flex-row gap-x-2 items-center justify-center '>
                            Log In <IoLogInOutline size={22} />
                        </button>
                        <p className='text-center text-neutral-200'>
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