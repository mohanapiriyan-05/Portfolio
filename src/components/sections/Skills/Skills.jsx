import "./Skills.css";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "Node.js",
  "Express.js",
  "MySQL",
  "Supabase",
  "GitHub",
  "Postman"
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="skills-header">
        <p>Skills</p>
        <h2>Technology Stack</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={skill}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{skill}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}