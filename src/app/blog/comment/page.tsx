'use client'
import { AddComment, getComment, reactOnComment } from "@/lib/comment";
import dayjs from "dayjs";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PiArrowFatDownLight, PiArrowFatUpLight } from "react-icons/pi";

const Comment = ({id}:{id:number|string}) => {

    interface users {
       id:number,
       user:{
            userName:string,
            profilePicture:string,
       }
        createdAt: string,
        commentText: string,
        likeCount:number,
        dislikeCount:number,
    }

    const [CommentText, setCommentText] = useState("");
    const [comment, setComment] = useState<users[]|null>([])
    const [alerts, setAlerts] = useState('')
    const api = "https://5m1ql0zh-7256.inc1.devtunnels.ms"
 
    const router = useRouter()
    const CreatedAt = () => {
  return new Date().toISOString(); // e.g., "2025-06-20T13:57:51.286Z"
}
    const UserId = localStorage.getItem("UserId")
    const BlogId = id

    const fetch = async()=>{
                const blogId = BlogId
                const result = await getComment(blogId)
                console.log(result)
                if(result.status===200){
                    setComment(result.data)
                }
            }  
   
    useEffect(() => {       
        fetch()
    }, [])

    //reaction icon
  const handlereaction = async (CommentId :number, Reaction:1|-1) => {
    try {
      const result = await reactOnComment({ CommentId, Reaction, UserId });
      if (result.status === 200) {
        fetch()
      } 
    } 
    catch (error) {
     console.log(error)
     alert("Login to share reaction")
    }
  }



    const handleComment = async (e:React.FormEvent<HTMLFormElement>) => {
         
        e.preventDefault()
        try {
           
            const formdata = new FormData()
            formdata.set('CommentText',CommentText)
            formdata.set('UserId',UserId)
            formdata.set('BlogId',BlogId)
            formdata.set('CreatedAt',CreatedAt())

        
            
            
            if (UserId) {

                const result = await AddComment(formdata)
                if (result?.status === 200) {
                    setAlerts("Comment Added Sucessfully")
                }
            }
            else {
                setAlerts('Please Login to system to Comment')
                router.push('/login')
            }
        }
        catch (err) {
            console.log(err)
        }


    }

    return (
        <section className="w-full h-full  flex items-start justify-center flex-col gap-y-3 py-10">
            {/* Comment Input */}
            <div className="flex flex-col gap-y-2 w-full items-start justify-center">
                <h1 className="text-xl font-semibold leading-relaxed">
                    Share your Comment
                </h1>
                {/* submit for comment */}
                <div className="flex flex-col gap-y-2 w-full ">
                    <form onSubmit={handleComment} className=" flex flex-col justify-center w-full">
                        {/* Comment part */}
                        <div className="flex flex-col gap-y-4 w-full items-start">
                            <textarea
                                placeholder="What do you think of Blog"
                                value={CommentText}
                                onChange={(e) => setCommentText(e.target.value)}
                                className="w-[80%] shadow-md rounded-lg p-3 outline-none bg-white"

                            />
                            {alerts &&  (
                                <p className={` font-semibold text-lg ${alerts.includes("Sucessfully")?"text-green-500":"text-red-500"}`}>
                                    {alerts}
                                </p>
                            )}
                            <button type="submit" className="p-2 bg-blue-500 rounded-lg text-neutral-100 hover:bg-blue-600 hover:scale-105">
                                Add Comment
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* Showing Comment */}
            <div className="grid grid-cols-1 gap-2 w-[70%]">
                {comment?.map((item, index) => (
                    <div key={index} className="flex flex-col items-start shadow-md p-3 gap-y-4 w-full bg-white rounded-xl">
                        {/* image and profile Section */}
                        <div className="flex flex-row gap-x-2 items-center justify-start">
                            <Image
                                src={`${api}/${item.user.profilePicture}`}
                                width={60}
                                height={60}
                                className="object-cover w-10 h-10 rounded-full "
                                alt={item.user.userName} 
                                />
                            {/* username and published at section */}
                            <div className="flex flex-col gap-y-1">
                                <h1 className="text-base font-bold">
                                    {item.user.userName?item.user.userName:"Dummy User"}
                                </h1>
                                <p className="text-sm font-light">
                                    {dayjs(item.createdAt).format('MMM D, YYYY h:mm A')}
                                </p>
                            </div>
                           
                        </div>
                 {/* Comment Section */}
                            <div className="text-lg flex flex-col gap-y-3">
                                <p>
                                 {item.commentText}
                                 </p>
                                 {/* like and dislike count */}
                                 <div className="flex flex-row gap-x-3 items-center justify-start">
                                    <button 
                                    onClick={() => handlereaction(item.id, 1)}
                                    className="">
                                    <span className="flex items-center justify-center"> 
                                           {item.likeCount}
                                           <PiArrowFatUpLight className="hover:text-blue-500 ease-in-out duration-300 transition-all " />
                                    </span>
                                    </button>
                                   
                                   <button
                                   onClick={() => handlereaction(item.id, -1)}
                                   >
                                    <span className="flex items-center justify-center">
                                        {item.dislikeCount}
                                        <PiArrowFatDownLight className="hover:text-red-500 ease-in-out duration-300 transition-all "  />
                                    </span>
                                    </button>    
                                 </div>
                            </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Comment;
