"use client";
import { useEffect, useState } from "react";
import { socket } from "@/lib/socket-client/socket";

export default function ChatPage() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.on("receive-message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive-message");
  }, []);

  const sendMessage = () => {
    socket.emit("send-message", {
      sender: "Doctor",
      message: msg,
    });
    setMsg("");
  };

  return (

    <div className="chat-wrapper flex justify-center items-center min-h-screen p-4 relative">
      {/* 🔹 Video Background */}
      <video autoPlay muted loop className="video-bg">
        <source
          src="https://cdn.pixabay.com/video/2024/03/04/202935-919288918_large.mp4"
          type="video/mp4"
        />
      </video>
    <a href="/" className="logo absolute top-4 cursor-pointer filter invert">
          <img src="./logo-design.png" alt="" width={30} />
        </a>
  <div className="w-full opacity-94 max-w-3xl bg-white rounded-2xl shadow-2xl flex flex-col">

    {/* Header */}
    <div className=" bg-[#001e2b] opacity-85 text-white p-5 rounded-t-2xl">
      <h2 className="text-2xl font-bold">Doctor–Patient Chat</h2>
      <p className="text-sm opacity-90">Live consultation</p>
    </div>

    {/* Chat Messages */}
    <div className="flex-1 p-6 overflow-y-auto bg-gray-50 space-y-4">
      {chat.map((c, i) => (
        <div
          key={i}
          className={`flex ${
            c.sender === "Doctor" ? "justify-start" : "justify-end"
          }`}
        >
          <div
            className={`max-w-[70%] px-4 py-2 rounded-xl shadow ${
              c.sender === "Doctor"
                ? "bg-blue-100 text-blue-900 rounded-bl-none"
                : "bg-green-100 text-green-900 rounded-br-none"
            }`}
          >
            <p className="text-xs font-semibold mb-1">Message</p>
            <p className="text-sm">{c.message}</p>
          </div>
        </div>
      ))}
    </div>

    {/* Input Area */}
    <div className="p-4 border-t flex gap-3 items-center bg-white rounded-b-2xl">
      <input
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={sendMessage}
        className="bg-[#001e2b] text-white px-6 py-2 rounded-full font-semibold transition"
      >
        Send
      </button>
    </div>

  </div>
</div>

  );
}
