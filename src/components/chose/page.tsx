"use client";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "motion/react";

const chose = [
  {
    id: 1,
    title: "AI Integrated",
    summary:
      "AI-driven automation to simplify project-based accounting, ensuring accuracy and efficiency in back-office operations.",
    imgaf:
      "https://sumx-website-vercel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcomplianceReady1.2d589575.png&w=2048&q=75",
  },
  {
    id: 2,
    title: "Affordable Pricing",
    summary: "Subscriptions start at $10/user—no long-term commitments.",
    imgaf:
      "https://sumx-website-vercel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcomplianceReady1.2d589575.png&w=2048&q=75",
  },
  {
    id: 3,
    title: "Fast Implementation",
    summary: "Quick setup, plug and play with minimal training.",
    imgaf:
      "https://sumx-website-vercel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcomplianceReady1.2d589575.png&w=2048&q=75",
  },
  {
    id: 4,
    title: "Customizable & Scalable",
    summary:
      "AI-driven automation to simplify project-based accounting, ensuring accuracy and efficiency in back-office operations.",
    imgaf:
      "https://sumx-website-vercel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FcomplianceReady1.2d589575.png&w=2048&q=75",
  },
];

const Choose = () => {
  const [loadImage, setLoadImage] = useState<null | number>(1);
  const selectedItem = chose.find((item) => item.id === loadImage);
  console.log({loadImage})

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
          SumX is a next-generation AI-powered ERP solution designed to
          streamline operations for back-office teams in government contracting,
          architecture, engineering, and construction organizations.
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
                <h2 className="text-2xl font-semibold">{item.title}</h2>
                <p className="text-base text-gray-700">{item.summary}</p>
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
                {selectedItem.title} <span className="text-black">CRM</span>
              </h2>
              <p className="text-base font-extralight">
                {selectedItem.summary}
              </p>
            </div>
            <Image
              src={selectedItem.imgaf}
              width={600}
              height={400}
              alt={selectedItem.title}
              className="rounded"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Choose;
