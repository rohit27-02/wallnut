/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react'
import Hamburger from 'hamburger-react'
import Router from 'next/router';

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);
  return (
    <div className='text-[1.25vw] absolute top-0 z-20 font-sans flex justify-center px-[4vw] pt-[3.5vw] w-full items-center'>
        {/* {screen.width<768 && <Hamburger toggled={isOpen} toggle={setisOpen} />} */}
        <div className='h-[6.25vw] pr-[2vw] bg-black bg-opacity-80 flex justify-between items-center w-full'>
            <img alt='logo' className='h-[6vw]' src='/logo.png'/> 
            <div className='flex w-2/4 font-medium justify-between'>
                <div className='cursor-pointer hover:text-[#a58838] transition-all duration-300' onClick={()=>Router.push("/")}>Home</div>
                <div className='cursor-pointer hover:text-[#a58838] transition-all duration-300' onClick={()=>Router.push("/about")}>About Us</div>
                <div className='cursor-pointer hover:text-[#a58838] transition-all duration-300' onClick={()=>Router.push("/services")}>Services</div>
                <div className='cursor-pointer hover:text-[#a58838] transition-all duration-300' onClick={()=>Router.push("/contact")}>Contact Us</div>
            </div>

        </div>
        

    </div>
  )
}

export default Navbar