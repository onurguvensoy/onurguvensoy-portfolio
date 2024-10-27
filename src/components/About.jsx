import React from 'react'
import OnurImage from '../assests/OnurImage.png'

const About = () => {
  return (
    <div className='bg-black text-white py-20'>
        <div>
            <h2 className='text-center text-4x1'>About Me</h2>
            <div>
                <img src={OnurImage} alt='' className='mx-auto w-48 h-64'/>
                <p className='text-center text-4x1'>I'm passionate software engineering student with a focus on develop himself 
                about web development and software architectures</p>
            </div>
        </div>
    </div>
  )
}

export default About