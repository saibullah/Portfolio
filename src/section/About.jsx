import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
  className="about"
  id="about"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
    <section>
      <div className="container">

        <h2 className="section-title">About Me</h2>

        <p className="about-text">
          I'm a MERN Stack Developer passionate about building
          responsive, scalable, and user-friendly web applications.
          I enjoy solving problems, learning new technologies,
          and creating projects that provide a great user experience.
        </p>

        <div className="about-cards">

          <div className="about-card">
            <h4>Frontend</h4>
            <p>React, JavaScript, HTML, CSS, Bootstrap</p>
          </div>

          <div className="about-card">
            <h4>Backend</h4>
            <p>Node.js, Express.js, REST APIs</p>
          </div>

          <div className="about-card">
            <h4>Database</h4>
            <p>MongoDB, Mongoose</p>
          </div>

          <div className="about-card">
            <h4>Tools</h4>
            <p>Git, GitHub, Postman, VS Code, 
              vercel ,Render
            </p>
          </div>

        </div>

      </div>
    </section>
   </motion.section>
  );
}

export default About;