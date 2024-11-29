import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import 'remixicon/fonts/remixicon.css'
import axois from 'axios';
import { useChatStore } from "../store/useChatStore";
import { useAuthStore } from '../store/useAuthStore';


export const Friends = () => {
const { getUsers , users, setSelectedUser ,   unsubscribeFromMessage} = useChatStore();
const {onlineUsers} = useAuthStore();
const [search,setSearch] = useState("")

  useEffect(() => {
    getUsers();
  },[getUsers])




  return (
    <div className='w-full max-[800px]:w-full max-[800px]:pb-20 h-screen  border-r-[1px] border-zinc-800 flex flex-col  overflow-y-scroll scroll px-2 bg-black relative '>
        <div className="p-2 sticky top-0 mb-2 w-full bg-black flex flex-col z-10">
         <div className="w-12 -rotate-45 h-28 bg-zinc-700 bg-opacity-60 blur-lg  absolute -top-5 left-0 "></div>
            <h1 className='text-xl text-zinc-400 font-black tracking-wide pb-2 z-10'>Chats</h1>
            <div className="w-full px-3 border-[1px] bg-zinc-900  border-zinc-800 rounded-md  outline-none text-black flex items-center py-2 "><i className="ri-search-2-line text-white"></i>
             <input type="text" className='w-full  px-3 bg-transparent  outline-none text-white border-l-[1px] border-zinc-300 ml-2' placeholder='Search Your Friend' value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
       </div>
       {users  ? users.filter((items) => items.fullname.toLowerCase().includes(search.toLowerCase())).map((item) =>  {return <> 
       <NavLink to={`/msg/${item._id}`} key={item._id} onClick={() => {setSelectedUser(item); unsubscribeFromMessage(); }}  className="w-[100%]  mx-auto min-h-16 hover:bg-[#18181b] border-b-[1px] border-zinc-900 cursor-pointer flex flex-row gap-2  items-center px-3 rounded-xl relative">  <img src={item.profilePic} className="w-10 h-10 rounded-full bg-gray-400" />  
       <span className={`${onlineUsers.includes(item._id) ? "visible" : "hidden"} w-3 h-3 rounded-full bg-green-500 absolute bottom-3 left-10 border-2 border-black`}></span>
        <h1 className='text-zinc-400 flex flex-col'> <span className='text-lg capitalize translate-y-[3px]'>{item.fullname}</span> <span className={`${onlineUsers.includes(item._id) ? "text-green-500" : "text-zinc-500"} text-sm  translate-y-0  w-[80%]`}>{onlineUsers.includes(item._id) ? "online" : "offline"}</span> </h1></NavLink> 
        </> }) : null }
      <div className="w-full min-h-16 border-b-[1px] border-zinc-900  hover:bg-zinc-900/40 rounded-xl cursor-pointer flex items-center flex-row px-3 relative group overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute -left-10 top-0 h-full w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent transform rotate-12 translate-x-[-130%] group-hover:translate-x-[600%] transition-transform duration-1000"></div>
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 p-[2px] relative">
          <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
            <i className="ri-robot-2-fill text-lg bg-gradient-to-br from-purple-500 to-cyan-500 bg-clip-text text-transparent"></i>
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-black"></div>
        </div>
        <div className="flex flex-col ml-3">
          <h1 className='text-lg font-black bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent'>AI Coming Soon</h1>
          <p className="text-xs text-zinc-500">Always online to help you</p>
        </div>
        <div className="ml-auto flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-xs text-zinc-600">Active</span>
        </div>
      </div>
    
    </div>
  )
}
