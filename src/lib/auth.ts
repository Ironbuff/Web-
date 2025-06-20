import axios from 'axios'

const api = process.env.NEXT_PUBLIC_API

export const login = async(formdata:FormData)=>{

    const response = await axios.post(`${api}/api/Auth/Signin`,formdata,{
        headers:{
            'Content-Type':'multipart/formData'
        }
    })
    return response
}


export const register = async(formdata:FormData)=>{
    const response = await axios.post(`${api}/api/Auth/Signup`,formdata,{
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

    const response = await axios.post(`${api}/api/AuthApi/refreshToken`, data, {
        headers: { "Content-Type": "application/json" },
    });

    if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("acessTokenExpiresIn", response.data.accessTokenExpires);
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

