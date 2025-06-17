import Image from "next/image";
import React from "react";
import { GoArrowRight } from "react-icons/go";
import dayjs from 'dayjs';

const Blog = () => {
  const blogs = [
    {
      id: 1,
      slug: "how-to-learn-javascript",
      title: "How to Learn JavaScript Effectively",
      description:
        "A comprehensive guide to mastering JavaScript from scratch.",
      summary:
        "Learn the best resources, tips, and steps to become proficient in JavaScript.",
      tags: ["JavaScript", "Programming", "Web Development"],
      publishedAt: "2025-06-01T10:30:00Z",
      status: "Active",
    },
    {
      id: 2,
      slug: "nextjs-routing-basics",
      title: "Understanding Routing in Next.js",
      description: "Explore file-based routing and dynamic paths in Next.js.",
      summary: "Learn how routing works in Next.js with code examples.",
      tags: ["Next.js", "React", "Routing"],
      publishedAt: "2025-06-03T09:00:00Z",
      status: "Draft",
    },
    {
      id: 3,
      slug: "tailwind-vs-bootstrap",
      title: "Tailwind CSS vs Bootstrap: Which to Choose?",
      description: "An in-depth comparison between Tailwind CSS and Bootstrap.",
      summary:
        "Pros and cons of two popular CSS frameworks for modern UI development.",
      tags: ["CSS", "Tailwind", "Bootstrap", "UI"],
      publishedAt: "2025-06-05T14:45:00Z",
      status: "Active",
    },
    {
      id: 4,
      slug: "deploying-app-to-vercel",
      title: "A Simple Guide to Deploying Apps on Vercel",
      description:
        "Step-by-step instructions for deploying your Next.js app to Vercel.",
      summary: "Make your app live in minutes using Vercel’s platform.",
      tags: ["Deployment", "Next.js", "Vercel"],
      publishedAt: "2025-06-06T11:20:00Z",
      status: "Active",
    },
    {
      id: 5,
      slug: "intro-to-postgresql",
      title: "Getting Started with PostgreSQL",
      description:
        "Learn the basics of PostgreSQL and how to integrate it with your projects.",
      summary:
        "Introduction to PostgreSQL features, setup, and usage in web apps.",
      tags: ["PostgreSQL", "Database", "SQL"],
      publishedAt: "2025-06-07T08:15:00Z",
      status: "Archived",
    },
  ];

  return (
    <section className="w-full lg:h-screen h-full py-10 lg:px-28 px-5 flex flex-col gap-y-3 ">
      {/* heading  */}
      <h1 className="text-4xl text-center py-10 font-semibold">Our Blogs</h1>
       
       {/* Showing blogs  */}
      <div className="grid lg:grid-cols-3 grid-cols-1 space-x-3 space-y-3 w-full">
        
        {blogs.filter(b=>b.status==="Active").map((items) => (
          <div key={items.id} className="flex flex-col gap-y-5 h-[550px] items-start justify-center min-w-lg  shadow-md  rounded-lg ">
            
            {/* Top Heading */}
            <div className="flex flex-row items-center relative basis-[50%]">
                <Image src={"https://media.istockphoto.com/id/2167740181/photo/a-librarys-quiet-embrace-rows-of-books-lining-wooden-shelves.jpg?s=2048x2048&w=is&k=20&c=z1RiNUIW7Ks979KRZ2lNiJp0mEuBqgpBY0RAWRglsxU="} alt="Profile" height="1080" width="1080" className="object-cover w-full rounded-t-lg"/>
                <div className="w-full flex flex-row items-center justify-between absolute bottom-0 bg-neutral-50/60 h-16 p-5">
                    <p className="text-base text-black">
                    {dayjs(items.publishedAt).format('DD MMM YYYY')}
                    </p>
                    <div className="flex flex-row  gap-x-2">
                        {items.tags.slice(0,2).map((item,index)=>(
                             <span key={index} className="p-2 whitespace-nowrap rounded-xl text-base bg-neutral-50/50 flex items-center justify-center">
                                    {item}
                             </span>
                        ))}
                    </div>

                </div>
            </div>
            {/* Bottom Description */}
            <div className="flex flex-col gap-y-3 px-4 py-1 basis-[50%]">
                
                <h3 className="text-2xl underline underline-offset-2 leading-relaxed font-semibold">
                    {items.title}
                </h3>
                <p className="text-base">
                    {items.summary.length>100?items.summary.slice(0,100)+"...":items.summary}
                </p>
                <a href="" className="flex flex-row hover:text-blue-500 hover:underline gap-x-2 group items-center text-blue-400">
                    Read More <GoArrowRight  className="-rotate-45 group-hover:rotate-0 transition-all ease-in-out duration-300" />
                </a>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
};

export default Blog;
