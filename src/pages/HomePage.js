import React, {useEffect, useState} from 'react';

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";

function Home() {
  const [scrolled, setScrolled] = useState(false);

  const changeScrolling = () => {
    setScrolled(window.scrollY > 80);
  };

  useEffect(() => {
    window.addEventListener('scroll', changeScrolling)
  }, []);

  return (
    <>
      <Navbar scrolled={scrolled ? 1 : 0} />
      <Hero />
      <Projects />
    </>
  )
}

export default Home;