import axios from'axios'

const api = process.env.NEXT_PUBLIC_API

export const gethero = async()=>{
   
    const response = await axios.get(`${api}/api/ContentApi/getcontent/Hero Section`)
    return response
}