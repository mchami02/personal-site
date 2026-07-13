import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import './static/css/main.scss';

const experience = [
  {
    period: 'Past position',
    role: 'ML Research Engineer',
    organisation: 'Jump Trading',
    organisationUrl: 'https://www.jumptrading.com/',
    description: 'Previous position at Jump Trading.',
  },
  {
    period: 'Jun — Sep 2025',
    role: 'Machine Learning Engineer Intern',
    organisation: 'Flink Robotics',
    organisationUrl: 'https://www.flink.so/',
    description: 'Improved box localization from RGB-D images and point clouds using machine-learning and optimization methods. Integrated efficient models and reworked the optimization pipeline, producing a 3–5× faster iteration cycle and approximately doubling pose-estimation accuracy.',
  },
  {
    period: '2024',
    role: 'Teaching Assistant',
    organisation: 'ETH Zürich',
    organisationUrl: 'https://ethz.ch/',
    description: 'Teaching assistant for Introduction to Machine Learning.',
  },
  {
    period: 'Jul — Sep 2023',
    role: 'Research Assistant',
    organisation: 'Oracle',
    organisationUrl: 'https://www.oracle.com/',
    description: 'Completed training in Linux, Bash, Git, Docker and Kubernetes, then contributed to Oracle’s document-management system and internal development workflows.',
  },
];

const projects = [
  {
    period: 'Oct 2025 — Mar 2026',
    title: 'WaveNO: Solving PDEs using Physics-Informed Attention Bias',
    organisation: 'University of California, Berkeley · CITRIS',
    organisationUrl: 'https://www.berkeley.edu/',
    description: 'Master thesis research completed as a Visiting Student Researcher, supervised by Prof. Alexandre Bayen, Prof. Hossein Matin and Prof. Niao He. Introduced WaveNO, a transformer-based neural operator with a physics-informed attention bias for hyperbolic conservation laws, evaluated on the LWR traffic-flow model and the Aw–Rascle–Zhang system.',
    researchUrl: '/files/waveno-thesis.pdf',
    researchLabel: 'Read thesis',
    groupUrl: 'https://bayen.berkeley.edu/',
  },
  {
    period: '2024 — 2025',
    title: 'Continuous-time modelling and chaotic systems forecasting',
    organisation: 'Swiss Data Science Center · Dr Christian Donner',
    organisationUrl: 'https://datascience.ch/',
    description: 'Evaluated Neural Laplace on 44 chaotic systems, outperforming baselines by 23% and accurately modelling 26 systems. Identified a Lyapunov-exponent threshold and tested limitations on noisier real-world data.',
    researchUrl: '/files/enhancing-neural-laplace.pdf',
    researchLabel: 'Read paper',
  },
  {
    period: '2024 — 2025',
    title: 'Continual learning and data selection',
    organisation: 'ETH Zürich',
    organisationUrl: 'https://ethz.ch/',
    description: 'Developed Easy-to-Forget, a replay-buffer sampling strategy prioritising difficult examples. It achieved 63.4% Class-IL accuracy on CIFAR-10 with low computational overhead; broader CIFAR-100 experiments identified scalability limits.',
    researchUrl: '/files/easy-to-forget.pdf',
    researchLabel: 'Read paper',
  },
  {
    period: '2024',
    title: 'Galaxy: large-scale Jupyter notebook analysis',
    organisation: 'ETH Zürich',
    organisationUrl: 'https://ethz.ch/',
    supervisor: 'Prof. April Yi Wang',
    supervisorUrl: 'https://aprilwang.me/',
    description: 'Lead-authored a JupyterLab extension that uses language models to classify and cluster notebook cells with 75% accuracy. In a user study, Galaxy reduced reported mental demand by 18%, effort by 19% and frustration by 30%; 80% of participants preferred it.',
    researchUrl: '/files/galaxy-submitted-paper.pdf',
    researchLabel: 'Read submitted paper',
  },
];

const education = [
  {
    period: '2023 — 2026',
    institution: 'ETH Zürich',
    institutionUrl: 'https://ethz.ch/',
    degree: 'MSc Computer Science',
    detail: 'Major in Machine Intelligence · Minor in Data Management Systems',
  },
  {
    period: '2022 — 2023',
    institution: 'University of Washington',
    institutionUrl: 'https://www.washington.edu/',
    degree: 'Academic year abroad · Computer Science',
    detail: 'Seattle, Washington',
  },
  {
    period: '2020 — 2023',
    institution: 'EPFL',
    institutionUrl: 'https://www.epfl.ch/',
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
      <meta name="description" content="Mamoun Chami is a former ML Research Engineer at Jump Trading and a Computer Science master's graduate from ETH Zürich." />
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
          Former ML Research Engineer at Jump Trading and Computer Science master’s
          graduate from ETH Zürich, with research in scientific machine learning,
          computer vision and time-series modelling.
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
                <p className="organisation">
                  <a href={item.organisationUrl} target="_blank" rel="noreferrer">
                    {item.organisation} <Arrow />
                  </a>
                </p>
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
                <p className="organisation">
                  <a href={project.organisationUrl} target="_blank" rel="noreferrer">
                    {project.organisation} <Arrow />
                  </a>
                  {project.supervisorUrl && (
                    <>
                      {' · '}
                      <a href={project.supervisorUrl} target="_blank" rel="noreferrer">
                        {project.supervisor} <Arrow />
                      </a>
                    </>
                  )}
                </p>
                <p className="description">{project.description}</p>
                {(project.researchUrl || project.groupUrl) && (
                  <div className="research-links">
                    {project.researchUrl && (
                      <a href={project.researchUrl} target="_blank" rel="noreferrer">
                        {project.researchLabel} <Arrow />
                      </a>
                    )}
                    {project.groupUrl && (
                      <a href={project.groupUrl} target="_blank" rel="noreferrer">
                        Berkeley research group <Arrow />
                      </a>
                    )}
                  </div>
                )}
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
                <h3>
                  <a href={item.institutionUrl} target="_blank" rel="noreferrer">
                    {item.institution} <Arrow />
                  </a>
                </h3>
                <p className="organisation">{item.degree}</p>
                <p className="description">{item.detail}</p>
              </div>
            </article>
          ))}
        </div>
        <details className="coursework">
          <summary>Selected coursework <span aria-hidden="true">+</span></summary>
          <p>{coursework.join(' · ')}</p>
        </details>
      </section>
    </main>

    <footer>
      <span>© {new Date().getFullYear()} Mamoun Chami</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  </HelmetProvider>
);

export default App;
