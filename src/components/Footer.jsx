'use client'

import Link from 'next/link'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <Link href="https://www.instagram.com/onurguvensoy/" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
              <FaInstagram />
            </Link>
            <Link href="https://x.com/somescuba5" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
              <FaTwitter />
            </Link>
            <Link href="https://www.linkedin.com/in/onurguvensoy/" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
              <FaLinkedin />
            </Link>
            <Link href="https://github.com/onurguvensoy" target="_blank" className="text-gray-400 hover:text-gray-900 transition-colors">
              <FaGithub />
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="/privacy" className="text-gray-400 hover:text-gray-900 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;