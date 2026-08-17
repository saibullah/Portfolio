import "../styles/Hero.css";
import profile from "../assets/IMG_4016.jpg.jpeg";
import resume from "../assets/saibullahresume.pdf";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowRight,
} from "react-icons/fa";

function Hero() {
  return (
    <motion.section
      className="hero"
      id="home"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container hero-content">

        <div className="hero-left">

          <p className="hero-greet">👋 Hello, I'm</p>

          <h1>Saibullah</h1>

          <h2>
            MERN Stack <span>Developer</span>
          </h2>

          <p className="hero-description">
            Passionate MERN Stack Developer focused on building
            responsive, scalable and modern web applications using
            React, Node.js, Express.js and MongoDB.
          </p>

          <div className="hero-buttons">

            <a href="#contact" className="primary-btn">
              Hire Me
              <FaArrowRight />
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-btn"
            >
              View Resume
            </a>

            <a
              href={resume}
              download
              className="secondary-btn"
            >
              Download
            </a>

          </div>

          <div className="social-icons">

            <a
              href="https://github.com/saibullah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/saibullah-s-7b44b23aa/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a href="mailto:mohamedsaibullah361@gmail.com">
              <FaEnvelope />
            </a>

          </div>

        </div>

        <div className="hero-right">

          <div className="image-box">
            <img src={profile} alt="Saibullah" />
          </div>

        </div>

      </div>
    </motion.section>
  );
}

export default Hero;