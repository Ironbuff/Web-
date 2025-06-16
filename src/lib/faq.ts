import axios from 'axios'

const api = process.env.NEXT_PUBLIC_API

export const getfaq = async()=>{
    const response = await axios.get(`${api}/api/FaqApi/get`)
    return response
}