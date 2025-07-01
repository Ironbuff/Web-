'use client'

import { traditional } from '@/lib/traditional'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { toast } from 'react-toastify'

const Traditional = () => {

  interface img {
    id: number
    filename: string
    altText: string
  }

  interface format {
    id: number
    name: string
    heading: string
    footing: string
    medias: img[]
    body: string
  }

  const api = process.env.NEXT_PUBLIC_API

  const {
    data: result,
    isError,
    isPending,
  } = useQuery<format>({
    queryKey: ['result'],
    queryFn: async () => {
      const response = await traditional()
      return response.data
    },
  })

  if (isPending) return null

  if (isError) {
    toast.error('Failed to load data')
    return null
  }

  console.log('Fetched result:', result)

  return (
    <div className='w-full h-[40rem] flex items-center justify-center'>
      <div className='flex flex-col relative overflow-hidden max-w-7xl bg-cyan-100 gap-y-5 max-h-102 my-auto h-full mx-auto items-center justify-center px-20 rounded-2xl'>
        <h1 className='lg:text-5xl text-2xl text-center font-bold'>
          {result?.heading || 'No heading available'}
        </h1>
        <p className='lg:text-lg text-base text-center leading-relaxed'>
          {result?.body || 'No description available'}
        </p>

        {/* Buttons */}
        <div className='flex flex-row items-center justify-center gap-x-2 '>
          <button className='lg:p-3 p-2 bg-cyan-600 hover:bg-cyan-700 text-neutral-50 rounded-xl transition-all ease-in-out duration-300'>
            Get Free Demo
          </button>
          <button className='text-neutral-800 group hover:bg-neutral-100 flex flex-row items-center gap-x-2 rounded-xl lg:p-3 p-2 transition-all ease-in-out duration-300 bg-white border border-neutral-800'>
            Get Started
            <span>
              <MdKeyboardArrowRight className='group-hover:translate-x-1.5' />
            </span>
          </button>
        </div>

        <small className='flex items-center justify-center'>
          {result?.footing || 'No footer text'}
        </small>

        {result?.medias?.[0]?.filename && (
          <div className='absolute' style={{ bottom: -50, right: -50 }}>
            <Image
              src={`${api}/${result.medias[0].filename}`}
              alt={result.medias[0].altText || 'Image'}
              width={180}
              height={640}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Traditional
