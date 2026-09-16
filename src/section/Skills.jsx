import "../styles/Skills.css";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", level: "Advanced" },
  { name: "CSS3", level: "Advanced" },
  { name: "Bootstrap", level: "Advanced" },
  { name: "JavaScript", level: "Intermediate" },
  { name: "React.js", level: "Intermediate" },
  { name: "Node.js", level: "Intermediate" },
  { name: "Express.js", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
  { name: "GitHub", level: "Intermediate" },
  { name: "Postman", level: "Intermediate" },
  { name: "JWT Authentication", level: "Intermediate" },
  { name: "Axios", level: "Intermediate" },
  { name: "REST APIs", level: "Intermediate" },
  { name: "Vercel", level: "Beginner" },
];

function Skills() {
  return (
    <section className="skills-space" id="skills">

      <div className="skills-orb"></div>

      <div className="container">

        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>02 / SKILLS</span>

          <h2>
            Tools I use to
            <strong> build.</strong>
          </h2>

          <p>
            A practical stack focused on building modern
            full-stack web applications.
          </p>
        </motion.div>


        <div className="skills-stage">

          <div className="skills-center">
            <div className="center-ring"></div>

            <span className="center-code">
              {"</>"}
            </span>

            <small>FULL STACK</small>
          </div>


          <div className="skills-grid">

            {skills.map((skill, index) => (
              <motion.div
                className="skill-glass-card"
                key={skill.name}
                initial={{
                  opacity: 0,
                  y: 40
                }}
                whileInView={{
                  opacity: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04
                }}
                viewport={{ once: true }}

                whileHover={{
                  y: -10,
                  rotateX: 5,
                  rotateY: -5,
                  scale: 1.03
                }}
              >

                <div className="skill-top">
                  <span>0{index + 1}</span>

                  <div className="skill-dot"></div>
                </div>

                <h3>{skill.name}</h3>

                <p>{skill.level}</p>

                <div className="skill-line">
                  <span
                    className={
                      skill.level === "Advanced"
                        ? "advanced"
                        : skill.level === "Intermediate"
                        ? "intermediate"
                        : "beginner"
                    }
                  ></span>
                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;