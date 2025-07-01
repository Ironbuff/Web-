import { axiosInstance } from '@/components/axios/axiosInstance'


export const getchose = async()=>{
    const response = await axiosInstance.get('/ContentApi/getcontent/Why Choose SumX')
    return response
}