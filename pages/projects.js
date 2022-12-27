import React from 'react'
import Banner from '../components/Banner'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
const projects = () => {
  return (
    <div>
      <Banner title={"Projects"}/>
      <div className='flex flex-col mt-[270px] md:flex-row py-[3.125vh] md:py-[54px] px-[10vw] items-center text-[#363f48]'>
          <p className='text-[4.85vh] md:text-[3.875rem] flex md:flex-col pr-0 md:pr-[50px] mr-[3.9vh] md:mr-[50px]  items-center md:items-start gap-[2vh] md:gap-4  md:border-r-[0.15vw] border-[#a58838] font-bold'><span className='text-[#a58838] text-[2.5vh] md:text-2xl italic'>LATEST</span>PROJECTS</p>
          <p className='font-semibold text-[1.5vh] md:text-sm'>“Independence can be tough. Without a studio to back you up, when you finish a feature and want to start a new project you have to start from zero.”</p>
        </div>

        <div className='h-[630px] overflow-hidden mb-[50px]'>
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
    </div>
  )
}

export default projects