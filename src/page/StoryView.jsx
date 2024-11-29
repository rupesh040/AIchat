import React, { useState } from 'react'
import Story from '../components/Story'
import AddStory from '../components/AddStory'
import { useNavigate } from 'react-router-dom'




const StoryView = () => {
  const navigate = useNavigate();
  
    const [profile, setProfile] = useState(true)
  const [loading, setLoading] = useState(true)
  const [edit, setEdit] = useState(true)
  const [status, setStatus] = useState(true)
  const close = () => {
    setStatus(!status)
  }
  return (
    <div className='w-[100%] h-screen bg-zinc-300 flex  overflow-hidden ' onClick={() => setProfile(true)}>
      <div className="w-5 -rotate-45 h-44 bg-zinc-500 bg-opacity-60 blur-lg  absolute top-20 left-0 z-0"></div>
      <div className="w-20 -rotate-45 h-44 bg-zinc-500 bg-opacity-10 blur-lg  absolute top-[50%] left-0 "></div>
      <div className="w-20 -rotate-45 h-44 bg-zinc-400 bg-opacity-10 blur-lg  absolute top-[80%] left-0 "></div>
      <div className="w-14 h-full max-[800px]:max-w-96  bg-black border-r-2 border-zinc-900 flex flex-col pt-24 items-center justify-between pb-5 max-[800px]:flex-row max-[800px]:fixed max-[800px]:bg-zinc-900 max-[800px]:bottom-5 max-[800px]:right-0 max-[800px]:rounded-xl max-[800px]:left-0 max-[800px]:z-50 max-[800px]:h-14   max-[800px]:py-5 max-[800px]:px-3 max-[800px]:w-[90%] max-[800px]:mx-auto max-[800px]:border-[1px] max-[800px]:overflow-hidden">
        <div className="w-10 h-10 bg-white bg-opacity-40 absolute top-0 left-0 blur-2xl"></div>
        <div className="w-20 h-20 max-[800px]:hidden bg-red-500 bg-opacity-20 blur-xl absolute top-0 left-0"></div>
        <div className="flex flex-col gap-3 max-[800px]:flex-row max-[800px]:justify-between max-[800px]:w-full">
          <i className={`ri-chat-1-fill text-2xl   hover:bg-zinc-300   cursor-pointer  text-zinc-600 hover:text-black  px-2 py-1 rounded-xl z-10`} onClick={() => navigate('/')}></i>
          <i className={`ri-apps-2-ai-fill bg-white border-zinc-700 text-black text-2xl  hover:bg-zinc-300  hover:text-black cursor-pointer z-10   px-2 py-1 rounded-xl`}></i>
          <i className="ri-translate-ai-2 text-2xl text-zinc-600 hover:bg-zinc-300 cursor-pointer  hover:text-black  px-2 py-1 rounded-xl"></i>
          <i className={`ri-settings-4-fill min-[800px]:hidden ${!profile ? "bg-zinc-300 text-black" : 'text-white'} text-2xl   hover:bg-zinc-300 hover:text-black  cursor-pointer  z-10  px-2 py-1 rounded-xl`} onClick={(e) => { setProfile(!profile); e.stopPropagation(); }}></i>
          <hr className='max-[800px]:hidden' />
        </div>
        <i className={`ri-settings-4-fill max-[800px]:hidden  ${!profile ? "bg-zinc-300 text-black" : 'text-white'} text-2xl   hover:bg-zinc-300 hover:text-black  cursor-pointer  z-10  px-2 py-1 rounded-xl`} onClick={(e) => { setProfile(!profile); e.stopPropagation(); }}></i>
      </div>
      <div className={`max-[800px]:absolute top-0 ${!status ? "z-40 " : " "} left-0 w-[30%] max-[800px]:w-full `}>
        <AddStory close={close} /></div>

         <Story close={close}/>

      <div className={`${profile ? "hidden" : "flex"} w-72  h-80 border-[1px] border-zinc-800 bg-[#18181b] overflow-hidden  backdrop-blur-lg shadow-2xl absolute bottom-16 min-[800px]:left-10 rounded-2xl p-5 bg-opacity-90  items-center flex-col max-[800px]:bottom-20 max-[800px]:right-0  z-30 mr-10 `} onClick={(e) => e.stopPropagation()}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuNw1fDzeYGH2BFi4ufuCv2EORvqxoEMDdoA&s" className='w-32 h-32 bg-black  rounded-full border-4' alt="" />
        <h1 className='text-white font-black text-xl tracking-wide mt-2'>Rupesh Kumar</h1>
        <p className='text-white'>rupeshkw@gmail.com</p>
        <div className="w-[90%] h-12  mt-5 flex flex-row gap-1">
          <div className={`w-[50%] h-full ${edit ? "bg-zinc-700 text-zinc-200" : "bg-[#c9571922] text-[#c95719]"} rounded-l-2xl cursor-pointer flex justify-center items-center  gap-1`} onClick={() => setEdit(false)}>{edit ? <i className="ri-edit-line text-zinc-200"></i> : <svg viewBox="25 25 50 50">
            <circle r="20" cy="50" cx="50"></circle>
          </svg>}  Edit</div>
          <div className={`w-[50%] h-full ${loading ? "bg-zinc-700 text-zinc-200" : "bg-[#c9571922] text-[#c95719]"} gap-1 rounded-r-2xl cursor-pointer flex justify-center items-center `} onClick={() => setLoading(false)}> {loading ? <i className="ri-logout-box-r-line text-zinc-200 "></i> :
            <svg viewBox="25 25 50 50">
              <circle r="20" cy="50" cx="50"></circle>
            </svg>} Logout  </div>
        </div>
        <div className="w-14 -rotate-45 h-44 bg-zinc-800 bg-opacity-60 blur-lg  absolute -top-5 left-0 "></div>
        <div className="w-5 -rotate-45 h-44 bg-zinc-800 bg-opacity-60 blur-lg  absolute top-20 left-0 "></div>
      </div>
    </div>
  )
}

export default StoryView