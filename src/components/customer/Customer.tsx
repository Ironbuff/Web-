'use client'

import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';
import { getCustomerReview } from "@/lib/review";
import { useQuery } from "@tanstack/react-query";

const Customer = () => {

  interface data {
    id:number,
    profilePicture:string,
    userName:string,
    socialMediaHandle:string,
    rating:number,
    review:string,

  }
  



  const {data:reviews=[],isError}= useQuery<data[]>({
    queryKey:["review"],
    queryFn:async()=>{
      const response = await getCustomerReview()
      return response?.data
    }
  })
  
  if(isError||!reviews){
    alert("Failed to fetch data")
  }

  
  
  const api = "https://5m1ql0zh-7256.inc1.devtunnels.ms"
  
  const rightreview = reviews.slice(0, 3);
  const centerreview = reviews.slice(3, 6);
  const leftreview = reviews.slice(6, 9);



  // adding infinite scroll
    const scrollvariant:any = {
      animate:{
        y:['0%','-20%'],
        transition:{
          duration:20,
          repeat:Infinity,
          ease:'linear'
        }
      }
    }

     const scrollvariant2:any = {
      animate:{
        y:['0%','-50%'],
        transition:{
          duration:30,
          repeat:Infinity,
          ease:'linear'
        }
      }
    }

  const StarRating = ({ rating }) => {
    const number = parseInt(rating);
    if (number === 0) return null;

    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`w-3 h-3 ${
            number >= i ? "text-yellow-500" : "text-gray-300"
          }`}
        />
      );
    }

    return <div className="flex items-center gap-1 mb-3">{stars}</div>;
  };

  return (
    <section className="w-full h-full px-28 py-20 gap-x-5 overflow-hidden  flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-5 w-full">
        
        {/* Top Heading */}
        <div className="flex flex-col items-center justify-center gap-y-3  h-1/4">
          <h1 className="lg:text-5xl text-4xl font-bold ">Customer Testimonials</h1>
          <p className="mx-auto font-base text-lg py-10">
            We do it for Customer and they share their reviews
          </p>
        </div>
        
        {/* Bottom Reviews */}
        <div className="flex flex-row gap-x-6 overflow-hidden w-full items-center py-10 bg-gradient-to-b from-white to-neutral-10  justify-center h-1/2 ">
          {/* Customer Testomonial */}
          <motion.div
            variants={scrollvariant}
            animate="animate"
             className="lg:flex hidden flex-col items-start justify-center gap-y-5 w-1/5">
            {/* right side customer review part */}
            {[...leftreview,...leftreview,...leftreview].map((item,index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex flex-col gap-y-2 p-3 shadow-lg rounded-2xl bg-neutral-100 "
              >
                {/* Customer Profile */}
                <div className="flex flex-row items-center justify-between">
                  {/* Profile Section */}
                  <div className="flex items-center justify-center gap-x-3">
                    <Image
                      src={`${api}/${item?.profilePicture}`}
                      width={50}
                      height={50}
                      alt={item?.userName}
                      className="rounded-full w-[50px] h-[50px] object-cover"
                    />

                    {/* Customer name section */}
                    <div className="flex flex-col gap-y-1">
                      <h2 className="text-black text-lg font-semibold">
                        {item?.userName}
                      </h2>
                      <span>{item.socialMediaHandle}</span>
                    </div>
                  </div>
                  {/* review Star section */}
                  <StarRating rating={item.rating} />
                </div>
                {/* Customer Review Section */}
                <p className="text-base font-light ">{item.review}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
          variants={scrollvariant2}
          animate="animate"
          className="flex flex-col items-start justify-center gap-y-5 lg:w-1/4 w-3/4">
            {/* right side customer review part */}
            {[...centerreview,...centerreview,...centerreview].map((item,index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex flex-col gap-y-2 p-3 shadow-lg rounded-2xl bg-neutral-100 "
              >
                {/* Customer Profile */}
                <div className="flex flex-row items-center justify-between">
                  {/* Profile Section */}
                  <div className="flex items-center justify-center gap-x-3">
                    <Image
                      src={`${api}/${item?.profilePicture}`}
                      width={50}
                      height={50}
                      alt={item?.userName}
                      className="rounded-full w-[50px] h-[50px] object-cover"
                    />

                    {/* Customer name section */}
                    <div className="flex flex-col gap-y-1">
                      <h2 className="text-black text-lg font-semibold">
                        {item?.userName}
                      </h2>
                      <span>{item.socialMediaHandle}</span>
                    </div>
                  </div>
                  {/* review Star section */}
                  <StarRating rating={item.rating} />
                </div>
                {/* Customer Review Section */}
                <p className="text-base font-light ">{item.review}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
             variants={scrollvariant}
             animate="animate"
          className="lg:flex hidden flex-col items-start justify-center gap-y-5 w-1/5">
            {/* right side customer review part */}
            {[...rightreview,...rightreview,...rightreview].map((item,index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex flex-col gap-y-2 p-3 shadow-lg rounded-2xl bg-neutral-100 "
              >
                {/* Customer Profile */}
                <div className="flex flex-row items-center justify-between">
                  {/* Profile Section */}
                  <div className="flex items-center justify-center gap-x-3">
                    <Image
                      src={`${api}/${item?.profilePicture}`}
                      width={50}
                      height={50}
                      alt={item?.userName}
                      className="rounded-full w-[50px] h-[50px] object-cover"
                    />

                    {/* Customer name section */}
                    <div className="flex flex-col gap-y-1">
                      <h2 className="text-black text-lg font-semibold">
                        {item?.userName}
                      </h2>
                      <span>{item.socialMediaHandle}</span>
                    </div>
                  </div>
                  {/* review Star section */}
                  <StarRating rating={item.rating} />
                </div>
                {/* Customer Review Section */}
                <p className="text-base font-light ">{item.review}</p>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Customer;
