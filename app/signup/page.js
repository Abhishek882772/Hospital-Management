"use client";
import React, { useState } from "react";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    gender: "",
    dob: "",
    role: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit=async(e)=>{
    e.preventDefault();

    const res=await fetch('/api/signup',{
      method:'POST',
      headers:{ 'Content-Type':'application/json' },
      body:JSON.stringify(form)
    });
    const data=await res.json();
    console.log(data);
    alert(data.message);

  }

  return (
    <div className="min-h-screen bg-gradient-to-bl from-blue-100 via-blue-200 to-blue-50 flex items-center justify-center py-16">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-[450px] border border-blue-300">
      <a href='/' className='logo cursor-pointer'><img src="./logo-design.png" alt="" width={30} /></a>

        <div className="text-center mb-8">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
            className="w-20 mx-auto animate-pulse"
          />
          <h2 className="text-3xl font-bold text-blue-700 mt-3">
            Create Your Account
          </h2>
          <p className="text-gray-600 mt-1 text-sm tracking-wide">
            Join our Hospital Management System
          </p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>

          <div>
            <label className="font-semibold text-gray-700">Full Name</label>
            <input
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Email Address</label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="you@gmail.com"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Phone Number</label>
            <input
              name="phone"
              type="number"
              value={form.phone}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-blue-300 focus:ring-2 outline-none"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              value={form.gender}
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-gray-700">Date of Birth</label>
            <input
              name="dob"
              type="date"
              value={form.dob}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-blue-300 focus:ring-2 outline-none"
            />
          </div>

          <div>
            <label className="font-semibold text-gray-700">Register As</label>
            <select
              name="role"
              onChange={handleChange}
              value={form.role}
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-blue-300 focus:ring-2 outline-none"
            >
              <option value="">Select Role</option>
              <option value="Patient">Patient</option>
              <option value="Doctor">Doctor</option>
              <option value="Nurse">Nurse</option>
              <option value="Staff">Hospital Staff</option>
            </select>
          </div>

          <div>
            <label className="font-semibold text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              autoComplete="current-password"
              value={form.password}
              onChange={handleChange}
              className="w-full mt-1 p-3 rounded-xl border border-gray-300 focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="Enter a strong password"
            />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="w-4 h-4" />
            <p className="text-gray-600">
              I agree to the <span className="text-blue-700 font-semibold">Terms & Conditions</span>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-bold 
                       hover:bg-blue-700 transition transform hover:scale-[1.02]"
          >
            Create Account
          </button>

          <p className="text-center text-gray-700 text-sm mt-3">
            Already have an account?{" "}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Login Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
