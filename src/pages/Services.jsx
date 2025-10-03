import React, { useState, useEffect } from 'react'
import { Calendar, Check} from 'lucide-react';
import images from '../assets/images';
import { motion } from 'framer-motion'
import { serviceBlocks, extraBlocks, companyTieupRightData, companyTieupLeftData, FEATURES_DATA } from './data';


const Services = () => {
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

    {/* services hero section */}
   <div 
      className="min-h-screen font-inter antialiased py-20 sm:py-32 flex items-center justify-center" 
      // Setting a very light purple background, similar to the image
      style={{ 
        backgroundColor: '#f7f4fa', // A very light, warm purple/grey
      }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge Button */}
        <button 
          className="inline-flex items-center px-5 py-2 mb-8 text-sm font-semibold text-gray-700 bg-white rounded-full shadow-lg transition duration-300 hover:shadow-xl hover:bg-gray-50 uppercase tracking-widest"
          style={{
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)'
          }}
        >
          Welcome to Our Platform 
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>

        {/* Main Heading (Enhanced Responsive Size) */}
       <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-gray-900 mb-6 leading-tight">
  Transform your ideas into 
  <span className="hero-gradient-text block sm:inline font-extralight">
    stunning, beautiful digital experiences
  </span>
</h1>



        {/* Subtitle (Enhanced Readability) */}
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 font-medium">
          Transform your ideas into reality with our comprehensive suite of development tools and resources.
        </p>

        {/* CTA Button */}
        <button 
          className="px-12 py-4 text-lg font-semibold rounded-full text-white transition duration-300 transform hover:scale-[1.03] intro-button-shadow"
          style={{
            backgroundImage: 'linear-gradient(90deg, #a855f7, #c084fc)', // A slightly different gradient for the button
          }}
        >
          Get Started
        </button>
        
      </div>
    </div>



      {/* services first section */}
      <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 font-['Inter']">
        {/* Header */}
        <div className="max-w-7xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold text-purple-600 uppercase tracking-widest mb-2">
            FEATURED CONTENT
          </p>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Our Latest News & Insight
          </h1>
        </div>

        {/* Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading
            ? Array(3)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="animate-pulse flex flex-col bg-gray-200 rounded-xl shadow-lg overflow-hidden h-96"
                >
                  <div className="w-full h-72 bg-gray-300"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </div>
              ))
            : serviceBlocks.map((block, index) => (
              <motion.div
                key={index}
                className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-full h-72 overflow-hidden">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm mb-3">
                    <span className="text-pink-500 font-medium uppercase mr-4">
                      {block.tag}
                    </span>
                    <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-gray-500">{block.date}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 leading-tight mb-4">
                    {block.title}
                  </h2>

                  <ul className="text-sm text-gray-700 space-y-2 list-none pl-0">
                    {block.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Extra Row */}
        <motion.div
          className="col-span-full flex justify-center gap-10 mt-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          {loading
            ? Array(2)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="animate-pulse flex flex-col bg-gray-200 rounded-xl shadow-lg overflow-hidden h-96 w-full max-w-sm"
                >
                  <div className="w-full h-72 bg-gray-300"></div>
                  <div className="p-6 space-y-4">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-full"></div>
                    <div className="h-4 bg-gray-300 rounded w-5/6"></div>
                  </div>
                </div>
              ))
            : extraBlocks.map((block, index) => (
              <motion.div
                key={index}
                className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-2xl hover:scale-[1.02] cursor-pointer w-full max-w-sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                whileHover={{ scale: 1.03 }}
              >
                <div className="w-full h-72 overflow-hidden">
                  <img
                    src={block.image}
                    alt={block.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm mb-3">
                    <span className="text-green-500 font-medium uppercase mr-4">
                      {block.tag}
                    </span>
                    <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                    <span className="text-gray-500">{block.date}</span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 leading-tight mb-4">
                    {block.title}
                  </h2>

                  <ul className="text-sm text-gray-700 space-y-2 list-none pl-0">
                    {block.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </div>


{/* company tieups */}
<div
      className="min-h-screen font-inter antialiased py-16 sm:py-24"
      style={{ backgroundColor: "#f9f9ff" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="lg:flex lg:justify-between lg:items-end mb-12 lg:mb-16">
          <div className="mb-6 lg:mb-0">
            <h2 className="title-gradient text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              Case Structure
            </h2>
          </div>
          <p className="text-gray-600 max-w-lg lg:text-right text-base sm:text-lg">
            A Structured Case Framework Streamlines Patient Care, From
            Diagnosis To Treatment. It Ensures Accurate Documentation,
            Efficient Management, And Improved Health Outcomes.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center relative">
          {/* Left Side Blocks */}
          <div className="space-y-8 order-2 lg:order-1">
            {companyTieupLeftData.map((step, index) => (
              <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
        {/* Top Section: Icon and Tag */}
        <div className="flex justify-between items-center mb-4">
          <div className="bg-purple-200 p-3 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h-5m-5 0h10a2 2 0 002-2V8a2 2 0 00-2-2h-2.5a1.5 1.5 0 01-1.06-.44L10.44 3.44A1.5 1.5 0 009.38 3H7a2 2 0 00-2 2v13a2 2 0 002 2z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h-5m-5 0h10a2 2 0 002-2v-5l-2-2-3 3-5-5-2 2v5a2 2 0 002 2zM9 11a4 4 0 110-8 4 4 0 010 8zm-2 9a7 7 0 0114 0h-2c-1.28-2.12-3.81-3.5-6-3.5s-4.72 1.38-6 3.5H7z"
              ></path>
            </svg>
          </div>

          {/* Tag */}
          <div className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full font-semibold">
            Issue Identification 2 Days
          </div>
        </div>

        {/* Description Text */}
        <div>
          <p className="text-gray-800 text-lg font-medium leading-relaxed">
            Many Healthcare Websites Struggle With User Experience—Patients Often Find It Difficult To Navigate, Book Appointments,
          </p>
        </div>
      </div>
    </div>
            ))}
          </div>

          {/* Center Block */}
          <div
            className="relative flex justify-center items-center order-1 lg:order-2 p-4 sm:p-8 rounded-2xl"
            style={{
              backgroundColor: "white",
              boxShadow: "0 10px 15px rgba(0,0,0,0.05)",
            }}
          >
            <div className="overflow-hidden rounded-xl shadow-2xl w-full h-auto max-w-md lg:max-w-none">
              <div className="w-full h-[600px] rounded-xl relative">
                <img
                  src={images.logo}
                  alt="Central image block"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </div>

          <div className="space-y-8 order-3 lg:order-3">
            {companyTieupRightData.map((step, index) => (
             <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-sm">
        <div className="flex justify-between items-center mb-4">
          <div className="bg-purple-200 p-3 rounded-lg flex items-center justify-center">
            <svg
              className="w-6 h-6 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h-5m-5 0h10a2 2 0 002-2V8a2 2 0 00-2-2h-2.5a1.5 1.5 0 01-1.06-.44L10.44 3.44A1.5 1.5 0 009.38 3H7a2 2 0 00-2 2v13a2 2 0 002 2z"
              ></path>
              
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 20h-5m-5 0h10a2 2 0 002-2v-5l-2-2-3 3-5-5-2 2v5a2 2 0 002 2zM9 11a4 4 0 110-8 4 4 0 010 8zm-2 9a7 7 0 0114 0h-2c-1.28-2.12-3.81-3.5-6-3.5s-4.72 1.38-6 3.5H7z"
              ></path>
            </svg>
          </div>

          {/* Tag */}
          <div className="bg-purple-600 text-white text-sm px-3 py-1 rounded-full font-semibold">
            Issue Identification 2 Days
          </div>
        </div>

        {/* Description Text */}
        <div>
          <p className="text-gray-800 text-lg font-medium leading-relaxed">
            Many Healthcare Websites Struggle With User Experience—Patients Often Find It Difficult To Navigate, Book Appointments,
          </p>
        </div>
      </div>
    </div>
            ))}
          </div>
        </div>
      </div>
    </div>

{/* strategy and execution */}
        <div className="min-h-screen font-inter antialiased py-20 sm:py-32" style={{ backgroundColor: '#ffffff' }}>
      <script src="https://cdn.tailwindcss.com"></script>
      <style>{`
        .font-inter { font-family: 'Inter', sans-serif; }
        .gradient-text {
            background-image: linear-gradient(90deg, #10b981, #3b82f6); /* Emerald to Blue */
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            color: transparent;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header and Subtitle */}
        <div className="text-center mb-16">
          <h2 className="gradient-text text-4xl sm:text-5xl font-extrabold mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From Strategy to Execution: Solutions that Deliver Impact
          </p>
        </div>

        {/* Features Grid (Responsive layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES_DATA.map((item, index) => (
            <div
              key={index}
              className={`p-6 sm:p-8 bg-white rounded-2xl border-l-4 ${item.borderColor} transition duration-300 hover:translate-y-[-2px] flex flex-col relative overflow-hidden group`}
              style={{
                // Applying shadow from item data
                boxShadow: `0 4px 12px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(0, 0, 0, 0.03), 0 15px 30px -10px ${item.shadowColor}`,
              }}
            >
              
              {/* === Back Image/Icon Placeholder (Absolute Positioned) === */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-10 blur-sm transition duration-500 group-hover:opacity-20 group-hover:blur-sm transform translate-x-4 -translate-y-4"
                style={{
                  backgroundImage: `url(${item.backImageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: '50%',
                  zIndex: 0,
                }}
              ></div>

              {/* === Content (Relative Positioned to sit above the image) === */}
              <div className="relative z-10">
              
                {/* Category Badge */}
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1 text-xs font-semibold uppercase rounded-full ${item.badgeColor} ${item.iconColor}`}>
                    {item.category}
                  </span>
                </div>

                {/* Feature List */}
                <div className="flex flex-col space-y-4">
                  
                  {/* Main Feature Point (Title) */}
                  <div className="flex items-start">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-1 ${item.iconColor} p-0.5 mr-3`} />
                    <p className="text-lg font-bold text-gray-900 leading-snug">
                      {item.title}
                    </p>
                  </div>

                  {/* Sub-Detail (Details) */}
                  <div className="flex items-start pl-8">
                    {/* Blank space for alignment */}
                    <p className="text-sm text-gray-600 border-l border-gray-200 pl-4 py-1">
                      {item.details}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>

    </>
  )
}

export default Services