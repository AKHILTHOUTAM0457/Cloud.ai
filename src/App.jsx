import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import "./App.css";

const App = () => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.75) {
          section.classList.add("active");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <AboutUs />
        <ContactUs />
      </main>
    </div>
  );
};

export default App;
