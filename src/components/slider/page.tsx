'use client'

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./Slider.css";
import { getcarouselimg } from "@/lib/nav";

const Slider = () => {
  
 interface images {
  id:number,
  filename:string,
  altText:string,


 }

  const [heading,setHeading]= useState('')
  const [images,setImages] = useState<images[]>([])
  const api = "https://5m1ql0zh-7256.inc1.devtunnels.ms"

   useEffect(() => {
   
    const fetch = async()=>{
      const result = await getcarouselimg()
      setHeading(result?.data.body)
      setImages(result?.data.medias)
      
    }
     fetch()
  }, [])

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
