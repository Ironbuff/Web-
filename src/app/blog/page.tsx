"use client";

import Image from "next/image";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import dayjs from "dayjs";
import Link from "next/link";
import { getblog } from "@/lib/blog";
import Loader from "@/components/loader/Loading";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";

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

  const [filteredBlogs, setFilteredBlogs] = useState<blog[] | null>(null)
  const api = process.env.NEXT_PUBLIC_API;


  const {data:blogs=[],isPending} = useQuery<blog[]>({
    queryKey:['blogs'],
    queryFn: async()=>{
      const result = await getblog()
      return result.data
    },
  })

  const Newfetch = (tag: string) => {
    const filtered = blogs.filter(item => item.tags.includes(tag))
    setFilteredBlogs(filtered)
  }

  // to reset 
  const reset = () => {
    setFilteredBlogs(null)
  }

  // Generate tag count map
  const tagMap = new Map<string, number>();
  blogs
    .filter((b) => b.status === "Active")
    .forEach((blog) =>
      blog.tags.forEach((tag) =>
        tagMap.set(tag, (tagMap.get(tag) || 0) + 1)
      )
    );

  return (
    <section className="w-full bg-gradient-to-b from-white to-cyan-100 h-full py-5 lg:px-28 px-5 flex flex-col gap-y-5 overflow-hidden">
      {/* heading */}
      <div className="text-center w-full">
        <h1 className="text-4xl text-cyan-600 py-10 font-semibold">Our Blogs</h1>
        <span className="w-24 h-3 bg-blue-500 mx-auto mt-2 rounded-full mb-10"></span>
      </div>

      {/* Tag summary */}
      {tagMap.size > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-5">
          {[...tagMap.entries()].map(([tag, count]) => (
            <button
              key={tag}
              className={`px-3 py-1 rounded-full text-sm transition-all ${filteredBlogs && filteredBlogs[0]?.tags.includes(tag)
                  ? "bg-cyan-600 scale-105 text-white"
                  : "bg-neutral-200 text-cyan-600 hover:bg-cyan-100"
                }`}
              onClick={() => Newfetch(tag)}
            >
              #{tag} ({count})
            </button>
          ))}
          {filteredBlogs &&
            (
              <button
                className="bg-blue-100 text-cyan-500 px-3 py-1 rounded-full text-sm"
                onClick={reset}
              >
                Show All
              </button>
            )}
        </div>
      )}

      {/* Loader */}
      {isPending && (
        <div className="flex flex-row items-center justify-center">
          <Loader />
        </div>
      )}

      {/* Blog Cards */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 w-full h-full rounded-xl">
        {(filteredBlogs ? filteredBlogs : blogs)
          .filter((b) => b.status === "Active")
          .map((items) => (
            <motion.div
              whileHover={{ scale: 1.02 }}
              key={items.id}
              className="flex flex-col gap-y-3 items-start justify-center shadow-md bg-white/80 rounded-lg overflow-hidden"
            >
              {/* Top Heading */}
              <div className="flex flex-row items-center relative h-[350px] w-full">
                <Image
                  src={items.thumbnail ? `${api}/${items.thumbnail}` : "https://media.istockphoto.com/id/2167740181/photo/a-librarys-quiet-embrace-rows-of-books-lining-wooden-shelves.jpg?s=2048x2048&w=is&k=20&c=z1RiNUIW7Ks979KRZ2lNiJp0mEuBqgpBY0RAWRglsxU="}
                  alt="Thumbnail"
                  fill
                  className="object-cover"
                />
                <div className="w-full flex flex-row justify-between items-center absolute bottom-0 bg-neutral-300/90 z-10 h-16 p-2">
                  <p className="text-base text-black font-medium">
                    {dayjs(items.publishedAt).format("DD MMM YYYY")}
                  </p>
                  <div className="flex flex-row gap-x-2">
                    {items.tags.slice(0, 2).map((tag, i) => (
                      <span
                        key={i}
                        className="p-2 whitespace-nowrap rounded-lg text-base bg-neutral-200 text-cyan-500"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Description */}
              <div className="flex flex-col gap-y-5 px-3 py-3 flex-grow">
                <h3 className="text-xl italic underline underline-offset-2 font-serif font-semibold ">
                  {items.title}
                </h3>
                <p className="text-base">
                  {items.summary.length > 100
                    ? items.summary.slice(0, 50) + "..."
                    : items.summary}
                </p>
                <Link
                  href={`/blog/${items.id}`}
                  className="flex flex-row hover:text-cyan-500 hover:underline gap-x-2 group items-center text-cyan-400 font-semibold mt-auto"
                >
                  Read More{" "}
                  <GoArrowRight className="-rotate-45 group-hover:rotate-0 transition-all ease-in-out duration-300" />
                </Link>
              </div>
            </motion.div>
          ))}
      </div>
    </section>
  );
};

export default Blog;
