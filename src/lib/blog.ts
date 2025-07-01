import { axiosInstance } from '@/components/axios/axiosInstance'



export const getblog = async () => {
    const response = await axiosInstance.get('/BlogApi/getblogs')
    return response
}


export const getblogById = async (id: number) => {
    const response = await axiosInstance.get(`/BlogApi/getBlogById/${id}`)
    return response
}
