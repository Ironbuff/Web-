import { axiosInstance } from '@/components/axios/axiosInstance'


export const getPrice = async()=>{
    const response = await axiosInstance.get('/PricingApi/get')
    return response
}