/* eslint-disable @next/next/no-img-element */
import React,{useState} from 'react'
import Banner from '../components/Banner'
import Head from 'next/head'
import 'animate.css';
const Products = () => {
  const [show, setshow] = useState(false);
  const [title, settitle] = useState("");
  const [info, setinfo] = useState("");
  const content=[{title:"Modular Kitchen",info:"we craft modular kitchen designs that are the perfect blend of functionality and style. Our curated, modern kitchen designs range from simple kitchens with minimal interiors to more elaborately designed kitchen interior designs"},
{title:"Wardrobes",info:"Wallnut offers a wide range of modern and contemporary wardrobes to suit your lifestyle and home. We believe in being a part of your home by providing wardrobes designed with a mixture of elegance and class"},
{title:"Loose Furniture",info:"Stylish, grand, effortless and chic,  Wallnut has a range of loose furniture to complement every aesthetic"},
{title:"Ceremic & Sanitary Wares",info:"Choose over thousands of designs inspired by nature. Choose from different looks - wood, marble, vintage, textured, natural, modern and more"},
{title:"Wall Coverings/Panels",info:"Material such as wallpaper or textured fabric used as a decorative covering for interior walls."},
{title:"Decorative Lights",info:"Decorative lighting is the fourth layer of interior illumination and, simply put, it is like a diamond stone for the home"}]
  const showContent=(e)=>{
    setshow(true)
    settitle(content[e.currentTarget.id].title)
    setinfo(content[e.currentTarget.id].info)
  }
  return (
    <div style={{ fontFamily: "'Montserrat', sans-serif" }}>
       <Head>
        <title>Wallnut | Products</title>
      </Head>
      {show && <div onClick={()=>setshow(false)} className='w-[100vw] h-[100vh]  bg-black bg-opacity-50 flex items-center justify-center  top-0  fixed z-50'>
        <div className='w-[50rem] h-[30rem] animate__animated animate__jackInTheBox text-gray-700 bg-white drop-shadow-lg shadow-inner rounded-lg p-14 text-lg font-semibold text-center'>
          <h1 className='text-4xl font-bold border-b-4 w-fit mx-auto pb-2 border-gray-600 mb-12'>{title}</h1>
          <p>{info}</p>
        </div>
      </div>}
      <Banner title={"Products"} />
      <div className="flex justify-center text-sm px-8 items-center flex-col mb-[7vh] md:mb-[40px] mt-[34vh] md:mt-[350px]">

        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-[390px] text-[#333333] h-[110vw] md:h-[497px] shadow-lg my-4 m-0 md:m-[20px]'>
            <div className='h-3/5 overflow-hidden '><img className='hover:scale-110 transition-all duration-300' src='/product1.jpeg' alt='card-image' /></div>
            <div className='h-2/5 mx-[2vh] mt-2 relative md:mx-[30px]'>
              <h1 className='text-[2vh] md:text-xl font-bold'>Loose Furniture</h1>
              <p className='py-[1vh] md:py-[12px]'>Therefore,loose furniture refers to the movable furniture that is not fixed on the wall or the ground in the hotel</p>
              <button id='2' onClick={(e)=>showContent(e)} className='text-white absolute bottom-5 md:bottom-7 bg-[#a58838] py-[0.8vh] md:py-[10px] px-[1.75vh] md:px-[22px] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
            </div>
          </div>

          <div className='w-full md:w-[390px] text-[#333333] h-[110vw] md:h-[497px] shadow-lg m-0 my-4 md:m-[20px]'>
            <div className='h-3/5 overflow-hidden'><img className='hover:scale-110 transition-all h-full object-cover duration-300' src='https://preview.redd.it/m2m3mj03zg641.jpg?width=960&crop=smart&auto=webp&s=f4a8ef74544c670794a52d54e05da85d93b28b25' alt='card-image' /></div>
            <div className='h-2/5 mx-[2vh] mt-2 relative md:mx-[30px]'>
              <h1 className='text-[2vh] md:text-xl font-bold'>Decorative Lights</h1>
              <p className='py-[1vh] md:py-[12px]'>Decorative lighting is the fourth layer of interior illumination and, simply put, it is like a diamond stone for the home</p>
              <button id='5' onClick={(e)=>showContent(e)}  className='text-white absolute bottom-5 md:bottom-7 bg-[#a58838] py-[0.8vh] md:py-[10px] px-[1.75vh] md:px-[22px] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
            </div>
          </div>

          <div className='w-full md:w-[390px] text-[#333333] h-[110vw] md:h-[497px] shadow-lg m-0 my-4 md:m-[20px]'>
            <div className='h-3/5 overflow-hidden '><img className='hover:scale-110 transition-all duration-300' src='/banner3.jpeg' alt='card-image' /></div>
            <div className='h-2/5 mx-[2vh] mt-2 relative md:mx-[30px]'>
              <h1 className='text-[2vh] md:text-xl font-bold'>Modular Kitchen</h1>
              <p className='py-[1vh] md:py-[12px]'>These parts are fitted together to create a whole, functional kitchen design.</p>
              <button id='0' onClick={(e)=>showContent(e)} className='text-white absolute bottom-5 md:bottom-7 bg-[#a58838] py-[0.8vh] md:py-[10px] px-[1.75vh] md:px-[22px] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
            </div>
          </div>
        </div>
        <div className='flex flex-col md:flex-row'>
          <div className='w-full md:w-[390px] text-[#333333] h-[110vw] md:h-[497px] shadow-lg m-0 my-4 md:m-[20px]'>
            <div className='h-3/5 overflow-hidden '><img className='hover:scale-110 transition-all duration-300' src='https://i.pinimg.com/564x/de/57/1f/de571f657ea5daddfc362568c440eba5.jpg' alt='card-image' /></div>
            <div className='h-2/5 mx-[2vh] mt-2 relative md:mx-[30px]'>
              <h1 className='text-[2vh] md:text-xl font-bold'>Wardrobe</h1>
              <p className='py-[1vh] md:py-[12px]'>A large, tall cupboard or recess in which clothes may be hung or stored.</p>
              <button id='1' onClick={(e)=>showContent(e)}  className='text-white absolute bottom-5 md:bottom-7 bg-[#a58838] py-[0.8vh] md:py-[10px] px-[1.75vh] md:px-[22px] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
            </div>
          </div>

          <div className='w-full md:w-[390px] text-[#333333] h-[110vw] md:h-[497px] shadow-lg m-0 my-4 md:m-[20px]'>
            <div className='h-3/5 overflow-hidden '><img className='hover:scale-110 transition-all duration-300 h-full object-cover' src='https://www.bontena.com/images/articles/home/Best-Ceramic-Sanitary-Ware-Brands-VilleroyBoch.jpg' alt='card-image' /></div>
            <div className='h-2/5 mx-[2vh] mt-2 relative md:mx-[30px]'>
              <h1 className='text-[2vh] md:text-xl font-bold'>Ceremic & Sanitary Wares</h1>
              <p className='py-[1vh] md:py-[12px]'>ceramic ware made of porous clay fired at low heat porcelain</p>
              <button id='3' onClick={(e)=>showContent(e)}  className='text-white absolute bottom-5 md:bottom-7 bg-[#a58838] py-[0.8vh] md:py-[10px] px-[1.75vh] md:px-[22px] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
            </div>
          </div>

          <div className='w-full md:w-[390px] text-[#333333] h-[110vw] md:h-[497px] shadow-lg m-0 my-4 md:m-[20px]'>
            <div className='h-3/5 overflow-hidden '><img className='hover:scale-110 transition-all duration-300' src='https://www.tecnografica.net/cache/1920/80/YOKAI_web.jpg' alt='card-image' /></div>
            <div className='h-2/5 mx-[2vh] mt-2 relative md:mx-[30px]'>
              <h1 className='text-[2vh] md:text-xl font-bold'>Wall Coverings/Panels</h1>
              <p className='py-[1vh] md:py-[12px]'>Material such as wallpaper or textured fabric used as a decorative covering for interior walls.</p>
              <button id='4' onClick={(e)=>showContent(e)}  className='text-white absolute bottom-5 md:bottom-7 bg-[#a58838] py-[0.8vh] md:py-[10px] px-[1.75vh] md:px-[22px] hover:bg-[#333333] transition-all duration-300 cursor-pointer'>READ MORE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Products