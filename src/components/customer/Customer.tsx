'use client'

import { Star } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from 'framer-motion';

const Customer = () => {
  
  const reviews = [
    {
      id: 1,
      customername: "Casey Jordan",
      tag: "@caseyj",
      review:
        "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
      totalstar: 0,
      img: "https://images.pexels.com/photos/4126749/pexels-photo-4126749.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: false,
      date: "2024-01-15",
    },
    {
      id: 2,
      customername: "Josh Smith",
      tag: "@jsmith",
      review:
        "Our team's productivity has skyrocketed since we started using this tool. 😄",
      totalstar: 3,
      img: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-01-18",
    },
    {
      id: 3,
      customername: "Morgan Lee",
      tag: "@morganleewhiz",
      review:
        "This app has completely transformed how I manage my projects and deadlines.",
      totalstar: 4,
      img: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-01-20",
    },
    {
      id: 4,
      customername: "Jamie Rivera",
      tag: "@jamietechguru00",
      review:
        "The integration possibilities are endless. Perfect for our diverse workflow needs.",
      totalstar: 5,
      img: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-01-12",
    },
    {
      id: 5,
      customername: "Casey Jordan",
      tag: "@caseyj",
      review:
        "I was amazed at how quickly we were able to integrate this app into our workflow.",
      totalstar: 0,
      img: "https://images.pexels.com/photos/4126749/pexels-photo-4126749.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: false,
      date: "2024-01-10",
    },
    {
      id: 6,
      customername: "Taylor Kim",
      tag: "@taylorkimm",
      review:
        "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
      totalstar: 4,
      img: "https://images.pexels.com/photos/7605935/pexels-photo-7605935.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-01-22",
    },
    {
      id: 7,
      customername: "Riley Smith",
      tag: "@rileysmith1",
      review:
        "The customizability and integration capabilities of this app are top-notch.",
      totalstar: 3,
      img: "https://images.pexels.com/photos/10375993/pexels-photo-10375993.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-01-25",
    },
    {
      id: 8,
      customername: "Jordan Patels",
      tag: "@jpatelsdesign",
      review:
        "Adopting this app for our team has streamlined our project management and improved communication across the board.",
      totalstar: 5,
      img: "https://images.pexels.com/photos/12679992/pexels-photo-12679992.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-01-28",
    },
    {
      id: 9,
      customername: "Sam Dawson",
      tag: "@dawsontechtips",
      review:
        "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
      totalstar: 2,
      img: "https://images.pexels.com/photos/7172095/pexels-photo-7172095.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-01-30",
    },
    {
      id: 10,
      customername: "Casey Harper",
      tag: "@casey09",
      review:
        "Its user-friendly interface and robust features support our diverse needs.",
      totalstar: 3,
      img: "https://images.pexels.com/photos/13397829/pexels-photo-13397829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: false,
      date: "2024-02-01",
    },
    {
      id: 11,
      customername: "Alex Chen",
      tag: "@alexchen_dev",
      review:
        "The reporting features are outstanding. I can generate detailed analytics that help me make informed decisions for my business.",
      totalstar: 5,
      img: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-02-03",
    },
    {
      id: 12,
      customername: "Morgan Davis",
      tag: "@morgandavis",
      review:
        "Customer support is responsive and helpful. They resolved my issue within hours.",
      totalstar: 4,
      img: "https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-02-05",
    },
    {
      id: 13,
      customername: "River Thompson",
      tag: "@riverthompson",
      review:
        "Excellent value for money. The features you get for the price point are incredible.",
      totalstar: 5,
      img: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-02-07",
    },
    {
      id: 14,
      customername: "Avery Johnson",
      tag: "@averyjohnson",
      review:
        "The collaboration features have made remote work so much easier for our distributed team.",
      totalstar: 4,
      img: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-02-10",
    },
    {
      id: 15,
      customername: "Phoenix Martinez",
      tag: "@phoenixmartinez",
      review:
        "I love how intuitive the interface is. Even complex tasks feel simple with this tool.",
      totalstar: 5,
      img: "https://images.pexels.com/photos/7605935/pexels-photo-7605935.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: false,
      date: "2024-02-12",
    },
    {
      id: 16,
      customername: "Sage Wilson",
      tag: "@sagewilson",
      review:
        "The automation features save me hours every week. It's like having a personal assistant.",
      totalstar: 5,
      img: "https://images.pexels.com/photos/10375993/pexels-photo-10375993.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-02-14",
    },
    {
      id: 17,
      customername: "Dakota Brown",
      tag: "@dakotabrown",
      review:
        "Security features are top-notch. I feel confident storing sensitive client data here.",
      totalstar: 4,
      img: "https://images.pexels.com/photos/12679992/pexels-photo-12679992.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-02-16",
    },
    {
      id: 18,
      customername: "Rowan Garcia",
      tag: "@rowangarcia",
      review:
        "The mobile app works perfectly. I can manage everything from my phone without any limitations.",
      totalstar: 4,
      img: "https://images.pexels.com/photos/7172095/pexels-photo-7172095.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-02-18",
    },
    {
      id: 19,
      customername: "Emery Taylor",
      tag: "@emerytaylor",
      review:
        "Template library is extensive and saves so much time on project setup.",
      totalstar: 3,
      img: "https://images.pexels.com/photos/13397829/pexels-photo-13397829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: false,
      date: "2024-02-20",
    },
    {
      id: 20,
      customername: "Reese Anderson",
      tag: "@reeseanderson",
      review:
        "Integration with other tools in our stack was seamless. No technical headaches at all.",
      totalstar: 5,
      img: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1",
      verified: true,
      date: "2024-02-22",
    },
  ];
  
  
  
  const rightreview = reviews.slice(0, 5);
  const centerreview = reviews.slice(5, 10);
  const leftreview = reviews.slice(10, 15);



  // adding infinite scroll
    const scrollvariant:any = {
      animate:{
        y:['0%','-100%'],
        transition:{
          duration:10,
          repeat:Infinity,
          ease:'linear'
        }
      }
    }

     const scrollvariant2:any = {
      animate:{
        y:['0%','-100%'],
        transition:{
          duration:20,
          repeat:Infinity,
          ease:'linear'
        }
      }
    }

  const StarRating = ({ totalstar }) => {
    const number = parseInt(totalstar);
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
    <section className="w-full h-full px-28 gap-x-5 overflow-hidden py-10 flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-y-5 w-full">
        
        {/* Top Heading */}
        <div className="flex flex-col items-center justify-center gap-y-3  h-1/4">
          <h1 className="text-5xl font-bold ">Customer Testimonials</h1>
          <p className="mx-auto font-base text-lg">
            We do it for Customer and they share their reviews
          </p>
        </div>
        
        {/* Bottom Reviews */}
        <div className="flex flex-row gap-x-6 overflow-hidden w-full items-center py-10  justify-center h-1/2 ">
          {/* Customer Testomonial */}
          <motion.div
            variants={scrollvariant}
            animate="animate"
             className="flex flex-col items-start justify-center gap-y-5 w-1/5">
            {/* right side customer review part */}
            {leftreview.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-y-2 p-3 shadow-lg rounded-2xl bg-neutral-100 "
              >
                {/* Customer Profile */}
                <div className="flex flex-row items-center justify-between">
                  {/* Profile Section */}
                  <div className="flex items-center justify-center gap-x-3">
                    <Image
                      src={item.img}
                      width={50}
                      height={50}
                      alt={item.customername}
                      className="rounded-full w-[50px] h-[50px] object-cover"
                    />

                    {/* Customer name section */}
                    <div className="flex flex-col gap-y-1">
                      <h2 className="text-black text-lg font-semibold">
                        {item.customername}
                      </h2>
                      <span>{item.tag}</span>
                    </div>
                  </div>
                  {/* review Star section */}
                  <StarRating totalstar={item.totalstar} />
                </div>
                {/* Customer Review Section */}
                <p className="text-base font-light ">{item.review}</p>
              </div>
            ))}
          </motion.div>

          <motion.div 
          variants={scrollvariant2}
          animate="animate"
          className="flex flex-col items-start justify-center gap-y-5 w-1/4">
            {/* right side customer review part */}
            {centerreview.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-y-2 p-3 shadow-lg rounded-2xl bg-neutral-100 "
              >
                {/* Customer Profile */}
                <div className="flex flex-row items-center justify-between">
                  {/* Profile Section */}
                  <div className="flex items-center justify-center gap-x-3">
                    <Image
                      src={item.img}
                      width={50}
                      height={50}
                      alt={item.customername}
                      className="rounded-full w-[50px] h-[50px] object-cover"
                    />

                    {/* Customer name section */}
                    <div className="flex flex-col gap-y-1">
                      <h2 className="text-black text-lg font-semibold">
                        {item.customername}
                      </h2>
                      <span>{item.tag}</span>
                    </div>
                  </div>
                  {/* review Star section */}
                  <StarRating totalstar={item.totalstar} />
                </div>
                {/* Customer Review Section */}
                <p className="text-base font-light ">{item.review}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
             variants={scrollvariant}
             animate="animate"
          className="flex flex-col items-start justify-center gap-y-5 w-1/5">
            {/* right side customer review part */}
            {rightreview.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-y-2 p-3 shadow-lg rounded-2xl bg-neutral-100 "
              >
                {/* Customer Profile */}
                <div className="flex flex-row items-center justify-between">
                  {/* Profile Section */}
                  <div className="flex items-center justify-center gap-x-3">
                    <Image
                      src={item.img}
                      width={50}
                      height={50}
                      alt={item.customername}
                      className="rounded-full w-[50px] h-[50px] object-cover"
                    />

                    {/* Customer name section */}
                    <div className="flex flex-col gap-y-1">
                      <h2 className="text-black text-lg font-semibold">
                        {item.customername}
                      </h2>
                      <span>{item.tag}</span>
                    </div>
                  </div>
                  {/* review Star section */}
                  <StarRating totalstar={item.totalstar} />
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
