/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'

const about = () => {
  return (
    <div>
      <Banner title={"About Us"} />

      <div className="w-full   flex flex-col md:flex-row px-[5vh] md:px-[5vw] mt-[34vh] md:mt-[34vw] mb-[5.75vh] md:mb-[5.75vw] text-gray-500 ">
        <div className='pr-[2vh] md:pr-[2vw]'>
          <div className='text-[4.48vh] md:text-[4.85vw] leading-[5vh] md:leading-[5vw] font-bold text-[#363f48]'>
            <span className='text-[#a58838] text-[1.875vh] md:text-[1.875vw]'>WELCOME TO </span><br></br>
            INTERIOR <br></br>
            <strong className='text-[#a58838] '>ARCHITECTURE</strong>
          </div>
          <div className='text-[#363f48] text-[1.875vh] md:text-[1.875vw] font-bold mt-[2vh] md:mt-[2vw] mb-[1vh] md:mb-[1vw]'>
            We are the best Interior designer since 1990.
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget maximus volutpat. Nulla eget bibendum urna, et vehicula ante. Donec et diam sodales, pellentesque est a, posuere ex. Curabitur mattis viverra semper.
          </div>
          <div className='flex md:flex-row justify-between flex-col gap-[2vh] md:gap-[2vw] mt-[2vh] md:mt-[2vw] '>
            <div>
              <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/emoji/96/null/house-emoji.png' alt='home-icon2' />
              <h1 className='my-[0.8vh] md:my-[0.8vw] text-[1.5vh] md:text-[1.40625vw] text-[#a58838] font-bold'>Residential Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget.</p>
            </div>
            <div>
              <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/fluency/96/null/shop-department.png' alt='home-icon2' />
              <h1 className='my-[0.8vh] md:my-[0.8vw] text-[1.5vh] md:text-[1.40625vw] text-[#a58838] font-bold'>Restaurant Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget.</p>
            </div>
            <div>
              <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/fluency/96/null/factory.png' alt='home-icon2' />
              <h1 className='my-[0.8vh] md:my-[0.8vw] text-[1.5vh] md:text-[1.40625vw] text-[#a58838] font-bold'>Industrial Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget.</p>
            </div>
          </div>
        </div>
        <div className='mt-[5vh] md:mt-[5vw] drop-shadow-lg'>
          <img className='border-[2vh] md:border-[2vw] w-[95vh] md:w-[95vw] border-white' src='http://malikhassan.com/html/interior-design/images/welcomeImg.jpg' alt='image-with-border' />
        </div>
      </div>

      <div style={{ backgroundImage: `url("/banner.jpg")` }} className='w-full h-[100vh] md:h-[20.32vw] bg-center bg-cover'>
        <div className='w-full absolute h-[100vh] md:h-[20.32vw]  bg-black opacity-60'></div>
        <div className='flex flex-col text-[2vh] md:text-[1.25vw] md:flex-row w-full justify-evenly h-full text-[] items-center'>
          <div className='flex flex-col z-10 font-bold items-center justify-center'>
            <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/sf-ultralight-filled/200/ffffff/home-page.png' alt="icon" />
            <span className='text-[4.6875vh] md:text-[4.6875vw]'>1456</span>
            <span>Projects Completed</span>
          </div>
          <div className='flex flex-col z-10 font-bold items-center justify-center'>
            <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/pastel-glyph/200/ffffff/loudspeaker--v2.png' alt="icon" />
            <span className='text-[4.6875vh] md:text-[4.6875vw]'>432</span>
            <span>Fresh Ideas</span>
          </div>
          <div className='flex flex-col z-10 font-bold items-center justify-center'>
            <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/material-sharp/200/ffffff/conference-call.png' alt="icon" />
            <span className='text-[4.6875vh] md:text-[4.6875vw]'>992</span>
            <span>Satisfied Clients</span>
          </div>
          <div className='flex flex-col z-10 font-bold items-center justify-center'>
            <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/material-rounded/200/ffffff/tea-cup.png' alt="icon" />
            <span className='text-[4.6875vh] md:text-[4.6875vw]'>329</span>
            <span>Cup of Coffee</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row py-[3.125vh] md:py-[3.125vw] px-[5vh] md:px-[5vw] items-center text-[#363f48]'>
        <p className='text-[4.85vh]  md:text-[4.85vw] flex md:flex-col pr-[3.9vh]  md:pr-[3.9vw] mr-[3.9vh] md:mr-[3.9vw] border-r-[0.15vw] border-[#a58838] font-bold'><span className='text-[#a58838] text-[1.875vh] md:text-[1.875vw]'>OUR</span>TEAM</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam nisi, sollicitudin venenatis nisl id, iaculis pharetra quam. Vivamus cursus est vel sagittis tristique. Nunc vel ligula mollis, imperdiet dolor quis, consectetur magna. Duis facilisis tempor lectus tempus dignissim. Praesent lacus ante, mattis sit amet purus non, suscipit pellentesque odio.</p>
      </div>
      <div className='flex text-[#333333] pb-[5vh] md:pb-[10vw] max-sm:flex-wrap items-center justify-center gap-[3vh] md:gap-[3vw]'>
        <div className='w-[45%] md:w-[20.475vw] h-[30vh] md:h-[50vh] shadow-lg bg-gray-400'>
          <img src='' alt='employee' />
          <div className='text-[1.57vh] md:text-[1.57vw] font-bold flex justify-center p-[1.25vh] md:p-[1.25vw] bg-white mt-[20vh] md:mt-[20vw] w-4/5 mx-auto shadow-lg flex-col items-center'>John Smith<span className='text-[1.25vh] md:text-[1.25vw] font-normal'>designation</span></div>
        </div>
        <div className='w-[45%] md:w-[20.475vw] h-[30vh] md:h-[50vh] shadow-lg bg-gray-400'>
          <img src='' alt='employee' />
          <div className='text-[1.57vh] md:text-[1.57vw] font-bold flex justify-center p-[1.25vh] md:p-[1.25vw] bg-white mt-[20vh] md:mt-[20vw] w-4/5 mx-auto shadow-lg flex-col items-center'>John Smith<span className='text-[1.25vh] md:text-[1.25vw] font-normal'>designation</span></div>
        </div>
        <div className='w-[45%] md:w-[20.475vw] h-[30vh] md:h-[50vh] shadow-lg bg-gray-400'>
          <img src='' alt='employee' />
          <div className='text-[1.57vh] md:text-[1.57vw] font-bold flex justify-center p-[1.25vh] md:p-[1.25vw] bg-white mt-[20vh] md:mt-[20vw] w-4/5 mx-auto shadow-lg flex-col items-center'>John Smith<span className='text-[1.25vh] md:text-[1.25vw] font-normal'>designation</span></div>
        </div>
        <div className='w-[45%] md:w-[20.475vw] h-[30vh] md:h-[50vh] shadow-lg bg-gray-400'>
          <img src='' alt='employee' />
          <div className='text-[1.57vh] md:text-[1.57vw] font-bold flex justify-center p-[1.25vh] md:p-[1.25vw] bg-white mt-[20vh] md:mt-[20vw] w-4/5 mx-auto shadow-lg flex-col items-center'>John Smith<span className='text-[1.25vh] md:text-[1.25vw] font-normal'>designation</span></div>
        </div>
      </div>

    </div>
  )
}

export default about