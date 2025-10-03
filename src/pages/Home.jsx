import React, { useState, useRef,useEffect } from 'react';
import { Link } from 'react-router-dom'
import doctorImg from '../assets/heroassets/doctorimg.png';
import {
  cardData,
  servicesData,
  IconMap,
  SPECIALISTS_DATA,
  MODAL_DATA_MAPPING,
  testimonials,
  features
} from './data.jsx';
import  images  from '../assets/images';
import { Check, Search, ClipboardList, PlayCircle, RefreshCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};


const Home = () => {


  const [modalData, setModalData] = useState(null);
  const [index, setIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const openModal = (id) => {
    setModalData(MODAL_DATA_MAPPING[id] || null);
  };

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // paqttern image //
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8 } } };

    const patternSrc = images?.pattern || images.healthImage1;

  return (
    <>
      {/* HERO SECTION (animated on scroll into view) */}
      <section className="w-full mt-30 flex items-center justify-center">
        <motion.div
          className="relative w-11/12 md:w-4/5 lg:w-4/5 rounded-2xl overflow-hidden shadow-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div
            className="relative bg-gradient-to-tr from-pink-200 to-[#996CD7] px-6 py-24 sm:py-32 md:py-40 lg:py-48 min-h-[500px] flex flex-col justify-center"
            variants={fadeUp}
          >
            <div className="pointer-events-none">
              <div className="absolute -top-20 -left-20 sm:-top-24 sm:-left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#e0d4fc] to-[#eaacf8] z-0" />
              <div className="absolute -bottom-20 -right-20 sm:-bottom-24 sm:-right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-pink-200 to-voilet-300 z-0" />
            </div>

            <div className="absolute inset-0 flex flex-col items-center justify-center z-30 px-6 lg:px-20 space-y-8">
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-md z-40 text-center"
                variants={fadeUp}
                transition={{ delay: 0.2 }}
              >
                Empowering your business with insights from 150+ global consultants
              </motion.h1>

              <motion.div
                className="flex flex-col lg:flex-row items-center gap-12 z-40"
                variants={fadeUp}
                transition={{ delay: 0.5 }}
              >
                <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-12 z-40 px-6 lg:px-20">
                  <motion.div className="flex-1 text-left max-w-md lg:ml-[-50px]" variants={fadeUp}>
                    <p className="text-base sm:text-lg md:text-xl text-white/60">
                    We empower pharmaceutical, biotech, and healthcare organizations to achieve sustainable growth, unlock market access, and capture long-term value.
                    </p>
                  </motion.div>

                  <motion.div className="relative flex justify-center -mt-6" variants={fadeUp}>
                    <img
                      src={doctorImg}
                      alt="Doctor"
                      loading="lazy"
                      className="w-48 h-48 sm:w-64 sm:h-64 object-cover border-4 border-white rounded-full"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* THIRD SECTION - Cards (staggered, animate on enter) */}
      <div className="flex justify-center w-full">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 w-[83%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={containerVariants}
        >
          {cardData.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.id}
                className={`${card.bgColor} relative rounded-lg p-6 shadow-lg flex flex-col justify-between h-full`}
                variants={cardVariants}
                whileHover={{ scale: 1.05 }}
              >
                <div className="absolute top-4 right-4">
                  <Icon className="text-2xl text-red-500" />
                </div>
                <h2 className="text-xl font-bold mb-4 font-serif">{card.title}</h2>
                <p className="text-gray-800 mb-6 font-sans">{card.description}</p>
                <button className="mt-auto bg-[#181A39] text-white py-2 px-4 rounded hover:bg-[#181A60] transition duration-300 cursor-pointer">
                  Scheduling Now
                </button>
              </motion.div>
            );
          })}
        </motion.div>
      </div>


