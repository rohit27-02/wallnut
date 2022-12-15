/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Banner = ({title}) => {
  return (
    <div className=' absolute top-0 w-full h-[60vh] overflow-hidden'>
      <div className='h-[60vh] absolute top-0  w-full bg-black opacity-60'></div> 
      <img className='' src='/home-banner.jpg' alt='top-banner'/>
      <p className='text-[2.85vw] text-white font-bold z-20 absolute w-full text-center top-[35vh]'>{title}</p>
    </div>
  )
}

export default Banner