'use client'

import { register } from '@/lib/auth';
import { signupschema } from '@/lib/signupschema';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { IoLogInOutline } from 'react-icons/io5';
import logo from '../../../public/logo.svg';
import Image from 'next/image';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormControl
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from 'react-toastify';

const SignUp = () => {
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [seePassword, setSeePassword] = useState(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof signupschema>>({
    resolver: zodResolver(signupschema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: z.infer<typeof signupschema>) => {
      const formData = new FormData();
      formData.set('username', data.username);
      formData.set('email', data.email);
      formData.set('password', data.password);
      if (profilePicture) {
        formData.append('profilePicture', profilePicture);
      }
      return await register(formData);
    },
    onSuccess: (result) => {
      if (result.status === 200) {
        toast.success("Login Sucessfully")
        router.push('/login');
      }
    },
    onError: (err) => {
      toast.error("Couldn't Login to system")
      console.log(err);
    },
  });

  const onSubmit = (data: z.infer<typeof signupschema>) => {
    mutation.mutate(data);
  };

  return (
    <section className="lg:h-[calc(100vh-13ch)] h-full w-full bg-cover mx-auto lg:px-28 px-5 py-20 flex bg-gray-300 flex-col gap-y-3 items-center justify-center">
      <div className="lg:w-2/5 w-full mx-auto flex flex-col gap-y-2 bg-neutral-200 shadow-md rounded-xl">
        <div className="flex items-center w-full justify-center relative py-5">
          <Image src={logo} width={120} height={120} alt="Logo Section" />
          <span className="h-[3px] shadow-md w-[20%] opacity-20 bg-cyan-900 absolute bottom-0" />
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col gap-y-3 px-10 py-10 items-start justify-center w-full mx-auto rounded-2xl"
          >
            {/* Username */}
            <FormField
              name="username"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Enter Username"
                      className="shadow-md bg-gray-100"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-red-500 text-sm' />
                </FormItem>
              )}
            />

            {/* Email */}
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      className="shadow-md bg-gray-100"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className='text-red-500 text-sm' />
                </FormItem>
              )}
            />

            {/* Profile Picture */}
            <div className="w-full flex flex-col gap-y-2">
              <FormLabel>Profile Picture</FormLabel>
              <Input
                type="file"
                accept="image/*"
                className='shadow-md bg-gray-100'
                
                onChange={(e) => {
                  const file = e.target.files?.[0] ?? null;
                  setProfilePicture(file);
                  if (file) {
                    const imageUrl = URL.createObjectURL(file);
                    setPreview(imageUrl);
                  }
                }}
              />
              {preview && (
                <Image
                  src={preview}
                  alt="Profile preview"
                  width={100}
                  height={100}
                  className='object-cover rounded-full w-20 h-20'
                />
              )}
            </div>

            {/* Password */}
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="w-full relative">
                      <Input
                        type={seePassword ? 'text' : 'password'}
                        className="shadow-md bg-gray-100"
                        {...field}
                      />
                      <button
                        type="button"
                        onClick={() => setSeePassword(!seePassword)}
                        className="absolute top-2 right-3"
                      >
                        {seePassword ? (
                          <FaEye size={20} className="text-cyan-500" />
                        ) : (
                          <FaEyeSlash size={20} className="text-cyan-600" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  <FormMessage className='text-red-500 text-sm' />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex flex-col gap-y-2 w-full">
              <button
                type="submit"
                className="p-3 w-full rounded-xl bg-cyan-600 hover:bg-cyan-700 transition-all duration-300 text-neutral-300 shadow-md flex items-center justify-center gap-x-2"
              >
                Sign Up <IoLogInOutline size={22} />
              </button>
              <p className="text-center text-neutral-700">
                Already have an account?
                <a
                  href="/login"
                  className="text-cyan-600 hover:underline px-2"
                >
                  Log In
                </a>
              </p>
            </div>
          </form>
        </Form>
      </div>
    </section>
  );
};

export default SignUp;
