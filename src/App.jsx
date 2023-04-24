import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div
      id="app"
      className="scroll-smooth w-screen h-screen m-0 snap-y snap-mandatory overflow-y-scroll"
    >
      <Header />
      <About />
      <Portfolio />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
