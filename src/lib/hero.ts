import { axiosInstance } from '@/components/axios/axiosInstance'


export const gethero = async()=>{
   
    const response = await axiosInstance.get('/ContentApi/getcontent/Hero Section')
    return response
}