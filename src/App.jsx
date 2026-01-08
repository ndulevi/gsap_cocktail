import React from "react";
import { ScrollTrigger, SplitText } from "gsap/all";
import gsap from "gsap/gsap-core.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <div className="h-dvh bg-black"></div>
    </main>
  );
}

export default App;
