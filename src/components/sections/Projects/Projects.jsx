import "./Projects.css";

import project1 from "../../../assets/projects/student-management.png";
import project2 from "../../../assets/projects/news-portal.png";
import project3 from "../../../assets/projects/contact-system.png";

const projects = [
  {
    image: project1,
    title: "Student Management System",
    desc: "Full stack application for student records, attendance and results.",
    tech: ["React","Node","MySQL"]
  },

  {
    image: project2,
    title: "Online News Portal",
    desc: "Modern news upload and display platform with responsive design.",
    tech: ["React","Cloudinary","Express"]
  },

  {
    image: project3,
    title: "Contact Email System",
    desc: "Professional email sending system using Nodemailer.",
    tech: ["Node","SMTP","API"]
  }
];

export default function Projects() {

  return (

    <section className="projects" id="projects">

      <div className="projects-header">

        <p>Portfolio</p>

        <h2>Featured Projects</h2>

      </div>

      <div className="projects-grid">

        {projects.map((project,index)=>(

          <div
          className="project-card"
          key={index}
          >

            <img
            src={project.image}
            alt={project.title}
            />

            <div className="project-content">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.desc}
              </p>

              <div className="tech-list">

                {
                  project.tech.map((item)=>(
                    <span key={item}>
                      {item}
                    </span>
                  ))
                }

              </div>

              <div className="project-buttons">

                <button>
                  Live Demo
                </button>

                <button className="github-btn">
                  GitHub
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}