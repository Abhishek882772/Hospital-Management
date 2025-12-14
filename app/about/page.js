import React from 'react'

const about = () => {
  return (
    <div>
        <video autoPlay muted loop className="video-bg">
        <source
          src="https://cdn.pixabay.com/video/2024/03/04/202935-919288918_large.mp4"
          type="video/mp4"
        />
      </video>
      <div className="p-8 bg-black opacity-80 text-white rounded-xl shadow-lg max-w-4xl mx-auto my-10">
        <a href="/" className="logo p-10 cursor-pointer filter invert">
          <img src="./logo-design.png" alt="" width={30} />
        </a>
  <h1 className="text-3xl font-bold text-gray-300 mb-4">About Our Hospital Management System</h1>
  
  <p className=" mb-4">
    Our Hospital Management System (HMS) is a comprehensive digital solution designed to streamline healthcare operations. It enables hospitals, clinics, and healthcare providers to manage patients, doctors, appointments, and medical records efficiently in a secure and user-friendly environment.
  </p>
  
  <p className=" mb-4">
    Key features include:
  </p>
  
  <ul className="list-disc list-inside  mb-4">
    <li>Patient Registration and History Tracking</li>
    <li>Doctor Scheduling and Appointment Management</li>
    <li>Secure Medical Record Storage</li>
    <li>Real-time Notifications for Patients and Staff</li>
    <li>Analytics and Reporting for Hospital Administration</li>
  </ul>
  
  <p className=" mb-4">
    Our goal is to simplify hospital workflows, reduce manual errors, and improve patient care through an integrated platform that is accessible from anywhere.
  </p>
  
  <p className=" font-semibold">
    Experience the future of healthcare management with our Hospital Management System.
  </p>
</div>

    </div>
  )
}

export default about
