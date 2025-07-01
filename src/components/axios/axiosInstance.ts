import axios from "axios";


export const axiosInstance = axios.create({
    baseURL:`${process.env.NEXT_PUBLIC_API}/api`,
    headers:{
        'Content-Type':'application/json'
    }
})


//for adding token in headers before post now we can use post method using axios instance 
axiosInstance.interceptors.request.use(
(config)=>{
    //runs before request is sent
    const token = typeof window!==undefined ? localStorage.getItem("token") : null
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }
    return config  //continued with modified config
},
(error)=>{
    Promise.reject(error)
}
)


