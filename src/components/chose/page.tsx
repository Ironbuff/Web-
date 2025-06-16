"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { getchose } from "@/lib/chose";

const Choose = () => {


  interface arr{
    heading:string,
    filename:string,
    id:number
  }

  interface data{
    heading:string,
    body:string,
    id:number,
    medias:arr[]
  }
    const[summary,setSummary]= useState('')
    const[chose,setChose]= useState<data[]>([]) 
    const api = "https://5m1ql0zh-7256.inc1.devtunnels.ms"

    useEffect(()=>{
     const fetch = async()=>{
       const result = await getchose()
       setSummary(result.data.body)
       setChose(result.data.children)
     }
     fetch()
  },[])
  const [loadImage, setLoadImage] = useState<null | number>(4);
  const selectedItem = chose.find((item) => item.id === loadImage);

  return (
    <div 
    className="lg:max-w-screen w-full mx-auto flex flex-col gap-y-3 px-28 py-20 items-center bg-neutral-100 lg:min-h-screen h-full p-8"
    >
      {/* Heading */}
      <div 
      className="flex flex-col gap-y-3 justify-start items-start w-full mb-8"
      >
        <h1 
        className="text-5xl text-start flex flex-row gap-x-3 font-bold leading-relaxed"
        >
          Why Choose 
          <span 
          className="text-cyan-700"
          >
            SumX
          </span>
        </h1>
        <p 
        className="text-xl mt-2 max-w-8xl"
        >
          {summary}
        </p>
      </div>

      {/* Items */}
      <div 
      className="flex lg:flex-row flex-col gap-y-20 gap-x-3 w-full justify-evenly"
      >
        <div 
        className="flex flex-col gap-6  max-w-4xl"
        >
          {chose.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer relative pb-4  hover:bg-white/80 hover:scale-105 group transition-all ease-in-out duration-300 px-5 py-4 rounded-xl ${
                loadImage===item.id ? "bg-white" : "bg-transparent"
              }  `}
              onClick={() => setLoadImage(item.id)}
            >
             

              <div className="flex flex-col gap-y-3 relative py-5">
                <h2 className="text-2xl font-semibold">{item.heading}</h2>
                <p className="text-base text-gray-700">{item.body}</p>
                 <div className={`absolute bottom-0 left-0 w-full h-[1px] opacity-10 bg-black group-hover:hidden ${loadImage===item.id?"hidden":"absolute"} `}/>
              </div>
            </div>
          ))}
        </div>

        {selectedItem && (
          <motion.div
            className="lg:w-1/2 w-full p-4 bg-cyan-50/50 rounded-xl border border-cyan-200 flex flex-col items-start justify-start gap-4"
            key={selectedItem.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col gap-y-2 max-w-md">
              <h2 className="text-3xl font-bold text-cyan-600">
                {selectedItem.heading} <span className="text-black">CRM</span>
              </h2>
              <p className="text-base font-extralight">
                {selectedItem.body}
              </p>
            </div>
           {selectedItem.medias && selectedItem.medias.length>0 && (
             <Image
              src={`${api}/${selectedItem.medias[0].filename}`}
              width={600}
              height={400}
              alt={selectedItem.heading}
              className="rounded"
            />
           )}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Choose;
