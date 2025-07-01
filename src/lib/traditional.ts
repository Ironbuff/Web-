import { axiosInstance } from "@/components/axios/axiosInstance";


export const traditional = async()=>{
   const response = await axiosInstance.get("/ContentApi/getcontent/Say Goodbye")
   return response
}