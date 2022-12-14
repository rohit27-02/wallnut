/* eslint-disable @next/next/no-img-element */
import React from 'react'
import {FaFacebookF,FaTwitter,FaGoogle,FaLinkedinIn,FaYoutube} from 'react-icons/fa'
const Footer = () => {
  return (<div className='flex flex-col bg-[#191717]  h-[70vh] justify-evenly text-gray-400'>
    <div className='   w-full flex px-[4vw] '>
      <div className='flex w-[35vw] px-[2vw] flex-col'>
        <img className='w-[18vw] ' src='/logo.png' alt='logo'/>
        <p className='py-[1vw]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non animi odit quos reprehenderit. Velit veniam repellat illo perferendis! Debitis inventore reiciendis repellat culpa expedita sunt voluptates aliquid ratione quos odit.</p>
        <div className='flex gap-[2vw] text-[1.5vw]'>
          <FaFacebookF className='hover:text-[#af8838] cursor-pointer'/>
          <FaTwitter className='hover:text-[#af8838] cursor-pointer'/>
          <FaGoogle className='hover:text-[#af8838] cursor-pointer'/>
          <FaLinkedinIn className='hover:text-[#af8838] cursor-pointer'/>
          <FaYoutube className='hover:text-[#af8838] cursor-pointer'/>
        </div>
      </div>
      <div className='flex w-[20vw] px-[2vw] flex-col'>
        <h1 className='text-[1.875vw] text-white mb-[4vw]'>Quick Links</h1>
        <div className='flex flex-col gap-[1vw]'>
          <li className='hover:text-[#a58838] cursor-pointer'>Home</li>
          <li className='hover:text-[#a58838] cursor-pointer'>About us</li>
          <li className='hover:text-[#a58838] cursor-pointer'>Services</li>
          <li className='hover:text-[#a58838] cursor-pointer'>Contact us</li>
        </div>
      </div>
      <div className='flex w-[25vw] px-[2vw] flex-col'>
        <h1 className='text-[1.875vw] text-white'>Contact Info</h1>
        <div>

        </div>
      </div>
      <div className='flex w-[30vw] px-[2vw] flex-col'>
        <h1 className='text-[1.875vw] text-white'>Instagram</h1>
        <div>

        </div>
      </div>
    </div>
    <div className='border-t border-gray-400 mx-[4vw] items-center  flex justify-center'>
    © 2022 Wallnut | All Rights Reserved
    </div>
    </div>
  )
}

export default Footer