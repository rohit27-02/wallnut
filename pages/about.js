/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'

const about = () => {
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
      <Banner title={"About Us"} />


      <div className=" w-full justify-center flex flex-col md:flex-row px-[5vh] md:px-[5vw] pt-[30vh]  md:pt-[370px] pb-[5.75vh] md:pb-[5.75vw] bg-[#ecedf2] text-gray-500 ">
        <div className='pr-[2vh] md:pr-[2vw] md:w-[652.51px]'>
          <div className='text-[4.85vh] md:text-[3.875rem] leading-[5vh] md:leading-[5vw] font-bold text-[#363f48]'>
            <span className='text-[#a58838] text-[1.875vh] md:text-2xl italic'>WELCOME TO </span><br></br>
            WALLNUT <br></br>
            <strong className='text-[#a58838] font-bold text-[1.5vh] md:text-[3.875rem]'>CREATIVITY DELIVERED</strong>
          </div>
          <div className='text-[#363f48] text-[1.875vh] md:text-2xl font-bold mt-[2vh] md:mt-[2vw] mb-[1vh] md:mb-[1vw]'>
            We are the best Sourcing Company since 2005.
          </div>
          <div>
            An Interior centric company, accredited with creating masterpieces since its inception.
            Catering to an array of interior solutions like Furniture, Decorative Lights, Artifacts to name a few from around the world.
            With a diverse portfolio of work, we intend to provide aesthetic solutions to myriad interior fixes across the country
          </div>
          <div className='flex md:flex-row justify-between flex-col gap-[2vh] md:gap-[2vw] mt-[2vh] md:mt-[2vw] '>
            <div className='md:w-1/3 w-full'>
              <img className='w-[5vh] md:w-[3.75rem]' src='https://img.icons8.com/emoji/96/null/house-emoji.png' alt='home-icon2' />
              <h1 className='mt-[0.8vh] md:mt-[0.8vw] mb-[0.8vh] md:mb-[0.8vw] text-[1.40625vh] md:text-lg text-[#a58838] font-bold'>Residential Furniture</h1>
              {/* <p className=''>The seventeenth century, in both Southern and Northern Europe, was characterized by opulent, often gilded Baroque designs.</p> */}
            </div>
            <div className='md:w-1/3 w-full'>
              <img className='w-[5vh] md:w-[3.75rem]' src='https://img.icons8.com/fluency/96/null/shop-department.png' alt='home-icon2' />
              <h1 className='mt-[0.8vh] md:mt-[0.8vw] mb-[0.8vh] md:mb-[0.8vw] text-[1.40625vh] md:text-lg text-[#a58838] font-bold'>Office Furniture</h1>
              {/* <p>Furniture refers to movable objects intended to support various human activities such as seating (e.g., stools, chairs, and sofas), eating (tables), storing items, eating and/or working with an item, and sleeping (e.g., beds and hammocks).</p> */}
            </div>
            <div className='md:w-1/3 w-full'>
              <img className='w-[5vh] md:w-[3.75rem]' src='https://img.icons8.com/emoji/96/null/hotel-emoji.png' alt='home-icon2' />
              <h1 className='mt-[0.8vh] md:mt-[0.8vw] mb-[0.8vh] md:mb-[0.8vw] text-[1.40625vh] md:text-lg text-[#a58838] font-bold'>Hospitality Furniture</h1>
              {/* <p>Furniture design expanded during the Italian Renaissance of the fourteenth and fifteenth century.</p> */}
            </div>
          </div>
        </div>
        <div className='mt-10 border-white border-[2vh] md:border-[1.5rem] overflow-hidden md:w-[457.5px] md:h-[571px] drop-shadow-lg'>
          <img className=' object-cover ' src='3.jpg' alt='image-with-border' />
        </div>
      </div>

      <div style={{ backgroundImage: `url("/banner.jpg")` }} className='w-full h-[100vh] md:h-[260.66px] bg-center bg-cover'>
        <div className='w-full absolute h-[100vh] md:h-[260.66px]  bg-black opacity-60'></div>
        <div className='flex flex-col text-[2vh] md:text-sm md:flex-row w-full justify-center gap-10 md:gap-40 h-full items-center'>
          <div className='flex flex-col z-10 font-bold items-center justify-center'>
            <img className='w-[5vh] md:w-[60px]' src='https://img.icons8.com/sf-ultralight-filled/200/ffffff/home-page.png' alt="icon" />
            <span className='text-[4.6875vh] md:text-6xl'>1456</span>
            <span>Projects Completed</span>
          </div>
          <div className='flex flex-col z-10 font-bold items-center justify-center'>
            <img className='w-[5vh] md:w-[60px]' src='https://img.icons8.com/pastel-glyph/200/ffffff/loudspeaker--v2.png' alt="icon" />
            <span className='text-[4.6875vh] md:text-6xl'>432</span>
            <span>Fresh Ideas</span>
          </div>
          <div className='flex flex-col z-10 font-bold items-center justify-center'>
            <img className='w-[5vh] md:w-[60px]' src='https://img.icons8.com/material-sharp/200/ffffff/conference-call.png' alt="icon" />
            <span className='text-[4.6875vh] md:text-6xl'>992</span>
            <span>Satisfied Clients</span>
          </div>
          <div className='flex flex-col z-10 font-bold items-center justify-center'>
            <img className='w-[5vh] md:w-[60px]' src='https://img.icons8.com/material-rounded/200/ffffff/tea-cup.png' alt="icon" />
            <span className='text-[4.6875vh] md:text-6xl'>329</span>
            <span>Reviews</span>
          </div>
        </div>
      </div>

      <div className='flex flex-col md:flex-row py-[3.125vh] md:py-[54px] px-[10vw] items-center text-[#363f48]'>
          <p className='text-[4.85vh] md:text-[3.875rem] flex md:flex-col pr-0 md:pr-[50px] mr-[3.9vh] md:mr-[50px]  items-center md:items-start gap-[2vh] md:gap-0  md:border-r-[0.15vw] border-[#a58838] font-bold'><span className='text-[#a58838] text-[2.5vh] md:text-2xl italic'>OUR</span>FOUNDERS</p>
          <p className='font-semibold text-[1.5vh] md:text-sm'>“It is sobering to reflect that one of the best ways to get yourself a reputation as a dangerous citizen these days is to go about repeating the very phrases which our founding fathers used in the struggle for independence.”</p>
        </div>
        <div className='flex flex-col md:flex-row items-center pb-10 md:pb-36 text-[#333333] justify-center gap-[3vh] md:gap-[6vw]'>

          <div className='w-[50%] md:w-[262.51px] h-[30vh] md:h-[309.19px] shadow-lg bg-gray-400'>
          
            <img src='' alt='employee' />
            <div className='text-[1.57vh] z-30 md:text-xl font-bold flex justify-center p-[1.25vh] md:p-[15px] bg-white mt-[20vh] md:mt-[260px] w-4/5 mx-auto shadow-lg flex-col items-center'>Manan Mehta<span className='text-[1.25vh] md:text-sm font-normal'>Founder</span></div>
          </div>
          <div className='w-[50%] md:w-[262.51px] h-[30vh] md:h-[309.19px] shadow-lg bg-gray-400'>
          
            <img src='' alt='employee' />
            <div className='text-[1.57vh] z-30 md:text-xl font-bold flex justify-center p-[1.25vh] md:p-[15px] bg-white mt-[20vh] md:mt-[260px] w-4/5 mx-auto shadow-lg flex-col items-center'>Gaurav Jain<span className='text-[1.25vh] md:text-sm font-normal'>Founder</span></div>
          </div>
          <div className='w-[50%] md:w-[262.51px] h-[30vh] md:h-[309.19px] shadow-lg bg-gray-400'>
          
            <img src='' alt='employee' />
            <div className='text-[1/57vh] z-30 md:text-xl font-bold flex justify-center p-[1.25vh] md:p-[15px] bg-white mt-[20vh] md:mt-[260px] w-4/5 mx-auto shadow-lg flex-col items-center'>Yogesh Desai<span className='text-[1.25vh] md:text-sm font-normal'>Founder</span></div>
          </div>
        </div>

    </div>
  )
}

export default about