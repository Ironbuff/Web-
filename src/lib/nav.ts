import axios from 'axios'


const api = process.env.NEXT_PUBLIC_API
export  const getnavitems = async()=>{

   try{
      const response = await axios.get(`${api}/api/CommonApi/getnavbaritems`)
      return response;
   }
   catch(err){
    console.log(err)
   }
}

export const getcarouselimg = async()=