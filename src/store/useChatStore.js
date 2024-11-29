import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { useAuthStore } from "./useAuthStore";



export const useChatStore = create((set, get) => ({
    messages: [],
    AImessages:[],
    users: [],
    selectedUser: null,
    toast:[],

    getUsers: async () => {
        try {
            const res = await axiosInstance.get("/message/users");
            set({ users: res.data });
        }
        catch {

        }
    },
    getMessages: async (userId) => {
        try {
            const res = await axiosInstance.get(`/message/${userId}`);
            set({ messages: res.data });
            console.log(res.data);
        }
        catch {

        }
    },


    setToast: async (itemId) => {
        set((state) => ({
            toast:state.toast.filter((item) => item._id !== itemId),
        }))
    },


    setSelectedUser: async (selectedUser) => {
        set({ selectedUser })
    },

    sendMessage: async (messageData) => {
        const { selectedUser, messages } = get();
        try {
            const res = await axiosInstance.post(`/message/send/${selectedUser._id}`, messageData);
            set({ messages: [...messages, res.data] });
        }
        catch {

        }
    },


    subscribeToMessage: (id) => {
        const { selectedUser } = get()        
        if (!selectedUser  ) return;
        const socket = useAuthStore.getState().socket;


        socket.on("newMessage", (newMessage) => {
            const isMessageSentFromSelecetedUSer = newMessage.senderId === selectedUser._id;
            if (!isMessageSentFromSelecetedUSer) return  set({ toast: [...get().toast, newMessage] });
            set({ messages: [...get().messages, newMessage] });
        })
    },

    unsubscribeFromMessage: () => { 
        const socket = useAuthStore.getState().socket;
        socket.off("newMessage");
    },
}))