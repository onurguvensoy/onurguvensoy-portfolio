'use client'

import Link from 'next/link'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const projects = [
  {
    title: "Forum App",
    shortDescription: "A forum application with Node.js & MongoDB",
    description: `A full-featured forum application built with Node.js and MongoDB. This project includes:
    • User authentication and authorization
    • Real-time post creation and updates
    • Comment system with nested replies
    • Rich text editor for posts
    • File upload functionality
    • Responsive design for all devices`,
    icon: "/onurguvensoy-portfolio/images/forum.svg",
    technologies: ["Node.js", "MongoDB", "JavaScript", "Express.js", "JWT", "Socket.io"],
    githubUrl: "https://github.com/onurguvensoy/forum-app",
    features: [
      "User registration and authentication",
      "Create, read, update, and delete posts",
      "Comment system with threading",
      "Real-time notifications",
      "Search functionality",
      "User profiles"
    ]
  },
  {
    title: "Portfolio Website",
    shortDescription: "Personal portfolio built with Next.js",
    description: `A modern and responsive portfolio website showcasing my projects and skills. Features include:
    • Server-side rendering with Next.js
    • Responsive design with Tailwind CSS
    • Dark mode support
    • Contact form with email integration
    • PDF resume generation
    • Project showcase with filtering`,
    icon: "/onurguvensoy-portfolio/images/portfolio.svg",
    technologies: ["Next.js", "React", "TailwindCSS", "EmailJS", "Vercel"],
    githubUrl: "https://github.com/onurguvensoy/onurguvensoy-portfolio",
    features: [
      "Responsive design",
      "Dynamic project showcase",
      "Contact form integration",
      "PDF resume download",
      "Performance optimized images",
      "SEO friendly"
    ]
  },
  {
    title: "Flight Route Planner",
    shortDescription: "Route optimization with Java",
    description: `A Java application that helps users find optimal flight routes between cities using Dijkstra's algorithm. Key features:
    • Interactive GUI built with Java Swing
    • Real-time route calculation
    • Visual representation of routes
    • Distance and cost optimization
    • Multiple route suggestions
    • City information display`,
    icon: "/onurguvensoy-portfolio/images/flight.svg",
    technologies: ["Java", "Java Swing", "Algorithms", "Data Structures"],
    githubUrl: "https://github.com/onurguvensoy/Flight-Route-Planner",
    features: [
      "Dijkstra's algorithm implementation",
      "Interactive map interface",
      "Multiple route options",
      "Cost calculation",
      "Route visualization",
      "City database"
    ]
  },
  {
    title: "Go Bookstore API",
    shortDescription: "RESTful API with Go",
    description: `A RESTful API built with Go for managing a bookstore's inventory. The project demonstrates:
    • Clean architecture principles
    • RESTful API design
    • Database integration with MySQL
    • Authentication middleware
    • Input validation
    • Error handling`,
    icon: "/onurguvensoy-portfolio/images/bookstore.svg",
    technologies: ["Go", "REST API", "MySQL", "Docker", "JWT"],
    githubUrl: "https://github.com/onurguvensoy/GoBookstoreApi",
    features: [
      "CRUD operations for books",
      "User authentication",
      "Role-based access control",
      "Search and filtering",
      "Pagination support",
      "API documentation"
    ]
  },
  {
    title: "REST API Testing",
    shortDescription: "API testing automation",
    description: `A comprehensive API testing framework using Selenium and Postman. This project includes:
    • Automated test suites
    • Test case management
    • Report generation
    • CI/CD integration
    • Performance testing
    • Security testing scenarios`,
    icon: "/onurguvensoy-portfolio/images/api.svg",
    technologies: ["Selenium", "Postman", "API Testing", "JavaScript", "Newman"],
    githubUrl: "https://github.com/onurguvensoy/RestAPI-Selenium-Postman-Test",
    features: [
      "Automated API testing",
      "Test report generation",
      "CI/CD pipeline integration",
      "Performance metrics",
      "Error logging",
      "Test case management"
    ]
  }
]

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-white py-16 min-h-screen">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="prose prose-invert max-w-none mb-8">
            <h1 className="text-4xl font-bold text-center">My Projects</h1>
            <p className="text-center text-gray-300 mt-4">
              A collection of my projects showcasing my skills and experience in different technologies.
            </p>
          </div>

          <div className="space-y-4">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden hover:bg-gray-800 transition-colors duration-300 max-w-5xl mx-auto"
              >
                <div className="md:flex h-full">
                  <div className="md:w-1/4 h-[180px] md:h-[220px] relative bg-gray-800 flex items-center justify-center p-4">
                    <img 
                      src={project.icon}
                      alt={project.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="p-5 md:w-3/4 flex flex-col">
                    <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                    <p className="text-gray-300 mb-3 text-sm whitespace-pre-line">{project.description}</p>
                    
                    <div className="mb-3">
                      <h3 className="text-lg font-semibold mb-1">Key Features</h3>
                      <ul className="list-disc list-inside text-gray-300 text-sm grid grid-cols-1 md:grid-cols-2 gap-1">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-auto space-y-3">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-gray-800 px-2.5 py-0.5 rounded-full text-xs text-gray-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-end">
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          className="border border-white px-4 py-1.5 rounded-full hover:bg-white hover:text-black transition inline-flex items-center gap-2 text-sm"
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                          </svg>
                          View on GitHub
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 