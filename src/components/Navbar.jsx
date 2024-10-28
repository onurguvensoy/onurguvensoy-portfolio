import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 justify-center flex md:justify-between items-center'>
            <div className='text-2x1 font-bold hidden md:inline'>Onur Guvensoy</div>
            <div className='space-x-6'>
                <a href='#home' className='hover:text-gray-400'>Home</a>
                <a href='#about' className='hover:text-gray-400'>About</a>
                <a href='#projects' className='hover:text-gray-400'>Projects</a>
                <a href='#contact' className='hover:text-gray-400'>Contact</a>
            </div>
            <a href="mailto:someone@example.com" className='bg-white text-black rounded-full px-6 py-2 shadow-md hover:bg-gray-400 transition'>Contact Me</a>
        </div>
    </nav>
  )
}

export default Navbar