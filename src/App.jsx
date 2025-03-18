import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";  
import './App.css';
import Header from './Components/header';
import Heading from './Components/Heading';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Footer from './Components/Footer'

const App = () => {
  return (
      <>
      <Header />
      <Heading />
      <About/>
      <Skills />
      <Projects />
      <Experience />
      <Footer />
      </>
)}
export default App;
