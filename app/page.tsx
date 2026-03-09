export default function Home() {
  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="avatar-small">SA</div>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="avatar-large">SA</div>
          <h1 className="hero-title">
            Hi, I'm Shola Akinosi — <span>A Web Developer.</span>
          </h1>
          <p className="hero-description">
            I build high-performance web apps using 
            <span className="skill-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#3178C6"><path d="M1.125 0C.502 0 0 .502 0 1.125V22.875C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0H1.125zm17.353 18.306c-.61 0-1.142-.202-1.596-.603-.454-.401-.677-.944-.677-1.63h1.935c0 .21.058.377.173.496.115.12.29.181.526.181.243 0 .434-.058.575-.173.14-.115.21-.264.21-.444 0-.166-.048-.306-.142-.422-.094-.114-.236-.211-.426-.29l-.664-.264c-.513-.205-.893-.454-1.141-.74-.247-.287-.372-.647-.372-1.082 0-.447.162-.822.484-1.127.322-.306.765-.457 1.326-.457.567 0 1.032.148 1.391.442.359.295.538.711.538 1.246h-1.935c-.012-.193-.066-.334-.16-.425-.093-.09-.233-.135-.418-.135-.213 0-.376.05-.49.148-.114.1-.171.221-.171.365 0 .129.039.24.117.332.078.092.19.171.336.236l.79.312c.507.202.876.448 1.109.737.231.288.346.659.346 1.111 0 .47-.167.856-.5 1.157-.334.3-.81.453-1.427.453zM10.597 12.854h1.947v5.271h1.947v-5.271h1.947V11h-5.841v1.854z"/></svg>
              TypeScript
            </span>
            <span className="skill-pill">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#61DAFB"><path d="M24 12c0 3.314-5.373 6-12 6s-12-2.686-12-6 5.373-6 12-6 12 2.686 12 6z"/><circle cx="12" cy="12" r="2.5"/></svg>
              React
            </span> 
            and <span className="skill-pill">Next.js</span>. I specialize in AI integration and technical workflow optimization.
          </p>
          <div className="cta-group">
            <button className="btn-primary">Get in touch</button>
            <button className="btn-secondary">View CV</button>
          </div>
        </section>

        {/* Featured Project: Vantage Hype */}
        <section id="projects" className="section-container">
          <h2 className="section-label">Featured Project</h2>
          <div className="glass-card">
            <div className="card-tag">AI Marketing Tool</div>
            <h3>Vantage Hype</h3>
            <p>
              An intelligent platform developed to transform low-quality marketing phrases into 
              high-quality, distinct professional posts. Built with Next.js to optimize 
              business workflows.
            </p>
            <a href="#" className="text-link">Explore project →</a>
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="section-container">
          <h2 className="section-label">Experience</h2>
          <div className="exp-item">
            <div className="exp-header">
              <h4>Quality Assurance Tester</h4>
              <span>uTest</span>
            </div>
            <p>Executing test cases and identifying software bugs to ensure premium UI/UX reliability.</p>
          </div>

          <h2 className="section-label" style={{marginTop: '40px'}}>Education</h2>
          <div className="exp-item">
            <div className="exp-header">
              <h4>B.Sc. Computer Science</h4>
              <span>Bells University of Technology</span>
            </div>
            <p>Currently pursuing undergraduate studies in the 2025/2026 academic session.</p>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="footer">
          <div className="socials">
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">Email</a>
          </div>
          <p>© 2026 Shola Akinosi. Built with Next.js.</p>
        </footer>
      </main>
    </div>
  );
}
