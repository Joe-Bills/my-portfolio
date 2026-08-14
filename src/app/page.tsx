import React from "react";
import Image from "next/image";
import Link from "next/link";
import TypingText from "@/components/TypingText";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";
import StatCounter from "@/components/StatCounter";
import TechMarquee from "@/components/TechMarquee";

const socials = [
  {
    href: "https://github.com/Joe-Bills",
    label: "GitHub",
    d: "M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z",
  },
  {
    href: "https://www.linkedin.com/in/joseph-billa-5a2726288/",
    label: "LinkedIn",
    d: "M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z",
  },
  {
    href: "https://instagram.com/trade_nami",
    label: "Instagram",
    d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
  },
  {
    href: "mailto:josephbilla746@gmail.com",
    label: "Email",
    d: "M12 13.065l-8-6.065v12h16v-12zm8-8.065h-16c-1.104 0-2 .896-2 2v.217l10 7.583 10-7.583v-.217c0-1.104-.896-2-2-2z",
  },
];

const featured = [
  {
    title: "MCTV ERP System",
    tag: "Client · ERP",
    tagClass: "tag purple",
    tech: "FastAPI · React · PostgreSQL · Redis · Docker",
    desc: "A multi-tenant ERP covering the full business cycle — Accounting, Sales, Procurement, Inventory, CRM, Fixed Assets, BI and Administration in one role-based system, with 457+ passing tests.",
    link: "/MCTV_ERP_Presentation.pptx",
    linkLabel: "View Presentation ↗",
    download: true,
  },
  {
    title: "JayWorld Desktop App",
    tag: "Native Desktop",
    tech: "Electron.js · SQL.js · Vanilla JS",
    desc: "Offline invoicing & inventory system for a client — multi-role auth, audit log, PDF export, no internet required.",
    link: "/projects",
    linkLabel: "Details →",
  },
  {
    title: "Milan ISP Management System",
    tag: "Live",
    tagClass: "tag green",
    tech: "PHP · MySQL · JavaScript",
    desc: "Full ISP back-office for subscriber management, field technician dispatch, tickets, and cable inventory.",
    link: "https://milansip.mctv.co.tz",
    linkLabel: "View Live ↗",
  },
  {
    title: "TapServe — QR Ordering",
    tag: "Ongoing",
    tech: "Express · PostgreSQL · Socket.io",
    desc: "QR restaurant ordering with real-time kitchen alerts, 3D food previews, and full payment management.",
    link: "/projects",
    linkLabel: "Details →",
  },
  {
    title: "ZYNET IPTV Web App",
    tag: "PWA",
    tagClass: "tag green",
    tech: "React · Vite · hls.js · Docker",
    desc: "Progressive Web App for live IPTV streaming, deployed on Ubuntu with Nginx and Docker.",
    link: "/projects",
    linkLabel: "Details →",
  },
  {
    title: "CHARTBOT — Algo Trading for MT5",
    tag: "Final Year Project",
    tagClass: "tag purple",
    tech: "HTML · CSS · JS · Python",
    desc: "Interactive chart-based trading chatbot with a Python backend for technical analysis and signal generation.",
    link: "/projects",
    linkLabel: "Details →",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <Reveal>
          <div className="hero-badge">
            <span className="dot" />
            OPEN TO WORK &amp; COLLABORATIONS
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="avatar-wrap float-slow">
            <div className="avatar-glow" />
            <div className="avatar-ring" />
            <div className="avatar-ring-2" />
            <Image
              src="/pro-pic.png"
              alt="Joseph Billa — profile photo"
              width={150}
              height={150}
              priority
              style={{
                borderRadius: "50%",
                objectFit: "cover",
                border: "3px solid rgba(34,211,238,0.6)",
                position: "relative",
              }}
            />
          </div>
        </Reveal>

        <Reveal delay={200}>
          <h1>Joseph Billa</h1>
        </Reveal>

        <Reveal delay={280}>
          <p className="role-line">
            <span className="text-muted">&gt;_</span>{" "}
            <TypingText
              words={[
                "Full-Stack Developer",
                "FX, Stocks & Crypto Trader",
                "React & Next.js Engineer",
                "Python & FastAPI Builder",
                "Problem Solver",
              ]}
            />
          </p>
        </Reveal>

        <Reveal delay={360}>
          <p className="lead">
            Self-driven Computer Science graduate with hands-on expertise in
            building dynamic, responsive web applications — from multi-tenant
            ERPs to real-time trading platforms. Clean code, sharp problem
            solving, and a genuine love for impactful digital solutions.
          </p>
        </Reveal>

        <Reveal delay={440}>
          <div className="hero-ctas">
            <Link href="/projects" className="btn btn-primary">
              View Projects
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact Me
            </Link>
          </div>
        </Reveal>

        <Reveal delay={520}>
          <div className="socials">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                className="social-link"
                title={s.label}
                aria-label={s.label}
              >
                <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24">
                  <path d={s.d} />
                </svg>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={600}>
          <div className="stats-grid">
            <StatCounter value={8} suffix="+" label="Projects Built" />
            <StatCounter value={10} suffix="+" label="Technologies" />
            <StatCounter value={4} suffix=".4" label="GPA · First Class" />
            <StatCounter value={2} label="Markets Traded" />
          </div>
        </Reveal>
      </section>

      <Reveal delay={200}>
        <TechMarquee />
      </Reveal>

      <section className="section" id="featured">
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{"// featured_work"}</span>
            <h2>
              Selected <span className="gradient-text">Projects</span>
            </h2>
            <div className="underline" />
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 22,
          }}
        >
          {featured.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <TiltCard className="h-100">
                <div className="card-top">
                  <h3 className="card-title">{p.title}</h3>
                  <span className={`tag ${p.tagClass ?? ""}`}>{p.tag}</span>
                </div>
                <div className="card-body">
                  <p className="tech-line">{p.tech}</p>
                  <p className="text-muted" style={{ marginTop: 10, fontSize: 14.5, lineHeight: 1.65 }}>
                    {p.desc}
                  </p>
                  <a
                    className="card-link"
                    href={p.link}
                    {...(p.download
                      ? { download: "MCTV_ERP_Presentation.pptx" }
                      : p.link.startsWith("http")
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                  >
                    {p.linkLabel}
                  </a>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/projects" className="btn btn-ghost">
              See all projects
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <Reveal>
          <div className="terminal">
            <div className="terminal-bar">
              <span className="t-dot red" />
              <span className="t-dot yellow" />
              <span className="t-dot green" />
              <span className="t-title">joseph@developer: ~/portfolio</span>
            </div>
            <div className="terminal-body">
              <p>
                <span className="c-key">$</span> whoami
              </p>
              <p>
                <span className="c-ok">Joseph Billa</span>
                <span className="c-comment">  # Full-Stack Developer &amp; Trader</span>
              </p>
              <p>
                <span className="c-key">$</span> cat skills.txt
              </p>
              <p>
                <span className="c-str">[JavaScript, TypeScript, React, Next.js, Node.js, Express,</span>
              </p>
              <p>
                <span className="c-str"> Python, FastAPI, PHP, PostgreSQL, MySQL, MongoDB, Docker,</span>
              </p>
              <p>
                <span className="c-str"> Socket.io, Redis, PWA, Linux]</span>
              </p>
              <p>
                <span className="c-key">$</span> status
              </p>
              <p>
                <span className="c-ok">✔ available_for_hire</span>{" "}
                <span className="c-comment"># let&apos;s build something great</span>
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}