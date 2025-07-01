"use client";
import { useParams } from "next/navigation";
import React from "react";
import dayjs from "dayjs";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import { getblogById } from "@/lib/blog";
import Loader from "@/components/loader/Loading";
import Comment from "@/app/blog/comment/page";
import { useQuery } from "@tanstack/react-query";

const Blogdetail = () => {

  interface Blogdata {
    id: number,
    tags: string[],
    title: string,
    summary: string,
    publishedAt: string,
    description: string,
    status: string
  }

   const api = process.env.NEXT_PUBLIC_API
  const params = useParams();
  const blogid = params.blogid as string;
  const parsedId = parseInt(blogid); // convert to number
  const id = parseInt(blogid)



  const {data:blog,isLoading}= useQuery<Blogdata>({
    queryKey:['blog'],
    queryFn: async()=>{
      const result = await getblogById(id)
      return result.data
    },

  })
  
    // --- Image Path Transformation and Sanitization ---
  const rawDescription = blog?.description || '';

  // Regex to find img src attributes that:
  // 1. Start with '/' (relative paths)
  // 2. DO NOT already start with the API_FILE_SERVER_BASE_URL
  const imgPathRegex = new RegExp(
    `<img([^>]+)src=["'](\\/(?!${api?.replace(/\//g, '\\/')}\\/)[^"']+)["']([^>]*)>`,
    'g'
  );
  // Explanation of the new regex:
  // We're dynamically inserting API_FILE_SERVER_BASE_URL into the negative lookahead.
  // API_FILE_SERVER_BASE_URL.replace(/\//g, '\\/') is used to escape forward slashes
  // within the variable, so they are treated as literal characters in the regex.
  // We also add `\\/` after it to ensure it matches the slash that would follow the prefix.


  const processedDescription = rawDescription.replace(imgPathRegex, (match, beforeSrc, srcPath, afterSrc) => {
    // srcPath will be the relative path found (e.g., '/blogMedia/mceu_...jpg')
    const finalNewSrc = `${api}${srcPath}`; // Concatenate to form the new path
    return `<img${beforeSrc}src="${finalNewSrc}"${afterSrc}>`; // Reconstruct the img tag
  });

 
 

   


  if (isLoading) {
    return (
      <div className="flex items-center justify-center w-full h-[calc(100vh-12ch)]">
        <Loader/>
      </div>
    );
  }

  return (
    <section className="bg-gray-200 h-full">
      <div className="flex flex-col gap-y-3 lg:px-28 px-5 py-20  max-w-7xl   mx-auto">
        <div className="flex flex-row items-center justify-start">
          {/* tag section */}
          <ul className="flex flex-row gap-x-2">
            {blog?.tags && Array.isArray(blog.tags) && blog.tags.length>0?
            (blog.tags.map((tag, index) => (
              <li
                key={index}
                className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full hover:bg-green-200 transition-colors duration-200 cursor-pointer"
              >
                #{tag}
              </li>
            ))):
            (
              
              <li className="px-3 py-1 bg-gray-100 text-gray-500 text-sm font-medium rounded-full">
                No tags
              </li>
            )
          }
          </ul>
        </div>

        

        {/* Top Heading */}
        <h1 className="text-4xl text-neutral-800 flex w-full items-center justify-start font-bold ">
          {blog?.title}
        </h1>

        <p className="text-sm text-neutral-900 font-light flex flex-row gap-x-3  mb-5">
          -Published At {dayjs(blog?.publishedAt).format("DD MMM YYYY")}
          <span className="text-orange-400 bg-green-100 text-xs font-semibold px-3 rounded-lg ">{blog?.status}</span>
        </p>

        {/* tag and date section */}

        {/* summary */}
        <div className="bg-gray-500 p-6 text-neutral-900 rounded-lg border-l-4 border-blue-500 mb-8">
        <p className="text-lg font-semibold italic leading-relaxed pt-5 flex items-center text-cyan-300 max-w-7xl">
          {blog?.summary}
        </p>
        </div>

        {/* Content Section */}
        <article className="prose lg:prose-lg xl:prose-xl max-w-none w-full border-b pb-12 mb-12 ">
          <div className="content-display " dangerouslySetInnerHTML={{ __html: processedDescription }}></div>
        </article>


        {/* Comment Section */}
        {blogid && <Comment id={parsedId} />}

        {/* Footer */}
        <footer>
          <Link
            href={"/blog"}
            className="text-blue-500 flex flex-row gap-x-2 items-center leading-relaxed text-lg group hover:text-blue-700 hover:underline transition-all ease-in-out duration-300"
          >
            View All Blogs <GoArrowLeft size={20} className="group-hover:translate-x-1 rotate-180" />
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default Blogdetail;
