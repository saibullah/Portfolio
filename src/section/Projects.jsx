import "../styles/Projects.css";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import job from "../assets/jobportal.png"
import ecommerce from "../assets/Ecommerce.png"
import dvd from "../assets/dvd.png"
const projects = [
  {
    number: "01",
    title: "Job Portal",
    image: job ,
    description:
      "A full-stack MERN Job Portal with JWT authentication, role-based authorization, job posting, application management, and an admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/saibullah/job-portal-frontend",
    live: "https://job-portal-frontend-two-tau.vercel.app/",
  },
  {
    number: "02",
    title: "E-Commerce Website",
    image: ecommerce,
    description:
      "A full-stack MERN e-commerce platform with product management, shopping cart, authentication, order management, and admin dashboard.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    github: "https://github.com/saibullah",
    live: "https://ecommerce-two-zeta-52.vercel.app//",
  },
  {
    number: "03",
    title: "Movie DVD",
    image: dvd,
    description:
      "A responsive ticket booking interface built with React, featuring API integration, product-style layouts, and booking-focused user interactions.",
    tech: ["React", "API", "Bootstrap", "CSS"],
    github: "https://github.com/saibullah",
    live: "https://movie-dvd-booking.vercel.app/",
  },
  // {
  //   number: "04",
  //   title: "Gemini AI Chatbot",
  //   image: "/images/chatbot.png",
  //   description:
  //     "An AI chatbot application built with React and Node.js, integrating Gemini API functionality with a conversational interface.",
  //   tech: ["React", "Node.js", "Gemini API"],
  //   github: "https://github.com/saibullah",
  //   live: null,
  // },
];

function Projects() {
  return (
    <section className="projects-space" id="projects">

      <div className="projects-light"></div>

      <div className="container">

        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>03 / PROJECTS</span>

          <h2>
            Things I've
            <strong> built.</strong>
          </h2>

          <p>
            A collection of projects where I applied my
            frontend, backend, database, and API development skills.
          </p>
        </motion.div>


        <div className="projects-list">

          {projects.map((project, index) => (

            <motion.article
              className="project-window"
              key={project.title}

              initial={{
                opacity: 0,
                y: 70
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.1
              }}

              viewport={{
                once: true,
                amount: 0.15
              }}
            >

              {/* Browser Header */}

              <div className="window-header">

                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="window-address">
                  /projects/{project.title.toLowerCase().replaceAll(" ", "-")}
                </div>

                <span className="project-number">
                  {project.number}
                </span>

              </div>


              {/* Project Content */}

              <div className="project-content">

                <div className="project-preview">

                  <div className="preview-frame">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="preview-overlay">
                      <span>PROJECT PREVIEW</span>
                    </div>

                  </div>

                </div>


                <div className="project-info">

                  <span className="project-label">
                    FULL STACK PROJECT
                  </span>

                  <h3>{project.title}</h3>

                  <p>
                    {project.description}
                  </p>


                  <div className="project-tech">

                    {project.tech.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}

                  </div>


                  <div className="project-actions">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-github"
                    >
                      <FaGithub />
                      GitHub
                    </a>


                    {project.live ? (

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live"
                      >
                        Live Demo
                        <FaExternalLinkAlt />
                      </a>

                    ) : (

                      <button
                        className="project-live"
                        onClick={() =>
                          alert(
                            "🚧 Live demo is currently under development."
                          )
                        }
                      >
                        Live Demo
                        <FaExternalLinkAlt />
                      </button>

                    )}

                  </div>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;