import React from 'react'
import OnurImage from '../assests/OnurImage1.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={OnurImage} alt='' className='mx-auto w-48 h-48 rounded-full object-cover
         transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4x1 font-bold mt-4 '>
        I'm {""}
        <span>
            Onur Guvensoy
        </span>,Software engineering student
        </h1>
        <p className='mt-4 text-lg text-gray-300'>My passion is making softwares that going to changes entire life.</p>
        <div className='mt-8 space-x-4'>
            <a href='#Contact' className='bg-white text-black rounded-full px-6 py-2 shadow-md hover:bg-gray-400 transition'>Contact with me</a>
            <button className='bg-white text-black rounded-full px-6 py-2 shadow-md hover:bg-gray-400 transition'>Resume</button>
        </div>
        
    </div>
  )
}

export default Hero