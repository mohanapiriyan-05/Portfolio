import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-header">
        <p className="about-tag">About Me</p>
        <h2>Professional Profile</h2>
        <p>
          A clean introduction about my skills, learning journey and development
          mindset.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-card large">
          <h3>Who I Am</h3>
          <p>
            I am an enthusiastic Information Technology student specializing in
            Web Development and Hardware Technologies. I focus on building
            responsive, clean and professional web applications.
          </p>
        </div>

        <div className="about-card">
          <h3>Frontend</h3>
          <p>React, JavaScript, HTML, CSS and modern UI design.</p>
        </div>

        <div className="about-card">
          <h3>Backend</h3>
          <p>Node.js, Express, MySQL, Supabase and REST API development.</p>
        </div>

        <div className="about-card">
          <h3>Goal</h3>
          <p>To become a professional full stack developer with real projects.</p>
        </div>
      </div>
    </section>
  );
}