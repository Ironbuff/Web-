import axios from 'axios'

const api = process.env.NEXT_PUBLIC_API

export const getPrice = async()=>{
    const response = await axios.get(`${api}/api/PricingApi/get`)
    return response
}