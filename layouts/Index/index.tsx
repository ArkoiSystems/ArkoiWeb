import Projects from "@layouts/Projects";
import Footer from "@components/Footer";
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}
