'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'
import OnurImage from '../../../public/images/OnurImage.png'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function ResumePage() {
  const contentRef = useRef(null)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Prism) {
      window.Prism.highlightAll()
    }
  }, [])

  const handleDownload = async () => {
    const content = contentRef.current
    if (!content) return

    try {
      // Show loading state
      const button = document.querySelector('#download-button')
      const originalText = button.innerHTML
      button.innerHTML = '<span class="animate-spin">↻</span> Generating PDF...'

      // Clone the content for PDF generation
      const clonedContent = content.cloneNode(true)
      
      // Remove the photo section from the clone
      const photoSection = clonedContent.querySelector('.photo-section')
      if (photoSection) {
        photoSection.remove()
      }

      // Temporarily append cloned content to document
      clonedContent.style.position = 'absolute'
      clonedContent.style.left = '-9999px'
      document.body.appendChild(clonedContent)

      // Create canvas with higher quality settings
      const canvas = await html2canvas(clonedContent, {
        scale: 3,
        backgroundColor: '#000000',
        logging: false,
        useCORS: true,
        allowTaint: true,
        windowWidth: 1200,
        windowHeight: 1800,
        imageTimeout: 0,
        onclone: (clonedDoc) => {
          const style = clonedDoc.createElement('style')
          style.innerHTML = `
            @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
            * { font-family: 'Inter', sans-serif; }
          `
          clonedDoc.head.appendChild(style)
        }
      })

      // Remove temporary cloned content
      document.body.removeChild(clonedContent)

      // Create PDF with high quality settings
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: false
      })

      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()

      // Add image to PDF with high quality settings
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 1.0),
        'JPEG',
        0,
        0,
        pageWidth,
        pageHeight,
        undefined,
        'FAST'
      )

      pdf.save('onur-guvensoy-resume.pdf')

      // Restore button text
      button.innerHTML = originalText
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    }
  }

  return (
    <>
      <Navbar />
      <main className="bg-black text-white py-20">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
          <div className="flex justify-between items-center mb-12">
            <h1 className="text-4xl font-bold">Resume</h1>
            <button
              id="download-button"
              onClick={handleDownload}
              className="bg-white text-black px-6 py-2 rounded-full hover:bg-gray-200 transition flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Download PDF
            </button>
          </div>

          <article ref={contentRef} className="prose prose-invert max-w-none bg-black">
            <div className="text-center mb-16 photo-section">
              <div className="relative w-48 h-48 mx-auto mb-12">
                <Image
                  src={OnurImage}
                  alt="Onur Guvensoy"
                  fill
                  className="rounded-full object-cover"
                  priority
                  unoptimized
                />
              </div>
              <h1 className="text-4xl font-bold text-white mb-4">Onur GÜVENSOY</h1>
              <div className="flex items-center justify-center gap-2 text-gray-300 mb-2">
                <FaEnvelope className="text-lg" />
                <span>onur.guvensoy@bahcesehir.edu.tr</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-gray-300 mb-4">
                <FaPhone className="text-lg" />
                <span>+90 553 852 23 93</span>
              </div>
              <div className="flex justify-center space-x-4 mt-2">
                <a 
                  href="https://github.com/onurguvensoy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaGithub className="text-2xl" />
                </a>
                <a 
                  href="https://linkedin.com/in/onurguvensoy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <FaLinkedin className="text-2xl" />
                </a>
              </div>
            </div>

            <section className="mb-6">
              <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2 mb-3">EDUCATION</h2>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Bahcesehir University/Turkey</h3>
                <p className="text-gray-300">Engineering Faculty, Software Engineering</p>
                <p className="text-gray-300">Undergraduate Program</p>
                <p className="text-gray-400">Currently GPA: 3.2</p>
                <p className="text-gray-400">2021 – 2026</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold">Yahya Kemal Beyatlı Anatolian High School/Turkey</h3>
                <p className="text-gray-300">High School</p>
                <p className="text-gray-400">2017 – 2021</p>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2 mb-3">SKILLS</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="text-xl font-semibold mb-2">Programming & Technologies</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>OOP, Java Swing, UI design</li>
                    <li>Python, Django</li>
                    <li>HTML, CSS, JavaScript</li>
                    <li>Node.js, Express.js, React</li>
                    <li>TypeScript, SQL, MySQL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Other Skills</h3>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Algorithms</li>
                    <li>Database Design</li>
                    <li>Software Development Life Cycle</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2 mb-3">MEMBERSHIPS</h2>
              
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Yöntek Community Board Member</h3>
                <p className="text-gray-300">2021 – 2024</p>
                <p className="text-gray-400 max-w-2xl">
                  A community that enables university students to develop about their departments, 
                  and support each other for innovative and entrepreneurial movements.
                </p>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold">TEDx Bahçeşehir University Board Member</h3>
                <p className="text-gray-300">2023 – Present</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">AdAstra Rover Team Software Team</h3>
                <p className="text-gray-300">2023 – Present</p>
                <p className="text-gray-400">Member of the AI and graphic processor team at TeknoFest.</p>
              </div>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2 mb-3">LANGUAGES</h2>
              <p className="text-gray-300">English - Upper Intermediate</p>
            </section>

            <section className="mb-6">
              <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2 mb-3">INTERESTS</h2>
              <p className="text-gray-300">
                Hardware and Computers • Fitness • Guitar • 
                Music • Photography
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white border-b border-gray-700 pb-2 mb-3">CERTIFICATIONS</h2>
              <ul className="list-disc list-inside text-gray-300">
                <li>BOUN Data Summit '22</li>
                <li>Bahçeşehir University AI SUMMIT '24</li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
} 