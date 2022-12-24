/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react'
import Hamburger from 'hamburger-react'
import Router from 'next/router';

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const [sw, setsw] = useState(false);
  useEffect(() => {
    if (screen.width < 768) {
      setsw(true)
    }
  }, []);
  return (
    <div style={{fontFamily:"'Montserrat', sans-serif"}} className='text-[1.25vw] absolute top-0 z-20 font-sans flex justify-center px-[4vw] pt-[3.5vw] w-full items-center'>
      {sw ? <div className='flex justify-between w-full'>
        <div className='h-[6.25vh] pr-[2vw] bg-black bg-opacity-80 flex justify-between items-center w-full'>
          <div><img alt='logo' className='h-[6vh]' src='/logo.png' /> </div>
          <Hamburger toggled={isOpen} toggle={setisOpen} />
        </div>
      </div> :
        <div className='h-[4.875rem] pr-[2vw] bg-black bg-opacity-90 flex justify-between items-center w-[1140px]'>
          <img alt='logo' className='w-[198px] ' src='/logo.png' />
          <div className='flex w-2/4 font-medium justify-between'>
            <div className='cursor-pointer hover:text-[#a58838] transition-all duration-300 md:text-sm' onClick={() => Router.push("/")}>Home</div>
            <div className='cursor-pointer hover:text-[#a58838] transition-all duration-300 md:text-sm' onClick={() => Router.push("/about")}>About Us</div>
            <div className='cursor-pointer hover:text-[#a58838] transition-all duration-300 md:text-sm' onClick={() => Router.push("/products")}>Products</div>
            <div className='cursor-pointer hover:text-[#a58838] transition-all duration-300 md:text-sm' onClick={() => Router.push("/contact")}>Contact Us</div>
          </div>
        </div>
      }
      {
        isOpen && <div className='fixed left-0 top-0 shadow-xl h-full w-[60vw] transition-all duration-300  z-50 bg-white'>
          <div className='flex flex-col text-[2.2vh] justify-center items-center py-[2vh] font-semibold gap-[2vh] text-[#333333]'>
          <div className=''><img alt='logo' className='h-[6vh]' src='/logo.png' /> </div>
            <div className='cursor-pointer border-b-2 p-[1vh] hover:text-[#a58838] transition-all duration-300' onClick={() => Router.push("/")}>Home</div>
            <div className='cursor-pointer border-b-2 p-[1vh] hover:text-[#a58838] transition-all duration-300' onClick={() => Router.push("/about")}>About Us</div>
            <div className='cursor-pointer border-b-2 p-[1vh] hover:text-[#a58838] transition-all duration-300' onClick={() => Router.push("/products")}>Products</div>
            <div className='cursor-pointer border-b-2 p-[1vh] hover:text-[#a58838] transition-all duration-300' onClick={() => Router.push("/contact")}>Contact Us</div>
          </div>
        </div>
      }

    </div>
  )
}

export default Navbar