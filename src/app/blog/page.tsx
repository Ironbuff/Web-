"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import dayjs from "dayjs";
import Link from "next/link"; // Import Link for better routing
import { getblog } from "@/lib/blog";
import Loader from "@/components/loader/Loading";

const Blog = () => {
  interface blog {
    id: number;
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    publishedAt: string;
    status: string;
    thumbnail: string;
  }

  const [blogs, setBlogs] = useState<blog[]>([]);

  useEffect(() => {
    const fetch = async () => {
      const result = await getblog();
      setBlogs(result.data);
    };
    fetch();
  }, []);

  const api = "https://5m1ql0zh-7256.inc1.devtunnels.ms";


  const tagcount = ()=>{
    
  }

  return (
    <section className="w-full bg-gradient-to-b from-white to-cyan-50 h-full py-5 lg:px-28 px-5 flex flex-col gap-y-3 overflow-hidden ">
      
      <div className="text-center w-full ">
      {/* heading  */}
      <h1 className="text-4xl text-cyan-600 w-auto text-center py-10  font-semibold">
        Our Blogs   
        </h1>

      <span className="w-24 h-3 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mt-6 rounded-full mb-20"></span>
      </div>
      

      {blogs.length <= 0 && (
        <div className="flex flex-row items-center justify-center ">
          <Loader />
        </div>
      )}

      {/* Showing blogs  */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full h-full rounded-xl">
        {blogs
          .filter((b) => b.status === "Active")
          .map((items) => (
            <div
              key={items.id}
              className="flex flex-col gap-y-3 items-start justify-center min-w-lg  shadow-md bg-white/80  rounded-lg overflow-hidden"
            >
              {/* Top Heading */}
              <div className="flex flex-row items-center relative h-[350px] w-full">
                {items.thumbnail ? (
                  <Image
                    src={`${api}/${items.thumbnail}`}
                    alt="Profile"
                    fill
                    className="object-cover "
                  />
                ) : (
                  <Image
                    src={
                      "https://media.istockphoto.com/id/2167740181/photo/a-librarys-quiet-embrace-rows-of-books-lining-wooden-shelves.jpg?s=2048x2048&w=is&k=20&c=z1RiNUIW7Ks979KRZ2lNiJp0mEuBqgpBY0RAWRglsxU="
                    }
                    alt="Profile"
                    fill
                    className="object-cover"
                  />
                )}

                <div className="w-full flex flex-row flex-grow items-center justify-between absolute bottom-0 bg-gradient-to-t from-black/60 to-transparent z-10 h-16 p-2">
                  <p className="text-base text-black">
                    {dayjs(items.publishedAt).format("DD MMM YYYY")}
                  </p>
                  <div className="flex flex-row  gap-x-2">
                    {items.tags.slice(0, 2).map((item, index) => (
                      <span
                        key={index}
                        className="p-2 whitespace-nowrap rounded-lg text-base bg-neutral-50/50 text-green-500 flex items-center justify-center"
                      >
                        #{item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>


              {/* Bottom Description */}
              <div className="flex flex-col gap-y-5 px-3 py-3 flex-grow">
                <h3 className="text-xl underline underline-offset-2 leading-relaxed font-semibold">
                  {items.title}
                </h3>
                <p className="text-base flex-grow">
                  {items.summary.length > 100
                    ? items.summary.slice(0, 50) + "..."
                    : items.summary}
                </p>
                {/* FIXED: Use Link component and correct path format */}
                <Link
                  href={`/blog/${items.id}`}
                  className="flex flex-row hover:text-blue-500 hover:underline gap-x-2 group items-center text-blue-400 mt-auto"
                >
                  Read More{" "}
                  <GoArrowRight className="-rotate-45 group-hover:rotate-0 transition-all ease-in-out duration-300" />
                </Link>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Blog;
