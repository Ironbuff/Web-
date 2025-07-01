import { axiosInstance } from '@/components/axios/axiosInstance';


export const login = async(formdata:FormData)=>{

    const response = await axiosInstance.post(`/Auth/Signin`,formdata,{
        headers:{
            'Content-Type':'multipart/formData'
        }
    })
    return response
}


export const register = async(formdata:FormData)=>{
    const response = await axiosInstance.post(`/Auth/Signup`,formdata,{
        headers:{
            'Content-Type':'multipart/formData'
        }
    })
    return response
}


export const refreshAccessToken = async()=>{
    try{
    const refreshToken = localStorage.getItem("refreshToken");
    const accessToken = localStorage.getItem('token')

    if (!refreshToken) {
        throw new Error("No refresh token available.");
    }

    const data = {
        refreshToken,
        accessToken,
    }

    const response = await axiosInstance.post(`/Auth/refreshsignin`, data)
    if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("acessTokenExpiresIn", response.data.tokenExpires);
        localStorage.setItem("refreshToken",response.data.refreshToken)
        return response.data.token;
    } else {
        throw new Error("Failed to refresh token.");
    }
}
catch(err){
    console.log(err)
}
}

