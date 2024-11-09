import React, { useContext } from 'react'
import '../css/footer.css'
import * as bs from 'react-icons/bs';
import { ThemeContext } from "../App";

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <div className="footer">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill={theme ? '#000' : '#fff'}
            fill-opacity="1"
            d="M0,64L34.3,69.3C68.6,75,137,85,206,112C274.3,139,343,181,411,192C480,203,549,181,617,160C685.7,139,754,117,823,101.3C891.4,85,960,75,1029,106.7C1097.1,139,1166,213,1234,213.3C1302.9,213,1371,139,1406,101.3L1440,64L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
          ></path>
        </svg>
        <div className="container footer-inner">
          <div className="row d-flex justify-content-center">
            <div className="col-md-6 text-center">
              <h1 className='mb-3'>ABOUT ME</h1>
              <p className='description'>
                I’m Osama Ehsaan, a passionate Full Stack Developer and DevOps Engineer. I specialize in developing scalable web applications using cutting-edge technologies such as React, Node.js, and Cloud services (Kubernetes, Docker, AWS).
                <br />
                With a keen eye for detail and a strong drive for continuous improvement, I strive to create seamless user experiences and optimize backend architectures. I’m always eager to learn, grow, and take on new challenges in the tech space.
                <br />
                When I’m not coding, I enjoy exploring new design tools like Figma and experimenting with creative ways to improve my workflow.
              </p>
              <div className="socials mt-4 justify-content-center">
                <span>
                  <a href="https://github.com/OsamaCodes62" target="_blank" rel="noopener noreferrer">
                    <bs.BsGithub />
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
          </div>
        </div>


      </div>
    </>
  )
}

export default Footer