{/* why us  */}
 <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 font-['Inter']">
      
      {/* Main Container - Responsive Layout */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

        <div className="lg:w-7/12 w-full">
          <p className="text-xs font-semibold text-purple-600 uppercase tracking-widest mb-3">
            FEATURES
          </p>
          
          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-8">
            Why Choose Averon Consulting
          </h1>
          
          {/* Descriptive Text (Mimicking the look of the original) */}
          <p className="text-lg text-gray-600 mb-10 max-w-xl">
            We provide deep expertise and flexible engagements tailored to the unique challenges of the Healthcare & Life Sciences sector.
          </p>

          {/* Feature List with Checkmark Icons */}
          <div className="space-y-6 mb-12">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start">
                {/* Checkmark Icon in Circle */}
                <div className="flex-shrink-0 mr-4 mt-1">
                  <div className="h-6 w-6 rounded-full bg-purple-100 flex items-center justify-center">
                    <Check className="h-4 w-4 text-purple-600 font-bold" />
                  </div>
                </div>
                {/* Feature Text */}
                <p className="text-lg text-gray-800 font-medium">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
          
          {/* Button: Know More */}
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-[1.05]">
            Know More
          </button>
        </div>

        {/* --- Right Image/Illustration Block (30% width on desktop) --- */}
        {/* We are creating a placeholder that mimics the stylized, multi-layered UI image. */}
        <div className="lg:w-5/12 w-full mt-10 lg:mt-0 relative flex justify-center lg:justify-end">
          {/* Background element for visual interest */}
          <div className="hidden md:block absolute w-80 h-80 bg-pink-100/50 rounded-full blur-3xl -top-10 -right-10 transform rotate-45"></div>

          {/* Main Illustration Placeholder (A mock chat UI, similar to the image) */}
          <div className="relative w-full max-w-md aspect-[4/5] bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl shadow-2xl p-6 overflow-hidden">
             {/* Simple Mock Chat Window UI */}
            <div className="text-white">
              <div className="flex items-center justify-between border-b border-white/30 pb-3 mb-4">
                <span className="text-xl font-bold">Averon Chat</span>
                <div className="flex space-x-2">
                  <span className="w-2 h-2 rounded-full bg-red-400"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-start">
                  <div className="bg-white/20 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">Hi! I need quick due diligence on a new MedTech launch.</p>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="bg-white p-3 rounded-lg max-w-[80%] text-indigo-900">
                    <p className="text-sm">We can start immediately. Which region are you focused on?</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white/20 p-3 rounded-lg max-w-[80%]">
                    <p className="text-sm">APAC and ME, due by end of next week.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center text-sm font-light text-white/80">
                <p>Chatting with Global Insights Team...</p>
              </div>
            </div>
          </div>
          
        </div>

      </div>
    </div>


 <div className="flex justify-center">
      <motion.div
        className="w-4/5 px-6 md:px-12 lg:px-20 py-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={{ visible: { transition: { staggerChildren: 0.14 } } }}
      >
        {/* Header */}
        <motion.div className="text-center mb-8" variants={fadeUp}>
          <h2 className="text-3xl font-bold">Our Health Performance Insights</h2>
          <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
            Our platform simplifies expense management—here’s why it’s crucial for your business’s financial success.
          </p>
        </motion.div>

        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12" variants={fadeUp}>
          <div className="relative rounded-lg overflow-hidden h-[250px]">
            <img
              src={patternSrc}
              alt="pattern background"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30"
            />

            <div className="relative bg-gradient-to-tr-[] rounded-lg p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">Expense Efficiency</h3>
                <p className="text-gray-700">
                  Optimize healthcare expense tracking with real-time insights and analytics.
                </p>
              </div>
              <button className="mt-4 bg-white px-4 py-2 rounded shadow hover:bg-gray-100 self-start">
                Learn More →
              </button>
            </div>
          </div>

          {/* Middle - image */}
          <div className="rounded-lg overflow-hidden h-[250px]">
            <img src={images.health1} alt="Expense" loading="lazy" className="w-full h-full object-cover" />
          </div>

          {/* Right - image */}
          <div className="rounded-lg overflow-hidden h-[250px]">
            <img src={images.health2} alt="Data" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Bottom Section: text wider + image */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6" variants={fadeUp}>
          {/* Large text block spanning 2 cols with pattern background */}
          <div className="relative rounded-lg overflow-hidden min-h-[250px] md:col-span-2">
            <img
              src={patternSrc}
              alt="pattern background"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-30"
            />

            <div className="relative bg-blue-100/90 rounded-lg p-6 flex flex-col justify-between h-full">
              <div>
                <h3 className="text-xl font-semibold mb-2">Data Insights</h3>
                <p className="text-gray-700">
                  Make better decisions with accurate, visualized, and actionable data.
                </p>
              </div>
              <button className="mt-4 bg-white px-4 py-2 rounded shadow hover:bg-gray-100 self-start">
                Learn More →
              </button>
            </div>
          </div>

          {/* Image block */}
          <div className="rounded-lg overflow-hidden min-h-[250px]">
            <img src={images.health3} alt="Insights" loading="lazy" className="w-full h-full object-cover" />
          </div>
        </motion.div>
      </motion.div>
    </div>


      {/* FOURTH SECTION - Timeline (animate on scroll) */}
      <section id="provide-services" className="bg-[#f3f7fb] py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            className="flex flex-col md:flex-row md:items-start justify-between mb-10 md:mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.12 } }
            }}
          >
            <motion.div className="mb-6 md:mb-0" variants={fadeUp}>
              <h3 className="inline-block bg-gradient-to-r from-pink-400 to-purple-500 text-white px-4 py-2 rounded-l shadow-md font-semibold">
                Provide Services
              </h3>
              <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-900">Problem Timeline</h2>
            </motion.div>

            <motion.p className="max-w-xl text-sm md:text-base text-gray-600" variants={fadeUp}>
              Tracking and resolving healthcare issues efficiently requires a clear timeline. A structured problem
              timeline ensures timely actions, better patient outcomes, and improved care management.
            </motion.p>
          </motion.div>

          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-0 md:gap-x-0 min-h-[480px]">
            <motion.div
              className="flex items-end justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative transform -rotate-6 md:-rotate-10 w-full md:w-[70%] lg:w-[65%] bg-teal-100/90 rounded-2xl p-6 md:p-8 shadow-lg">
                <Search className="absolute top-4 right-4 w-6 h-6 text-gray-700" />
                <div className="text-lg font-semibold text-gray-800">1. Issue Identification</div>
                <p className="mt-2 text-sm text-gray-700">Detecting and analysing healthcare challenges affecting patients or services.</p>
                <p className="mt-2 text-sm text-gray-600">Early recognition ensures fewer complications and faster resolutions.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-end justify-end"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="relative transform rotate-6 md:rotate-10 w-full md:w-[75%] lg:w-[60%] bg-purple-500 text-white rounded-2xl p-6 md:p-8 shadow-2xl">
                <ClipboardList className="absolute top-4 right-4 w-6 h-6 text-white/90" />
                <div className="text-lg md:text-xl font-semibold">2. Assessment & Planning</div>
                <p className="mt-3 text-sm md:text-base text-white/90">Evaluating the issue and creating a strategy for resolution.</p>
                <p className="mt-2 text-sm text-white/80">Structured planning minimizes risks and maximizes patient safety.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-end justify-start"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <div className="relative transform -rotate-6 md:-rotate-10 w-full md:w-[72%] lg:w-[60%] bg-purple-500 text-white rounded-2xl p-6 md:p-8 shadow-2xl">
                <PlayCircle className="absolute top-4 right-4 w-6 h-6 text-white/90" />
                <div className="text-lg font-semibold">3. Implementation</div>
                <p className="mt-3 text-sm text-white/90">Applying solutions with continuous monitoring for effectiveness.</p>
                <p className="mt-2 text-sm text-white/80">Consistent feedback loops ensure adjustments happen in real-time.</p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-end justify-end"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <div className="relative transform rotate-6 md:rotate-10 w-full md:w-[72%] lg:w-[60%] bg-teal-100/90 rounded-2xl p-6 md:p-8 shadow-lg">
                <RefreshCcw className="absolute top-4 right-4 w-6 h-6 text-gray-700" />
                <div className="text-lg font-semibold text-gray-800">4. Review & Optimization</div>
                <p className="mt-2 text-sm text-gray-700">Assessing results, refining processes, and ensuring long-term improvement.</p>
                <p className="mt-2 text-sm text-gray-600">Iterative improvements build stronger, future-ready healthcare systems.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* SERVICES / PACKAGES SECTION */}
      <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white font-sans">
        <motion.div
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.18 }}
          variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        >
          <motion.div className="text-center mb-10 md:mb-12" variants={fadeUp}>
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-3">These Are The <span className='text-[#AB2DE8]'>Services</span> We Serve To You</h1>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our Premium Health Check-up Packages, crafted to offer a personalized approach to your health needs
            </p>
          </motion.div>

          <motion.div className="flex flex-wrap justify-center gap-6 md:gap-8" variants={containerVariants}>
            {servicesData.map((pkg) => (
              <motion.div
                key={pkg.id}
                className="flex flex-col flex-1 min-w-[280px] max-w-sm rounded-xl bg-emerald-50/70 p-6 shadow-lg transition duration-300 hover:shadow-xl hover:scale-[1.01] border border-emerald-100"
                variants={cardVariants}
              >
                <div className="flex-grow mb-6">
                  <div className="bg-emerald-200/50 rounded-full w-fit p-3 mb-5">{IconMap[pkg.iconKey]}</div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">{pkg.title}</h3>
                  <ul className="space-y-2 text-sm text-gray-700 list-none p-0">
                    {pkg.description.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-4 h-4 text-emerald-500 mr-2 mt-1 flex-shrink-0" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-emerald-200 mt-4">
                  <p className="text-lg font-bold text-gray-900">{pkg.tag}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>


      {/* PROFESSIONALS / SWIPER (lazy images + animate when in view) */}
     <div className="py-20 bg-gray-50 font-sans">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center px-4 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.18 }}
        variants={fadeUp}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Created for experts at the forefront of <span className="text-purple-600">healthcare excellence</span>
        </h1>
        <p className="text-lg text-gray-600">
          Discover a platform designed for trailblazing specialists. Our resources empower leaders in healthcare innovation and excellence.
        </p>
      </motion.div>

      {/* Swiper */}
      <motion.div
        className="relative max-w-7xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
        variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
      >
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            320: { slidesPerView: 1.2, spaceBetween: 15 },
            640: { slidesPerView: 2.2, spaceBetween: 25 },
            768: { slidesPerView: 3.2, spaceBetween: 30 },
            1024: { slidesPerView: 4, spaceBetween: 30 }
          }}
          loop={true}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          wrapperClass="flex items-center justify-center" // Vertical centering
          className="pb-16"
        >
          {SPECIALISTS_DATA.map((specialist) => (
            <SwiperSlide key={specialist.id} className="flex justify-center items-center">
              <div className="flex justify-center relative w-full max-w-lg h-[400px] rounded-xl overflow-hidden shadow-lg group">
                <img
                  src={specialist.imageUrl}
                  alt={specialist.name}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white flex flex-col justify-end h-full pb-8">
                  <h3 className="text-2xl font-bold mb-1 opacity-95">{specialist.name}</h3>
                  <p className="text-md font-medium text-gray-200 mb-4 opacity-90">{specialist.specialty}</p>
                  <button
                    onClick={() => openModal(specialist.id)}
                    data-spec-id={specialist.id}
                    className="self-start px-5 py-2 text-sm font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* Pagination */}
          <div className="swiper-pagination-custom mt-4"></div>
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            ref={prevRef}
            className="swiper-button-prev-custom p-3 rounded-full bg-gray-200 text-gray-800 hover:bg-gray-300 shadow-md"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            ref={nextRef}
            className="swiper-button-next-custom p-3 rounded-full bg-purple-600 text-white hover:bg-purple-700 shadow-md"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Modal */}
        {modalData && (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    {/* Background overlay */}
    <div className="absolute inset-0" onClick={() => setModalData(null)} />

    {/* Modal content */}
    <motion.div
      className="relative bg-white rounded-3xl shadow-2xl w-11/12 md:w-3/4 lg:w-2/5 max-h-[90vh] overflow-y-auto p-8"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      {/* Close button */}
      <button
        onClick={() => setModalData(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
      >
        ✕
      </button>

      {/* Profile image */}
      {modalData.imageUrl && (
        <div className="flex justify-center mb-6">
          <img
            src={modalData.imageUrl}
            alt={modalData.name}
            className="w-32 h-32 rounded-full object-cover shadow-lg"
          />
        </div>
      )}

      {/* Name & Specialty */}
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold text-purple-600">{modalData.name}</h2>
        <p className="text-lg font-semibold text-gray-700">{modalData.specialty}</p>
        <p className="text-sm text-gray-500 italic">{modalData.experience}</p>
      </div>

      {/* Bio */}
      {modalData.bio && (
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Biography</h3>
          <div className="text-sm text-gray-700 space-y-2">
            {modalData.bio.split("\n").map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      )}

      {/* Education */}
      {modalData.education?.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800">Education</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {modalData.education.map((edu, i) => (
              <li key={i}>{edu}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Expertise */}
      {modalData.expertise?.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800">Expertise</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {modalData.expertise.map((ex, i) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Key Engagements */}
      {modalData.keyEngagements?.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800">Key Engagements</h3>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            {modalData.keyEngagements.map((ke, i) => (
              <li key={i}>{ke}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Profile URL */}
      {modalData.profileUrl && (
        <div className="mt-6 text-center">
        
        </div>
      )}
    </motion.div>
  </motion.div>
)}

      </motion.div>
    </div>


      {/* ZYME / Testimonials (animated when in view) */}
      <section className="py-20 min-h-[650px] bg-gray-50">
        <motion.div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.h2 className="text-2xl font-bold text-center mb-6" variants={fadeUp}>
            150+ Minds. One Vision. Infinite Possibilities.
          </motion.h2>

          <motion.div className="text-center mb-10 px-4" variants={fadeUp}>
            <p className="text-gray-700 text-lg mb-4">
              Our European affiliate, <strong>Zyme Biotech</strong>, serves as a cornerstone of Averon Consulting’s international reach. Based in the United Kingdom, Zyme Biotech brings together a dynamic team of consultants with deep expertise across multiple sectors—including biotechnology, life sciences, pharmaceuticals, healthcare innovation, and regulatory strategy.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              With over 150 consultants operating across Europe, Zyme Biotech offers a powerful blend of scientific rigor and strategic insight. Their contributions are instrumental in driving forward complex projects, supporting cross-border collaborations, and delivering tailored solutions that meet the highest standards of global excellence.
            </p>
            <p className="text-gray-700 text-lg mb-4">
              This partnership strengthens Averon Consulting’s ability to serve clients with agility and precision, ensuring that every engagement benefits from both local market knowledge and international best practices.
            </p>
          </motion.div>

          <motion.div className="flex flex-col md:flex-row items-center bg-white rounded-xl shadow-lg p-10 md:p-14 gap-10" variants={fadeUp}>
            <div className="relative flex-shrink-0">
              <div className="bg-purple-200 rounded-lg absolute -left-4 sm:-left-6 top-0 sm:top-[-20px] w-40 sm:w-52 h-40 sm:h-52 md:w-64 md:h-64" />
              <img src={images.zyme} alt="Doctor" loading="lazy" className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 object-cover rounded-lg shadow-lg -translate-y-4 sm:-translate-y-6" />
            </div>

            <div className="flex-1 flex flex-col justify-between">
              <div className="mb-6">
                <p className="text-gray-700 text-lg">“{testimonials[index].text}”</p>
              </div>

              <div className="flex items-center gap-4">
                <img src={images.health1} alt={testimonials[index].name} loading="lazy" className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-semibold">{testimonials[index].name}</h4>
                  <p className="text-gray-500 text-sm">{testimonials[index].role}</p>
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button onClick={handleNext} className="px-6 py-3 bg-purple-500 text-white rounded hover:bg-purple-600 transition">Next</button>
                <button onClick={handlePrev} className="px-6 py-3 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition">Prev</button>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center">
            <button className="flex items-center justify-center mt-4 px-6 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition">
              Download Averon Consulting Profile
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </motion.div>
      </section>

      {/* SECOND HERO DUPLICATE (kept but also lazy-animated in case you need it) */}
      <section className="w-full mt-30 flex items-center justify-center">
        <motion.div className="relative w-11/12 md:w-4/5 lg:w-4/5 rounded-2xl overflow-hidden shadow-lg" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={{ visible: { transition: { staggerChildren: 0.12 } } }}>
          <motion.div className="relative bg-gradient-to-tr from-pink-200 to-[#996CD7] px-6 py-24 sm:py-32 md:py-40 lg:py-48 min-h-[500px] flex flex-col justify-center" variants={fadeUp}>
            <div className="pointer-events-none">
              <div className="absolute -top-20 -left-20 sm:-top-24 sm:-left-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#e0d4fc] to-[#eaacf8] z-0" />
              <div className="absolute -bottom-20 -right-20 sm:-bottom-24 sm:-right-24 w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-pink-200 to-voilet-300 z-0" />
            </div>

            <div className="absolute inset-0 flex flex-col items-start justify-center z-30 px-6 lg:px-20 space-y-8">
              <motion.h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white drop-shadow-md z-40 text-left" variants={fadeUp}>
                Empowering your business with insights from 150+ global consultants
              </motion.h1>

              <motion.div className="flex flex-col items-start gap-6 z-40" variants={fadeUp}>
                <motion.div className="max-w-2xl" variants={fadeUp}>
                  <p className="text-base sm:text-lg md:text-xl text-white/80">
                    A clean hero section with a pink-to-lavender gradient, decorative border circles, and an 80% width
                    content block on large screens. Fully responsive and easy to customize.
                  </p>
                </motion.div>

                <Link to='/contact-us'>
                  <motion.button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition duration-300" variants={fadeUp}>
                  Learn More
                </motion.button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default Home;

