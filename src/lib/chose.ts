import axios from 'axios'

const api = process.env.NEXT_PUBLIC_API

export const getchose = async()=>{
    const response = await axios.get(`${api}/api/ContentApi/getcontent/Why Choose SumX`)
    return response
}