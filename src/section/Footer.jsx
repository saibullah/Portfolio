import "../styles/Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="spatial-footer">

      <div className="footer-glow"></div>

      <div className="container">

        <div className="footer-top">

          <div className="footer-brand">

            <h2>
              Saibullah<span>.</span>
            </h2>

            <p>
              MERN Stack Developer building modern
              web experiences.
            </p>

          </div>


          <div className="footer-status">

            <span className="footer-status-dot"></span>

            <div>
              <small>STATUS</small>

              <p>
                Open to opportunities
              </p>
            </div>

          </div>


          <a
            href="#home"
            className="back-top"
          >
            <FaArrowUp />
          </a>

        </div>


        <div className="footer-divider"></div>


        <div className="footer-bottom">

          <p>
            © 2026 Saibullah. All rights reserved.
          </p>


          <div className="footer-socials">

            <a
              href="https://github.com/saibullah"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/saibullah-s-7b44b23aa"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

          </div>


          <p className="footer-built">
            Built with React
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;