// import { useState } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
