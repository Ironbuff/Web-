import axios from "axios";

const api = process.env.NEXT_PUBLIC_API

export const traditional = async()=>{
   const response = await axios.get(`${api}/api/ContentApi/getcontent/Say Goodbye`)
   return response
}