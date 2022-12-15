import React from 'react'
import Banner from '../components/Banner'

const contact = () => {
  return (
    <div>
      <Banner title={"Contact Us"} />

      <section className="text-gray-600 body-font mt-[30vw]">
        <div className="container px-5 py-16 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-gray-900">Have Any Questions?</h1>
            <p className="lg:w-4/5 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div className="lg:w-4/5 md:w-4/5 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/3">
                <div className="relative">
                  <input placeholder='Your Name' type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="relative">
                  <input placeholder='Your Email' type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-1/3">
                <div className="relative">
                  <input placeholder='Phone' type="phone" id="phone" name="phone" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <textarea placeholder='Your Message' id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-[#a58838] transition-all duration-300 border-0 py-2 px-8 focus:outline-none hover:bg-[#333333]  text-lg">Send Message</button>
              </div>

            </div>
          </div>
        </div>
      </section>

      <div className=''>
        <div className='flex justify-center items-center flex-col'>
          <h1></h1>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <h1></h1>
        </div>
        <div className='flex justify-center items-center flex-col'>
          <h1></h1>
        </div>
      </div>
    </div>
  )
}

export default contact