import "../styles/Skills.css";
import { motion } from "framer-motion";
const skills = [
  {
    name: "HTML5",
    level: "Advanced",
  },
  {
    name: "CSS3",
    level: "Advanced",
  },
  {
    name: "Bootstrap",
    level: "Advanced",
  },
  {
    name: "JavaScript",
    level: "Intermediate",
  },
  {
    name: "React.js",
    level: "Intermediate",
  },
  {
    name: "Node.js",
    level: "Intermediate",
  },
  {
    name: "Express.js",
    level: "Intermediate",
  },
  {
    name: "MongoDB",
    level: "Intermediate",
  },
  {
    name: "Git",
    level: "Intermediate",
  },
  {
    name: "Postman",
    level: "Intermediate",
  },
  {
    name:"Github",
    level:"Intermediate"
  },
  {
    name: "JWT Authentication",
    level: "Intermediate",
  },
  {
    name: "Axios",
    level: "Intermediate",
  },
   {
    name: "Vercel",
    level: "Beginner",
  },
    {
    name: "REST APIs",
    level: "Intermediate",
  },
];

function Skills() {
  return (
    <motion.section
  className="skills"
  id="skills"
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
    <section >
      <div className="container">

        <h2 className="section-title">Skills</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <h4>{skill.name}</h4>
              <p>{skill.level}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
    </motion.section>
  );
}

export default Skills;