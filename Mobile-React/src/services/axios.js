import axios from "axios";

const API = axios.create({
    // baseURL: 'https://employee-react.onrender.com/emp',
     baseURL: 'http://localhost:2000/api',
    headers:{
        "Content-Type":"application/json"
    }
});


API.interceptors.request.use((config)=>{
    const token = localStorage.getItem('token');
    if(token){
        config.headers.Authorization = token
    }
    return config;
})



export default API;