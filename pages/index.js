/* eslint-disable @next/next/no-img-element */

import HomeCarousel from '../components/HomeCarousel';
import 'animate.css';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function Home() {


  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }} className='text-[1.5vh] md:text-[1.25vw]'>
      <HomeCarousel />

      <div className='flex flex-wrap  md:flex-row absolute top-[125vw] md:top-[51vw] z-10 w-full justify-center gap-[2vh] md:gap-[2vw] '>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/bed.png' alt='home-icon' />Loose Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/office-chair-2.png' alt='home-icon' />Office Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/three-light-candles-chandelier.png' alt='home-icon' />Decorative Lights</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/armchair.png' alt='home-icon' />Resedential Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/shower-and-tub.png' alt='home-icon' />Sanitary Wares</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[10.25vw] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[9.765vw]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/wardrobe.png' alt='home-icon' />Building Materials</div>
      </div>

      <div className="w-full  flex flex-col md:flex-row px-[5vh] md:px-[5vw] pt-[72vh] md:pt-[10vw] pb-[5.75vh] md:pb-[5.75vw] bg-[#ecedf2] text-gray-500 ">
        <div className='pr-[2vh] md:pr-[2vw]'>
          <div className='text-[4.85vh] md:text-[4.85vw] leading-[5vh] md:leading-[5vw] font-bold text-[#363f48]'>
            <span className='text-[#a58838] text-[1.875vh] md:text-[1.875vw] italic'>WELCOME TO </span><br></br>
            WALLNUT <br></br>
            <strong className='text-[#a58838] font-bold text-[1.5vh] md:text-[1.5vw]'>CREATIVITY DELIVERY</strong>
          </div>
          <div className='text-[#363f48] text-[1.875vh] md:text-[1.875vw] font-bold mt-[2vh] md:mt-[2vw] mb-[1vh] md:mb-[1vw]'>
            We are the best Sourcing Company since 2005.
          </div>
          <div>
            An Interior centric company, accredited with creating masterpieces since its inception.
            Catering to an array of interior solutions like Furniture, Decorative Lights, Artifacts to name a few from around the world.
            With a diverse portfolio of work, we intend to provide aesthetic solutions to myriad interior fixes across the country
          </div>
          <div className='flex md:flex-row justify-between flex-col gap-[2vh] md:gap-[2vw] mt-[2vh] md:mt-[2vw] '>
            <div className='md:w-1/3 w-full'>
              <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/emoji/96/null/house-emoji.png' alt='home-icon2' />
              <h1 className='mt-[0.8vh] md:mt-[0.8vw] mb-[0.8vh] md:mb-[0.8vw] text-[1.40625vh] md:text-[1.40625vw] text-[#a58838] font-bold'>Residential Furniture</h1>
              {/* <p className=''>The seventeenth century, in both Southern and Northern Europe, was characterized by opulent, often gilded Baroque designs.</p> */}
            </div>
            <div className='md:w-1/3 w-full'>
              <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/fluency/96/null/shop-department.png' alt='home-icon2' />
              <h1 className='mt-[0.8vh] md:mt-[0.8vw] mb-[0.8vh] md:mb-[0.8vw] text-[1.40625vh] md:text-[1.40625vw] text-[#a58838] font-bold'>Office Furniture</h1>
              {/* <p>Furniture refers to movable objects intended to support various human activities such as seating (e.g., stools, chairs, and sofas), eating (tables), storing items, eating and/or working with an item, and sleeping (e.g., beds and hammocks).</p> */}
            </div>
            <div className='md:w-1/3 w-full'>
              <img className='w-[5vh] md:w-[5vw]' src='https://img.icons8.com/external-icongeek26-flat-icongeek26/96/null/external-hospital-pregnancy-amp-maternity-icongeek26-flat-icongeek26.png' alt='home-icon2' />
              <h1 className='mt-[0.8vh] md:mt-[0.8vw] mb-[0.8vh] md:mb-[0.8vw] text-[1.40625vh] md:text-[1.40625vw] text-[#a58838] font-bold'>Hospitality Furniture</h1>
              {/* <p>Furniture design expanded during the Italian Renaissance of the fourteenth and fifteenth century.</p> */}
            </div>
          </div>
        </div>
        <div className='mt-[5vh] md:mt-[5vw] drop-shadow-lg'>
          <img className='border-[2vh] md:border-[2vw] w-[95vh] md:w-[95vw] border-white' src='3.jpg' alt='image-with-border' />
        </div>
      </div>

      <div className='w3r-dot text-[#363f48]'>
        <div className='flex flex-col md:flex-row py-[3.125vh] md:py-[3.125vw] px-[5vh] md:px-[5vw] items-center text-[#363f48]'>
          <p className='text-[4.85vh] md:text-[4.85vw] flex md:flex-col pr-[3.9vh] md:pr-[3.9vw] mr-[3.9vh] md:mr-[3.9vw]  items-center md:items-start gap-[2vh] md:gap-0 w-full md:border-r-[0.15vw] border-[#a58838] font-bold'><span className='text-[#a58838] text-[2.5vh] md:text-[2.5vw] italic'>LATEST</span>PROJECTS</p>
          <p className='font-semibold text-[1.5vh] md:text-[1.5vw]'>“Independence can be tough. Without a studio to back you up, when you finish a feature and want to start a new project you have to start from zero.”</p>
        </div>
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={6000}

        >
          <div><img src='/4.jpg' alt='project' /></div>
          <div><img src='/5.jpg' alt='project' /></div>

        </Carousel>

        <div className='flex flex-col md:flex-row py-[3.125vh] md:py-[3.125vw] px-[5vh] md:px-[5vw] items-center text-[#363f48]'>
          <p className='text-[4.85vh]  md:text-[4.85vw] flex md:flex-col pr-[3.9vh]  md:pr-[3.9vw] mr-[3.9vh] md:mr-[3.9vw] items-center md:items-start gap-[2vh] md:gap-0 w-full md:border-r-[0.15vw] border-[#a58838] font-semibold'><span className='text-[#a58838] text-[2.5vh] md:text-[2.5vw] italic'>OUR</span>FOUNDERS</p>
          <p className='font-semibold text-[1.5vh] md:text-[1.5vw]'>“It is sobering to reflect that one of the best ways to get yourself a reputation as a dangerous citizen these days is to go about repeating the very phrases which our founding fathers used in the struggle for independence.”</p>
        </div>
        <div className='flex max-sm:flex-wrap items-center justify-center gap-[3vh] md:gap-[6vw]'>

          <div className='w-[45%] md:w-[20.475vw] h-[30vh] md:h-[50vh] shadow-lg bg-gray-400'>
            <img src='' alt='employee' />
            <div className='text-[1.57vh] md:text-[1.57vw] font-bold flex justify-center p-[1.25vh] md:p-[1.25vw] bg-white mt-[20vh] md:mt-[20vw] w-4/5 mx-auto shadow-lg flex-col items-center'>Manan Mehta<span className='text-[1.25vh] md:text-[1.25vw] font-normal'>Founder</span></div>
          </div>
          <div className='w-[45%] md:w-[20.475vw] h-[30vh] md:h-[50vh] shadow-lg bg-gray-400'>
            <img src='' alt='employee' />
            <div className='text-[1.57vh] md:text-[1.57vw] font-bold flex justify-center p-[1.25vh] md:p-[1.25vw] bg-white mt-[20vh] md:mt-[20vw] w-4/5 mx-auto shadow-lg flex-col items-center'>Gaurav Jain<span className='text-[1.25vh] md:text-[1.25vw] font-normal'>Founder</span></div>
          </div>
          <div className='w-[45%] md:w-[20.475vw] h-[30vh] md:h-[50vh] shadow-lg bg-gray-400'>
            <img src='' alt='employee' />
            <div className='text-[1/57vh] md:text-[1.57vw] font-bold flex justify-center p-[1.25vh] md:p-[1.25vw] bg-white mt-[20vh] md:mt-[20vw] w-4/5 mx-auto shadow-lg flex-col items-center'>Yogesh Desai<span className='text-[1.25vh] md:text-[1.25vw] font-normal'>Founder</span></div>
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
            <span>Reviews</span>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url("/banner2.jpg")` }} className=' w-full font-bold text-[2.5vh] italic md:text-[1.875vw] h-[24vh] md:h-[24vw] flex-col flex justify-center items-center text-[#a58838]'>
        TESTIMONIALS
        <span className='not-italic text-[3.75vh] text-center md: md:text-[3.75vw] text-[#363f48]'>WHAT OUR CLIENT SAYS</span>
      </div>

      <div className='bg-white text-[#363f48] w-full h-[125vh] overflow-hidden md:h-[155vh]'>
        <div className='w-full  md:h-[42.5vw] flex flex-col-reverse md:flex-row '>
          <div className='w-full md:w-1/2 p-[4vh] md:p-[4vw]'>
            <div className='border-[#a58838] justify-center text-center flex flex-col  border-l-[0.2vw] border-b-[0.2vw] w-full h-full'>
              <h1 className='text-[3.75vh] md:text-[3.75vw]'>Quisque feugiat purus</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque purus. Donec placerat tempor ullamcorper.</p>
            </div>
          </div>
          <div className='md:w-1/2 h-full overflow-hidden'><img className='w-full h-full' src='/banner3.jpeg' alt="testimonial" /></div>
        </div>
        <div className='flex flex-col md:flex-row bg-[#ecedf2] text-[#363f48]'>
          <div className='md:w-1/2 md:h-[32.1vw] flex text-center items-center overflow-hidden'>
            <img className='w-1/2 h-full' src='/testimonial1.jpg' alt='testimonial2' />
            <span className='px-[1vh] md:px-0'><i className='text-[3.75vh] md:text-[3.75vw]'>Phasellus</i><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque purus. Donec placerat tempor ullamcorper.</span>
          </div>
          <div className='md:w-1/2 md:h-[32.1vw] flex md:flex-row flex-row-reverse text-center items-center overflow-hidden'>
            <img className='w-1/2' src='/testimonial2.jpg' alt='testimonial2' />
            <span className='px-[1vh] md:px-0'><i className='text-[3.75vh] md:text-[3.75vw]'>Vestibulum</i><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque purus. Donec placerat tempor ullamcorper.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
