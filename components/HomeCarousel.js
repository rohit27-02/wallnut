/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { IoMdArrowRoundForward } from "react-icons/io"
import 'animate.css';
import { useEffect, useRef, useState } from 'react';
import Router from 'next/router';

const HomeCarousel = () => {
  const [carouselnumber, setcarouselnumber] = useState(0);

  useEffect(() => {

    p1.current.classList.remove("animate__fadeOutUp")
    p2.current.classList.remove("animate__fadeOutLeft")
    p3.current.classList.remove("animate__fadeOutUp")
    b1.current.classList.remove("animate__fadeOutDown")
    p1.current.classList.add("animate__fadeInDown", "animate__delay-2s")
    p2.current.classList.add("animate__fadeInLeft", "animate__delay-3s")
    p3.current.classList.add("animate__fadeInDown", "animate__delay-4s")
    b1.current.classList.add("animate__fadeInUp", "animate__delay-5s")

    setTimeout(() => {
      p1.current.classList.remove("animate__delay-2s")
      p2.current.classList.remove("animate__delay-3s")
      p3.current.classList.remove("animate__delay-4s")
      b1.current.classList.remove("animate__delay-5s")
      p1.current.classList.add("animate__fadeOutUp")
      p2.current.classList.add("animate__fadeOutLeft")
      p3.current.classList.add("animate__fadeOutUp")
      b1.current.classList.add("animate__fadeOutDown")
    }, 9000);


    const x = b3.current.children;
    if (carouselnumber == 1) {
      b2.current.classList.remove("main")
      s1.current.classList.add("-z-20")
      for (let i = 0; i < x.length; i++) {
        x[i].classList.add("animate__flipOutY")
      }

    }
    else {
      s1.current.classList.remove("-z-20")
      b2.current.classList.add("main")
      for (let i = 0; i < x.length; i++) {
        x[i].classList.remove("animate__flipOutY")
      }
    }




  }, [carouselnumber]);


  const p1 = useRef();
  const p2 = useRef();
  const p3 = useRef();
  const b1 = useRef();
  const b2 = useRef();
  const b3 = useRef();
  const s1 = useRef();

  return (
    <div className=''>
      <div className='bg-black absolute top-0 w-full h-[115.4vw] md:h-[700px] z-10 opacity-60'></div>
      <div className='absolute font-bold top-[15vh] md:top-[250px] w-full md:z-20 z-10 flex justify-center flex-col items-center'>
        <div ref={p1} className='text-xl  md:text-4xl italic animate__animated '>FURNITURE</div>
        <p ref={p2} className='text-2xl md:text-7xl animate__animated  pb-8'>SOURCING COMPANY</p>
        <p ref={p3} className='animate__animated md:px-40 text-center text-xs px-4 md:text-base'>An Interior centric company, accredited with creating masterpieces since its inception.
          Catering to an array of interior solutions like Furniture, Decorative Lights, Artifacts to name a few from around the world.</p>
        <button ref={b1} className='flex text-base my-[1.25vh] md:my-4 bg-[#a58838] px-[2.35vh] md:px-[1.9rem] py-[1.175vh] md:py-[0.94rem] items-center gap-[1vh] md:gap-2 animate__animated ' onClick={() => { Router.push("/contact") }}>CONTACT US <IoMdArrowRoundForward className='text-[2vh] md:text-xl' /></button>
      </div>
      <div className=' flex h-[115.4vw] md:h-[700px]'>
        <Carousel
          onChange={(e) => setcarouselnumber(e)}
          autoPlay={true}
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
          showThumbs={false}
          interval={11000}
          className='absolute object-cover h-[1vw] top-0 -z-10 '
        >
          <Image width={1} height={1} src='/1.jpg' alt='sample' />
          <Image width={1} height={1} src='/2.jpg' alt='sample' />
        </Carousel>
      </div>
      <div ref={s1} className='image-container  absolute top-0 '>
        <div ref={b2} className="img ">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className='image-container2 absolute top-0 -z-10'>
        <div ref={b3} className="img2 flex flex-wrap ">
          <span className='animate__animated animate__slower '></span>
          <span className='animate__animated animate__slower '></span>
          <span className='animate__animated animate__slower '></span>
          <span className='animate__animated animate__slower '></span>
          <span className='animate__animated animate__slower '></span>
        </div>
      </div>


    </div>
  )
}

export default HomeCarousel