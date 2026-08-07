import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import FeaturedProjects from "../components/projects";
import TechStack from "../components/skills";
import Education from "../components/education";
import Contact from "../components/contact";
import Footer from "../components/footer";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#projects") {
      document
        .getElementById("projects")
        ?.scrollIntoView({
          behavior: "smooth",
        });
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <FeaturedProjects />
      <TechStack />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}