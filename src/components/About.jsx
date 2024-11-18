/* eslint-disable react/prop-types */
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function About({about}) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.2 });

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1 }}
            id="about"
            className="bg-orange-100 min-h-screen flex items-center justify-center py-10 px-4"
        >
            <motion.div
                ref={ref}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: {
                        opacity: 1,
                        y: 0,
                        transition: { delayChildren: 0.3, staggerChildren: 0.2 },
                    },
                }}
                className="flex flex-col justify-center items-center bg-white text-gray-800 w-full max-w-4xl p-6 md:p-12 shadow-xl rounded-xl border border-gray-300"
                whileHover={{
                    scale: 1.02,
                    rotate: 1,
                    backgroundColor: '#fdf5e6',
                    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.15)',
                    transition: { duration: 0.3 },
                }}
            >
                <motion.h1
                    variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                    className="text-4xl font-bold mb-6 text-center"
                >
                    About Me
                </motion.h1>
                <motion.hr
                    variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
                    transition={{ duration: 0.6 }}
                    className="w-1/3 h-1 bg-gray-500 rounded mb-6 origin-left"
                />
                <motion.p
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                    className="text-lg leading-relaxed text-center sm:text-left"
                >
                    {about}
                </motion.p>
            </motion.div>
        </motion.div>
    );
}

export default About;
