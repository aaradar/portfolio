import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const caseStudies = [
  {
  id: 1,
  title: 'Service Site',
  subtitle: 'Design 1',
  description: 'A clean, user-centred service website — e.g. a dental clinic or bike repair shop.',
  emoji: '💻',
  tag: 'Web Design',
  link: 'https://aaradar.github.io/techfix/',
  },
  {
    id: 2,
    title: 'Memory Game',
    subtitle: 'Design 2',
    description: 'An interactive memory card game combining visual design with engaging UX patterns.',
    emoji: '🃏',
    tag: 'Interactive UI',
  },
  {
    id: 3,
    title: 'E-Commerce Site',
    subtitle: 'Design 3',
    description: 'A full shopping experience built around conversion-focused UI/UX principles.',
    emoji: '🛍️',
    tag: 'E-Commerce',
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    subtitle: 'Design 4',
    description: 'A data-rich analytics interface using charts, KPIs, and information hierarchy.',
    emoji: '📊',
    tag: 'Data Visualization',
  },
];

export default function Home() {
  return (
    <div className="page">

      {/* ── Nav ── */}
      <nav className="nav">
        <span className="nav-logo">Alexander Radar's Portfolio</span>
        <div className="nav-links">
          <button onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>About</button>
          <button onClick={() => document.getElementById('work').scrollIntoView({ behavior: 'smooth' })}>How I Work</button>
          <button onClick={() => document.getElementById('cases').scrollIntoView({ behavior: 'smooth' })}>Case Studies</button>
        </div>
      </nav>

      {/* ── Hero / About ── */}
      <section className="hero" id="about">
        <div className="hero-badge">Software Developer · University of Ottawa</div>
        <h1 className="hero-name">Hello, I'm <em>Alexander Radar</em></h1>
        <p className="hero-bio">
          I'm a 3rd year Computer Science student at University of Ottawa<br />with a strong interest in artistic design and web development.<br />
          My favourite activity is digital art. In my opinion UX/UI is a form art,<br />which furthers my interests in studying web design.
        </p>
        <div className="hero-tags">
          <span className="chip">User Research</span>
          <span className="chip">Prototyping</span>
          <span className="chip">Visual Design</span>
          <span className="chip">Interaction Design</span>
        </div>
        <div className="hero-orbs" aria-hidden="true">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
        </div>
      </section>

      {/* ── How I Work ── */}
      <section className="work-section" id="work">
        <div className="container">
          <h2 className="section-title">How I Work</h2>
          <p className="work-intro">
            I'm currently enrolled in a UI design and analyis course at the University of Ottawa,
            where I'm building on my exisiting foundation in evidence-based design practice.
          </p>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Research & Understand</h3>
              <p>I start by understanding the project software design — who the users are, what catches their attention, and what the goal of the webpage is.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Explore & Ideate</h3>
              <p>I generate ideas rapidly, explore multiple possible structures, and apply visual communication principles — hierarchy, contrast, alignment, and proximity — to guide design decisions.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Build & Iterate</h3>
              <p>Using HTML, CSS, and JavaScript, I look to translate designs into working prototypes and refine them based on feedback and results.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies ── */}
      <section className="cases-section" id="cases">
        <div className="container">
          <h2 className="section-title">Case Studies</h2>
          <p className="cases-intro">
            Four projects completed throughout the semester. <br />
            Each explores a different design challenge and context.
          </p>

          <div className="cards-grid">
            {caseStudies.map((c) => (
              c.link ? (
                <a
                  href={c.link}
                  key={c.id}
                  className="card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="card-emoji">{c.emoji}</div>
                  <div className="card-tag">{c.tag}</div>
                  <div className="card-sub">{c.subtitle}</div>
                  <h3 className="card-title">{c.title}</h3>
                  <p className="card-desc">{c.description}</p>
                  <div className="card-cta">
                    View Case Study <span className="arrow">→</span>
                  </div>
                </a>
              ) : (
                <Link to={`/case/${c.id}`} key={c.id} className="card">
                  <div className="card-emoji">{c.emoji}</div>
                  <div className="card-tag">{c.tag}</div>
                  <div className="card-sub">{c.subtitle}</div>
                  <h3 className="card-title">{c.title}</h3>
                  <p className="card-desc">{c.description}</p>
                  <div className="card-cta">
                    View Case Study <span className="arrow">→</span>
                  </div>
                </Link>
              )
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Alexander Radar · University of Ottawa</p>
      </footer>
    </div>
  );
}
