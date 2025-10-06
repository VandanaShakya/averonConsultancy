import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import images from '../assets/images';
import { contentData } from './data';



function About() {

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
    <div className=''>

      <section className="flex flex-col md:flex-row min-h-screen bg-white">
      
      <div className="md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24">
        <div className="max-w-xl">
          <p className="text-sm font-medium tracking-widest text-gray-500 uppercase mb-2">
            Development
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500 block">
              Visionary Ideas
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-indigo-500 block">
              for Technologies
            </span>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-500 block">
              of the Future
            </span>
          </h1>

          {/* Body Text */}
          <p className="text-gray-600 mb-10 text-lg">
            Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem
            quam semper libero, sit amet adipiscing sem neque sed ipsum. Aliquam
            lorem ante, dapibus in.
          </p>

          {/* View More Button */}
          <button className="px-8 py-3 text-sm font-semibold border border-gray-300 text-gray-700 hover:border-indigo-500 hover:text-indigo-500 transition duration-300">
            VIEW MORE
          </button>
        </div>
      </div>

      
      <div className="md:w-1/2 min-h-[40vh] md:min-h-screen relative overflow-hidden">
        <img
          src={images.aboutHero}
          alt="Person typing on a keyboard"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        <div className="absolute bg-white opacity-80 backdrop-filter backdrop-saturate-50"></div>
      </div>
    </section>
       

    </div>

    {/* our mission  */}
   <div className="py-20 px-6 sm:px-16 lg:px-32 font-sans min-h-[400px] flex items-center justify-center bg-transparent">
  <div className="max-w-7xl w-full text-left">
    
    <h2
      className="text-4xl sm:text-6xl font-semibold mb-6 tracking-widest uppercase 
                 bg-clip-text text-transparent 
                 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-400"
    >
      Who we are
    </h2>

    <p className="text-gray-800 text-xl sm:text-2xl leading-loose font-light max-w-5xl">
      Averon is a boutique consulting and advisory firm specializing in the life sciences sector. 
      With more than a decade of regional expertise and over 100 successful engagements, 
      we help multinational corporations, SMEs, and emerging local champions achieve their 
      growth ambitions in the Middle East.
    </p>
  </div>
</div>

    <div className="bg-white py-16 sm:py-24 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-2">
                Your Health & Life Sciences Partner
            </h1>
            <p className="text-xl text-gray-500">
                Bridging global vision with local execution for sustainable growth.
            </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {contentData.map((item) => {
            const isListContent = Array.isArray(item.content);
            
            return (
              <div key={item.number} className="relative p-6 sm:p-8 md:p-10 bg-transparent rounded-xl overflow-hidden group">
                
                <div 
                  className={`absolute top-[-10px] left-1/2 transform -translate-x-1/2 
                              text-9xl md:text-[160px] lg:text-[200px] font-extrabold 
                              bg-clip-text text-transparent bg-gradient-to-br ${item.gradient} 
                              opacity-50 transition-all duration-500 group-hover:top-[-20px]`}
                  style={{ lineHeight: 1 }}
                >
                  {item.number}
                </div>

                {/* Content Area - Increased top padding to avoid overlap, and text is centered */}
                <div className="relative pt-20 md:pt-24 text-center">
                  {/* Title */}
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
                    {item.title}
                  </h2>

                  {/* Content Area - Conditional rendering based on content type */}
                  {isListContent ? (
                    // Render list content for 'Capabilities'
                    <ul className="space-y-6 text-gray-700 text-left">
                      {item.content.map((subItem, index) => (
                        <li key={index}>
                          <h3 className="text-lg font-semibold text-gray-800 mb-1">{subItem.header}:</h3>
                          <p className="text-base text-gray-600">{subItem.description}</p>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    // Render paragraph content for 'Mission' and 'What Sets Us Apart'
                    <p className="text-base text-gray-600 leading-relaxed whitespace-pre-line">
                      {item.content}
                    </p>
                  )}
                </div>
                
                {/* Separator and View More */}
                <div className="mt-8 pt-4 border-t border-blue-100">
                 
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
 
    </>
  )
}

export default About