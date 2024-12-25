'use client'

import { useRef, useState } from 'react'
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Link from 'next/link'

const projects = [
  {
    title: "Forum App",
    description: "A full-stack forum application built with Node.js, Express, and MongoDB. Features include user authentication, real-time updates, and nested comments.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04346 16.4525C3.22094 16.8088 3.28001 17.2161 3.17712 17.6006L2.5 21L6.39139 20.3385C6.77554 20.2358 7.18263 20.2952 7.54064 20.4727C8.88545 21.1406 10.3988 21.5164 12 21.5164" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 12H8.009M11.991 12H12M15.991 12H16" 
          stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    link: "https://github.com/onurguvensoy/forum-app",
    tech: ["Node.js", "MongoDB", "Express", "Socket.io"]
  },
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Tailwind CSS. Features responsive design, dark mode, and PDF resume generation.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path 
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path 
          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z" 
          stroke="currentColor" 
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    link: "https://github.com/onurguvensoy/onurguvensoy-portfolio",
    tech: ["Next.js", "React", "Tailwind CSS"]
  },
  {
    title: "Flight Route Planner",
    description: "A Java application for finding optimal flight routes using Dijkstra's algorithm. Includes interactive GUI and visual route display.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.5 9.5L9 15M16 15.5C16 16.8807 14.8807 18 13.5 18C12.1193 18 11 16.8807 11 15.5C11 14.1193 12.1193 13 13.5 13C14.8807 13 16 14.1193 16 15.5ZM9 9.5C9 10.8807 7.88071 12 6.5 12C5.11929 12 4 10.8807 4 9.5C4 8.11929 5.11929 7 6.5 7C7.88071 7 9 8.11929 9 9.5Z" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" 
          stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    link: "https://github.com/onurguvensoy/Flight-Route-Planner",
    tech: ["Java", "Swing", "Data Structures"]
  },
  {
    title: "Go Bookstore API",
    description: "RESTful API for a bookstore management system built with Go. Includes authentication, CRUD operations, and MySQL integration.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 14.5V17.5C19.5 18.8807 16.8137 20 13.5 20C10.1863 20 7.5 18.8807 7.5 17.5V14.5" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 10.5V13.5C19.5 14.8807 16.8137 16 13.5 16C10.1863 16 7.5 14.8807 7.5 13.5V10.5" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 6.5V9.5C19.5 10.8807 16.8137 12 13.5 12C10.1863 12 7.5 10.8807 7.5 9.5V6.5" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M13.5 8C16.8137 8 19.5 6.88071 19.5 5.5C19.5 4.11929 16.8137 3 13.5 3C10.1863 3 7.5 4.11929 7.5 5.5C7.5 6.88071 10.1863 8 13.5 8Z" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M6.5 10L4.5 11L12 15L19.5 11L17.5 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    link: "https://github.com/onurguvensoy/GoBookstoreApi",
    tech: ["Go", "MySQL", "REST API"]
  },
  {
    title: "REST API Testing",
    description: "Comprehensive API testing framework using Selenium and Postman. Features automated test suites and report generation.",
    icon: (
      <svg className="w-full h-full" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 5H9M15 8H9M9 11H12M9 14H12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 16L17 18L21 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C21.5093 4.43821 21.8356 5.80655 21.9449 8" 
          stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    link: "https://github.com/onurguvensoy/RestAPI-Selenium-Postman-Test",
    tech: ["Selenium", "Postman", "JavaScript"]
  }
]

export default function Home() {
  const sliderRef = useRef(null);
  const [animationDuration, setAnimationDuration] = useState(30);
  const [scrollDirection, setScrollDirection] = useState(1);

  const scroll = (direction) => {
    setAnimationDuration(prev => Math.max(10, prev - 5));
    setScrollDirection(direction === 'left' ? -1 : 1);
    setTimeout(() => {
      setAnimationDuration(30);
    }, 2000);
  };

  const animationStyle = {
    animation: `scroll ${animationDuration}s linear infinite`,
    animationDirection: scrollDirection === -1 ? 'reverse' : 'normal'
  };

  const ProjectCard = ({ project }) => (
    <Link 
      href={project.link}
      target="_blank"
      className="min-w-[350px] h-[350px] relative inline-block mx-2 group bg-gray-900 rounded-lg overflow-hidden"
    >
      <div className="h-full relative flex flex-col">
        {/* Image Container - Made slightly smaller */}
        <div className="w-full h-[200px] relative bg-gray-800 p-4 flex items-center justify-center text-gray-400 group-hover:text-gray-300 transition-colors">
          <div className="w-28 h-28">
            {project.icon}
          </div>
        </div>
        
        {/* Title and Tech Stack - Adjusted padding and spacing */}
        <div className="p-4 flex flex-col bg-gray-900 flex-grow">
          <h3 className="text-lg font-bold text-white mb-3">{project.title}</h3>
          <div className="flex flex-wrap gap-1.5">
            {project.tech.map((tech, techIndex) => (
              <span 
                key={techIndex}
                className="text-xs bg-gray-800 text-gray-300 px-2.5 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover Description - Adjusted font size and padding */}
        <div className="absolute inset-0 bg-black bg-opacity-95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-8">
          <p className="text-sm text-gray-300 text-center leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </Link>
  );

  return (
    <main className="bg-black">
      <Navbar/>
      <Hero/>
      <div className="bg-black text-white">
        <div className="relative px-8">
          <h2 className="text-4xl font-bold text-center mb-8">Featured Projects</h2>
          
          {/* Navigation Buttons - Adjusted positions */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
            aria-label="Previous project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800 hover:bg-gray-700 text-white rounded-full p-2 focus:outline-none"
            aria-label="Next project"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div className="overflow-hidden">
            <div className="flex whitespace-nowrap" style={animationStyle}>
              {/* First set of projects */}
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
              {/* Duplicate set for seamless loop */}
              {projects.map((project, index) => (
                <ProjectCard key={`duplicate-${index}`} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </main>
  )
} 