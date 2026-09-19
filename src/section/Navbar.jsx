import { useEffect, useState } from "react";
import { FaBars, FaTimes, FaArrowRight } from "react-icons/fa";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Navbar scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "education",
        "contact",
      ];

      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= window.innerHeight * 0.35) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Journey", id: "education" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`spatial-navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="nav-shell">

        {/* MOVING LIGHT */}
        <div className="nav-light"></div>

        {/* LOGO */}
        <a
          href="#home"
          className="nav-logo"
          onClick={closeMenu}
        >
          <span className="logo-main">Saibullah</span>
          <span className="logo-dot">.</span>
        </a>


        {/* STATUS */}
        <div className="nav-status">
          <span className="status-dot"></span>

          <span className="status-text">
            AVAILABLE
          </span>
        </div>


        {/* NAV LINKS */}
        <ul
          className={`spatial-nav-links ${
            menuOpen ? "active" : ""
          }`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                className={
                  activeSection === item.id
                    ? "active-link"
                    : ""
                }
              >
                <span>{item.label}</span>

                {activeSection === item.id && (
                  <i className="active-dot"></i>
                )}
              </a>
            </li>
          ))}
        </ul>


        {/* CONTACT */}
        <a
          href="#contact"
          className="nav-contact"
          onClick={closeMenu}
        >
          <span>Let's Talk</span>

          <span className="arrow-wrap">
            <FaArrowRight />
          </span>
        </a>


        {/* MOBILE */}
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