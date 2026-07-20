//App.js
import logo from "./logo.svg";
// import React from 'react';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";




import Layout from "./components/Layout";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import  HowWeWorkSection from "./components/HowWeWorkSection";
import OurServices from "./components/OurServices/OurServices";
import PromoBlock from "./components/PromoBlock/PromoBlock";
import Feedback from "./components/Feedback/Feedback";
import AboutUs from "./components/AboutUs/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import PriceComponent from "./components/PriceComponent/PriceComponent";
import ContactComponent from "./components/ContactComponent/ContactComponent";
import FooterComponent from "./components/FooterComponent/FooterComponent";


import "./App.css";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <HeroSection />
        <HowWeWorkSection/>
        <OurServices/>
        <PromoBlock/>
        <Feedback/>
        <AboutUs/>
        <Gallery/>
        <PriceComponent/>
        <ContactComponent/>
        <FooterComponent/>
      </Layout>

      {/* <Router>
        
        <Routes>
           <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} /> 
        
        </Routes>
        
         <Main/>
        <Footer/> 
      </Router> */}
    </>
  );
}
export default App;
