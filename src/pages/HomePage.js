import React, {useEffect, useState} from 'react';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

function Home() {
  const [scrolled, setScrolled] = useState(false);

  const changeScrolling = () => {
    setScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    changeScrolling();
    window.addEventListener('scroll', changeScrolling)
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled ? 1 : 0} />
      <Hero />
      <Projects />
      <Footer />
    </>
  )
}

export default Home;