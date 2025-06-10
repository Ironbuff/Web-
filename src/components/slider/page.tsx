'use client'

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const Slider = () => {
  const image = [
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

  return (
    <section className="w-full  md:h-[25ch] h-full flex flex-col items-center justify-center" >
      <h1 className="text-center">
        Used by 800+ Highly Productive Teams
        </h1>
       <Carousel
      opts={{
        align: "start",
      }}
      className="w-full max-w-2xl  "
      plugins={[Autoplay({
        delay:2000,
        stopOnInteraction:false
      })]}
    >
      <CarouselContent>
        {image.map(( index) => (
          <CarouselItem key={index.id} className="md:basis-1/2 lg:basis-1/3">
            <div className="px-2">
               <Image src={index.pic} alt={index.title} width={1920} height={1080} className="object-cover object-fit" />

            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </section>
  );
};

export default Slider;
