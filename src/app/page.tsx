import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";
import WorkAccordion, { type WorkItem } from "@/components/WorkAccordion";
import ContactForm from "@/components/ContactForm";

const work: WorkItem[] = [
  {
    title: "MCTV ERP System",
    kind: "Client · Multi-tenant ERP",
    body: "One role-based system for the whole business cycle: accounting, sales, procurement, inventory, CRM, fixed assets, BI and administration. Each tenant is isolated, and the code is backed by more than 457 passing tests.",
    href: "/MCTV_ERP_Presentation.pptx",
    linkLabel: "View the presentation ↗",
    download: true,
    chips: ["FastAPI", "React", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Milan ISP Management",
    kind: "Live · ISP back-office",
    body: "The operational core of an internet service provider: subscriber records, field technician dispatch, support tickets and cable inventory in a single tool.",
    href: "https://milansip.mctv.co.tz",
    linkLabel: "Visit the live system ↗",
    chips: ["PHP", "MySQL", "JavaScript"],
  },
  {
    title: "JayWorld Desktop",
    kind: "Client · Offline app",
    body: "Invoicing and inventory that works with no internet connection. Multi-role authentication, a full audit log and PDF export, packaged as a native desktop app.",
    chips: ["Electron", "SQL.js", "Vanilla JS"],
  },
  {
    title: "TapServe",
    kind: "In progress · QR ordering",
    body: "Guests order from a QR code at the table. The kitchen is alerted in real time, dishes can be previewed in 3D, and payments are managed end to end.",
    chips: ["Express", "PostgreSQL", "Socket.io"],
  },
  {
    title: "ZYNET IPTV",
    kind: "Progressive web app",
    body: "An installable web app for live IPTV streaming, deployed on Ubuntu behind Nginx and containerised with Docker.",
    chips: ["React", "Vite", "hls.js", "Docker"],
  },
  {
    title: "CHARTBOT",
    kind: "Final-year project · Algo trading",
    body: "A chart-driven trading assistant for MetaTrader 5. A Python backend runs the technical analysis and generates signals, shown through an interactive interface.",
    chips: ["Python", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Forex Signals Platform",
    kind: "Full-stack · Signals platform",
    body: "A subscription platform for delivering forex signals: authenticated tiers, real-time WebSocket notifications, a trading journal, activity logging, an admin dashboard and direct user-to-admin chat.",
    chips: ["Express", "MongoDB", "React", "Socket.io"],
  },
  {
    title: "Fitness Management System",
    kind: "Full-stack · Fitness platform",
    body: "A multi-role platform for gyms — admins, trainers and clients — with secure authentication, class and workout management, trainer search, progress tracking and real-time messaging.",
    chips: ["PHP", "MySQL", "JavaScript"],
  },
];

const facts = [
  { value: "8", label: "Systems shown here" },
  { value: "Arusha", label: "Based in Tanzania" },
  { value: "First Class", label: "BSc Computer Science" },
  { value: "3 markets", label: "FX, stocks and crypto" },
];

const toolkit = [
  ["Languages", "JavaScript, TypeScript, Python, PHP"],
  ["Frontend", "React, Next.js, Tailwind CSS, Bootstrap, PWA"],
  ["Backend", "Node.js, Express, FastAPI, REST APIs, JWT, Socket.io"],
  ["Data", "PostgreSQL, MySQL, MongoDB, Redis, SQLite"],
  ["Delivery", "Docker, Nginx, Linux (Ubuntu), Git and GitHub, Electron"],
];

const contactRows = [
  { label: "WhatsApp", value: "+255 694 404 168", href: "https://wa.me/255694404168" },
  { label: "Phone", value: "+255 750 404 168", href: "tel:+255750404168" },
  { label: "Email", value: "josephbilla746@gmail.com", href: "mailto:josephbilla746@gmail.com" },
  { label: "GitHub", value: "Joe-Bills", href: "https://github.com/Joe-Bills" },
  {
    label: "LinkedIn",
    value: "Joseph Billa",
    href: "https://www.linkedin.com/in/joseph-billa-5a2726288/",
  },
  { label: "Instagram", value: "@namigrouptz", href: "https://instagram.com/namigrouptz" },
];

export default function Home() {
  return (
    <>
      <header>
        <div className="wrap">
          <nav>
            <a href="#work">Work</a>
            <a href="#about">About</a>
            <a href="#contact" className="hire">
              Hire me
            </a>
          </nav>
        </div>
      </header>

      <div className="wrap">
        <div className="hero" id="top">
          <div className="rv">
            <p className="label">Full-stack developer · Arusha, Tanzania</p>
            <h1>
              Software for the work that <em>keeps a business running.</em>
            </h1>
            <p className="lede">
              I’m a First Class Computer Science graduate who designs and ships
              ERPs, billing systems and real-time platforms for companies that
              rely on them every day.
            </p>
            <div className="cta">
              <a className="btn solid" href="#work">
                See the work
              </a>
              <a className="btn ghost" href="#contact">
                Start a conversation
              </a>
            </div>
          </div>
          <div className="portrait rv">
            <div className="frame">
              <Image
                src="/pro-pic.png"
                alt="Portrait of Joseph Billa"
                fill
                priority
                sizes="(max-width: 820px) 300px, 380px"
              />
            </div>
            <div className="tag">
              <b>Joseph Billa</b>Full-stack developer
              <br />
              and market trader
            </div>
          </div>
        </div>

        <div className="facts rv">
          {facts.map((f) => (
            <div key={f.label}>
              <b>{f.value}</b>
              <span>{f.label}</span>
            </div>
          ))}
        </div>

        <section id="work">
          <div className="sec-head rv">
            <p className="label">Selected work</p>
            <h2>Systems in daily use, and a few still being built.</h2>
          </div>
          <div className="rv">
            <WorkAccordion items={work} />
          </div>
        </section>

        <section id="about">
          <div className="about rv">
            <p className="label">About</p>
            <div>
              <p className="big">
                I like software that people stop noticing because it simply
                works: a ledger that balances, a dispatch board that never drops
                a ticket.
              </p>
              <p>
                My work sits close to real operations: accounting, networks,
                restaurants, trading. That means clean data models, honest
                testing, and interfaces staff can learn in an afternoon.
              </p>
              <p>
                Away from the keyboard I trade FX, stocks and crypto, which is
                where my interest in fast, reliable, real-time systems comes
                from.
              </p>
            </div>
          </div>

          <div className="how rv">
            <div>
              <em>01</em>
              <h3>Understand the operation</h3>
              <p>
                I start with how the business actually runs, then model the data
                around it.
              </p>
            </div>
            <div>
              <em>02</em>
              <h3>Build it to be tested</h3>
              <p>
                Automated tests and clear roles from the first week, not the
                last.
              </p>
            </div>
            <div>
              <em>03</em>
              <h3>Ship and stay</h3>
              <p>
                Containerised deployments and a system I’m willing to support
                after launch.
              </p>
            </div>
          </div>

          <div className="skills rv">
            <p className="label">Toolkit</p>
            <dl>
              {toolkit.map(([dt, dd]) => (
                <div key={dt} style={{ display: "contents" }}>
                  <dt>{dt}</dt>
                  <dd>{dd}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="cv rv">
            <p className="label">Education &amp; experience</p>
            <div className="cv-list">
              <div className="cv-item">
                <span className="cv-when">2022 — 2025</span>
                <div>
                  <h3>BSc Computer Science, First Class Honours</h3>
                  <p>
                    Institute of Accountancy Arusha (IAA) · Arusha, Tanzania ·
                    GPA 4.4 / 5.0
                  </p>
                  <p>
                    Final-year project: CHARTBOT — Advanced Algorithmic Trading
                    for MT5.
                  </p>
                </div>
              </div>
              <div className="cv-item">
                <span className="cv-when">Jul — Sep 2024</span>
                <div>
                  <h3>
                    IT Field Service — Regional Commissioner’s Office (RAS)
                  </h3>
                  <p>Arusha, Tanzania</p>
                  <p>
                    Deployed and maintained network systems and office IT
                    infrastructure, installed and configured software, supported
                    and troubleshot for end users, and documented field reports.
                  </p>
                </div>
              </div>
              <div className="cv-item">
                <span className="cv-when">Certifications</span>
                <div>
                  <h3>Training &amp; credentials</h3>
                  <p>Full-Stack Web Development — online training</p>
                  <p>Git &amp; Version Control Essentials — Codecademy</p>
                  <p>Intro to APIs — freeCodeCamp</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="contact" id="contact">
        <div className="wrap cgrid rv">
          <div>
            <p className="label">Contact</p>
            <h2>
              Have a system that needs <em>building?</em>
            </h2>
            <p className="sub">
              Have a project in mind, a role to fill, or just want to talk
              trading? Send a brief below or reach me directly. I reply fast.
            </p>
            <div className="rows" id="rows">
              {contactRows.map((row) => (
                <a
                  key={row.label}
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <span>
                    <small>{row.label}</small>
                    {row.value}
                  </span>
                  <span>↗</span>
                </a>
              ))}
            </div>
          </div>
          <ContactForm />
        </div>
      </div>

      <div className="wrap">
        <footer>
          <span>© 2022 Joseph Billa</span>
          <span>Arusha, Tanzania</span>
        </footer>
      </div>

      <ScrollReveal />
    </>
  );
}