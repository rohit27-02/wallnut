/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Banner from '../components/Banner'

const services = () => {
  return (
    <div style={{fontFamily:"'Montserrat', sans-serif"}}>
      <Banner title={"Products"}/>
      <div className="flex flex-wrap justify-center mb-[7vh] md:mb-[7vw] mt-[34vh] md:mt-[34vw]">
        <div className='w-full md:w-[28.1vw] text-[#333333] h-[110vw] md:h-[79vh] shadow-lg m-[1.5vh] md:m-[1.5vw]'>
          <div className='h-3/5 overflow-hidden '><img className='hover:scale-110 transition-all duration-300' src='/product1.jpeg' alt='card-image'/></div>
          <div className='h-2/5 mx-[2vh] md:mx-[2vw]'>
            <h1 className='text-[2vh] md:text-[1.7vw] font-bold'>Loose Furniture</h1>
            <p className='py-[1vh] md:py-[1vw]'>Therefore,loose furniture refers to the movable furniture that is not fixed on the wall or the ground in the hotel</p>
            <button className='text-white bg-[#a58838] py-[0.8vh] md:py-[0.8vw] px-[1.75vh] md:px-[1.75vw] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
          </div>
        </div>

        <div className='w-full md:w-[28.1vw] text-[#333333] h-[110vw] md:h-[79vh] shadow-lg m-[1.5vh] md:m-[1.5vw]'>
          <div className='h-3/5 overflow-hidden'><img className='hover:scale-110 transition-all h-full object-cover duration-300' src='https://preview.redd.it/m2m3mj03zg641.jpg?width=960&crop=smart&auto=webp&s=f4a8ef74544c670794a52d54e05da85d93b28b25' alt='card-image'/></div>
          <div className='h-2/5 mx-[2vh] md:mx-[2vw]'>
            <h1 className='text-[2vh] md:text-[1.7vw] font-bold'>Decorative Lights</h1>
            <p className='py-[1vh] md:py-[1vw]'>Decorative lighting is the fourth layer of interior illumination and, simply put, it is like a diamond stone for the home</p>
            <button className='text-white bg-[#a58838] py-[0.8vh] md:py-[0.8vw] px-[1.75vh] md:px-[1.75vw] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
          </div>
        </div>

        <div className='w-full md:w-[28.1vw] text-[#333333] h-[110vw] md:h-[79vh] shadow-lg m-[1.5vh] md:m-[1.5vw]'>
          <div className='h-3/5 overflow-hidden '><img className='hover:scale-110 transition-all duration-300' src='/banner3.jpeg' alt='card-image'/></div>
          <div className='h-2/5 mx-[2vh] md:mx-[2vw]'>
            <h1 className='text-[2vh] md:text-[1.7vw] font-bold'>Modular Kitchen</h1>
            <p className='py-[1vh] md:py-[1vw]'>These parts are fitted together to create a whole, functional kitchen design.</p>
            <button className='text-white bg-[#a58838] py-[0.8vh] md:py-[0.8vw] px-[1.75vh] md:px-[1.75vw] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
          </div>
        </div>

        <div className='w-full md:w-[28.1vw] text-[#333333] h-[110vw] md:h-[79vh] shadow-lg m-[1.5vh] md:m-[1.5vw]'>
          <div className='h-3/5 overflow-hidden '><img className='hover:scale-110 transition-all duration-300' src='https://i.pinimg.com/564x/de/57/1f/de571f657ea5daddfc362568c440eba5.jpg' alt='card-image'/></div>
          <div className='h-2/5 mx-[2vh] md:mx-[2vw]'>
            <h1 className='text-[2vh] md:text-[1.7vw] font-bold'>Wardrobe</h1>
            <p className='py-[1vh] md:py-[1vw]'>A large, tall cupboard or recess in which clothes may be hung or stored.</p>
            <button className='text-white bg-[#a58838] py-[0.8vh] md:py-[0.8vw] px-[1.75vh] md:px-[1.75vw] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
          </div>
        </div>

        <div className='w-full md:w-[28.1vw] text-[#333333] h-[110vw] md:h-[79vh] shadow-lg m-[1.5vh] md:m-[1.5vw]'>
          <div className='h-3/5 overflow-hidden '><img className='hover:scale-110 transition-all duration-300 h-full object-cover' src='https://www.bontena.com/images/articles/home/Best-Ceramic-Sanitary-Ware-Brands-VilleroyBoch.jpg' alt='card-image'/></div>
          <div className='h-2/5 mx-[2vh] md:mx-[2vw]'>
            <h1 className='text-[2vh] md:text-[1.7vw] font-bold'>Ceremic & Sanitary Wares</h1>
            <p className='py-[1vh] md:py-[1vw]'>ceramic ware made of porous clay fired at low heat porcelain</p>
            <button className='text-white bg-[#a58838] py-[0.8vh] md:py-[0.8vw] px-[1.75vh] md:px-[1.75vw] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
          </div>
        </div>

        <div className='w-full md:w-[28.1vw] text-[#333333] h-[110vw] md:h-[79vh] shadow-lg m-[1.5vh] md:m-[1.5vw]'>
          <div className='h-3/5 overflow-hidden '><img className='hover:scale-110 transition-all duration-300' src='https://www.tecnografica.net/cache/1920/80/YOKAI_web.jpg' alt='card-image'/></div>
          <div className='h-2/5 mx-[2vh] md:mx-[2vw]'>
            <h1 className='text-[2vh] md:text-[1.7vw] font-bold'>Wall Coverings/Panels</h1>
            <p className='py-[1vh] md:py-[1vw]'>Material such as wallpaper or textured fabric used as a decorative covering for interior walls.</p>
            <button className='text-white bg-[#a58838] py-[0.8vh] md:py-[0.8vw] px-[1.75vh] md:px-[1.75vw] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default services