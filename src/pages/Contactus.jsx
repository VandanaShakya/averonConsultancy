import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import images from '../assets/images'

const Contactus = () => {
const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);


  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-600"></div>
        <p className="mt-4 text-lg font-medium text-gray-700">
          Loading Services...
        </p>
      </div>
    );
  }

  
  return (
   <>
       <div className="color-black mt-10 md:mt-20 lg:mt-32">
      <div className="relative overflow-hidden rounded-xl shadow-lg m-4 p-8 md:p-12 lg:p-16 h-100 
     bg-gradient-to-tr from-[#fffeff] to-[#ac93fc]">

        {/* Rotating Circle */}
        <motion.div
          className="absolute top-10 left-10"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          style={{ width: "120px", height: "120px" }}
        >
          <img
            src={images.ring}
            alt="top left"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom-right Image block (wave) */}
        <motion.div
          className="absolute bottom-10 right-10 w-28 h-28"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={images.doubleCircle}
            alt="bottom right"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Bottom-left Image block (wave) */}
        <motion.div
          className="absolute bottom-10 left-10 w-24 h-24"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={images.tripleRing}
            alt="bottom left"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Top-right Image block (wave) */}
        <motion.div
          className="absolute top-10 right-10 w-20 h-20"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.9 }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src={images.cross}
            alt="top right"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          className="relative z-20 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
         
<motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  className="text-4xl md:text-6xl font-extrabold mt-15 tracking-tight 
             bg-gradient-to-r from-[#6D28D9] via-[#9333EA] to-[#EC4899] 
             bg-clip-text text-transparent drop-shadow-sm"
>
  Get in Touch
</motion.h1>

          <nav className="flex items-center space-x-2 text-sm">
            <a
              href="/home"
              className="flex items-center text-gray-600 hover:text-indigo-600 transition duration-150"
            >
              <span className="mr-1">🏠</span> Home
            </a>

            <span className="text-gray-400">·</span>

            <span className="font-medium text-indigo-600">Contacts</span>
          </nav>
        </motion.div>
      </div>
    </div>


{/* address section  */}
 <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header/Title Section */}
        <div className="text-center mb-12 md:mb-16 relative">
          
          {/* Decorative element from the top-left */}
          <motion.div 
            className="absolute top-[-4rem] left-2 w-5 h-5 border border-gray-300 rounded-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          ></motion.div>
          
          <motion.p 
            className="text-indigo-600 uppercase tracking-widest text-sm font-semibold mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0 }}
          >
            LET'S TALK
          </motion.p>
          
          <motion.h2 
            className="text-3xl md:text-4xl font-extrabold text-gray-900 mx-auto max-w-lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Engage in conversation with skilled engineers.
          </motion.h2>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          
          {/* --- CARD 1: Chat with us. --- */}
          <motion.div
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl flex flex-col items-center text-center h-full border border-gray-100"
            initial={{ y: 50, opacity: 0 }} // Inline initialAnim
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }} // Inline getTransition
          >
            {/* Icon Wrapper and Chat Icon SVG (Inline) */}
            <div className="relative w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-indigo-50/50">
              <div className="absolute inset-0 rounded-full blur-sm opacity-50" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(167, 139, 250, 0.5) 0%, transparent 70%)' }}></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-indigo-600 z-10">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Chat with us.</h3>

            <div className="text-gray-500 text-sm space-y-1">
              <p>Monday - Friday: 8am to 6pm.</p>
            </div>
          </motion.div>


          {/* --- CARD 2: Give us a call --- */}
          <motion.div
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl flex flex-col items-center text-center h-full border border-gray-100"
            initial={{ y: 50, opacity: 0 }} // Inline initialAnim
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }} // Inline getTransition
          >
            {/* Icon Wrapper and Phone Icon SVG (Inline) */}
            <div className="relative w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-indigo-50/50">
              <div className="absolute inset-0 rounded-full blur-sm opacity-50" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(167, 139, 250, 0.5) 0%, transparent 70%)' }}></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-indigo-600 z-10">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Give us a call</h3>

            <div className="text-gray-500 text-sm space-y-1">
              <p>+480-555-0103</p>
              <p>+239-555-0108</p>
            </div>
          </motion.div>
          

          {/* --- CARD 3: Email with us. --- */}
          <motion.div
            className="bg-white p-8 md:p-10 rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl flex flex-col items-center text-center h-full border border-gray-100"
            initial={{ y: 50, opacity: 0 }} // Inline initialAnim
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }} // Inline getTransition
          >
            {/* Icon Wrapper and Email Icon SVG (Inline) */}
            <div className="relative w-16 h-16 mb-6 flex items-center justify-center rounded-full bg-indigo-50/50">
              <div className="absolute inset-0 rounded-full blur-sm opacity-50" style={{ background: 'radial-gradient(circle at 70% 30%, rgba(167, 139, 250, 0.5) 0%, transparent 70%)' }}></div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-indigo-600 z-10">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-2">Email with us.</h3>

            <div className="text-gray-500 text-sm space-y-1">
              <p className="text-indigo-600 hover:underline cursor-pointer">support.young@example.com</p>
              <p className="text-indigo-600 hover:underline cursor-pointer">bill.robert@example.com</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>



    {/* form with map */}
     <div className="min-h-screen bg-gray-50 font-sans">

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

      {/* --- Left Column: Map Block --- */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">
            FIND US HERE
          </p>
          <h2 className="text-2xl font-bold text-gray-900">
            Our Location
          </h2>
        </div>
        <div className="w-full h-[500px]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902334085318!2d90.39388241536307!3d23.75090338458936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b85f69dc1d0f%3A0x3f4d48bfcbe3a0!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sin!4v1696345212345!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location Map"
          ></iframe>
        </div>
      </div>

      {/* --- Right Column: Form Block --- */}
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-6">
          Contact Us
        </h3>

        <form className="space-y-6">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 pl-12"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 pl-12"
            />
          </div>

          {/* Message */}
          <div>
            <textarea
              placeholder="Type your message"
              rows="6"
              className="w-full p-4 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500 resize-none"
            ></textarea>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="w-full py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150"
            >
              Get in Touch
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
   </>

  )
}

export default Contactus