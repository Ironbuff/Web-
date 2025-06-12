'use client'

import React from "react";
import Image from "next/image";
import "./Slider.css";

const Slider = () => {
  const images = [
    {
      id: 1,
      pic: "https://sumx-website-vercel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclient2.240d3d78.png&w=256&q=75",
      title: "First Slide",
    },
    {
      id: 2,
      pic: "https://sumx-website-vercel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclient3.e57b77d1.png&w=128&q=75",
      title: "Second Slide",
    },
    {
      id: 3,
      pic: "https://sumx-website-vercel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclient4.281f6f4a.png&w=256&q=75",
      title: "Third Slide",
    },
    {
      id: 4,
      pic: "https://sumx-website-vercel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclient6.adf1136f.png&w=384&q=75",
      title: "Fourth Slide",
    },
    {
      id: 5,
      pic: "https://sumx-website-vercel.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fclient1.cc1d2453.png&w=256&q=75",
      title: "Fifth Slide",
    },
  ];

  const loopImages = [...images, ...images]; // duplicate for smooth loop

  return (
    <div className="max-w-7xl overflow-hidden mx-auto h-[20rem] "> {/* Only show 4 items (4 * 120px) */}
    <h1 className="w-full flex items-center justify-center font-semibold py-8 text-lg text-black">
      Used by 800+ Highly Productive Teams
    </h1>
      <div className="slider flex items-center justify-center gap-x-10  animate-slide">
        {loopImages.map((img, index) => (
          <div
            key={`${img.id}-${index}`}
            className="w-[120px] mx-2  grayscale hover:grayscale-0 transition duration-300 ease-in-out"
          >
            <Image
              src={img.pic}
              alt={img.title}
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
