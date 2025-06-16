import axios from 'axios'

const api = process.env.NEXT_PUBLIC_API

export const getCustomerReview = async()=>{
    try{
            const response = await axios.get(`${api}/api/TestimonialApi/get`)
            return response
    }
    catch(err){
         console.log(err)
    }
}