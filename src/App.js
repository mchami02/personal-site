import React, { useEffect, useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './static/css/main.scss';

const Arrow = () => <span aria-hidden="true">↗</span>;

const experiences = [
  {
    period: 'Current',
    role: 'Jump Trading',
    place: 'Current position',
    note: 'Current role. Additional details are available on LinkedIn.',
    current: true,
  },
  {
    period: 'Oct 2025 — Mar 2026',
    role: 'Visiting Student Researcher',
    place: 'UC Berkeley · CITRIS',
    note: 'With Prof. Alexandre Bayen. Developed neural approaches for nonlinear hyperbolic PDEs, from Hamilton–Jacobi to Aw–Rascle–Zhang, connecting mathematical formulation with neural approximation.',
  },
  {
    period: 'Jun — Sep 2025',
    role: 'Machine Learning Engineer Intern',
    place: 'Flink Robotics',
    note: 'Improved box localization from RGB-D images and point clouds through learning and optimization. Reworked real-time pipelines for 3–5× faster iteration and roughly 2× pose-estimation accuracy.',
  },
  {
    period: 'Jul — Sep 2023',
    role: 'Research Assistant',
    place: 'Oracle',
    note: 'Worked across Linux, Bash, Git, Docker and Kubernetes, then contributed to Oracle’s document-management workflows and internal systems.',
  },
];

const research = [
  {
    number: '01',
    title: 'Neural methods for hyperbolic PDEs',
    meta: 'UC Berkeley · 2025–26',
    text: 'Learning-based solvers for Hamilton–Jacobi and traffic-flow equations, designed to improve on classical numerical methods.',
    tags: ['Scientific ML', 'PDEs', 'Neural solvers'],
  },
  {
    number: '02',
    title: 'Forecasting chaotic systems',
    meta: 'Swiss Data Science Center · Dr Christian Donner · 2024–25',
    text: 'Evaluated Neural Laplace across 44 chaotic systems: 23% above baselines, with accurate forecasts on 26 systems and a key Lyapunov-exponent threshold identified. Tests on noisier real-world data also exposed the model’s limits.',
    tags: ['Time series', 'Neural Laplace', 'Dynamics'],
  },
  {
    number: '03',
    title: 'Continual learning through forgetting',
    meta: 'ETH Zürich · 2024–25',
    text: 'Created Easy-to-Forget, a replay-buffer strategy prioritizing difficult samples. It reached 63.4% Class-IL accuracy on CIFAR-10 with low compute overhead; CIFAR-100 Task-IL and Domain-IL experiments revealed its scalability limits.',
    tags: ['Continual learning', 'Data selection', 'PyTorch'],
  },
  {
    number: '04',
    title: 'Galaxy: notebooks at scale',
    meta: 'ETH Zürich · Prof April Wang · 2024',
    text: 'Lead-authored a JupyterLab extension using LLMs to classify and cluster notebook cells at 75% accuracy. In a user study it cut mental demand 18%, effort 19%, and frustration 30%; 80% preferred it.',
    tags: ['LLMs', 'JupyterLab', 'HCI'],
  },
];

const education = [
  {
    period: '2023 — 2026',
    school: 'ETH Zürich',
    degree: 'MSc Computer Science',
    detail: 'Major in Machine Intelligence · Minor in Data Management Systems',
  },
  {
    period: '2022 — 2023',
    school: 'University of Washington',
    degree: 'Academic year abroad · Computer Science',
    detail: 'Seattle, Washington',
  },
  {
    period: '2020 — 2023',
    school: 'EPFL',
    degree: 'BSc Computer Science',
    detail: 'GPA 5.3 / 6 · Lausanne, Switzerland',
  },
];

const courseList = [
  'Algorithms', 'Artificial Intelligence', 'Computer Architecture', 'Digital System Design',
  'Distributed Systems', 'Functional Programming', 'Introduction to Programming', 'Machine Learning',
  'Object-Oriented Programming', 'Operating Systems', 'Parallelism & Concurrency',
  'Software Engineering', 'Software Design & Implementation', 'Systems Programming', 'Theory of Computation',
];

function useScrollSpy() {
  const [active, setActive] = useState('work');

  useEffect(() => {
    const sections = [...document.querySelectorAll('[data-section]')];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: '-25% 0px -60%', threshold: [0, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

const App = () => {
  const active = useScrollSpy();

  useEffect(() => {
    const update = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      document.documentElement.style.setProperty('--scroll', height ? `${(window.scrollY / height) * 100}%` : '0%');
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <HelmetProvider>
      <Helmet>
        <title>Mamoun Chami — Machine Learning & Research</title>
        <meta name="description" content="Mamoun Chami is a machine learning engineer and researcher working across scientific ML, computer vision, time-series modelling and quantitative systems." />
        <meta property="og:title" content="Mamoun Chami — Machine Learning & Research" />
        <meta property="og:description" content="Researching intelligent systems at the edge of mathematics, data and the real world." />
        <meta name="theme-color" content="#f2f0e9" />
      </Helmet>

      <div className="scroll-line" aria-hidden="true" />
      <header className="site-header">
        <a className="monogram" href="#top" aria-label="Mamoun Chami, home">MC</a>
        <nav aria-label="Main navigation">
          {['work', 'research', 'education', 'about'].map((item) => (
            <a key={item} className={active === item ? 'active' : ''} href={`#${item}`}>{item}</a>
          ))}
        </nav>
        <a className="header-link" href="mailto:mchami.uni@gmail.com">Let’s talk <Arrow /></a>
      </header>

      <main id="top">
        <section className="hero" aria-labelledby="hero-title">
          <div className="eyebrow reveal">Machine learning · Research · Engineering</div>
          <h1 id="hero-title" className="reveal delay-1">
            I build systems that learn from <em>complexity.</em>
          </h1>
          <div className="hero-bottom reveal delay-2">
            <p>
              I’m Mamoun, a computer scientist working where machine learning meets
              mathematics and the physical world — currently at <strong>Jump Trading</strong>.
            </p>
            <div className="hero-meta">
              <span>Based in Switzerland</span>
              <span>Previously Berkeley · ETH · Flink</span>
            </div>
          </div>
          <div className="orbit" aria-hidden="true"><span /></div>
        </section>

        <section className="section" id="work" data-section>
          <div className="section-label"><span>01</span><h2>Selected experience</h2></div>
          <div className="timeline">
            {experiences.map((item) => (
              <article className="timeline-item" key={`${item.place}-${item.period}`}>
                <div className="period">{item.period}</div>
                <div>
                  <h3>{item.role}{item.current && <i>Now</i>}</h3>
                  <p className="place">{item.place}</p>
                </div>
                <p className="note">{item.note}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section research-section" id="research" data-section>
          <div className="section-label"><span>02</span><h2>Research notes</h2></div>
          <div className="research-intro">
            <p>Four investigations into one question:</p>
            <blockquote>How can models understand systems that refuse to stay still?</blockquote>
          </div>
          <div className="research-grid">
            {research.map((project) => (
              <article className="research-card" key={project.number}>
                <div className="card-top"><span>{project.number}</span><span>{project.meta}</span></div>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education" data-section>
          <div className="section-label"><span>03</span><h2>Education</h2></div>
          <div className="education-list">
            {education.map((item) => (
              <article key={item.school}>
                <span>{item.period}</span>
                <h3>{item.school}</h3>
                <p>{item.degree}</p>
                <small>{item.detail}</small>
              </article>
            ))}
          </div>
          <div className="footnotes">
            <p>
              <strong>Teaching.</strong> Assistant for ETH Zürich’s Introduction to
              Machine Learning, 2024.
            </p>
            <p>
              <strong>Community.</strong> CLIC EPFL Events team, 2021–22 — creating
              dinners, concerts and activities that brought students and faculty together.
            </p>
          </div>
        </section>

        <section className="section about-section" id="about" data-section>
          <div className="section-label light"><span>04</span><h2>Beyond the model</h2></div>
          <div className="about-grid">
            <div className="statement">
              <p>I care about models that survive contact with reality.</p>
              <p className="muted">
                That has taken me from chaotic dynamics and continual learning to robot
                perception, notebook intelligence and nonlinear PDEs.
              </p>
            </div>
            <div className="capabilities">
              <h3>Working set</h3>
              <div><span>Languages</span><p>Python, Java, C, Scala, C++, JavaScript, R</p></div>
              <div>
                <span>ML & data</span>
                <p>PyTorch, computer vision, time series, LLMs, RAG</p>
              </div>
              <div><span>Systems</span><p>Docker, Kubernetes, Git, Linux, Bash</p></div>
              <div>
                <span>Spoken</span>
                <p>English, French, Arabic · fluent<br />Spanish · intermediate</p>
              </div>
            </div>
          </div>
          <details className="course-details">
            <summary>Selected computer science coursework <span>+</span></summary>
            <div>{courseList.map((course) => <span key={course}>{course}</span>)}</div>
          </details>
        </section>

        <section className="contact-section" aria-label="Contact">
          <p>Have a hard problem?</p>
          <a href="mailto:mchami.uni@gmail.com">Let’s make it tractable. <Arrow /></a>
          <div className="contact-meta">
            <a href="mailto:mchami.uni@gmail.com">mchami.uni@gmail.com</a>
            <a href="tel:+13417668523">+1 341 766 8523</a>
            <a href="https://www.linkedin.com/in/mamoun-chami/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://github.com/mchami02" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
          </div>
        </section>
      </main>

      <footer>
        <span>© {new Date().getFullYear()} Mamoun Chami</span>
        <span>Designed around curiosity.</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </HelmetProvider>
  );
};

export default App;
