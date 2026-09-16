import "../styles/Education.css";
import { motion } from "framer-motion";

const education = [
  {
    number: "01",
    year: "ACADEMIC",
    title: "B.Sc Chemistry",
    place: "Sadakathullah Appa College",
    description:
      "Completed my undergraduate degree in Chemistry and developed a strong foundation in analytical thinking and problem solving.",
  },
  {
    number: "02",
    year: "PROFESSIONAL",
    title: "MERN Stack Development",
    place: "Brassy Academy",
    description:
      "Completed practical training in modern full-stack web development using React, Node.js, Express.js, MongoDB and REST APIs.",
  },
];

function Education() {
  return (
    <section className="education-space" id="education">

      <div className="education-glow"></div>

      <div className="container">

        <motion.div
          className="education-header"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span>04 / JOURNEY</span>

          <h2>
            Learning that
            <strong> shaped me.</strong>
          </h2>

          <p>
            My academic background and practical development
            training helped me move toward software development.
          </p>
        </motion.div>


        <div className="education-timeline">

          <div className="timeline-line"></div>


          {education.map((item, index) => (

            <motion.div
              className={`education-item ${
                index % 2 === 0 ? "left" : "right"
              }`}
              key={item.title}

              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -50 : 50
              }}

              whileInView={{
                opacity: 1,
                x: 0
              }}

              transition={{
                duration: 0.7
              }}

              viewport={{
                once: true
              }}
            >

              <div className="timeline-node">
                {item.number}
              </div>


              <div className="education-card">

                <div className="education-top">

                  <span>{item.year}</span>

                  <span>
                    0{index + 1}
                  </span>

                </div>

                <h3>{item.title}</h3>

                <h4>{item.place}</h4>

                <p>{item.description}</p>

              </div>

            </motion.div>

          ))}

        </div>


        <motion.div
          className="education-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <span className="bottom-line"></span>

          <p>
            CONTINUOUSLY LEARNING • BUILDING • IMPROVING
          </p>

          <span className="bottom-line"></span>
        </motion.div>

      </div>

    </section>
  );
}

export default Education;