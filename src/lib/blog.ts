import axios from 'axios'

const api = process.env.NEXT_PUBLIC_API


export const getblog = async()=>{
    const response = await axios.get(`${api}/api/BlogApi/getblogs`)
    return response
}


export const getblogById = async(id:number)=>{
    const response = await axios.get(`${api}/api/BlogApi/getBlogById/${id}`)
    return response
}