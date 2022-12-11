/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React,{useState} from 'react'
import Hamburger from 'hamburger-react'

const Navbar = () => {
    const [isOpen, setisOpen] = useState(false);
  return (
    <div className='text-[1.25vw] absolute top-0 z-20 font-sans flex justify-center px-[4vw] pt-[3.5vw] w-full items-center'>
        {/* {screen.width<768 && <Hamburger toggled={isOpen} toggle={setisOpen} />} */}
        <div className='h-[6.25vw] pr-[2vw] bg-black bg-opacity-80 flex justify-between items-center w-full'>
            <img alt='logo' className='h-[6vw]' src='/logo.png'/> 
            <div className='flex w-2/4 font-medium justify-between'>
                <div>Home</div>
                <div>About Us</div>
                <div>Services</div>
                <div>Contact Us</div>
            </div>

        </div>
        

    </div>
  )
}

export default Navbar