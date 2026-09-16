import { useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="spatial-navbar">

      <div className="nav-shell">

        {/* LOGO */}

        <a
          href="#home"
          className="nav-logo"
          onClick={closeMenu}
        >
          Saibullah<span>.</span>
        </a>


        {/* STATUS */}

        <div className="nav-status">

          <span className="status-dot"></span>

          <span>
            AVAILABLE
          </span>

        </div>


        {/* DESKTOP NAV */}

        <ul
          className={
            menuOpen
              ? "spatial-nav-links active"
              : "spatial-nav-links"
          }
        >

          <li>
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>

          <li>
            <a href="#skills" onClick={closeMenu}>
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>

          <li>
            <a href="#education" onClick={closeMenu}>
              Journey
            </a>
          </li>

          <li>
            <a href="#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

        </ul>


        {/* CONTACT BUTTON */}

        <a
          href="#contact"
          className="nav-contact"
          onClick={closeMenu}
        >
          Let's Talk
          <FaArrowRight />
        </a>


        {/* MOBILE BUTTON */}

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;