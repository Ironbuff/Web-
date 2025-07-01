import { axiosInstance } from "@/components/axios/axiosInstance";


export const postContact = async(
    data:{
        fullname:string,
        email:string,
        contact:string,
        companyName:string,
        companyLocation:string,
        description:string,
        agreeToTerms:boolean,
    }
)=>{
    const response = await axiosInstance.post(`/ContactUsApi/post`,data)
    return response

}