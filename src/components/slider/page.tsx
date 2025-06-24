'use client'

import React from "react";
import Image from "next/image";
import "./Slider.css";
import { getcarouselimg } from "@/lib/nav";
import { useQuery } from "@tanstack/react-query";

const Slider = () => {
  
 interface images {
  id:number,
  filename:string,
  altText:string,


 }

  const api = process.env.NEXT_PUBLIC_API


  const {data:result}= useQuery({
    queryKey:["result"],
    queryFn:async()=>{
      const response = await getcarouselimg()
      return response?.data
    }
  })

  const heading = result?.body||""
  const images:images[]= result?.medias||[]

  

  const loopImages = [...images, ...images]; // duplicate for smooth loop
  


 
  

  return (
    <div className="max-w-7xl overflow-hidden mx-auto h-[20rem] "> {/* Only show 4 items (4 * 120px) */}
    <h1 className="w-full flex items-center justify-center font-semibold py-8 text-lg text-black">
      {heading}
    </h1>
      <div className="slider flex items-center justify-center gap-x-10  animate-slide">
        {loopImages.map((img, index) => (
          <div
            key={`${img.id}-${index}`}
            className="w-[120px] mx-2  grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          >
            <Image
              src={`${api}/${img.filename}`}
              alt={img.altText}
              width={120}
              height={60}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
