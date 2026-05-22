import "./Hero.css";
import profile from "../../../assets/hero.png";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <nav className="navbar">
          <div className="logo">M</div>

          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="hire-btn">
            Hire Me
          </a>
        </nav>

        <div className="hero-content">
          <div className="social">
            <span>Connect</span>
            <div className="line"></div>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="vmohanapiriyanpiriyan@gmail.com">Email</a>
          </div>

          <div className="hero-text">
            <p className="tag">AVAILABLE FOR FREELANCE WORK</p>

            <h1>
              Building Modern
              <span>Digital Experiences</span>
            </h1>

            <h2>
              Full Stack
              <span> Web Developer</span>
            </h2>

            <p className="description">
              I’m Mohanapiriyan, a Full Stack Developer focused on building
              scalable web applications, premium user interfaces, and modern
              digital solutions.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="project-btn">
                View Projects
              </a>

              <a href="/cv.pdf" download="Mohanapiriyan_CV" className="cv-btn">
                Download CV
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="glow"></div>

            <img src={profile} alt="Mohanapiriyan" />

            <div className="status">
              <span></span>
              Open for Opportunities
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}