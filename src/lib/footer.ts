import { axiosInstance } from '@/components/axios/axiosInstance'



export const getFooter = async()=>{
try{
    const response = await axiosInstance.get('/CommonApi/getfooteritems')
   return response
}
catch(err){
    console.log(err)
}
}