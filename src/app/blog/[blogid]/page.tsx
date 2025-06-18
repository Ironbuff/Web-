"use client";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";
import { getblogById } from "@/lib/blog";

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

   const api = "https://5m1ql0zh-7256.inc1.devtunnels.ms" 
  const params = useParams();
  const blogid = params.blogid;
  const [blog, setBlog] = useState<Blogdata | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const id = parseInt(blogid)
        const result = await getblogById(id)
        console.log(result)
        if (result.status === 200) {
          setBlog(result.data)
          setLoading(false)
          }
      
         }
      catch (err) {
      console.log(err)
       }
    }
   fetch()
    }
  
  , []);
  
    // --- Image Path Transformation and Sanitization ---
  const rawDescription = blog?.description || '';

  // Regex to find img src attributes that:
  // 1. Start with '/' (relative paths)
  // 2. DO NOT already start with the API_FILE_SERVER_BASE_URL
  const imgPathRegex = new RegExp(
    `<img([^>]+)src=["'](\\/(?!${api.replace(/\//g, '\\/')}\\/)[^"']+)["']([^>]*)>`,
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

  // Sanitize the processed HTML content for security
 

   


  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        Loading.....
      </div>
    );
  }

  return (
    <section className="bg-gray-100">
      <div className="flex flex-col gap-y-3 px-28 py-20  max-w-7xl   mx-auto">
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
        <h1 className="text-4xl text-neutral-800 flex w-full items-center justify-start font-semibold ">
          {blog?.title}
        </h1>

        <p className="text-sm text-neutral-800 font-light flex flex-row gap-x-3  mb-5">
          -Published At {dayjs(blog?.publishedAt).format("DD MMM YYYY")}
          <span className="text-orange-400 bg-green-100 text-xs font-semibold px-3 rounded-lg ">{blog?.status}</span>
        </p>

        {/* tag and date section */}

        {/* summary */}
        <div className="bg-gray-200 p-6 text-neutral-900 rounded-lg border-l-4 border-blue-500 mb-8">
        <p className="text-lg font-semibold italic leading-relaxed pt-5 flex items-center max-w-7xl">
          {blog?.summary}
        </p>
        </div>

        {/* Content Section */}
        <article className="prose lg:prose-lg xl:prose-xl max-w-none w-full border-b pb-12 mb-12 ">
          <div className="content-display " dangerouslySetInnerHTML={{ __html: processedDescription }}></div>
        </article>

        {/* Footer */}
        <footer>
          <Link
            href={"/"}
            className="text-blue-500 leading-relaxed text-lg hover:text-blue-700 hover:underline transition-all ease-in-out duration-300"
          >
            View All Blogs {">>"}
          </Link>
        </footer>
      </div>
    </section>
  );
};

export default Blogdetail;
