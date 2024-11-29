import axios from "axios";

export const axiosInstance = axios.create({
     baseURL: "https://cha-tbackend.vercel.app/api",
     withCredentials:true,
     }
);