"use client";
import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: form.email, password: form.password }),
      });

      const data = await res.json();

      if (data.success) {
        alert("Login Successful");
        window.location.href = "/";
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <video autoPlay muted loop className="video-bg">
        <source
          src="https://cdn.pixabay.com/video/2024/03/04/202935-919288918_large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="bg-black opacity-85 w-96 p-8 rounded-2xl shadow-xl">
        <a href="/" className="logo cursor-pointer filter invert">
          <img src="./logo-design.png" alt="" width={30} />
        </a>

        <div className="text-center mb-6">
          <img
            src="https://cdn-icons-png.flaticon.com/512/3209/3209265.png"
            className="w-16 mx-auto"
          />
          <h2 className="text-2xl font-bold text-gray-400">
            Hospital Management System
          </h2>
          <p className="text-gray-600 text-sm mt-1">Login to continue</p>
        </div>

        <form  onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
             Email
            </label>
            <input
              name="email"
              type="text"
              autoComplete="email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-1">
              Password
            </label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
              placeholder="Enter your password"
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-xl font-semibold hover:bg-gray-700 transition"
          >
            Login
          </button>

          <div className="flex justify-between mt-4 text-sm">
            <a className="text-blue-600 hover:underline" href="#">
              Forgot Password?
            </a>
            <a className="text-blue-600 hover:underline" href="/signup">
              Create Account
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
