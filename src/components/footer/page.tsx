"use client";

import { getFooter } from "@/lib/footer";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { BsApple } from "react-icons/bs";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  interface data {
    id: number;
    displayName: string;
    links: string;
    children?: data[];
  }

  const { data: footerData = [], isError } = useQuery<data[]>({
    queryKey: ["footerData"],
    queryFn: async () => {
      const res = await getFooter();
      return res?.data;
    },
  });

  const Products = footerData.find((item) => item.displayName === "Products")?.children || [];
  const Help = footerData.find((item) => item.displayName === "Help Center")?.children || [];
  const contact = footerData.find((item) => item.displayName === "Contact")?.children || [];

  const icon = [
    { id: 1, icon: <FaFacebookF size={25} /> },
    { id: 2, icon: <IoLogoInstagram size={25} /> },
    { id: 3, icon: <FaXTwitter size={25} /> },
    { id: 4, icon: <FaLinkedin size={25} /> },
  ];

  
  if (isError) return <div className="text-red-500 text-center py-10">Failed to load footer data.</div>;

  return (
    <footer className="lg:h-[30rem] h-full bg-cyan-600 w-full relative">
      <div className="py-15 w-full lg:px-28 px-5 flex flex-col justify-between gap-y-20">
        {/* Top Footer */}
        <div className="flex lg:flex-row flex-col h-2/3 w-full gap-x-3 justify-evenly ">
          {/* Subscribe */}
          <div className="lg:w-1/3 w-full">
            <div className="flex flex-col gap-y-4 text-neutral-50 w-full">
              <h1 className="lg:text-3xl text-xl font-semibold lg:w-[80%] w-full leading-relaxed tracking-wide">
                Stay informed about our latest features and updates.
              </h1>
              <div className="flex flex-col ">
                <div className="flex flex-col gap-y-3">
                  <div className="flex flex-row items-center w-2/3 justify-start relative">
                    <input
                      type="text"
                      className="p-5 outline-none border border-neutral-100 bg-neutral-50 rounded-xl placeholder:text-neutral-800 w-full"
                      placeholder="Enter Your Email"
                    />
                    <h2 className="px-5 py-5 bg-neutral-900 absolute top-0 scale-105 hover:scale-110 ease-in-out transition-all duration-300 right-0 text-neutral-50 rounded-r-2xl ">
                      Subscribe
                    </h2>
                  </div>
                  <span>Already subscribed by 8000+ People</span>
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="lg:w-1/5 w-full text-neutral-50 space-x-2 lg:py-2 py-5">
            <h1 className="lg:text-2xl text-xl py-3 font-semibold">Products</h1>
            <ul className="flex flex-col gap-y-2">
              {Products.map((item) => (
                <li key={item.id}>
                  <a href={item.links} className="lg:text-xl text-base">
                    {item.displayName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Center */}
          <div className="lg:w-1/5 w-full text-neutral-50 space-x-2 lg:py-2 py-5">
            <h1 className="lg:text-2xl text-xl py-3 font-semibold">Help Center</h1>
            <ul className="flex flex-col gap-y-2">
              {Help.map((item) => (
                <li key={item.id}>
                  <a href={item.links} className="lg:text-xl text-base">
                    {item.displayName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="w-fit text-neutral-50 lg:py-2 py-5">
            <h1 className="lg:text-2xl text-xl py-3 font-semibold">Contact</h1>
            <ul className="flex flex-col gap-y-2">
              {contact.map((item) => (
                <li key={item.id} className="lg:text-xl text-base">
                  {item.displayName}
                </li>
              ))}
            </ul>
          </div>

          {/* App Store */}
          <div className="flex flex-row gap-x-1 items-start justify-center w-fit rounded-xl mt-2 border-2 h-fit border-neutral-50 text-neutral-50">
            <span className="flex items-center justify-center h-[50] pl-3">
              <BsApple size={30} />
            </span>
            <div className="flex flex-col gap-y-0 p-2">
              <p className="text-sm font-light">Download on the</p>
              <h2 className="text-2xl font-semibold">App Store</h2>
            </div>
          </div>
        </div>

        <div className="h-[1px] absolute left-0 lg:top-[19rem] top-[58rem] w-full opacity-[0.2] bg-white"></div>

        {/* Bottom Footer */}
        <div className="flex flex-row h-1/3 items-center justify-between text-neutral-50">
          <h3 className="text-lg">© SumX 2025 | All Rights Reserved</h3>
          <ul className="flex flex-row gap-x-3 items-center justify-center">
            {icon.map((item) => (
              <li key={item.id}>{item.icon}</li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
