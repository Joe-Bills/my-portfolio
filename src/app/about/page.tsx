import React from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SkillBar from "@/components/SkillBar";

const skillGroups = [
  {
    icon: "⌘",
    title: "Frontend",
    skills: [
      { name: "React.js / Next.js", level: 92 },
      { name: "HTML5 / CSS3", level: 95 },
      { name: "TypeScript / JavaScript", level: 90 },
      { name: "PWA / Responsive Design", level: 88 },
    ],
  },
  {
    icon: "⚙",
    title: "Backend",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "Python / FastAPI", level: 85 },
      { name: "PHP (Core)", level: 82 },
      { name: "REST APIs / JWT / WebSockets", level: 90 },
    ],
  },
  {
    icon: "▤",
    title: "Databases & DevOps",
    skills: [
      { name: "PostgreSQL / MySQL", level: 86 },
      { name: "MongoDB / SQLite", level: 82 },
      { name: "Docker / Nginx / Linux", level: 80 },
      { name: "Git / CI & Deployment", level: 88 },
    ],
  },
];

const timeline = [
  {
    when: "2022 – 2025",
    title: "BSc Computer Science — Institute of Accountancy Arusha (IAA)",
    body: (
      <>
        Arusha, Tanzania ·{" "}
        <strong style={{ color: "#22d3ee" }}>GPA 4.4 / 5.0 — First Class Honours</strong>
        <br />
        Final Year Project:{" "}
        <span style={{ color: "#22d3ee" }}>
          &quot;CHARTBOT — Advanced Algorithmic Trading for MT5&quot;
        </span>
      </>
    ),
  },
  {
    when: "Jul – Sep 2024",
    title: "IT Field Service — Regional Commissioner's Office [RAS], Arusha",
    body: (
      <ul>
        <li>Assisted in deploying and maintaining network systems and office IT infrastructure</li>
        <li>Installed and configured software on client machines</li>
        <li>Provided technical support and troubleshooting for end users</li>
        <li>Documented field reports and contributed to internal system improvements</li>
      </ul>
    ),
  },
  {
    when: "Ongoing",
    title: "Client Projects & Freelance Work",
    body: (
      <>
        Building production systems for real clients — the JayWorld desktop
        invoicing app, the Milan ISP management platform, the MCTV multi-tenant
        ERP, and a live IPTV streaming PWA deployed on Ubuntu with Docker.
      </>
    ),
  },
];

const certifications = [
  "Full-Stack Web Development Online Training",
  "Git & Version Control Essentials — Codecademy",
  "Intro to APIs — freeCodeCamp",
];

const attributes = [
  "Strong analytical and critical thinking",
  "Fast learner and team collaborator",
  "Detail-oriented and adaptive to new technologies",
  "Eager to take initiative and deliver quality solutions",
];

const referees = [
  ["Mr. Kimaro", "Regional ICT Officer", "0757 545 575"],
  ["Mr. Yona", "Informatics Lecturer", "0763 762 334"],
  ["Mr. Abraham Billa", "Parent", "0767 652 458"],
  ["Madam Nahen", "CompSci Teacher", "0712 802 010"],
  ["Madam Verediana", "CompSci Teacher", "0744 575 151 / 0624 450 193"],
];

export default function About() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 24 }}>
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{"// about"}</span>
            <h2>
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="underline" />
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 28,
              padding: "28px 30px",
              flexWrap: "wrap",
              maxWidth: 860,
              margin: "0 auto",
            }}
          >
            <div className="avatar-wrap" style={{ position: "relative" }}>
              <div className="avatar-glow" />
              <Image
                src="/pro-pic.png"
                alt="Joseph Billa"
                width={110}
                height={110}
                priority
                style={{
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "3px solid rgba(34,211,238,0.6)",
                  position: "relative",
                }}
              />
            </div>
            <div style={{ flex: 1, minWidth: 260 }}>
              <h2 style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em" }}>
                Joseph Billa
              </h2>
              <p style={{ color: "#22d3ee", fontSize: 17, marginTop: 4 }}>
                Full-Stack Developer | FX, Stocks and Crypto Trader
              </p>
              <p className="text-muted" style={{ marginTop: 12, fontSize: 15, lineHeight: 1.7 }}>
                A passionate and self-driven Computer Science graduate with
                hands-on expertise in full-stack web development — building
                dynamic, responsive applications with JavaScript, PHP, Python,
                React and Express. Known for problem-solving ability, clean
                code, and strong enthusiasm for impactful digital solutions.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: 32 }}>
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{"// skills"}</span>
            <h2>
              Tech <span className="gradient-text">Stack</span>
            </h2>
            <div className="underline" />
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 120}>
              <div className="skill-card">
                <h4>
                  <span className="icon">{group.icon}</span>
                  {group.title}
                </h4>
                {group.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div style={{ marginTop: 34 }}>
            <h4 style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, color: "#22d3ee" }}>
              Also in the toolbox
            </h4>
            <div className="chip-list">
              {[
                "Electron.js",
                "Socket.io",
                "Bootstrap",
                "jQuery",
                "Tailwind CSS",
                "HLS.js",
                "SQL.js",
                "Redis",
                "Vite",
                "XAMPP",
                "Vercel",
                "GitHub",
                "VS Code",
                "Ubuntu CLI",
                "UI/UX Principles",
              ].map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{"// journey"}</span>
            <h2>
              Education &amp; <span className="gradient-text">Experience</span>
            </h2>
            <div className="underline" />
          </div>
        </Reveal>

        <div className="timeline">
          {timeline.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <div className="card timeline-item">
                <div className="when">{item.when}</div>
                <h4>{item.title}</h4>
                <div className="text-muted">{item.body}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{"// credentials"}</span>
            <h2>
              Certifications &amp; <span className="gradient-text">Referees</span>
            </h2>
            <div className="underline" />
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
            gap: 22,
            maxWidth: 900,
            margin: "0 auto",
          }}
        >
          <Reveal>
            <div className="card h-100">
              <div className="card-top">
                <h3 className="card-title">
                  <span className="accent">Certifications</span> &amp; Training
                </h3>
              </div>
              <div className="card-body">
                <ul>
                  {certifications.map((c, i) => (
                    <li key={i}>
                      <span className="mono" style={{ color: "#22d3ee", marginRight: 8 }}>
                        ▹
                      </span>
                      {c}
                    </li>
                  ))}
                </ul>
                <p className="text-muted" style={{ marginTop: 18 }}>
                  <span className="tag green">Verification</span>{" "}
                  <span style={{ marginLeft: 8, fontSize: 13.5 }}>
                    Copies available upon request.
                  </span>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="card h-100">
              <div className="card-top">
                <h3 className="card-title">
                  <span className="accent">Personal</span> Attributes
                </h3>
              </div>
              <div className="card-body">
                <ul>
                  {attributes.map((a, i) => (
                    <li key={i}>
                      <span className="mono" style={{ color: "#22d3ee", marginRight: 8 }}>
                        ▹
                      </span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="card h-100">
              <div className="card-top">
                <h3 className="card-title">
                  <span className="accent">Referees</span>
                </h3>
              </div>
              <div className="card-body">
                <ul>
                  {referees.map(([name, role, phone]) => (
                    <li key={name}>
                      <strong style={{ color: "#e2e8f0" }}>{name}</strong> — {role}
                      <br />
                      <span className="mono" style={{ fontSize: 13, color: "#22d3ee" }}>
                        {phone}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}