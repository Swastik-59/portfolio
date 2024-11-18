import { useState } from 'react';
import { motion } from "framer-motion"
import ScrollProgress from '../ref/ScrollProgress'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <ScrollProgress />
      <nav className="top-0 bg-white shadow-md z-10">
        <div className="flex justify-between items-center p-4 md:hidden">
          <span className="text-xl font-bold text-left">Portfolio</span>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <ul
          className={`${isOpen ? 'block' : 'hidden'
            } md:flex flex-col md:flex-row md:items-center justify-center space-y-4 md:space-y-0 md:space-x-10 p-4 text-lg font-normal`}
        >
          <a href='#home'>
            <motion.li whileTap={{ scale: .9 }} className="hover:text-blue-500 cursor-pointer">Home</motion.li>
          </a>
          <a href="#about"> 
            <motion.li whileTap={{ scale: .9 }} className="hover:text-blue-500 cursor-pointer">About</motion.li>
          </a>
          <a href='#project'>
            <motion.li whileTap={{ scale: .9 }} className="hover:text-blue-500 cursor-pointer">Projects</motion.li>
          </a>
          <a href='#contact'>
            <motion.li whileTap={{ scale: .9 }} className="hover:text-blue-500 cursor-pointer">Contact</motion.li>
          </a>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
