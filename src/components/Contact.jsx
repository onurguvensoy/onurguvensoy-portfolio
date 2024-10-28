import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
     <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-gray-400 to-white mb-4'>Let's Talk</h3>
            <p>I'm open to work part-time or internship opportunities.</p>
            <div className='mb-4 mt-8'>
                <FaEnvelope className='inline-block text-white mr-2'></FaEnvelope>
                <a href="mailto:youremail@example.com" className='hover:underline'>
                    gvnsynr@gmail.com
                </a>
            </div>
            <div className='mb-4'>
                <FaPhone className='inline-block text-white mr-2'></FaPhone>
                <span>+905538522393</span>
            </div>
            <div className='mb-4'>
                <FaMapMarkedAlt className='inline-block text-white mr-2'></FaMapMarkedAlt>
                <span>İstanbul,Turkiye</span>
            </div>
          </div>
          <div className='flex-1 w-full'>
            <form className='space-y-4'>
                <div>
                    <label htmlFor="name" className='block mb-2'>Your Name</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Name'/>
                </div>
                <div>
                    <label htmlFor="email" className='block mb-2'>Email</label>
                    <input type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400'
                    placeholder='Enter Your Email'/>
                </div>
                <div>
                    <label htmlFor="message" className='block mb-2'>Message</label>
                    <textarea type="text" 
                    className='w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-gray-400'
                    rows="5"
                    placeholder='Enter You Message'/>
                </div>
                <button className='bg-gradient-to-r from-gray-400 to-white text-white hidden md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full'>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact