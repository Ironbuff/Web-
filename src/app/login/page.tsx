'use client'

import { login, refreshAccessToken } from '@/lib/auth';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoLogInOutline } from "react-icons/io5";
import logo from "../../../public/logo.svg";
import { useMutation } from '@tanstack/react-query';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'react-toastify';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

const Login = () => {
  const [seepassword, setSeepassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const refresh = () => {
    const interval = setInterval(async () => {
      const accessTokenExpires = localStorage.getItem("tokenExpires");

      if (accessTokenExpires && new Date(accessTokenExpires).getTime() <= Date.now()) {
        try {
          await refreshAccessToken();
          console.log("Access token refreshed successfully.");
        } catch (error) {
          console.error("Token refresh failed, logging out...");
          localStorage.clear();
          router.push("/login");
        }
      }
    }, 60000);

    return () => clearInterval(interval);
  };

  useEffect(() => {
    refresh();
  }, []);

  const mutation = useMutation({
    mutationFn: async (formdata: FormData) => {
      return await login(formdata);
    },
    onSuccess: (result) => {
      if (result.status === 200) {
        toast.success("Login to System Successfully");
        const data = result.data;
        localStorage.setItem("token", data.token);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("tokenExpires", data.tokenExpires);
        localStorage.setItem("UserId", data.user.userId);
        router.push('/blog');
      }
    },
    onError: (err: any) => {
      if (err?.response?.status === 401) {
        toast.error("Invalid Credentials");
      } else {
        toast.error("Something Went Wrong");
        console.log(err);
      }
    }
  });

  const onSubmit = (values: z.infer<typeof loginSchema>) => {
    const formdata = new FormData();
    formdata.set("email", values.email);
    formdata.set("password", values.password);
    mutation.mutate(formdata);
  };

  return (
    <section className='min-h-3/4 w-full px-6 md:px-10 lg:px-28 py-10 flex flex-col gap-y-6 items-center justify-center bg-gray-200'>
      <div className='lg:w-2/5 w-full flex flex-col gap-y-3 h-full items-center shadow-md rounded-lg bg-neutral-100/60 justify-center'>
        <div className='flex items-center justify-center py-3 w-full relative'>
          <Image src={logo} width={120} height={120} alt='Logo Section' />
          <span className='h-[2px] w-[20%] opacity-50 absolute bottom-[-5] bg-cyan-800'></span>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='flex flex-col gap-y-3 px-10 py-10 items-start justify-center w-full mx-auto'
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your Email"
                    className="shadow-md bg-gray-100"
                    {...field}
                  />
                  <FormMessage className='text-red-500 text-sm' />
                </FormItem>
              )}
            />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className='w-full relative'>
                      <Input
                        type={seepassword ? "text" : "password"}
                        placeholder='Enter Your Password'
                        className="shadow-md bg-gray-100"
                        {...field}
                      />
                      <span className='absolute top-2 right-3'>
                        <button type='button' onClick={() => setSeepassword(!seepassword)}>
                          {seepassword
                            ? <FaEye size={20} className='text-cyan-300' />
                            : <FaEyeSlash size={20} className='text-cyan-400' />}
                        </button>
                      </span>
                    </div>
                  </FormControl>
                  <FormMessage className='text-red-500 text-sm'/>
                </FormItem>
              )}
            />

            <div className='flex flex-col gap-y-2 w-full'>
              <Button type='submit' className='p-3 w-full rounded-xl bg-cyan-600 hover:bg-cyan-700 transition-all text-neutral-100 shadow-md flex gap-x-2 items-center justify-center'>
                Log In <IoLogInOutline size={22} />
              </Button>
              <p className='text-center text-neutral-800'>
                Don{"'"}t have an account?
                <a href='/sign' className='text-cyan-600 hover:underline px-2'>
                  Sign In
                </a>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default Login;
