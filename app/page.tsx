import { SiTypescript, SiReact, SiNextdotjs, SiJavascript, SiGithub, SiLinkedin } from 'react-icons/si';
import { FiMoon, FiFileText, FiSend, FiMail } from 'react-icons/fi';

export default function Home() {
  return (
    <div className="portfolio-container">
      {/* Top Navigation */}
      <nav className="navbar">
        <div className="logo-box">
          <span className="avatar-small">SA</span>
        </div>
        <div className="nav-links">
          <a href="#work">Work</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="theme-toggle"><FiMoon /></button>
      </nav>

      {/* Main Hero Section */}
      <main className="hero">
        <div className="profile-pic-container">
          <div className="avatar-large">SA</div>
        </div>

        <h1 className="hero-title">
          Hi, I'm Shola Akinosi — <span>A Web Developer.</span>
        </h1>

        <div className="hero-description">
          I build high-performance web apps using 
          <span className="skill-pill"><SiTypescript color="#3178C6"/> TypeScript</span>, 
          <span className="skill-pill"><SiReact color="#61DAFB"/> React</span>, 
          <span className="skill-pill"><SiNextdotjs color="#ffffff"/> Next.js</span>, and 
          <span className="skill-pill"><SiJavascript color="#F7DF1E"/> JavaScript</span>. 
          I specialize in creating seamless user experiences and developing intelligent tools like Vantage Hype to optimize workflows.
        </div>

        {/* Call to Action Buttons */}
        <div className="cta-buttons">
          <button className="btn-secondary">
            <FiFileText /> Resume / CV
          </button>
          <button className="btn-primary">
            <FiSend /> Get in touch
          </button>
        </div>

        {/* Social Links */}
        <div className="social-links">
          <a href="#"><SiLinkedin /></a>
          <a href="#"><SiGithub /></a>
          <a href="#"><FiMail /></a>
        </div>

        {/* Bottom Text */}
        <p className="footer-text">
          You can explore my <a href="#projects">projects</a>, view my <a href="#work">work experience</a>, or <a href="#contact">contact me</a>.
        </p>
      </main>
    </div>
  );
}
