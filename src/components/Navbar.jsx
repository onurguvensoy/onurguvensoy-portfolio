'use client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 mt-2 lg:px-24'>
      <div className='container mx-auto py-2 flex items-center justify-between'>
        <Link href='/' className='text-3xl font-bold hover:text-gray-300 transition-colors'>
          Onur Guvensoy
        </Link>
        <div className='flex justify-center space-x-8'>
          <Link href='/' className='hover:text-gray-400 transition-colors'>Home</Link>
          <Link href='/about' className='hover:text-gray-400 transition-colors'>About</Link>
          <Link href='/projects' className='hover:text-gray-400 transition-colors'>Projects</Link>
          <Link href='/resume' className='hover:text-gray-400 transition-colors'>Resume</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/contact" className='bg-white text-black border-2 border-white rounded-full px-6 py-2 shadow-md hover:bg-gray-100 transition'>
            Contact With Me
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

