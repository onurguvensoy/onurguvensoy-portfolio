'use client'

import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa'
import { SiJavascript, SiTypescript, SiMysql, SiPython, SiDjango } from 'react-icons/si'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold text-center mb-12">About Me</h1>
            
            <p className="text-lg mb-8">
              Hello! I'm Onur, a passionate software engineering student at Bahcesehir University. 
              I'm deeply interested in web development, software architectures, and creating innovative solutions 
              that can make a real impact.
            </p>

            <h2 className="text-2xl font-bold mb-4">My Journey</h2>
            <p className="text-lg mb-8">
              My journey in software development started with Java during my early university years. 
              Since then, I've expanded my skills to include modern web technologies and frameworks. 
              I'm particularly excited about full-stack development and building scalable applications.
            </p>

            <h2 className="text-2xl font-bold mb-4">What I Do</h2>
            <p className="text-lg mb-8">
              I specialize in developing modern web applications using React and Next.js, with a strong focus on 
              creating intuitive user interfaces and responsive designs. I'm passionate about writing clean, 
              efficient code and building seamless user experiences. Through continuous learning and hands-on 
              projects, I stay current with the latest web development trends and best practices.
            </p>

            <h2 className="text-2xl font-bold mb-4">Beyond Coding</h2>
            <p className="text-lg mb-8">
              When I'm not coding, you can find me exploring new technologies, playing guitar, or working on 
              photography. I believe in continuous learning and staying updated with the latest developments 
              in the tech world.
            </p>

            <h2 className="text-2xl font-bold mb-6">Technical Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="flex flex-col items-center">
                <FaHtml5 className="text-4xl mb-2" />
                <span>HTML5</span>
              </div>
              <div className="flex flex-col items-center">
                <FaCss3Alt className="text-4xl mb-2" />
                <span>CSS3</span>
              </div>
              <div className="flex flex-col items-center">
                <SiJavascript className="text-4xl mb-2" />
                <span>JavaScript</span>
              </div>
              <div className="flex flex-col items-center">
                <SiTypescript className="text-4xl mb-2" />
                <span>TypeScript</span>
              </div>
              <div className="flex flex-col items-center">
                <FaReact className="text-4xl mb-2" />
                <span>React</span>
              </div>
              <div className="flex flex-col items-center">
                <FaNodeJs className="text-4xl mb-2" />
                <span>Node.js</span>
              </div>
              <div className="flex flex-col items-center">
                <SiMysql className="text-4xl mb-2" />
                <span>MySQL</span>
              </div>
              <div className="flex flex-col items-center">
                <SiPython className="text-4xl mb-2" />
                <span>Python</span>
              </div>
              <div className="flex flex-col items-center">
                <SiDjango className="text-4xl mb-2" />
                <span>Django</span>
              </div>
              <div className="flex flex-col items-center">
                <FaGitAlt className="text-4xl mb-2" />
                <span>Git</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 