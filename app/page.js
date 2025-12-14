import Image from "next/image";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <div className="bg-white">
        
        <Navbar />
        <div className="flex bg-[#061621] rounded-b-full flex-col min-h-[100vh] items-center justify-center w-full   text-center">
          <div className="font-bold text-2xl text-white">
            Welcome to{' '}
            <a className="text-blue-600" href="https://hospital-management.com">
              Hospital Management System!
            </a>
          </div>
          <div className="flex justify-center text-center items-center text-white">
            <div className="rounded-3xl bg-[#091f2a] mx-2 my-4 w-[300px] h-[400px] hover:scale-105 duration-300 p-2">
              <div className="rounded-3xl  "><img src="./doctor.webp" className="overflow-clip" alt="" /></div>
              <p className="m-2 font-bold text-sm">Worlds best team! “We Serve With Compassion and Responsibility.”</p>
              <a href="/Department">
             <button className="mt-3 w-[120px] font-bold bg-[#061621] p-1.5 rounded-[4px] cursor-pointer">Our Team</button></a>
            </div>

            <div className=" rounded-3xl text-sm bg-[#091f2a] text-start mx-2 my-4 w-[300px] h-[400px] text-white hover:scale-105 duration-300 p-2">
              <p className="mt-3 font-bold ">1. “The Hospital Management System is designed to streamline the operations of healthcare facilities by enabling efficient management of patients, doctors, appointments, billing, and medical records.”
              </p>
              <p className="m-1 font-bold">2. “This project provides a digital solution to reduce paperwork, automate hospital workflows, and ensure quicker delivery of healthcare services.”
              </p>
              <p className="m-1 font-bold">3.“The system offers a centralized platform that improves coordination between departments and enhances the overall patient care experience.”
              </p>
              <p className="m-1 font-bold">4. “The goal of the Hospital Management System is to create an organized, user-friendly, and secure environment for managing hospital activities.”
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#0c4746] rounded-t-4xl m-0.5 min-h-[100vh] grid grid-cols-3 gap-4 p-10">
          <div className=" h-[80vh] flex flex-col items-center justify-center">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.085549772415!2d77.20768587549836!3d28.567193675700494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26f903969d7%3A0x8367180c6de2ecc2!2sAll%20India%20Institute%20Of%20Medical%20Sciences%20Delhi!5e0!3m2!1sen!2sin!4v1764187895145!5m2!1sen!2sin"
    width="368"
    height="450"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
  <div className="font-bold m-2 text-white ">Our Location!</div>
</div>
          <div className="bg-amber-500 h-[80vh] flex flex-col justify-center" ><img src="https://webimages.mongodb.com/_com_assets/cms/l96zn4bddbbpoe0zs-combined.svg?auto=format%252Ccompress" alt="" /></div>
          <div className="bg-black flex flex-col justify-center items-center h-[80vh]"><iframe width="370" height="315" src="https://www.youtube.com/embed/X8gIEUaflIU?si=wQawdBYRv2E2ymue" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          <div></div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
