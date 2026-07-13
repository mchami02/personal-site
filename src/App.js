import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './static/css/main.scss';

const experience = [
  {
    period: 'Past position',
    role: 'Jump Trading',
    organisation: 'Professional experience',
    description: 'Previous position at Jump Trading.',
  },
  {
    period: 'Oct 2025 — Mar 2026',
    role: 'Visiting Student Researcher',
    organisation: 'University of California, Berkeley · CITRIS',
    description: 'Supervised by Prof. Alexandre Bayen. Developed neural network approaches for nonlinear hyperbolic partial differential equations, beginning with Hamilton–Jacobi and extending to Aw–Rascle–Zhang. Combined theoretical problem formulation with neural methods to improve accuracy over classical numerical approaches.',
  },
  {
    period: 'Jun — Sep 2025',
    role: 'Machine Learning Engineer Intern',
    organisation: 'Flink Robotics',
    description: 'Improved box localization from RGB-D images and point clouds using machine-learning and optimization methods. Integrated efficient models and reworked the optimization pipeline, producing a 3–5× faster iteration cycle and approximately doubling pose-estimation accuracy.',
  },
  {
    period: '2024',
    role: 'Teaching Assistant',
    organisation: 'ETH Zürich',
    description: 'Teaching assistant for Introduction to Machine Learning.',
  },
  {
    period: 'Jul — Sep 2023',
    role: 'Research Assistant',
    organisation: 'Oracle',
    description: 'Completed training in Linux, Bash, Git, Docker and Kubernetes, then contributed to Oracle’s document-management system and internal development workflows.',
  },
  {
    period: '2021 — 2022',
    role: 'Events Team Member',
    organisation: 'CLIC · EPFL',
    description: 'Organised dinners, concerts and community activities for students and faculty in EPFL’s computer science association.',
  },
];

const projects = [
  {
    period: '2024 — 2025',
    title: 'Continuous-time modelling and chaotic systems forecasting',
    organisation: 'Swiss Data Science Center · Dr Christian Donner',
    description: 'Evaluated Neural Laplace on 44 chaotic systems, outperforming baselines by 23% and accurately modelling 26 systems. Identified a Lyapunov-exponent threshold and tested limitations on noisier real-world data.',
  },
  {
    period: '2024 — 2025',
    title: 'Continual learning and data selection',
    organisation: 'ETH Zürich',
    description: 'Developed Easy-to-Forget, a replay-buffer sampling strategy prioritising difficult examples. It achieved 63.4% Class-IL accuracy on CIFAR-10 with low computational overhead; broader CIFAR-100 experiments identified scalability limits.',
  },
  {
    period: '2024',
    title: 'Galaxy: large-scale Jupyter notebook analysis',
    organisation: 'ETH Zürich · Prof. April Yi Wang',
    description: 'Lead-authored a JupyterLab extension that uses language models to classify and cluster notebook cells with 75% accuracy. In a user study, Galaxy reduced reported mental demand by 18%, effort by 19% and frustration by 30%; 80% of participants preferred it.',
  },
];

const education = [
  {
    period: '2023 — 2026',
    institution: 'ETH Zürich',
    degree: 'MSc Computer Science',
    detail: 'Major in Machine Intelligence · Minor in Data Management Systems',
  },
  {
    period: '2022 — 2023',
    institution: 'University of Washington',
    degree: 'Academic year abroad · Computer Science',
    detail: 'Seattle, Washington',
  },
  {
    period: '2020 — 2023',
    institution: 'EPFL',
    degree: 'BSc Computer Science',
    detail: 'Lausanne, Switzerland',
  },
];

const coursework = [
  'Algorithms',
  'Artificial Intelligence',
  'Computer Architecture',
  'Digital System Design',
  'Distributed Systems',
  'Functional Programming',
  'Introduction to Programming',
  'Machine Learning',
  'Object-Oriented Programming',
  'Operating Systems',
  'Parallelism and Concurrency',
  'Software Engineering',
  'Software Design and Implementation',
  'Systems Programming',
  'Theory of Computation',
];

const Arrow = () => <span aria-hidden="true">↗</span>;

const App = () => (
  <HelmetProvider>
    <Helmet>
      <title>Mamoun Chami — Computer Science</title>
      <meta name="description" content="Mamoun Chami is a computer scientist with experience in machine learning, computer vision, scientific computing and developer tools." />
      <meta property="og:title" content="Mamoun Chami — Computer Science" />
      <meta property="og:description" content="Experience, research projects and education in computer science and machine learning." />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>

    <header className="site-header">
      <a className="name" href="#top">Mamoun Chami</a>
      <nav aria-label="Main navigation">
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#education">Education</a>
      </nav>
      <a className="email-link" href="mailto:mchami.uni@gmail.com">Email <Arrow /></a>
    </header>

    <main id="top">
      <section className="intro" aria-labelledby="intro-title">
        <p className="kicker">Computer science · Machine learning · Research</p>
        <h1 id="intro-title">Mamoun Chami</h1>
        <p className="summary">
          Computer scientist with experience in scientific machine learning, computer
          vision, time-series modelling and developer tools.
        </p>
        <div className="intro-links">
          <a href="mailto:mchami.uni@gmail.com">mchami.uni@gmail.com</a>
          <a href="https://www.linkedin.com/in/mamoun-chami/" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
          <a href="https://github.com/mchami02" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
        </div>
      </section>

      <section className="content-section" id="experience">
        <h2>Experience</h2>
        <div className="entries">
          {experience.map((item) => (
            <article className="entry" key={`${item.organisation}-${item.period}`}>
              <p className="period">{item.period}</p>
              <div>
                <h3>{item.role}</h3>
                <p className="organisation">{item.organisation}</p>
                <p className="description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="projects">
        <h2>Research projects</h2>
        <div className="entries">
          {projects.map((project) => (
            <article className="entry" key={project.title}>
              <p className="period">{project.period}</p>
              <div>
                <h3>{project.title}</h3>
                <p className="organisation">{project.organisation}</p>
                <p className="description">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section" id="education">
        <h2>Education</h2>
        <div className="entries education-entries">
          {education.map((item) => (
            <article className="entry" key={item.institution}>
              <p className="period">{item.period}</p>
              <div>
                <h3>{item.institution}</h3>
                <p className="organisation">{item.degree}</p>
                <p className="description">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="coursework">
          <h3>Selected coursework</h3>
          <p>{coursework.join(' · ')}</p>
        </div>
      </section>
    </main>

    <footer>
      <span>© {new Date().getFullYear()} Mamoun Chami</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  </HelmetProvider>
);

export default App;
