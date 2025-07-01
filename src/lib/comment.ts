import { axiosInstance } from "@/components/axios/axiosInstance";



export const AddComment = async(formdata:FormData)=>{
    try{
        const response = await axiosInstance.post('/CommentApi/createComment',formdata,{
            headers:{
               'Content-Type': 'multipart/form-data'
            }
        })
        return response
    }
    catch(err){
             console.log(err)
    }
     
}


export const getComment = async(blogId:number)=>{
    const response = axiosInstance.get(`/CommentApi/getCommentsByBlogId/${blogId}`)
    return response
}

export const reactOnComment = async(data:{CommentId:number,UserId:string|null,Reaction:1|-1})=>{

    const response = await axiosInstance.post('/CommentApi/reactOnComment',data)
    
    return response
}