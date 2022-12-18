/* eslint-disable @next/next/no-img-element */

import HomeCarousel from '../components/HomeCarousel';
import 'animate.css';

export default function Home() {


  return (
    <div className='text-[1.25vh] md:text-[1.25vw]'>
      <HomeCarousel />

      <div className='flex flex-wrap  md:flex-row absolute top-[51vh] md:top-[51vw] z-10 w-full justify-center gap-[2vh] md:gap-[2vw] '>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[18vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/bed.png' alt='home-icon' />Living Room Better</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[18vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/office-chair-2.png' alt='home-icon' />Office Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[18vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/three-light-candles-chandelier.png' alt='home-icon' />Dedicated Interior</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[18vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/armchair.png' alt='home-icon' />Waiting Room Design</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[18vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/shower-and-tub.png' alt='home-icon' />Bathroom Design</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[18vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/wardrobe.png' alt='home-icon' />Interior Furniture</div>
      </div>

      <div className="w-full  flex flex-col md:flex-row px-[5vh] md:px-[5vw] pt-[10vh] md:pt-[10vw] pb-[5.75vh] md:pb-[5.75vw] bg-[#ecedf2] text-gray-500 ">
        <div className='pr-[2vh] md:pr-[2vw]'>
          <div className='text-[4.85vh] md:text-[4.85vw] leading-[5vh] md:leading-[5vw] font-bold text-[#363f48]'>
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
              <h1 className='mt-[0.8vh] md:mt-[0.8vw] mb-[0.8vh] md:mb-[0.8vw] text-[1.40625vh] md:text-[1.40625vw] text-[#a58838] font-bold'>Residential Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget.</p>
            </div>
            <div>
              <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/fluency/96/null/shop-department.png' alt='home-icon2' />
              <h1 className='mt-[0.8vh] md:mt-[0.8vw] mb-[0.8vh] md:mb-[0.8vw] text-[1.40625vh] md:text-[1.40625vw] text-[#a58838] font-bold'>Restaurant Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget.</p>
            </div>
            <div>
              <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/fluency/96/null/factory.png' alt='home-icon2' />
              <h1 className='mt-[0.8vh] md:mt-[0.8vw] mb-[0.8vh] md:mb-[0.8vw] text-[1.40625vh] md:text-[1.40625vw] text-[#a58838] font-bold'>Industrial Design</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis facilisis leo eget.</p>
            </div>
          </div>
        </div>
        <div className='mt-[5vh] md:mt-[5vw] drop-shadow-lg'>
          <img className='border-[2vh] md:border-[2vw] w-[95vh] md:w-[95vw] border-white' src='http://malikhassan.com/html/interior-design/images/welcomeImg.jpg' alt='image-with-border' />
        </div>
      </div>

      <div className='w3r-dot text-[#363f48]'>
        <div className='flex flex-col md:flex-row py-[3.125vh] md:py-[3.125vw] px-[5vh] md:px-[5vw] items-center text-[#363f48]'>
          <p className='text-[4.85vh] md:text-[4.85vw] flex md:flex-col  md:pr-[3.9vw]  md:mr-[3.9vw]  md:border-r-[0.15vw] border-[#a58838] font-bold'><span className='text-[#a58838] text-[1.875vh] md:text-[1.875vw]'>LATEST</span>PROJECTS</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam nisi, sollicitudin venenatis nisl id, iaculis pharetra quam. Vivamus cursus est vel sagittis tristique. Nunc vel ligula mollis, imperdiet dolor quis, consectetur magna. Duis facilisis tempor lectus tempus dignissim. Praesent lacus ante, mattis sit amet purus non, suscipit pellentesque odio.</p>
        </div>
        <div className='w-[100vw] md:h-[100vh] p-[2vh] gap-[2vh] md:p-0 md:gap-0 flex overflow-x-auto'>
          <img className='h-[24vh] md:w-[24.67vw]  md:h-[39.75vh]' src='1.jpg' alt="project" />
          <img className='h-[24vh] md:w-[24.67vw]  md:h-[39.75vh]' src='1.jpg' alt="project" />
          <img className='h-[24vh] md:w-[24.67vw]  md:h-[39.75vh]' src='1.jpg' alt="project" />
          <img className='h-[24vh] md:w-[24.67vw]  md:h-[79.5vh]' src='1.jpg' alt="project" />
          <img className='h-[24vh] md:w-[49.5vw]   md:h-[39.75vh] md:-mt-[19.1vw]' src='1.jpg' alt="project" />
          <img className='h-[24vh] md:w-[24.67vw]  md:h-[39.75vh] md:-mt-[19.1vw]' src='1.jpg' alt="project" />
          <img className='h-[24vh] md:w-[24.67vw]  md:h-[39.75vh]' src='1.jpg' alt="project" />
          <img className='h-[24vh] md:w-[24.67vw]  md:h-[39.75vh] md:-mt-[19.1vw]' src='1.jpg' alt="project" />
          <img className='h-[24vh] md:w-[49.5vw]   md:h-[39.75vh] md:-mt-[19.1vw]' src='1.jpg' alt="project" />
        </div>
        <div className='flex flex-col md:flex-row py-[3.125vh] md:py-[3.125vw] px-[5vh] md:px-[5vw] items-center text-[#363f48]'>
          <p className='text-[4.85vh] md:text-[4.85vw] flex md:flex-col  md:pr-[3.9vw]  md:mr-[3.9vw]  md:border-r-[0.15vw] border-[#a58838] font-bold'><span className='text-[#a58838] text-[1.875vh] md:text-[1.875vw]'>OUR</span>TEAM</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quam nisi, sollicitudin venenatis nisl id, iaculis pharetra quam. Vivamus cursus est vel sagittis tristique. Nunc vel ligula mollis, imperdiet dolor quis, consectetur magna. Duis facilisis tempor lectus tempus dignissim. Praesent lacus ante, mattis sit amet purus non, suscipit pellentesque odio.</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-[3vh] md:gap-[3vw]'>
          <div className='w-[45%] md:w-[20.475vw] h-[30vh] md:h-[30vh] shadow-lg bg-gray-400'>
            <img src='' alt='employee' />
            <div className='text-[1.57vh] md:text-[1.57vw] font-bold flex justify-center p-[1.25vh] md:p-[1.25vw] bg-white mt-[20vh] md:mt-[20vw] w-4/5 mx-auto shadow-lg flex-col items-center'>John Smith<span className='text-[1.25vh] md:text-[1.25vw] font-normal'>designation</span></div>
          </div>
          <div className='w-[45%] h-[30vh] shadow-lg bg-gray-400'>
            <img src='' alt='employee' />
            <div className='text-[1.57vh] md:text-[1.57vw] font-bold flex justify-center p-[1.25vh] md:p-[1.25vw] bg-white mt-[20vh] md:mt-[20vw] w-4/5 mx-auto shadow-lg flex-col items-center'>John Smith<span className='text-[1.25vh] md:text-[1.25vw] font-normal'>designation</span></div>
          </div>
          <div className='w-[45%] h-[30vh] shadow-lg bg-gray-400'>
            <img src='' alt='employee' />
            <div className='text-[1.57vh] md:text-[1.57vw] font-bold flex justify-center p-[1.25vh] md:p-[1.25vw] bg-white mt-[20vh] md:mt-[20vw] w-4/5 mx-auto shadow-lg flex-col items-center'>John Smith<span className='text-[1.25vh] md:text-[1.25vw] font-normal'>designation</span></div>
          </div>
          <div className='w-[45%] h-[30vh] shadow-lg bg-gray-400'>
            <img src='' alt='employee' />
            <div className='text-[1/57vh] md:text-[1.57vw] font-bold flex justify-center p-[1.25vh] md:p-[1.25vw] bg-white mt-[20vh] md:mt-[20vw] w-4/5 mx-auto shadow-lg flex-col items-center'>John Smith<span className='text-[1.25vh] md:text-[1.25vw] font-normal'>designation</span></div>
          </div>
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

      <div style={{ backgroundImage: `url("/banner2.jpg")` }} className=' w-full font-bold text-[1.875vh] md:text-[1.875vw] h-[24vh] md:h-[24vw] flex-col flex justify-center items-center text-[#a58838]'>
        TESTIMONIALS
        <span className='text-[3.75vh] md:text-[3.75vw] text-[#363f48]'>WHAT OUR CLIENT SAYS</span>
      </div>

      <div className='bg-white text-[#363f48] w-full h-[96vh] overflow-hidden md:h-[155vh]'>
        <div className='w-full  md:h-[42.5vw] flex flex-col-reverse md:flex-row '>
          <div className='w-full md:w-1/2 p-[4vh] md:p-[4vw]'>
            <div className='border-[#a58838] justify-center text-center flex flex-col  border-l-[0.2vw] border-b-[0.2vw] w-full h-full'>
              <h1 className='text-[3.75vh] md:text-[3.75vw]'>Quisque feugiat purus</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque purus. Donec placerat tempor ullamcorper.</p>
            </div>
          </div>
          <div className='md:w-1/2 h-full overflow-hidden'><img className='w-full h-full' src='/banner3.jpg' alt="testimonial" /></div>
        </div>
        <div className='flex flex-col md:flex-row bg-[#ecedf2] text-[#363f48]'>
          <div className='md:w-1/2 md:h-[32.1vw] flex text-center items-center overflow-hidden'>
            <img className='w-1/2 h-full' src='/testimonial1.jpg' alt='testimonial2' />
            <span><i className='text-[3.75vh] md:text-[3.75vw]'>Phasellus</i><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque purus. Donec placerat tempor ullamcorper.</span>
          </div>
          <div className='md:w-1/2 md:h-[32.1vw] flex text-center items-center overflow-hidden'>
            <img className='w-1/2' src='/testimonial2.jpg' alt='testimonial2' />
            <span><i className='text-[3.75vh] md:text-[3.75vw]'>Vestibulum</i><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque purus. Donec placerat tempor ullamcorper.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
