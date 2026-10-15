import { useState } from "react"
import portrait from "./assets/portrait.jpg"
import nvcScreenshot from "./assets/nvc-foundation.png"
import githubScreenshot from "./assets/github-profile.png"

const facebookUrl =
  "https://www.facebook.com/photo/?fbid=1501648041049085&set=a.108067173740519"
const linkedinUrl = "https://www.linkedin.com/in/rainer-astodillo-77bb3b382/"
const githubUrl = "https://github.com/rainerastodillo27-stack"

const toolkit = [
  {
    number: "01",
    title: "Languages",
    description: "The foundations I write with.",
    tools: ["Python", "JavaScript", "TypeScript", "PHP"],
  },
  {
    number: "02",
    title: "Application development",
    description: "From cross-platform interfaces to APIs.",
    tools: ["React Native", "FastAPI"],
  },
  {
    number: "03",
    title: "Tools & infrastructure",
    description: "Taking a system from code to deployment.",
    tools: ["GitHub", "Supabase", "Bluehost VPS", "GoDaddy · .online"],
  },
]

const modules = [
  {
    title: "Volunteers & partners",
    description:
      "Volunteer management, partner verification, and dedicated portals.",
  },
  {
    title: "Programs & events",
    description: "A centralized suite for organizing programs and events.",
  },
  {
    title: "Communication hub",
    description:
      "A shared space for coordination across volunteers and partners.",
  },
  {
    title: "Partnership mapping",
    description: "A map-based view of NGO partnerships.",
  },
  {
    title: "Impact monitoring",
    description:
      "Analytics for tracking program outcomes and supporting transparency.",
  },
]

