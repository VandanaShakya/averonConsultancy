import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Services from '../pages/Services.jsx';
import Contactus from '../pages/Contactus.jsx';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';


const routing = () => {
  return (
    <>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/contact-us' element={<Contactus/>}/>
    </Routes>
    <Footer/>
    </>
)
}

export default routing