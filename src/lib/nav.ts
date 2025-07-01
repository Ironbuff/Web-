import { axiosInstance } from '@/components/axios/axiosInstance';

export  const getnavitems = async()=>{

   try{
      const response = await axiosInstance.get('/CommonApi/getnavbaritems')
      return response;
   }
   catch(err){
    console.log(err)
   }
}

export const getcarouselimg = async() => {
   try{

      const response = await axiosInstance.get('/ContentApi/getcontent/Carousel')
      return response
   }
   catch(err){
      console.log(err)
   }
}