import { axiosInstance } from '@/components/axios/axiosInstance'


export const getfaq = async()=>{
    const response = await axiosInstance.get('/FaqApi/get')
    return response
}