/* eslint-disable @next/next/no-img-element */
import React,{useState,useEffect} from 'react'
import {FaFacebookF,FaPhone,FaTwitter,FaGoogle,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
import {MdLocationOn,MdEmail} from "react-icons/md"
import Router from 'next/router'
const Footer = () => {
  const [sw, setsw] = useState(false);
  useEffect(() => {
    if(screen.width>768) setsw(true)
  }, []);
  return (<div className='flex flex-col bg-[#191717] h-[245vw] md:text-[14px] md:h-[347.42px]  justify-evenly text-gray-400'>
    <div className='   w-full flex flex-col md:flex-row gap-[3vh] md:gap-0 items-center md:items-start px-[4vh] md:px-[4vw] '>
      <div className='flex w-full md:w-[35vw] px-[2vh] md:px-[2vw] flex-col'>
        <img className='md:w-[198px] ' src='/logo.png' alt='logo'/>
        <p className='py-[2vh] md:py-[1vw] '>An Interior centric company, accredited with creating masterpieces since its inception.
Catering to an array of interior solutions like Furniture, Decorative Lights, Artifacts to name a few from around the world.
</p>
        <div className='flex gap-[5vh] md:gap-[2vw] text-[4vh] md:text-[1.5vw]'>
          <FaFacebookF className='hover:text-[#af8838] cursor-pointer'/>
          <FaTwitter className='hover:text-[#af8838] cursor-pointer'/>
          <FaGoogle className='hover:text-[#af8838] cursor-pointer'/>
          <FaLinkedinIn className='hover:text-[#af8838] cursor-pointer'/>
          <FaYoutube className='hover:text-[#af8838] cursor-pointer'/>
        </div>
      </div>
      <div className='flex  w-full md:w-[20vw] px-[2vh] md:px-[2vw] flex-col'>
        <h1 className='text-[2vh]  md:text-[24px] text-white mb-[3vh] md:mb-[4vw]'>Quick Links</h1>
        <div className='flex flex-col gap-[1vh] md:gap-[1vw]'>
          <li className='hover:text-[#a58838] cursor-pointer' onClick={()=>{Router.push("/")}}>Home</li>
          <li className='hover:text-[#a58838] cursor-pointer' onClick={()=>{Router.push("/about")}}>About us</li>
          <li className='hover:text-[#a58838] cursor-pointer' onClick={()=>{Router.push("/services")}}>Services</li>
          <li className='hover:text-[#a58838] cursor-pointer' onClick={()=>{Router.push("/contact")}}>Contact us</li>
        </div>
      </div>
      <div className='flex w-full  md:w-[30vw] px-[2vh] md:px-[2vw] gap-[2vh] md:gap-0 flex-col'>
        <h1 className='text-[2vh] md:text-[24px] mb-[2vh] md:mb-[4vw] text-white'>Contact Info</h1>
        <div className='flex '>
          {sw && <MdLocationOn className='text-[3vh] md:text-[1.6vw] absolute md:-mx-[2.2vw] md:mt-[0.2vw]'/>}
          <p >1305 Chandak Chambers, WEH metro station, Andheri Kurla road, Andheri East, Mumbai 400069</p>
        </div>
        <div className='flex mt-[1.2vw]'>
         {sw && <FaPhone className='text-[3vh] md:text-[1.6vw] absolute md:-mx-[2.2vw] md:mt-[0.2vw]'/>}
          <p >00000000</p>
        </div>
        <div className='flex mt-[1.2vw]'>
          {sw && <MdEmail className='text-[3vh] md:text-[1.6vw] absolute md:-mx-[2.2vw] md:mt-[0.2vw]'/>}
          <p >manan@wallnut.info</p>
        </div>
      </div>
      <div className='flex w-full  md:w-[20vw] px-[2vh] md:px-[2vw] flex-col'>
        <h1 className='text-[2vh] md:text-[24px] text-white'>Instagram</h1>
        <div className='flex flex-wrap gap-[1vw]'>
          <img className='w-[5vw] h-[5vw]' src='/1.jpg' alt='insta-pic'/>
          <img className='w-[5vw] h-[5vw]' src='/2.jpg' alt='insta-pic'/>
          <img className='w-[5vw] h-[5vw]' src='/3.jpg' alt='insta-pic'/>
          <img className='w-[5vw] h-[5vw]' src='/4.jpg' alt='insta-pic'/>
        </div>
        <div>

        </div>
      </div>
    </div>
    <div className='border-t border-gray-400 mx-[4vh] md:mx-[4vw] items-center pt-[2vh] md:pt-5 flex justify-center'>
    © 2022 Wallnut | All Rights Reserved
    </div>
    </div>
  )
}

export default Footer