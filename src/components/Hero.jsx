'use client'

import Image from 'next/image'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import OnurImage from '../../public/images/OnurImage.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
      <div className='relative mx-auto w-48 h-48'>
        <Image 
          src={OnurImage}
          alt='Onur Guvensoy'
          fill
          priority
          className='rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
        />
      </div>
      <h1 className='text-4xl font-bold mt-4'>
        I'm {" "}
        <span>
          Onur Guvensoy
        </span>
        , Software engineering student
      </h1>
      <p className='mt-4 text-lg text-gray-400'>
        Crafting innovative solutions through code to shape the future of technology.
      </p>
      <div className='mt-8 space-x-4'>
        <a
          href='https://github.com/onurguvensoy' 
          target="_blank"
          rel="noopener noreferrer"
          className='bg-white text-black border-2 border-white rounded-full px-6 py-2 shadow-md hover:bg-gray-100 transition inline-flex items-center'
        >
          <FaGithub className="mr-2" />
          GitHub
        </a>
        <a 
          href='https://linkedin.com/in/onurguvensoy'
          target="_blank"
          rel="noopener noreferrer"
          className='bg-white text-black border-2 border-white rounded-full px-6 py-2 shadow-md hover:bg-gray-100 transition inline-flex items-center'
        >
          <FaLinkedin className="mr-2" />
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Hero;

