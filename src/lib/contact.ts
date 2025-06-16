import axios from "axios";

const api = process.env.NEXT_PUBLIC_API

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
    const response = await axios.post(`${api}/api/ContactUsApi/post`,data,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    return response

}