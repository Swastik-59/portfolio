/* eslint-disable react/prop-types */
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import { useState } from 'react';

function Contact({insta, github, linkedin}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_t34o975',
        'template_7c7ixxl',
        e.target,
        'NzgTfSX86a4YNnFO6'
      )
      .then(
        (result) => {
          console.log('Message sent successfully:', result.text);
          alert('Message sent successfully!');
          setFormData({
            name: '',
            email: '',
            message: ''
          });
        },
        (error) => {
          console.log('Error sending message:', error.text);
          alert('Oops! Something went wrong. Please try again later.');
        }
      );
  };

  return (
    <div id="contact" className="bg-orange-100 min-h-screen flex flex-col items-center justify-center py-10 px-4">
      <motion.div
        className="flex flex-col justify-center items-center bg-white text-gray-800 w-full max-w-4xl p-6 md:p-12 shadow-xl rounded-xl border border-gray-300"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Contact Me</h1>

        <motion.form
          className="w-full flex flex-col gap-6"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          onSubmit={sendEmail}
          autoComplete="off"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-blue-400"
            autoComplete="off"  // Turn off autocomplete for this input
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-blue-400"
            autoComplete="off"  // Turn off autocomplete for this input
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows="5"
            className="w-full p-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-blue-400 resize-none"
            autoComplete="off"  // Turn off autocomplete for this input
          ></textarea>

          <motion.button
            type="submit"
            className="bg-orange-500 text-white text-lg font-medium py-3 rounded-md shadow-md hover:bg-orange-600 transition duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
              transition: { duration: 0.3 }
            }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </motion.div>

      <motion.div
        className="flex flex-row items-center gap-6 mt-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.a
          href={`${insta}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-600 hover:text-orange-500 transition"
          whileHover={{ scale: 1.2 }}
        >
          <FaInstagram />
        </motion.a>
        <motion.a
          href={`${linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-600 hover:text-orange-500 transition"
          whileHover={{ scale: 1.2 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href={`${github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-3xl text-gray-600 hover:text-orange-500 transition"
          whileHover={{ scale: 1.2 }}
        >
          <FaGithub />
        </motion.a>
      </motion.div>
    </div>
  );
}

export default Contact;
