import { axiosInstance } from "@/components/axios/axiosInstance";


export const traditional = async()=>{
 const response = await axiosInstance.get('ContentApi/getcontent/Say Goodbye',{headers:{
   'Content-Type':'application/json'
 }})
 return response
}