// src/App.jsx
import { projects } from './data';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
      {/* Hero Section */}
      <header className="hero">
        <h1>Hi, I'm Mehmood.</h1>
        <p className="subtitle">Frontend React Developer</p>
        <p className="bio">
          I build pixel-perfect, engaging, and accessible digital experiences.
        </p>
        <a href="#contact" className="cta-button">Hire Me</a>
      </header>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>My Work</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={project.title} />
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View Live Demo &rarr;</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact">
        <h2>Let's Work Together</h2>
        <p>Open for freelance opportunities.</p>
        <a href="mailto:your.email@example.com" className="email-link">Email Me</a>
      </footer>
    </div>
  );
}

export default App;