import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Heading from "./Components/Heading";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import { useTheme } from "./context/ThemeContext.jsx";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
      <Header />
      <Heading />
      <div id="about"><About /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="experience"><Experience /></div>
      <div id="contact"><Contact /></div>
      <Footer />
    </>
  );
};

export default App;
