"use client"
import React, { use, useState } from 'react'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

function Navbar1() {
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
  const profilepage=()=>{
    router.push(`/profile`);
  }
  const [text, setText] = useState("");
  return (
    <div className=' justify-between bg-white/20 flex p-4 rounded-2xl items-center w-[90%] mb-5'>
        <div className='flex mx-3.5 gap-6 font-bold text-white items-center'>
            <Link className='logo cursor-pointer' href={"/"} ><img src="./logo-design.png" alt="" width={30} className='invert-100'/></Link>
            <div className='cursor-pointer' onClick={()=>profilepage()}>Profile</div>
            <div className='cursor-pointer' onClick={()=>aboutus()}>About Us</div>
            <div className='cursor-pointer' onClick={()=>DepartmentPage()}>Department</div>
            <div className='cursor-pointer' onClick={()=>chatpush()}>Contact</div>
        </div>
        <div className='flex gap-3'>
            <button onClick={()=>loginpage()} className='p-2 w-[100px] cursor-pointer text-white font-bold rounded-xl bg-[#0e2c38]'>Login</button>
            <button onClick={()=>signup()} className='p-2 w-[100px] cursor-pointer text-white font-bold rounded-xl bg-[#0e2c38]'>Sign Up</button>
        </div>
    </div>
  )
}

export default Navbar1
