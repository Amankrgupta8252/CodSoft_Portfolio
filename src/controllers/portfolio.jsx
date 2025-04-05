import React from "react";
import "../App.css";
import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Resume from "../pages/Resume"; // Ensure this matches the actual file name
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";

const Portfolio = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="flex justify-between items-center bg-gray-800 shadow-md">
        <h1 className="text-2xl font-bold">Aman Gupta</h1>
        <nav>
          <a href="#home" className="mx-4">
            <b>🏡Home</b>
          </a>{" "}
          <a href="#about" className="mx-4">
            <b>👤About</b>
          </a>{" "}
          <a href="#project" className="mx-4">
            <b>🖥️Projects</b>
          </a>{" "}
          <a href="#resume" className="mx-4">
            <b>📄Resume</b>
          </a>{" "}
          <a href="#contact" className="mx-4">
            <b>🤙Contact</b>
          </a>{" "}
        </nav>
      </header>
      <Home />
      <About />
      <Project />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Portfolio;
