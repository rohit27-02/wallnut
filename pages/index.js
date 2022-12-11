/* eslint-disable @next/next/no-img-element */

import HomeCarousel from '../components/HomeCarousel';
import 'animate.css';

export default function Home() {


  return (
    <div className='text-[1.25vw]'>
      <HomeCarousel />

      <div className='flex absolute top-[51vw] z-20 w-full justify-center gap-[2vw] '>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[10.25vw] p-[1.175vw] rounded-md w-[9.765vw]'><img className='w-[5vw]' src='icon.png' alt='home-icon' />Interior Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[10.25vw] p-[1.175vw] rounded-md w-[9.765vw]'><img className='w-[5vw]' src='icon.png' alt='home-icon' />Interior Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[10.25vw] p-[1.175vw] rounded-md w-[9.765vw]'><img className='w-[5vw]' src='icon.png' alt='home-icon' />Interior Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[10.25vw] p-[1.175vw] rounded-md w-[9.765vw]'><img className='w-[5vw]' src='icon.png' alt='home-icon' />Interior Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[10.25vw] p-[1.175vw] rounded-md w-[9.765vw]'><img className='w-[5vw]' src='icon.png' alt='home-icon' />Interior Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[10.25vw] p-[1.175vw] rounded-md w-[9.765vw]'><img className='w-[5vw]' src='icon.png' alt='home-icon' />Interior Furniture</div>
      </div>

      <div className="w-full  flex flex-col md:flex-row px-[5vw] mt-[10vw] mb-[5.75vw] text-gray-500 ">
        <div className='pr-[2vw]'>
          <div className='text-[4.85vw]  leading-[5vw] font-bold text-[#363f48]'>
            <span className='text-[#a58838] text-[1.875vw]'>WELCOME TO </span><br></br>
            INTERIOR <br></br>
            <strong className='text-[#a58838] '>ARCHITECTURE</strong>
          </div>
          <div className='text-[#363f48] text-[1.875vw] font-bold mt-[2vw] mb-[1vw]'>
            We are the best Interior designer since 1990.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget maximus volutpat. Nulla eget bibendum urna, et vehicula ante. Donec et diam sodales, pellentesque est a, posuere ex. Curabitur mattis viverra semper.
          </div>
          <div className='flex md:flex-row justify-between flex-col gap-[2vw] mt-[2vw] '>
            <div>
              <img className='w-[5vw]' src='https://img.icons8.com/emoji/96/null/house-emoji.png' alt='home-icon2' />
              <h1 className='mt-[0.8vw] mb-[0.8vw] text-[1.40625vw] text-[#a58838] font-bold'>Residential Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget.</p>
            </div>
            <div>
              <img className='w-[5vw]' src='https://img.icons8.com/fluency/96/null/shop-department.png' alt='home-icon2' />
              <h1 className='mt-[0.8vw] mb-[0.8vw] text-[1.40625vw] text-[#a58838] font-bold'>Restaurant Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget.</p>
            </div>
            <div>
              <img className='w-[5vw]' src='https://img.icons8.com/fluency/96/null/factory.png' alt='home-icon2' />
              <h1 className='mt-[0.8vw] mb-[0.8vw] text-[1.40625vw] text-[#a58838] font-bold'>Industrial Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget.</p>
            </div>
          </div>
        </div>
        <div className=' mt-[5vw] drop-shadow-lg'>
          <img className='border-[2vw] w-[95vw] border-white' src='http://malikhassan.com/html/interior-design/images/welcomeImg.jpg' alt='image-with-border' />
        </div>
      </div>

      <div className='w3r-dot text-black'>
        <div className='flex py-[3.125vw] px-[5vw] items-center text-[#363f48]'>
          <p className='text-[4.85vw] flex flex-col pr-[3.9vw] mr-[3.9vw] border-r-[0.15vw] border-[#a58838] font-bold'><span className='text-[#a58838] text-[1.875vw]'>LATEST</span>PROJECTS</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam nisi, sollicitudin venenatis nisl id, iaculis pharetra quam. Vivamus cursus est vel sagittis tristique. Nunc vel ligula mollis, imperdiet dolor quis, consectetur magna. Duis facilisis tempor lectus tempus dignissim. Praesent lacus ante, mattis sit amet purus non, suscipit pellentesque odio.</p>
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}
