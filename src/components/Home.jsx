/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import img from "../assets/img.jpg"

function Home({name, title}) {
  return (
    <div id="home" className="flex flex-col md:flex-row h-screen items-center justify-center p-4 bg-gradient-to-r from-gray-100 via-blue-200 to-blue-400">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 90, damping: 30 }}
        className="flex flex-col justify-center items-center bg-white text-gray-800 w-80 md:w-[45%] h-72 md:h-96 p-6 shadow-xl rounded-xl border border-gray-200"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 }
        }}
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-gray-900 sm:text-center">{name.toUpperCase()}</h1>
        <h2 className="text-lg md:text-2xl mt-4 font-light text-gray-500 sm:text-center">{title.toUpperCase()}</h2>
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 90, damping: 30 }}
        className="mt-6 md:mt-0 md:ml-20"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 }
        }}
      >
        <img
          src={img}
          alt="Swastik Mukherjee"
          className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full shadow-lg transform transition-transform duration-500"
        />
      </motion.div>
    </div>
  );
}

export default Home;
