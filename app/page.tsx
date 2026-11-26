const skills = [
  { name: "JavaScript", icon: "fa-brands fa-js" },
  { name: "TypeScript", icon: "fa-solid fa-code" },
  { name: "Node.js", icon: "fa-brands fa-node-js" },
  { name: "Express.js", icon: "fa-solid fa-server" },
  { name: "MongoDB", icon: "fa-solid fa-database" },
  { name: "PostgreSQL", icon: "fa-solid fa-database" },
  { name: "Redis", icon: "fa-solid fa-bolt" },
  { name: "Docker", icon: "fa-brands fa-docker" },
  { name: "Microservices", icon: "fa-solid fa-network-wired" },
  { name: "Next.js", icon: "fa-solid fa-code" },
  { name: "Tailwind CSS", icon: "fa-solid fa-wind" },
  { name: "React", icon: "fa-brands fa-react" },
];

const projects = [
  {
    title: "Hirenova",
    subtitle:
      "AI-powered job platform for jobseekers, recruiters, and hiring teams",
    description:
      "Developed an AI-powered recruitment platform with intelligent job matching, resume analysis, candidate discovery, application tracking, collaborative hiring workflows, role-based dashboards, and AI-driven recruitment insights.",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=900&q=80",
    tags: [
      "AI Integration",
      "Job Matching",
      "Resume Analysis",
      "Dashboards",
    ],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/isakibul/hirenova",
      },
      {
        label: "Demo Video",
        href: "https://drive.google.com/file/d/1qwM0Lz8Ye3NYiy6E7D7iiVZc-pfKj7qa/view?usp=sharing",
      },
      {
        label: "Architecture",
        href: "https://drive.google.com/drive/folders/1aqahdStH36a7gP9BclHR0-5gCLp2S41e?usp=sharing",
      },
    ],
  },
  {
    title: "E-Commerce Microservice",
    subtitle:
      "Dockerized microservice backend system with Kong API Gateway, Keycloak, PostgreSQL, Redis, and RabbitMQ",
    description:
      "Developed a production-aware e-commerce microservice platform with seven Node.js backend services for authentication, users, products, inventory, cart, orders, and email. The system uses Kong as the public API gateway, Keycloak for JWT/OIDC authentication, PostgreSQL for data, Redis for cart workflows, and RabbitMQ for asynchronous messaging.",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80",
    tags: [
      "Node.js",
      "Kong",
      "Keycloak",
      "PostgreSQL",
      "Redis",
      "RabbitMQ",
      "Docker",
    ],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/isakibul/e-commerce-microservice",
      },
      {
        label: "Demo Video",
        href: "https://drive.google.com/file/d/1T95iineGlWydK3CduVEZofXhPHUfkjMO/view?usp=sharing",
      },
      {
        label: "Architecture",
        href: "https://drive.google.com/drive/folders/1Rs0YtJOApOBfZejPKbC-RByMHgTIC2jN?usp=sharing",
      },
    ],
  },
  {
    title: "EventWave",
    subtitle: "Event management platform built with Next.js and MongoDB",
    description:
      "Developed a full-stack event management platform using Next.js for client and server-side features with MongoDB for persistent event data. The platform supports event discovery, management workflows, and streamlined event organization.",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=900&q=80",
    tags: ["Next.js", "MongoDB", "Full Stack", "Event Management"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/isakibul/eventwave",
      },
      {
        label: "Demo",
        href: "https://eventwave-alpha.vercel.app/",
      },
    ],
  },
  {
    title: "NextVerse",
    subtitle:
      "Social media and content sharing platform built with React.js and Firebase",
    description:
      "Developed a social media and content sharing platform using React.js, Firebase, and related frontend tools to support a modern content-driven user experience.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=900&q=80",
    tags: ["React.js", "Firebase", "Social Media", "Content Sharing"],
    actions: [
      {
        label: "GitHub",
        href: "https://github.com/isakibul/nextverse",
      },
      {
        label: "Demo",
        href: "",
      },
    ],
  },
];

export default function Home() {
  return (
    <div className="site-wrapper">
      {/* Hero */}
      <header className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">
            <span className="status-dot" />
            Sakibul Islam
          </p>
          <h1>
            <span className="hero-title-prefix">Backend-Focused</span>
            <br />
            <em>Full-Stack</em>
            <br />
            Developer
          </h1>
          <p className="hero-desc">
            I design and develop scalable, maintainable web applications with a
            focus on backend architecture, API design, and applied{" "}
            <strong>AI integration</strong>.
          </p>
          <div className="hero-actions">
            <a
              href="https://drive.google.com/drive/folders/1gCXCl1-Htps8BKLS_biQW45tDT1CYQzI?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              <i
                className="fa-solid fa-download btn-icon-download"
                aria-hidden="true"
              />
              View Resume
            </a>
            <a
              href="https://wa.me/8801780775100"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <i
                className="fa-brands fa-whatsapp btn-icon-chat"
                aria-hidden="true"
              />
              Contact via WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <div className="avatar-frame">
            <img src="/logo.png" alt="Sakibul Islam" />
            <span className="avatar-badge">
              <span className="badge-dot" />
              Available for roles
            </span>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about">
        <div className="about-grid">
          <div className="info-card">
            <h3>Technical Capabilities</h3>
            <div className="skills-grid" id="skillsContainer">
              {skills.map((skill) => (
                <span key={skill.name} className="skill-tag">
                  <i className={skill.icon} aria-hidden="true" />
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
          <div className="info-card">
            <h3>Professional Contact</h3>
            <div className="socials">
              <a
                href="https://github.com/isakibul"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/in/isakibul/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/_itsakib_/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram" aria-hidden="true" />
              </a>
            </div>
            <div className="contact-row">
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              <a href="mailto:isakibul108@gmail.com">isakibul108@gmail.com</a>
            </div>
            <div className="contact-row">
              <i className="fa-solid fa-location-dot" aria-hidden="true" />
              <span>Bogura, Bangladesh</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <h3 className="section-label">Selected Projects</h3>
        <div className="projects-grid" id="projectsContainer">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <div className="project-img-wrap">
                <img src={project.image} alt={project.title} loading="lazy" />
                <div className="project-overlay">
                  <i className="fa-solid fa-code project-overlay-icon" />
                </div>
              </div>
              <div className="project-body">
                <h3>{project.title}</h3>
                <div className="project-subtitle">{project.subtitle}</div>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div
                  className="project-actions"
                  aria-label={`${project.title} links`}
                >
                  {project.actions.map((action) =>
                    action.href ? (
                      <a
                        key={action.label}
                        className="project-action"
                        href={action.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {action.label}
                      </a>
                    ) : (
                      <span
                        key={action.label}
                        className="project-action is-disabled"
                        aria-disabled="true"
                      >
                        {action.label}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
