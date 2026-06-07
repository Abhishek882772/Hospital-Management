"use client";

import React, { useEffect, useState } from "react";
import CommonNav from "../components/Navbar1";

const Page = () => {
  const [editProfile, setEditProfile] = useState(false);

  const [data, setData] = useState({
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGGQ0Oux8NFCdwbecp6luDm5W2gc6czbaMGQ&s",
    name: "Abhishek Tripathi",
    email: "abhishek@email.com",
    phone: "+91 9876543210",
    address: "Delhi, India",
    username: "@abhishek",
    joined: "Jan 2024",
    bio: "MERN Stack Developer",
    website: "portfolio.com",
  });

  const [medicalData, setMedicalData] = useState({
    allergies: "",
    medications: "",
    chronicConditions: "",
    pastSurgeries: "",
  });

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const res = await fetch("/api/profile");

      if (!res.ok) return;

      const profile = await res.json();

      if (profile) {
        setData({
          image: profile.image || data.image,
          name: profile.name || "",
          email: profile.email || "",
          phone: profile.phone || "",
          address: profile.address || "",
          username: profile.username || "",
          joined: profile.joined || "",
          bio: profile.bio || "",
          website: profile.website || "",
        });

        setMedicalData(
          profile.medicalData || {
            allergies: "",
            medications: "",
            chronicConditions: "",
            pastSurgeries: "",
          }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleEdit = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleMedicalEdit = (e) => {
    setMedicalData({
      ...medicalData,
      [e.target.name]: e.target.value,
    });
  };

  const saveProfile = async () => {
    try {
      const res = await fetch("/api/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          medicalData,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        alert("Profile updated successfully");
        setEditProfile(false);
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-300 to-black-600">
        <CommonNav className="bg-white/20 mb-5"/>

      <div className="flex gap-10 flex-wrap justify-center mt-5">
        {/* Profile Card */}
        <div className="w-[380px] p-6 rounded-2xl bg-white/20 mb-5 backdrop-blur-lg shadow-xl flex flex-col items-center gap-4">
          <div className="h-20 w-20 rounded-full bg-amber-100 border-4 border-white overflow-hidden">
            <img
              src={data.image || "/default.png"}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>

          {editProfile && (
            <input
              name="image"
              value={data.image}
              onChange={handleEdit}
              placeholder="Image URL"
              className="bg-transparent border-b text-white text-center outline-none text-sm"
            />
          )}

          {editProfile ? (
            <input
              name="name"
              value={data.name}
              onChange={handleEdit}
              className="bg-transparent border-b text-gray-600 text-center outline-none"
            />
          ) : (
            <h2 className="text-xl font-semibold text-gray-600">
              {data.name}
            </h2>
          )}

          {editProfile ? (
            <input
              name="bio"
              value={data.bio}
              onChange={handleEdit}
              className="bg-transparent border-b text-white text-center outline-none"
            />
          ) : (
            <p className="text-sm text-white/80">{data.bio}</p>
          )}

          <div className="w-full mt-2 flex flex-col gap-3 text-white text-sm">
            {Object.entries(data)
              .filter(
                ([k]) =>
                  !["name", "bio", "image", "joined"].includes(k)
              )
              .map(([key, val]) => (
                <div
                  key={key}
                  className="flex justify-between items-center"
                >
                  <span className="capitalize">{key}</span>

                  {editProfile ? (
                    <input
                      name={key}
                      value={val}
                      onChange={handleEdit}
                      className="bg-transparent border-b outline-none text-right w-[60%]"
                    />
                  ) : (
                    <span>{val}</span>
                  )}
                </div>
              ))}

            <div className="flex justify-between">
              <span>Joined</span>
              <span>{data.joined}</span>
            </div>
          </div>

          <button
            onClick={() => {
              if (editProfile) {
                saveProfile();
              } else {
                setEditProfile(true);
              }
            }}
            className="mt-3 hover:cursor-pointer hover:bg-amber-600 hover:text-white hover:scale-105 px-4 py-2 rounded-lg bg-white text-amber-600 font-medium transition"
          >
            {editProfile ? "Save" : "Edit Profile"}
          </button>
        </div>

        {/* Medical Records Card */}
        <div className="w-[380px] p-6 rounded-2xl bg-white/20 backdrop-blur-lg shadow-xl flex flex-col gap-4">
          <h2 className="font-bold text-xl text-gray-600">
            Patient Medical Records
          </h2>

          {[
            {
              label: "Allergies",
              name: "allergies",
            },
            {
              label: "Medications",
              name: "medications",
            },
            {
              label: "Chronic Conditions",
              name: "chronicConditions",
            },
            {
              label: "Past Surgeries",
              name: "pastSurgeries",
            },
          ].map((field) => (
            <div key={field.name}>
              <p className="font-semibold text-gray-600 mb-1">
                {field.label}
              </p>

              {editProfile ? (
                <input
                  type="text"
                  name={field.name}
                  value={medicalData[field.name]}
                  onChange={handleMedicalEdit}
                  className="bg-transparent border-b text-white outline-none text-sm w-full"
                />
              ) : (
                <p className="text-white text-sm">
                  {medicalData[field.name] || "Not Added"}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;