import React, { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import { FaMap, FaPhoneVolume } from "react-icons/fa"
import { HiMailOpen } from "react-icons/hi"
import Head from 'next/head'
const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const [submitted, setsubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = { name, email, phone, message }
    console.log('sending')
    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setsubmitted(true)
        setname('')
        setemail('')
        setphone('')
        setmessage('')
      }
    })
  }


  return (
    <div>
       <Head>
        <title>Wallnut | Conatct</title>
      </Head>
      <Banner title={"Contact Us"} />

      <section className="text-gray-600 body-font mt-[30vh] md:mt-[300px]">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">Have Any Questions?</h1>
            <p className="lg:w-4/5 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div className="lg:w-4/5 md:w-4/5 mx-auto">
            <form onSubmit={(e) => handleSubmit(e)} className="flex flex-wrap -m-2">
              <div className="p-2 w-full md:w-1/3">
                <div className="relative">
                  <input onChange={(e) => { setname(e.target.value) }} placeholder='Your Name' type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/3">
                <div className="relative">
                  <input onChange={(e) => { setemail(e.target.value) }} placeholder='Your Email' type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full md:w-1/3">
                <div className="relative">
                  <input onChange={(e) => { setphone(e.target.value) }} placeholder='Phone' type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <textarea onChange={(e) => { setmessage(e.target.value) }} placeholder='Your Message' id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button type='submit' className="flex mx-auto text-white bg-[#a58838] transition-all duration-300 border-0 py-2 px-8 focus:outline-none hover:bg-[#333333]  text-lg">Send Message</button>
              </div>

            </form>
          </div>
        </div>
      </section>

      <div className='flex flex-col md:flex-row w-full text-[1.5vh] md:text-sm mb-[6vh] md:mb-[100px] text-[#333333]  gap-[30px] justify-center '>
        <div className='flex drop-shadow-md w-full md:w-[360px] md:h-[260px] bg-[#f7f7f7] p-[3.2vh] md:p-[40px] mx-[1vh] md:mx-[20px] text-center justify-center items-center flex-col'>
          <FaMap className='text-[#a58838] text-[4vh] md:text-6xl' />
          <h1 className='font-bold text-[1.5vh] md:text-lg my-[1vh] md:my-[10px]'>Visit our office</h1>
          <p>1305
            Chandak Chambers,
            WEH metro station,
            Andheri Kurla road,
            Andheri East,
            Mumbai 400069</p>
        </div>
        <div className='flex drop-shadow-md w-full md:w-[360px] md:h-[260px] bg-[#f7f7f7] p-[3.2vh] md:p-[40px]  mx-[1vh] md:mx-[20px] text-center justify-center items-center flex-col'>
          <HiMailOpen className='text-[#a58838] text-[4vh] md:text-6xl' />
          <h1 className='font-bold text-[1.5vh] md:text-lg my-[1vh] md:my-[10px]'>Mail us</h1>
          <p >manan@wallnut.info</p>
        </div>
        <div className='flex drop-shadow-md w-full md:w-[360px] md:h-[260px] bg-[#f7f7f7] p-[3.2vh] md:p-[40px]  mx-[1vh] md:mx-[20px] text-center justify-center items-center flex-col'>
          <FaPhoneVolume className='text-[#a58838] text-[4vh] md:text-6xl' />
          <h1 className='font-bold text-[1.5vh] md:text-lg my-[1vh] md:my-[10px]'>Call us</h1>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default Contact