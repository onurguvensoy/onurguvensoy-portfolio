import React from 'react'
import OnurImage from '../assests/OnurImage.png'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
    <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl text-center font-bold mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
            <img src={OnurImage} alt='' className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
            <div className='flex-1'>
                <p className='text-lg mb-8'>
                    I'm a passionate software engineering student focused on developing skills in web development and software architectures.
                </p>
                <div className='space-y-4'>
                    <div className='flex items-center'>
                        <label htmlFor="htmlandcss" className="w-2/12">HTML & CSS</label>
                        <div className="grow bg-gray-800 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-gray-400 to-white h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12"></div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="reactjs" className="w-2/12">React JS</label>
                        <div className="grow bg-gray-800 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-gray-400 to-white h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12"></div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <label htmlFor="nodejs" className="w-2/12">Node JS</label>
                        <div className="grow bg-gray-800 rounded-full h-2.5">
                            <div className="bg-gradient-to-r from-gray-400 to-white h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12"></div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex justify-center text-center space-x-8">
                    <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">1+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">3</h3>
                        <p>Projects Completed</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default About