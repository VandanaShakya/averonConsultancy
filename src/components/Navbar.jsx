import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
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
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#f1ebf0] bg-opacity-60 shadow-lg backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <motion.div
        className="flex items-center justify-between px-6 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {/* Logo */}
        <motion.div
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={logo} alt="Logo" className="h-12" />
        </motion.div>

        {/* Desktop Nav */}
        <motion.nav
          className="hidden md:flex items-center space-x-10 font-bold"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
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
        </motion.nav>

        {/* Hamburger Menu Icon */}
        <motion.div
          className="md:hidden"
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-2xl focus:outline-none"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </motion.div>

        {/* Get Started Button (Desktop) */}
        <Link to="/contact-us">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="cursor-pointer hidden md:flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-4 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-300"
          >
            Contact us
          </motion.button>
        </Link>
      </motion.div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={menuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="overflow-hidden md:hidden bg-white shadow-lg"
      >
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
            <Link to="/contact-us">
              <button className="flex items-center bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 px-4 rounded-xl shadow-lg hover:from-blue-700 hover:to-blue-600 transition duration-300">
                Contact Us
              </button>
            </Link>
          </li>
        </ul>
      </motion.div>
    </motion.header>
  );
};

export default Navbar;
