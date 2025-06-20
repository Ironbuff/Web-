import axios from "axios";

const api = process.env.NEXT_PUBLIC_API


export const AddComment = async(formdata:FormData)=>{
    try{
        const response = await axios.post(`${api}/api/CommentApi/createComment`,formdata,{
            headers:{
                'Authorization':`Bearer ${localStorage.getItem('token')}`,
                'Content-Type':'multipart/formData'
            }
        })
        return response
    }
    catch(err){
             console.log(err)
    }
     
}


export const getComment = async(blogId:number)=>{
    const response = await axios.get(`${api}/api/CommentApi/getCommentsByBlogId/${blogId}`,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    return response
}

export const reactOnComment = async(data:{CommentId:number,UserId:string|null,Reaction:1|-1})=>{

    const response = await axios.post(`${api}/api/CommentApi/reactOnComment`,data,{
        headers:{
            'Content-Type':'application/json',
            'Authorization':`Bearer ${localStorage.getItem("token")}`
        }
    })
    return response
}