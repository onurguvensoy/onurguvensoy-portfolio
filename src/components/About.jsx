'use client'

import Image from 'next/image'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
      <div className='container mx-auto px-8 md:px-16 lg:px-24'>
        <h2 className='text-4xl text-center font-bold mb-12'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:space-x-12'>
          <div className='relative w-72 h-80 mb-8 md:mb-0'>
            <Image 
              src="/images/OnurImage.png"
              alt='Onur Guvensoy' 
              fill
              className='rounded object-cover'
            />
          </div>
          <div className='flex-1'>
            <div className="prose prose-invert max-w-none">
              <p className='text-lg mb-6'>
                Hello! I'm Onur, a passionate software engineering student at Bahcesehir University. 
                I'm deeply interested in web development, software architectures, and creating innovative solutions 
                that can make a real impact.
              </p>

              <h3 className="text-2xl font-bold mb-4">My Journey</h3>
              <p className='text-lg mb-6'>
                My journey in software development started with Java during my early university years. 
                Since then, I've expanded my skills to include modern web technologies and frameworks. 
                I'm particularly excited about full-stack development and building scalable applications.
              </p>

              <h3 className="text-2xl font-bold mb-4">What I Do</h3>
              <p className='text-lg mb-6'>
                Currently, I'm focusing on web development with React and Node.js, while also exploring 
                various other technologies. I'm actively involved in university projects and community work.
              </p>

              <h3 className="text-2xl font-bold mb-4">Beyond Coding</h3>
              <p className='text-lg mb-6'>
                When I'm not coding, you can find me exploring new technologies, playing guitar, or working on 
                photography. I believe in continuous learning and staying updated with the latest developments 
                in the tech world.
              </p>
            </div>

            <div className='space-y-4 mt-8'>
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