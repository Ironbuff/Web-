import axios from 'axios'

const api = process.env.NEXT_PUBLIC_API


export const getFooter = async()=>{
try{
    const response = await axios.get(`${api}/api/CommonApi/getfooteritems`)
   return response
}
catch(err){
    console.log(err)
}
}