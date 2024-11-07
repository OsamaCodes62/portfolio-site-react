import React, { useState, useContext } from "react";
import * as fa from "react-icons/fa";
import * as bs from "react-icons/bs";
import "../css/navbar.css";
import "../css/hero.css";
import { ThemeContext } from "../App";



const Hero = ({ recentWorksRef, aboutRef, servicesRef, contactRef }) => {
  const [navbar, setNavbar] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const toggleNavbar = () => {
    setToggle(!toggle);
  };

  const changeBackground = () => {
    if (window.scrollY >= 120) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <section className="hero">
        {/* Navbar  */}
        <nav className={navbar ? "navbar active" : "navbar"}>
          <div className="logo">
            <span>Osama Ehsaan</span>
          </div>
          <div className={toggle ? "navbar-toggle nav-items" : "nav-items"}>
            <ul>
              <li>Home</li>
              <li onClick={() => recentWorksRef.current.scrollIntoView({ behavior: 'smooth' })} >Projects</li>
              <li onClick={() => servicesRef.current.scrollIntoView({ behavior: 'smooth' })}>Services</li>
              <li onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })}>About</li>
              <li onClick={() => contactRef.current.scrollIntoView({ behavior: 'smooth' })}>Contact</li>
              <li onClick={toggleTheme} style={{ fontSize: "1.3rem" }}>
                <bs.BsMoonStars />
              </li>
            </ul>
          </div>
          {/* Right Side  */}
          <div className="right">
            <a href="https://your-file-hosting-link/your-cv.pdf" download>
              <button className="btn download">Download CV</button>
            </a>
            <div className="toggle" onClick={toggleNavbar}>
              <fa.FaBars />
            </div>
          </div>
        </nav>
        {/* End of navbar  */}
        {/* Hero section inner  */}
        <div className="intro" data-aos="fade-right">
          <div className="details">
            <span>I am Osama Ehsaan</span>
            <span>A Full Stack developer and DevOps Engineer</span>
            <span>
              Passion for computers and learning. getting 1% better from previous day.
              <br />
              Constantly seeking new challenges and opportunities to grow.
            </span>
          </div>
          <div className="buttons">
            <button className="btn-blue mt-5"
              onClick={() => recentWorksRef.current.scrollIntoView({ behavior: "smooth" })}>
              Projects <bs.BsArrowRight />
            </button>
            <button className="btn-white mt-5" href="mailto:usama.ehsaan@gmail.com" target="_blank" rel="noopener noreferrer">
              Contact me <bs.BsArrowRight />
            </button>
          </div>
          <div className="socials mt-5">
            <span>
              <a href="https://github.com/OsamaCodes62" target="_blank" rel="noopener noreferrer">
                <bs.BsGithub />
              </a>
            </span>
            <span>
              <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
                <bs.BsTwitter />
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/oc_art62/" target="_blank" rel="noopener noreferrer">
                <bs.BsInstagram />
              </a>
            </span>
            <span>
              <a href="https://www.youtube.com/@oc_art62" target="_blank" rel="noopener noreferrer">
                <bs.BsYoutube />
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/muhammad-osama-ehsaan-a497441ba/" target="_blank" rel="noopener noreferrer">
                <bs.BsLinkedin />
              </a>
            </span>
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;
