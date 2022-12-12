/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { IoMdArrowRoundForward } from "react-icons/io"
import 'animate.css';
import { useEffect, useRef, useState } from 'react';

const HomeCarousel = () => {
  const [carouselnumber, setcarouselnumber] = useState(-1);

  useEffect(() => {
 

  }, []);

  useEffect(() => {
    p1.current.classList.remove("animate__fadeOutUp")
    p2.current.classList.remove("animate__fadeOutLeft")
    p3.current.classList.remove("animate__fadeOutUp")
    b1.current.classList.remove("animate__fadeOutDown")
    p1.current.classList.add("animate__fadeInDown")
    p2.current.classList.add("animate__fadeInLeft", "animate__delay-1s")
    p3.current.classList.add("animate__fadeInDown", "animate__delay-2s")
    b1.current.classList.add("animate__fadeInUp", "animate__delay-3s")
    setTimeout(() => {
      p2.current.classList.remove("animate__delay-1s")
      p3.current.classList.remove("animate__delay-2s")
      b1.current.classList.remove("animate__delay-3s")
      p1.current.classList.add("animate__fadeOutUp")
      p2.current.classList.add("animate__fadeOutLeft")
      p3.current.classList.add("animate__fadeOutUp")
      b1.current.classList.add("animate__fadeOutDown")
    }, 7500);

  }, [carouselnumber]);

  const p1 = useRef();
  const p2 = useRef();
  const p3 = useRef();
  const b1 = useRef();

  return (
    <div className=''>
      <div className='bg-black absolute top-0 w-full h-[115.4vh] z-10 opacity-50'></div>
      <div className='absolute font-bold top-[20vw] w-full z-10 flex justify-center flex-col items-center'>
        <div ref={p1} className='text-[2.8125vw] animate__animated'>INTERIOR</div>
        <p ref={p2} className='text-[6.25vw] animate__animated  '>ARCHITECTURE</p>
        <p ref={p3} className='animate__animated '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est dicta repudiandae commodi vel in repellat<br></br> fugit inventore error incidunt labore. Molestiae, nostrum. Eos repellendus qui accusamus vel velit nobis consequuntur!</p>
        <button ref={b1} className='flex my-[1.25vw] bg-[#a58838] px-[2.35vw] py-[1.175vw] items-center gap-[1vw] animate__animated '>CONTACT US <IoMdArrowRoundForward className='text-[2vw]' /></button>
      </div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={9000}
        onChange={(e) => { setcarouselnumber(e) }}
      >

        <div id='slice'>
          <img alt='home-pic' src="/1.jpg" />

        </div>
        <div id='slice'>
          <img alt='home-pic' src="/2.jpg" />

        </div>
        <div id='slice'>
          <img alt='home-pic' src="/3.jpg" />

        </div>
      </Carousel>


    </div>
  )
}

export default HomeCarousel