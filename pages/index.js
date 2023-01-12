/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import HomeCarousel from '../components/HomeCarousel';
import 'animate.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import Image from 'next/image';

export default function Home() {


  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }} className='text-[1.5vh] md:text-base'>
      <Head>
        <title>Wallnut | Home</title>
      </Head>
      <HomeCarousel />

      <div className='flex flex-wrap  md:flex-row absolute top-[125vw] md:top-[640px] z-10 w-full justify-center gap-[2vh] md:gap-[2vw] '>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[8.2rem] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[7.815rem]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/bed.png' alt='home-icon' />Hospitality Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[8.2rem] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[7.815rem]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/office-chair-2.png' alt='home-icon' />Office Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[8.2rem] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[7.815rem]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/three-light-candles-chandelier.png' alt='home-icon' />Decorative Lights</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[8.2rem] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[7.815rem]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/armchair.png' alt='home-icon' />Resedential Furniture</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[8.2rem] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[7.815rem]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/shower-and-tub.png' alt='home-icon' />Sanitary Wares</div>
        <div className='flex drop-shadow-xl text-center flex-col justify-center items-center bg-[#363f48] hover:bg-[#a58838] transition-all duration-300 cursor-pointer shadow-inner h-[20vh] md:h-[8.2rem] p-[1.175vh] md:p-[1.175vw] rounded-md w-[45%] md:w-[7.815rem]'><img className='w-[6vh] md:w-[5vw]' src='https://img.icons8.com/carbon-copy/100/ffffff/wardrobe.png' alt='home-icon' />Building Materials</div>
      </div>

      <div className="w-full justify-center flex flex-col  md:flex-row px-[5vh] md:px-[5vw] pt-[72vh] md:pt-[10vw] pb-[5.75vh] md:pb-[5.75vw] bg-[#ecedf2] text-gray-500 ">
        <div className='pr-[2vh] md:pr-[2vw] md:w-[652.51px]'>
          <div className='text-[4.85vh] md:text-[3.875rem] leading-[5vh] md:leading-[5vw] font-bold text-[#363f48]'>
            <span className='text-[#a58838] text-[1.875vh] md:text-2xl italic'>WELCOME TO </span><br></br>
            WALLNUT <br></br>
            <strong className='text-[#a58838] font-bold text-[1.5vh] md:text-[3.875rem]'>CREATIVITY DELIVERED</strong>
          </div>
          <div className='text-[#363f48] text-[1.875vh] md:text-2xl  font-bold mt-[2vh] md:mt-[2vw] mb-[1vh] md:mb-[1vw]'>
            We are the best Sourcing Company since 2005.
          </div>
          <div className=''>
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
          <Image width={457.5} height={571} className=' object-cover ' src='/3.jpg' alt='image-with-border' />
        </div>
      </div>

      <div className='w3r-dot text-[#363f48]'>
        <div className='flex flex-col md:flex-row py-[3.125vh] md:py-[54px] px-[10vw] items-center text-[#363f48]'>
          <p className='text-[4.85vh] md:text-[3.875rem] flex md:flex-col pr-0 md:pr-[50px] mr-[3.9vh] md:mr-[50px]  items-center md:items-start gap-[2vh] md:gap-4  md:border-r-[0.15vw] border-[#a58838] font-bold'><span className='text-[#a58838] text-[2.5vh] md:text-2xl italic'>LATEST</span>PROJECTS</p>
          <p className='font-semibold text-[1.5vh] md:text-sm'>“Independence can be tough. Without a studio to back you up, when you finish a feature and want to start a new project you have to start from zero.”</p>
        </div>

        <div className='h-[630px] overflow-hidden'>
          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 4 }}

          >
            <Masonry className=''>
              <div className='relative first:[&>*]:hover:h-full first:[&>*]:[&>*]:hover:block'><div className='w-full h-0 bottom-0 transition-all duration-500 ease-in-out absolute bg-black bg-opacity-40 z-20'><span className='text-white h-full p-[20px]  font-bold text-[24px] hidden '>Interior Design<br></br><span className='text-[16px] font-medium'>Design & Consult</span></span></div><img src='/10.jpeg' alt='' /></div>
              <div className='relative first:[&>*]:hover:h-full first:[&>*]:[&>*]:hover:block'><div className='w-full h-0 bottom-0 transition-all duration-500 ease-in-out absolute bg-black bg-opacity-40 z-20'><span className='text-white h-full p-[20px]  font-bold text-[24px] hidden '>Interior Design<br></br><span className='text-[16px] font-medium'>Design & Consult</span></span></div><img src='/12.jpeg' alt='' /></div>
              <div className='relative first:[&>*]:hover:h-full first:[&>*]:[&>*]:hover:block'><div className='w-full h-0 bottom-0 transition-all duration-500 ease-in-out absolute bg-black bg-opacity-40 z-20'><span className='text-white h-full p-[20px]  font-bold text-[24px] hidden '>Interior Design<br></br><span className='text-[16px] font-medium'>Design & Consult</span></span></div><img src='/11.jpeg' alt='' /></div>
              <div className='relative first:[&>*]:hover:h-full first:[&>*]:[&>*]:hover:block'><div className='w-full h-0 bottom-0 transition-all duration-500 ease-in-out absolute bg-black bg-opacity-40 z-20'><span className='text-white h-full p-[20px]  font-bold text-[24px] hidden '>Interior Design<br></br><span className='text-[16px] font-medium'>Design & Consult</span></span></div><img src='/13.jpeg' alt='' /></div>
              <div className='relative first:[&>*]:hover:h-full first:[&>*]:[&>*]:hover:block'><div className='w-full h-0 bottom-0 transition-all duration-500 ease-in-out absolute bg-black bg-opacity-40 z-20'><span className='text-white h-full p-[20px]  font-bold text-[24px] hidden '>Interior Design<br></br><span className='text-[16px] font-medium'>Design & Consult</span></span></div><img src='/14.jpeg' alt='' /></div>
              <div className='relative first:[&>*]:hover:h-full first:[&>*]:[&>*]:hover:block'><div className='w-full h-0 bottom-0 transition-all duration-500 ease-in-out absolute bg-black bg-opacity-40 z-20'><span className='text-white h-full p-[20px]  font-bold text-[24px] hidden '>Interior Design<br></br><span className='text-[16px] font-medium'>Design & Consult</span></span></div><img src='/15.png' alt='' /></div>
              <div className='relative first:[&>*]:hover:h-full first:[&>*]:[&>*]:hover:block'><div className='w-full h-0 bottom-0 transition-all duration-500 ease-in-out absolute bg-black bg-opacity-40 z-20'><span className='text-white h-full p-[20px]  font-bold text-[24px] hidden '>Interior Design<br></br><span className='text-[16px] font-medium'>Design & Consult</span></span></div><img src='/16.png' alt='' /></div>
              <div className='relative first:[&>*]:hover:h-full first:[&>*]:[&>*]:hover:block'><div className='w-full h-0 bottom-0 transition-all duration-500 ease-in-out absolute bg-black bg-opacity-40 z-20'><span className='text-white h-full p-[20px]  font-bold text-[24px] hidden '>Interior Design<br></br><span className='text-[16px] font-medium'>Design & Consult</span></span></div><img src='/17.png' alt='' /></div>
              <div className='relative first:[&>*]:hover:h-full first:[&>*]:[&>*]:hover:block'><div className='w-full h-0 bottom-0 transition-all duration-500 ease-in-out absolute bg-black bg-opacity-40 z-20'><span className='text-white h-full p-[20px]  font-bold text-[24px] hidden '>Interior Design<br></br><span className='text-[16px] font-medium'>Design & Consult</span></span></div><img src='/18.png' alt='' /></div>
              <div className='relative first:[&>*]:hover:h-full first:[&>*]:[&>*]:hover:block'><div className='w-full h-0 bottom-0 transition-all duration-500 ease-in-out absolute bg-black bg-opacity-40 z-20'><span className='text-white h-full p-[20px]  font-bold text-[24px] hidden '>Interior Design<br></br><span className='text-[16px] font-medium'>Design & Consult</span></span></div><img src='/19.png' alt='' /></div>
              <div className='relative first:[&>*]:hover:h-full first:[&>*]:[&>*]:hover:block'><div className='w-full h-0 bottom-0 transition-all duration-500 ease-in-out absolute bg-black bg-opacity-40 z-20'><span className='text-white h-full p-[20px]  font-bold text-[24px] hidden '>Interior Design<br></br><span className='text-[16px] font-medium'>Design & Consult</span></span></div><img src='/20.png' alt='' /></div>
            </Masonry>
          </ResponsiveMasonry>
        </div>

        <div className='flex flex-col md:flex-row py-[3.125vh] md:py-[54px] px-[10vw] items-center text-[#363f48]'>
          <p className='text-[4.85vh] md:text-[3.875rem] flex md:flex-col pr-0 md:pr-[50px] mr-[3.9vh] md:mr-[50px]  items-center md:items-start gap-[2vh] md:gap-4  md:border-r-[0.15vw] border-[#a58838] font-bold'><span className='text-[#a58838] text-[2.5vh] md:text-2xl italic'>OUR</span>FOUNDERS</p>
          <p className='font-semibold text-[1.5vh] md:text-sm'>“It is sobering to reflect that one of the best ways to get yourself a reputation as a dangerous citizen these days is to go about repeating the very phrases which our founding fathers used in the struggle for independence.”</p>
        </div>
        <div className='flex flex-col md:flex-row items-center justify-center gap-[3vh] md:gap-[6vw]'>

          <div style={{backgroundImage:`url("/manan mehta.jpeg")`,backgroundPosition:"top",backgroundSize:"300px"}} className='w-[50%] relative  md:w-[262.51px] h-[30vh] md:h-[309.19px] shadow-lg bg-gray-400'>
            <div className='text-[1.57vh] z-30 md:text-xl font-bold flex justify-center p-[1.25vh] md:p-[15px] bg-white mt-[20vh] md:mt-[260px] w-4/5 mx-auto shadow-lg flex-col items-center'>Manan Mehta<span className='text-[1.25vh] md:text-sm font-normal'>Founder</span></div>
          </div>
          <div style={{backgroundImage:`url("/ketan sheth.jpeg")`,backgroundPosition:"top",backgroundSize:"300px"}} className='w-[50%] relative  md:w-[262.51px] h-[30vh] md:h-[309.19px] shadow-lg bg-gray-400'>
            <div className='text-[1.57vh] z-30 md:text-xl font-bold flex justify-center p-[1.25vh] md:p-[15px] bg-white mt-[20vh] md:mt-[260px] w-4/5 mx-auto shadow-lg flex-col items-center'>Ketan Sheth<span className='text-[1.25vh] md:text-sm font-normal'>Founder</span></div>
          </div>
          <div style={{backgroundImage:`url("/girish punjabi.jpeg")`,backgroundPosition:"top",backgroundSize:"300px"}} className='w-[50%] relative  md:w-[262.51px] h-[30vh] md:h-[309.19px] shadow-lg bg-gray-400'>
            <div className='text-[1/57vh] z-30 md:text-xl font-bold flex justify-center p-[1.25vh] md:p-[15px] bg-white mt-[20vh] md:mt-[260px] w-4/5 mx-auto shadow-lg flex-col items-center'>Girish Punjabi<span className='text-[1.25vh] md:text-sm font-normal'>Founder</span></div>
          </div>
        </div>

      </div>

      <div style={{ backgroundImage: `url("/banner.jpg")` }} className='w-full h-[100vh] md:h-[260.66px]  bg-center bg-cover'>
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

      <div  className='relative w-full font-bold text-[2.5vh] italic md:text-[24px] h-[24vh] md:h-[302.56px] flex-col flex justify-center items-center text-[#a58838]'>
        <img className='object-cover w-full opacity-20 h-full absolute top-0' src='/99.png' alt='banner'/>
        TESTIMONIALS
        <span className='not-italic text-[3.75vh] text-center md: md:text-[42px] text-[#363f48] pt-8'>WHAT OUR CLIENT SAYS</span>
      </div>

      <div className='bg-white text-[#363f48] w-full '>
        <div className='w-full  md:h-[545px] flex flex-col-reverse md:flex-row '>
          <div className='w-full md:w-1/2 p-[4vh] md:p-16'>
            <div className='border-[#a58838] justify-center text-center flex flex-col gap-8 border-l-2 border-b-2 w-full h-full'>
              <h1 className='text-[3.75vh] md:text-[48px]'>Quisque feugiat purus</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque purus. Donec placerat tempor ullamcorper.</p>
            </div>
          </div>
          <div className='md:w-1/2 h-full overflow-hidden'><img className='w-full h-full' src='/banner3.jpeg' alt="testimonial" /></div>
        </div>
        <div className='flex flex-col md:flex-row bg-[#ecedf2] h-[400px] text-[#363f48]'>
          <div className='md:w-1/2  flex text-center items-center overflow-hidden'>
            <img className='w-1/2 h-full' src='/testimonial1.jpg' alt='testimonial2' />
            <span className='px-[1vh] w-1/2 md:px-4'><i className='text-[3.75vh] md:text-[48px]'>Phasellus</i><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque purus. Donec placerat tempor ullamcorper.</span>
          </div>
          <div className='md:w-1/2  flex md:flex-row flex-row-reverse text-center items-center overflow-hidden'>
            <img className='w-1/2' src='/testimonial2.jpg' alt='testimonial2' />
            <span className='px-[1vh] w-1/2 md:px-4'><i className='text-[3.75vh] md:text-[48px]'>Vestibulum</i><br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut scelerisque purus. Donec placerat tempor ullamcorper.</span>
          </div>
        </div>
      </div>
    </div>
  )
}
