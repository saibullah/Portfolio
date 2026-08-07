import React from 'react'
import '../styles/Footer.css'

function Footer() {
  return (
 <footer className="footer">

    <div className="container footer-content">

        <h2 className="footer-logo">
            Saibullah<span>.</span>
        </h2>

        <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </div>

        <div className="footer-line"></div>

        <p>
            © 2026 <span>Saibullah</span>. Built with React ❤️
        </p>

    </div>

</footer>
  )
}

export default Footer