import "../styles/Projects.css";

const projects = [
  {
    title: "Job Portal",
    image: "/images/jobportal.png",
    description:
      "A full-stack MERN Job Portal with JWT authentication, admin dashboard, job posting, and application management.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT"
    ],

    github: "https://github.com/saibullah",
    live: "https://job-portal-frontend-two-tau.vercel.app/"
  },
  {
  title: "E-Commerce Website",
  image: "/images/ecommerce.png",
  description:
    "A full-stack MERN e-commerce platform with product management, shopping cart, user authentication, order management, and admin dashboard.",

  tech: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Mongoose",
    "JWT"
  ],

  github: "https://github.com/saibullah",
  live: null
},

  {
    title: "Ticket Booking",
    image: "/images/ticketbooking.png",
    description:
      "Online ticket booking application with booking management and responsive UI.",

    tech: [
      "React",
      "Express",
      "MongoDB"
    ],

    github: "https://github.com/saibullah",
    live: null
  },

  {
    title: "Gemini AI Chatbot",
    image: "/images/chatbot.png",
    description:
      "AI chatbot built using React, Express, and Gemini API with chat history support.",

    tech: [
      "React",
      "Gemini API",
      "Node.js"
    ],

    github: "https://github.com/saibullah",
    live: null
  }
];



function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech">
                {project.tech.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>

              <div className="buttons">
                <a href={project.github}>GitHub</a>

                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo
                  </a>
                ) : (
                  <button className="btn btn-success"
                    onClick={() =>
                      alert("🚧 Live demo is currently under development. Please check back soon!")
                    }
                  >
                    Live Demo
                  </button>
                )}  
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;