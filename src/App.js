import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createContext, useEffect, useState, useRef } from "react";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Freelance from "./components/Freelance";
import CounterSection from "./components/CounterSection";
import RecentWorks from "./components/RecentWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

export const ThemeContext = createContext(null);

function App() {
  const recentWorksRef = useRef(null); // Define recentWorksRef
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    setTheme(!theme);
  };

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div className="App" id={theme ? "dark" : "light"}>
          <Hero
            recentWorksRef={recentWorksRef}
            aboutRef={aboutRef}
            servicesRef={servicesRef}
            contactRef={contactRef}
          />{" "}
          {/* Pass recentWorksRef as a prop */}
          <Skills />

          <div ref={servicesRef}>
            <Freelance />
          </div>

          <CounterSection />

          <div ref={recentWorksRef}>
            <RecentWorks />
          </div>

          <div ref={contactRef}>
            <Contact />
          </div>

          <div ref={aboutRef}>
            <Footer />
          </div>
          
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
