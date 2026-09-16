import "../styles/About.css";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="about-space" id="about">

      <div className="about-glow"></div>

      <div className="container">

        <motion.div
          className="about-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="about-label">01 / ABOUT</span>

          <h2>
            Building ideas into
            <span> real applications.</span>
          </h2>

          <p>
            I'm a MERN Stack Developer passionate about building
            responsive, scalable, and user-friendly web applications.
            I enjoy solving problems, learning new technologies,
            and creating projects that provide a great user experience.
          </p>
        </motion.div>


        <div className="about-layout">

          {/* Main Glass Card */}
          <motion.div
            className="about-main-card"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >

            <div className="card-number">01</div>

            <div className="about-icon">
              {"</>"}
            </div>

            <h3>Full Stack Development</h3>

            <p>
              I build complete web applications from frontend
              interfaces to backend APIs and database integration.
            </p>

            <div className="about-stack">
              <span>React</span>
              <span>Node.js</span>
              <span>Express</span>
              <span>MongoDB</span>
            </div>

          </motion.div>


          {/* Small Cards */}
          <div className="about-side">

            <motion.div
              className="about-mini-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <span className="mini-number">02</span>

              <h4>Frontend</h4>

              <p>
                React, JavaScript, HTML, CSS and Bootstrap
              </p>
            </motion.div>


            <motion.div
              className="about-mini-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="mini-number">03</span>

              <h4>Backend</h4>

              <p>
                Node.js, Express.js and REST APIs
              </p>
            </motion.div>


            <motion.div
              className="about-mini-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <span className="mini-number">04</span>

              <h4>Database</h4>

              <p>
                MongoDB and Mongoose
              </p>
            </motion.div>


            <motion.div
              className="about-mini-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <span className="mini-number">05</span>

              <h4>Tools</h4>

              <p>
                Git, GitHub, Postman, VS Code, Vercel and Render
              </p>
            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;