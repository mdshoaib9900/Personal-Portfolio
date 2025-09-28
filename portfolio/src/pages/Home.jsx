import React from "react";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Project from "../components/sections/Project";
import Contact from "../components/sections/Contact";

function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Project />
      <Contact />
    </div>
  );
}

export default Home;
