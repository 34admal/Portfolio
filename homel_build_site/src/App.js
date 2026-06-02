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
import Footer from "./components/Footer";

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