const projects = [
  {
    number: "01",
    title: "NVC Foundation Connect",
    type: "Whole-system development · Deployed & maintained",
    description:
      "A cross-platform system bringing nonprofit volunteers, partners, programs, and communication into one digital environment. I programmed the entire system, deployed it, and continue to maintain it.",
    image: nvcScreenshot,
    alt: "NVC Foundation Connect login page",
    url: "https://nvcfoundationconnect.online/",
    className: "project-terracotta",
  },
  {
    number: "02",
    title: "More on GitHub",
    type: "Code & repositories",
    description: "Visit my GitHub to explore more of my projects and code.",
    image: githubScreenshot,
    alt: "Rainer Astodillo's GitHub profile and repositories",
    url: githubUrl,
    className: "project-blue",
  },
]

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main>
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#top" onClick={closeMenu}>
          RA<span>.</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="site-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span>{menuOpen ? "Close" : "Menu"}</span>
          <span className="menu-line" />
        </button>
        <div
          className={menuOpen ? "nav-links is-open" : "nav-links"}
          id="site-menu"
        >
          <a href="#about" onClick={closeMenu}>
            About
          </a>
          <a href="#work" onClick={closeMenu}>
            Work
          </a>
          <a href="#toolkit" onClick={closeMenu}>
            Toolkit
          </a>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </nav>

      <section className="hero shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Programmer / Seeking an internship</p>
          <h1>
            Rainer
            <br />
            <em>Astodillo.</em>
          </h1>
          <p className="hero-intro">
            From writing the code to keeping it running. I’m a fourth-year
            Information Systems student who built, deployed, and maintains NVC
            Foundation Connect.
          </p>
          <div className="hero-actions">
            <a className="text-link" href="#work">
              View my work <span aria-hidden="true">↘</span>
            </a>
            <a
              className="secondary-link"
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="hero-note">
            <span className="status-dot" aria-hidden="true" />
            Open to programming internship opportunities
          </div>
        </div>

        <div className="hero-visual">
          <div className="image-frame">
            <img src={portrait} alt="Rainer Astodillo" />
          </div>
          <p className="image-caption">
            Rainer Astodillo
            <span>Programmer</span>
          </p>
          <div className="portrait-note">
            <span className="status-dot" aria-hidden="true" />
            <div>
              <strong>Learning by building.</strong>
              <span>Code. Deploy. Maintain.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="marquee" aria-label="Areas of expertise">
        <div>
          <span className="skills-label">Beyond the classroom</span>
          <span>Whole-system development</span>
          <span>Deployed project</span>
          <span>Ongoing maintenance</span>
        </div>
      </section>

      <section className="about shell" id="about">
        <p className="section-label">01 / About me</p>
        <div className="about-copy">
          <h2>
            A student mindset.
            <br />
            <em>A programmer’s focus.</em>
          </h2>
          <div className="about-detail">
            <p>
              I’m a fourth-year Bachelor of Science in Information Systems
              (BSIS) student at Carlos Hilado Memorial State University. My work
              on NVC Foundation Connect has taken me through the full process:
              programming the system, deploying it, and maintaining it.
            </p>
            <p>
              Outside of programming, I enjoy reading and playing video games.
              You can explore my work below or visit my GitHub for more
              projects.
            </p>
          </div>
        </div>
        <div className="profile-facts">
          <div>
            <span>Education</span>
            <strong>BS Information Systems</strong>
            <p>Carlos Hilado Memorial State University</p>
          </div>
          <div>
            <span>Current chapter</span>
            <strong>Fourth-year student</strong>
            <p>Seeking a programming internship</p>
          </div>
          <div>
            <span>Outside of code</span>
            <strong>Reading &amp; video games</strong>
            <p>A little about the person behind the work</p>
          </div>
        </div>
      </section>

      <section className="work shell" id="work">
        <div className="section-heading">
          <div>
            <p className="section-label">02 / Selected work</p>
            <h2>
              Built with purpose.
              <br />
              <em>Maintained with care.</em>
            </h2>
          </div>
          <p>From ideas to implementation</p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project" key={project.number}>
              {project.number === "01" && (
                <div className="project-ribbon">
                  <span>Featured project / NVC Foundation Connect</span>
                  <span>
                    <span className="status-dot" aria-hidden="true" /> Deployed
                    &amp; maintaining
                  </span>
                </div>
              )}
              <a
                className={`project-art ${project.className}`}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title} (opens in a new tab)`}
              >
                <img src={project.image} alt={project.alt} loading="lazy" />
                <span className="project-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
              <div className="project-meta">
                <div>
                  <span className="project-number">/{project.number}</span>
                  <h3>{project.title}</h3>
                  <p>{project.type}</p>
                </div>
                <p>{project.description}</p>
                {project.number === "01" && (
                  <div className="tool-tags" aria-label="Project technologies">
                    {["React Native", "Python", "TypeScript", "FastAPI"].map(
                      (tool) => (
                        <span key={tool}>{tool}</span>
                      ),
                    )}
                  </div>
                )}
                <a
                  className="project-link"
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.number === "01"
                    ? "Visit live project"
                    : "Explore repositories"}{" "}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
              {project.number === "01" && (
                <details className="case-study" open>
                  <summary>
                    Inside the project{" "}
                    <span className="case-toggle" aria-hidden="true" />
                  </summary>
                  <div className="case-content">
                    <div className="case-overview">
                      <div>
                        <p className="section-label">The purpose</p>
                        <h3>
                          One place to coordinate.
                          <br />
                          More room for impact.
                        </h3>
                        <p>
                          NVC Foundation Connect brings partner and volunteer
                          management into a centralized environment, designed to
                          improve coordination, engagement, and transparency for
                          nonprofit operations.
                        </p>
                      </div>
                      <div className="ownership">
                        <span>My contribution</span>
                        <strong>The entire system.</strong>
                        <p>
                          Programming, deployment, and ongoing maintenance—not
                          just an isolated feature.
                        </p>
                        <span>Current status</span>
                        <p className="deployment-status">
                          <span className="status-dot" aria-hidden="true" />{" "}
                          Deployed &amp; maintained
                        </p>
                      </div>
                    </div>
                    <div className="module-grid">
                      {modules.map((module, index) => (
                        <div key={module.title}>
                          <span className="module-index">0{index + 1}</span>
                          <h4>{module.title}</h4>
                          <p>{module.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </details>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="toolkit-section" id="toolkit">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="section-label">03 / Technical toolkit</p>
              <h2>The tools behind the work.</h2>
            </div>
            <p>Languages, frameworks &amp; infrastructure</p>
          </div>
          <div className="toolkit-grid">
            {toolkit.map((group) => (
              <article className="toolkit-card" key={group.number}>
                <span className="toolkit-number">{group.number} /</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="tool-tags">
                  {group.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <p className="toolkit-note">
            NVC Foundation Connect brings together React Native, Python,
            TypeScript, and FastAPI. My wider toolkit includes GitHub, Supabase,
            Bluehost VPS hosting, and a .online domain managed through GoDaddy.
          </p>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="shell contact-inner">
          <p className="section-label">04 / The next chapter</p>
          <h2>
            Your next intern.
            <br />
            <em>Ready to contribute.</em>
          </h2>
          <p className="contact-intro">
            I’m looking for a programming internship where I can contribute my
            development experience and keep learning. Have an opportunity in
            mind? Let’s talk.
          </p>
          <a className="contact-link" href="mailto:rainerastodillo27@gmail.com">
            rainerastodillo27@gmail.com <span aria-hidden="true">↗</span>
          </a>
          <div className="footer-row">
            <p>© {new Date().getFullYear()} Rainer Astodillo</p>
            <div>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a href="#top">Back to top ↑</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
