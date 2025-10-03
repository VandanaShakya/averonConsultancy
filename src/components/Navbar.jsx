import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { FaArrowLeft, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png"



const Navbar =()=> {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#f1ebf0] bg-opacity-20 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-2">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        {/* Desktop Nav */}
       <nav className="hidden md:flex items-center space-x-10 font-bold">
  <a
    href="/"
    className="relative hover:text-[#AC81DC] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#AC81DC] after:transition-all after:duration-300 hover:after:w-full"
  >
    Home
  </a>
  <a
    href="/about"
    className="relative hover:text-[#AC81DC] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#AC81DC] after:transition-all after:duration-300 hover:after:w-full"
  >
    About
  </a>
  <a
    href="/services"
    className="relative hover:text-[#AC81DC] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#AC81DC] after:transition-all after:duration-300 hover:after:w-full"
  >
    Services
  </a>
  
</nav>


        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Get Started Button (Desktop) */}
      <Link to='/contact-us'>
          <button className="cursor-pointer hidden md:flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-4 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-300">
         Contact us
        </button>
      </Link>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <ul className="flex flex-col space-y-4 p-6">
            <li>
              <a href="/home" className="hover:text-yellow-400">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-yellow-400">
                Services
              </a>
            </li>
           
            <li>
              <Link to='/contact-us'>
                <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-4 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-300">
               Contact Us
              </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
export default Navbar