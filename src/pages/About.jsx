import React, { useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import images from '../assets/images';

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
    <div className=''>

      {/* WHY CHOOSE / CONTENT GRID (animate on enter) */}
       

    </div>
  )
}

export default About