import axios from "axios"
import {create} from "zustand"
import { axiosInstance } from "../lib/axios"
import {io} from "socket.io-client"

const BASE_URL = "http://localhost:5001"


export const useAuthStore = create((set, get) => ({
    authUser:null,
    isSigningUp:false,
    isLoggingIng:false,
    isUpdatingProfile:false,
    isLogout:false,
    isCheckingAuth:true,
    onlineUsers:[],
    socket:null,
    checkAuth: async() => {
        try {
            const res = await axiosInstance.get("/auth/check");
            set({authUser:res.data})
            get().connectSocket();
        } catch (error) {
            set({authUser:null})
        }
        finally{
            set({isCheckingAuth:false});
        }
    },

    signup: async (data) => {
        // set({isSigningUp:true});
        try {
           const res = await axiosInstance.post("/auth/signup", data)
            set ({authUser: res.data});
            get().connectSocket();
            console.log(res.data)
        } catch (error) {
            console.log(error);
            set({authUser:null})
        }
        finally{
            set({isSigningUp:false});
        }
    },
    login: async (data) => {
        try {
           const res = await axiosInstance.post("/auth/login", data)
            set ({authUser: res.data});
            get().connectSocket();
            console.log(res.data)
        } catch (error) {
            console.log(error);
            set({authUser:null})
        }
        finally{
            set({isLoggingIng:false});
        }
    },


    logout: async() => {
        set({isLogout:true})
        try {
            const res = await axiosInstance.post("/auth/logout")
            set({authUser:null})
            get().disconnectSocket();
        } catch (error) {
            console.log("Internal server error")
            set({isLogout:false})
        }
        finally{
            set({isLogout:false});
        }
    },

    updateProfile: async(profilePic) => {
        set({isUpdatingProfile:true})
        try {
            const res = await axiosInstance.post("/auth/update-profile" , profilePic )
            if (res.data.success) {
                alert("Profile updated successfully")
                set({isUpdatingProfile:false})
            }
            set({isUpdatingProfile:false})
        } catch (error) {
            console.log(error)
            set({isUpdatingProfile:false})
        }
        finally{
            set({isUpdatingProfile:false})
        }
    },


    connectSocket: () => {
        const {authUser} = get();
        if (!authUser || get().socket?.connected) return console.log("Internal server error");
        const socket = io("http://localhost:5001" , {
          query:{
                userId:authUser._id,
            }}
        );
        socket.connect();
        set({socket:socket});
        socket.on("getOnlineUsers", (userIds) => {
                set({onlineUsers: userIds})
        })
    },
    disconnectSocket: () => {
        if(get().socket?.connected) get().socket.disconnect();
    },

}))