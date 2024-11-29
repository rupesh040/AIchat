import React, { useState } from 'react'
import { Friends } from '../components/Friends'
import { useNavigate } from 'react-router-dom'
import { useAuthStore } from '../store/useAuthStore'
import ChatArea from '../components/ChatArea'


const Message = () => {
  const {isLogout , logout , authUser} = useAuthStore();
   const navigate = useNavigate();
  const [profile, setProfile] = useState(true)
  const [edit, setEdit] = useState(true)
  const [status, setStatus] = useState(true)
  return (
    <div className='w-[100%] h-screen bg-zinc-300 flex  overflow-hidden ' onClick={() => setProfile(true)}>
      <div className="w-5 -rotate-45 h-44 bg-zinc-500 bg-opacity-60 blur-lg  absolute top-20 left-0 z-0"></div>
      <div className="w-20 -rotate-45 h-44 bg-zinc-500 bg-opacity-10 blur-lg  absolute top-[50%] left-0 "></div>
      <div className="w-20 -rotate-45 h-44 bg-zinc-400 bg-opacity-10 blur-lg  absolute top-[80%] left-0 "></div>
      <div className="w-14 h-full max-[800px]:max-w-96  bg-black border-r-2 border-zinc-900 flex flex-col pt-24 items-center justify-between pb-5 max-[800px]:flex-row max-[800px]:fixed max-[800px]:bg-zinc-900 max-[800px]:bottom-5 max-[800px]:right-0 max-[800px]:rounded-xl max-[800px]:left-0 max-[800px]:z-50 max-[800px]:h-14   max-[800px]:py-5 max-[800px]:px-3 max-[800px]:w-[90%] max-[800px]:mx-auto max-[800px]:border-[1px] max-[800px]:overflow-hidden  max-[800px]:hidden">
        <div className="w-10 h-10 bg-white bg-opacity-40 absolute top-0 left-0 blur-2xl"></div>
        <div className="w-20 h-20 max-[800px]:hidden bg-red-500 bg-opacity-20 blur-xl absolute top-0 left-0"></div>
        <div className="flex flex-col gap-3 max-[800px]:flex-row max-[800px]:justify-between max-[800px]:w-full ">
          <i className={`ri-chat-1-fill text-2xl   hover:bg-zinc-300  ${status  ? "bg-white border-zinc-700 text-black" : "bg-transparent border-transparent text-zinc-600"} cursor-pointer  border-[1px]  px-2 py-1 rounded-xl z-10`} onClick={()=>setStatus(true)}></i>
          <i className={`ri-apps-2-ai-fill  ${!status ? "bg-white border-zinc-700 text-black" : "bg-transparent border-transparent text-zinc-600"} text-2xl text-zinc-600 hover:bg-zinc-300  hover:text-black cursor-pointer z-10   px-2 py-1 rounded-xl`}  onClick={() => navigate('/story')}></i>
          <i className="ri-translate-ai-2 text-2xl text-zinc-600 hover:bg-zinc-300 cursor-pointer  hover:text-black  px-2 py-1 rounded-xl"></i>
          <i className={`ri-settings-4-fill min-[800px]:hidden ${!profile ? "bg-zinc-300 text-black" : 'text-white'} text-2xl   hover:bg-zinc-300 hover:text-black  cursor-pointer  z-10  px-2 py-1 rounded-xl`} onClick={(e) => { setProfile(!profile); e.stopPropagation(); }}></i>
          <hr className='max-[800px]:hidden' />
        </div>
        <i className={`ri-settings-4-fill max-[800px]:hidden  ${!profile ? "bg-zinc-300 text-black" : 'text-white'} text-2xl   hover:bg-zinc-300 hover:text-black  cursor-pointer  z-10  px-2 py-1 rounded-xl`} onClick={(e) => { setProfile(!profile); e.stopPropagation(); }}></i>
      </div>
      <div className={`max-[800px]:hidden w-[30%] max-[800px]:w-full `}>
        <Friends /></div>
         <ChatArea/>
      <div className={`${profile ? "hidden" : "flex"} w-72 h-96 border-[1px] border-zinc-800 bg-gradient-to-br from-[#18181b] to-black overflow-hidden backdrop-blur-lg shadow-2xl absolute bottom-16 min-[800px]:left-10 rounded-2xl bg-opacity-90 items-center flex-col max-[800px]:bottom-20 max-[800px]:right-0 z-30 mr-10 transform hover:scale-[1.02] transition-all duration-300`} onClick={(e) => e.stopPropagation()}>
        {/* Profile Image Container */}
        <div className="w-full h-[50%] bg-gradient-to-br from-purple-500/20 to-pink-500/20 relative flex justify-center items-end pb-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNw1fDzeYGH2BFi4ufuCv2EORvqxoEMDdoA&s')] opacity-10 blur-sm bg-cover"></div>
          <div className="w-28 h-28 rounded-full p-1 bg-gradient-to-br from-purple-500 to-pink-500 relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNw1fDzeYGH2BFi4ufuCv2EORvqxoEMDdoA&s" className="w-full h-full rounded-full object-cover border-2 border-black" alt="Profile" />
            <div className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-black"></div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="w-full px-6 py-4 flex flex-col items-center gap-2">
          <h1 className="text-xl font-black bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">{authUser.fullname}</h1>
          <p className="text-zinc-400 text-sm flex items-center gap-2">
            <i className="ri-mail-line"></i>
            {authUser.email}
          </p>
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent my-3"></div>
        </div>

        {/* Action Buttons */}
        <div className="w-full px-6 flex gap-2 z-10">
          <button className={`flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${edit ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-300" : "bg-purple-500/20 text-purple-500"}`} onClick={() => setEdit(false)}>
            {edit ? (
              <>
                <i className="ri-edit-line"></i>
                <span>Edit</span>
              </>
            ) : (
              <svg className="w-5 h-5 animate-spin" viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
              </svg>
            )}
          </button>
          <button className={`flex-1 py-2.5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${!isLogout ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-300" : "bg-pink-500/20 text-pink-500"}`} onClick={() => {logout() }} >
            {!isLogout ? (
              <>
                <i className="ri-logout-box-r-line"></i>
                <span>Logout</span>
              </>
            ) : (
              <svg className="w-5 h-5 animate-spin" viewBox="25 25 50 50">
                <circle r="20" cy="50" cx="50"></circle>
              </svg>
            )}
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="w-32 h-32 rounded-full bg-purple-500/10 blur-2xl absolute -top-10 -right-10"></div>
        <div className="w-32 h-32 rounded-full bg-pink-500/10 blur-2xl absolute -bottom-10 -left-10"></div>
      </div>
    </div>
  )
}

export default Message