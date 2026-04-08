"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function DepartmentPage() {
  const [users, setusers] = useState([]);
  const router = useRouter();

  const handleClick = (person) => {
    alert(`Chat with ${person.name} for appointment booking...`);
    let name = person.name;
  if (name.includes(" ")) { name = name.replaceAll(" ", "-");} 
  else name = name;

  router.push(`/chat?name=${name}`);
};
  useEffect(() => {
  async function loaddata() {

    const res = await fetch("/api/users");

    const data = await res.json();

    if (data.success) {
      setusers(data.users);
    }
  }
  loaddata();
}, []);

  

  const departments = [
    {
      name: "Cardiology",
      staff: [
        {
          name: "Dr. Arjun Mehta",
          position: "Senior Cardiologist",
          degree: "MD (Cardiology), MBBS",
          experience: "15 years",
          image: "https://cdn-icons-png.flaticon.com/512/3774/3774299.png",
        },
        {
          name: "Dr. Priya Nandan",
          position: "Heart Specialist",
          degree: "DM Cardiology",
          experience: "10 years",
          image: "https://cdn-icons-png.flaticon.com/512/7922/7922182.png",
        },
      ],
    },

    {
      name: "Neurology",
      staff: [
        {
          name: "Dr. Raghav Singh",
          position: "Neurosurgeon",
          degree: "M.Ch Neurosurgery",
          experience: "12 years",
          image: "https://cdn-icons-png.flaticon.com/512/4202/4202849.png",
        },
        {
          name: "Dr. Neha Verma",
          position: "Neurologist",
          degree: "MD Neurology",
          experience: "7 years",
          image: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
        },
      ],
    },

    {
      name: "Orthopedics",
      staff: [
        {
          name: "Dr. Samar Thakur",
          position: "Orthopedic Surgeon",
          degree: "MS Orthopedics",
          experience: "9 years",
          image: "https://cdn-icons-png.flaticon.com/512/706/706164.png",
        },
        {
          name: "Dr. Ananya Rao",
          position: "Physiotherapist",
          degree: "MPT, BPT",
          experience: "6 years",
          image: "https://cdn-icons-png.flaticon.com/512/2920/2920244.png",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#062938] py-14 px-6">
        
      <a href='/' className='logo cursor-pointer invert-100'><img src="./logo-design.png" alt="" width={30} /></a>
      <h1 className="text-3xl md:text-4xl font-bold text-center font-sans text-white  mb-12">
        Hospital <span className="underline underline-offset-4 decoration-[#00ed64]">Departments</span> & Medical Staff
      </h1>
      <div className="max-w-6xl mx-auto space-y-14 ">
        {departments.map((dept, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold text-gray-300 mb-6 underline underline-offset-4 decoration-[#00ed64]">
              {dept.name}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
              {dept.staff.map((person, i) => (
                <div
                  key={i} 
                  className="bg-[#091f2a] rounded-xl border shadow-md p-6 flex gap-5 hover:shadow-lg transition hover:scale-105 duration-300"
                >
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-20 h-20 rounded-full bg-blue-100 p-3"
                  />

                  <div>
                    <h3 className="text-lg text-white font-bold">{person.name}</h3>
                    <p className="text-blue-700 text-sm">{person.position}</p>

                    <p className="text-sm text-gray-100 mt-1">
                      <span className="font-semibold">Degree:</span>{" "}
                      {person.degree}
                    </p>

                    <p className="text-sm text-gray-100">
                      <span className="font-semibold">Experience:</span>{" "}
                      {person.experience}
                    </p>

                    <button onClick={() => handleClick(person)} className="mt-3 bg-blue-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition">
                      Contact And Book Appointment
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="flex justify-center bg-[#00ff6a] h-0.5 rounded-2xl my-9 w-[98vw]"></div>
      <div className="text-white font-bold text-2xl">Newely Registered Members</div>
      {users.length===0 && <p>...Loading</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {users.map((user, i) => (
          <div
                  key={i} 
                  className="bg-[#091f2a] rounded-xl border shadow-md p-6 text-white flex flex-col gap-2 hover:shadow-lg transition hover:scale-105 duration-300"
                >
            <h2 className="font-bold text-lg m-auto mb-7"> {user.role}</h2>
            <p>Name: {user.name}</p>
            <p className="text-blue-700">Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>Gender: {user.gender}</p>
            </div>
        ))}
        </div>
    </div>
  );
}
