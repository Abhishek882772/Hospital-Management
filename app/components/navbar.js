"use client"
import React, { use, useState } from 'react'
import { useRouter } from 'next/navigation';

function navbar() {
  const router=useRouter();
  const signup=()=>{
    router.push(`/signup`);
  }
  const loginpage=()=>{
    router.push(`/login?handle=${text}`);
  }
  const DepartmentPage=()=>{
    router.push(`/Department`);
  }
  const chatpush=()=>{
    router.push(`/chat`);
  }
  const aboutus=()=>{
    router.push(`/about`);
  }
  const [text, setText] = useState("");
  return (
    <div className=' justify-between bg-[#001e2b] flex p-4'>
        <div className='flex mx-3.5 gap-6 font-bold text-white items-center'>
            <div className='logo cursor-pointer'><img src="./logo-design.png" alt="" width={30} className='invert-100'/></div>
            <div className='cursor-pointer'>Home</div>
            <div className='cursor-pointer' onClick={()=>aboutus()}>About Us</div>
            <div className='cursor-pointer' onClick={()=>DepartmentPage()}>Department</div>
            <div className='cursor-pointer' onClick={()=>chatpush()}>Contact</div>
        </div>
        <div className='flex items-center'>
            <input value={text} onChange={(e)=>setText(e.target.value)} className='w-[180px] bg-gray-200 rounded-[3px] font-bold p-2' placeholder='Search Here' type="text" />
            <button className='h-[39px] cursor-pointer m-1 rounded-[3px] w-[35px] bg-[#0e2c38]'>🔍</button>
        </div>
        <div className='flex gap-3'>
            <button onClick={()=>loginpage()} className='p-2 w-[100px] cursor-pointer text-white font-bold rounded-xl bg-[#0e2c38]'>Login</button>
            <button onClick={()=>signup()} className='p-2 w-[100px] cursor-pointer text-white font-bold rounded-xl bg-[#0e2c38]'>Sign Up</button>
        </div>
    </div>
  )
}

export default navbar
