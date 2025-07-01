import { axiosInstance } from '@/components/axios/axiosInstance'


export const getCustomerReview = async()=>{
    try{
            const response = await axiosInstance.get("/TestimonialApi/get")
            return response
    }
    catch(err){
         console.log(err)
    }
}