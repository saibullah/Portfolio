import "../styles/Hero.css";
import profile from "../assets/IMG_4016.jpg.jpeg";
import resume from "../assets/saibullahres.pdf";

import { motion } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
  FaArrowRight
} from "react-icons/fa";

function Hero() {
  return (
    <section className="spatial-hero" id="home">

      {/* Background Grid */}

      <div className="space-grid"></div>

      <div className="hero-noise"></div>

      {/* Small Coordinates */}

      <div className="coordinate top-left">
        09°09'N / 77°52'E
      </div>

      <div className="coordinate top-right">
        SYSTEM / ONLINE
      </div>

      <div className="coordinate bottom-left">
        PORTFOLIO 2026
      </div>

      <div className="coordinate bottom-right">
        SCROLL TO EXPLORE ↓
      </div>


      <div className="hero-main">

        {/* LEFT */}

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="hero-label">
            <span></span>
            DEVELOPER WORKSPACE
          </div>

          <p className="hero-intro">
            Hello, I'm
          </p>

          <h1>
            Saibullah
          </h1>

          <h2>
            Junior <span>MERN</span> Stack Developer
          </h2>

          <p className="hero-description">
            I build responsive and scalable web applications
            using React, Node.js, Express.js and MongoDB.
          </p>


          <div className="hero-tech-line">

            <span>REACT</span>
            <i>•</i>

            <span>NODE</span>
            <i>•</i>

            <span>EXPRESS</span>
            <i>•</i>

            <span>MONGODB</span>

          </div>


          <div className="hero-buttons">

            <a href="#projects" className="spatial-primary-btn">
              Explore Projects
              <FaArrowRight />
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noopener noreferrer"
              className="spatial-secondary-btn"
            >
              View Resume
            </a>

          </div>


          <div className="hero-socials">

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

        </motion.div>


        {/* RIGHT - SPATIAL PROFILE */}

        <motion.div
          className="spatial-profile"
          initial={{ opacity: 0, scale: 0.7, rotateY: 20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2 }}
        >

          <div className="profile-orbit orbit-one"></div>
          <div className="profile-orbit orbit-two"></div>

          <div className="profile-card">

            <div className="card-top">
              <span>PROFILE_01</span>
              <span>ONLINE</span>
            </div>

            <div className="profile-image-wrapper">

              <img
                src={profile}
                alt="Saibullah"
              />

            </div>

            <div className="profile-info">

              <div>
                <small>ROLE</small>
                <strong>MERN DEVELOPER</strong>
              </div>

              <div>
                <small>LOCATION</small>
                <strong>INDIA</strong>
              </div>

            </div>

            <div className="profile-line"></div>

            <div className="profile-code">

              <span>const</span> developer = {"{"}

              <br />

              &nbsp;&nbsp;name: <b>"Saibullah"</b>,

              <br />

              &nbsp;&nbsp;stack: <b>"MERN"</b>,

              <br />

              &nbsp;&nbsp;status: <b>"open"</b>

              <br />

              {"}"}

            </div>

          </div>

        </motion.div>

      </div>


      <a href="#about" className="scroll-indicator">

        <span>EXPLORE</span>

        <FaArrowDown />

      </a>

    </section>
  );
}

export default Hero;