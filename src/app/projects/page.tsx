import React from "react";
import Reveal from "@/components/Reveal";
import TiltCard from "@/components/TiltCard";

type Project = {
  title: string;
  tech: string;
  tag: string;
  tagClass?: string;
  bullets: string[];
  link?: string;
  linkLabel?: string;
  download?: boolean;
};

const projects: Project[] = [
  {
    title: "MCTV ERP — One System for the Whole Business",
    tech: "Python (FastAPI) · React 18 · PostgreSQL 16 · Redis · Docker",
    tag: "Client · ERP",
    tagClass: "tag purple",
    bullets: [
      "Multi-tenant ERP covering the full business cycle: Accounting & Finance, Sales, Procurement, Inventory, CRM, Fixed Assets, Business Intelligence and Administration",
      "Double-entry accounting with integer-cent precision, multi-currency, tax rates, and printable financial reports (Trial Balance, P&L, Balance Sheet, Cash Flow)",
      "Role-based access control (RBAC) with row-level tenant isolation, audit trail, and a formal 'Lockdown Kernel' verification layer",
      "Production-grade architecture — Nginx load balancing, Gunicorn + Uvicorn API replicas, Docker Swarm, Prometheus/Grafana/Loki/Sentry monitoring",
      "457+ backend tests, Vitest frontend tests, Playwright E2E, Locust load testing; PWA with full dark mode, offline shell, and guided onboarding tours",
    ],
    link: "/MCTV_ERP_Presentation.pptx",
    linkLabel: "Download Presentation ↗",
    download: true,
  },
  {
    title: "CHARTBOT — ADVANCED ALGORITHMIC TRADING FOR MT5",
    tech: "HTML, CSS, Vanilla JS, Python",
    tag: "Final Year Project",
    bullets: [
      "Built an interactive web interface for a chart-based trading chatbot with dynamic chart rendering",
      "Integrated Python backend for technical analysis, signal generation, and bot responses",
      "Ensured cross-browser compatibility and fully responsive design across devices",
    ]
  },
  {
    title: "FOREX SIGNALS PLATFORM",
    tech: "Node.js (Express), MongoDB, React.js",
    tag: "Full-Stack",
    tagClass: "tag green",
    bullets: [
      "Full-stack platform for managing and delivering forex trading signals with user authentication and subscription tiers",
      "Real-time notifications via WebSockets, trading journal, activity logging, and an admin dashboard",
      "Chat functionality between users and admins, plus personalised notification preferences",
    ]
  },
  {
    title: "JAYWORLD DESKTOP APP (Client: Bruno)",
    tech: "Electron.js, SQL.js, HTML, CSS, Vanilla JS",
    tag: "Native Desktop · Private",
    bullets: [
      "Offline-first desktop invoicing and inventory system running natively on Windows with no internet required",
      "Multi-role authentication (Admin / User) with recovery codes, full audit log, and secure local SQLite database",
      "Modules for customers, products, invoices, delivery notes, and business settings — all with PDF export",
    ]
  },
  {
    title: "MILAN ISP MANAGEMENT SYSTEM",
    tech: "PHP (Core), MySQL, JavaScript, CSS",
    tag: "Live · milansip.mctv.co.tz",
    tagClass: "tag green",
    link: "https://milansip.mctv.co.tz",
    linkLabel: "View Live ↗",
    bullets: [
      "Full ISP back-office platform handling subscribers, support tickets, device tracking, and cable roll inventory",
      "Real-time call detection API, GPS-based field technician coordination with Google Maps integration",
      "PWA-enabled for mobile field use; deployed on shared hosting with .htaccess routing and session management",
    ]
  },
  {
    title: "TAPSERVE — QR RESTAURANT ORDERING SYSTEM",
    tech: "Node.js (Express), PostgreSQL, React.js, Socket.io",
    tag: "Ongoing",
    bullets: [
      "QR-code-driven table ordering system — customers scan, browse a 3D-model menu, and place orders instantly",
      "Real-time kitchen/waiter notifications via Socket.io; full session, payment, and role-based staff management",
      "RESTful API with JWT auth, rate limiting, Helmet security headers, and Africa's Talking SMS integration",
    ]
  },
  {
    title: "ZYNET IPTV WEB APP",
    tech: "React.js, Vite, hls.js, Nginx, Docker",
    tag: "Private · PWA",
    bullets: [
      "Progressive Web App for live IPTV streaming using HLS.js with offline caching via service workers",
      "Dockerised deployment with Nginx reverse proxy; configured and maintained on Ubuntu server via CLI",
      "Custom authentication flow, M3U playlist management, and EPG schedule support",
    ]
  },
  {
    title: "FITNESS MANAGEMENT SYSTEM",
    tech: "HTML, CSS, Vanilla JS, PHP (Core)",
    tag: "Full-Stack",
    tagClass: "tag green",
    bullets: [
      "Multi-role platform for admins, trainers, and clients with secure authentication and real-time messaging",
      "CRUD for users, workouts, and classes; trainer search, progress tracking, and profile image uploads",
    ]
  }
];

export default function Projects() {
  return (
    <>
      <section className="section" style={{ paddingBottom: 20 }}>
        <Reveal>
          <div className="section-head">
            <span className="section-eyebrow">{"// projects"}</span>
            <h2>
              Things I&apos;ve <span className="gradient-text">Built</span>
            </h2>
            <p className="text-muted" style={{ marginTop: 14, maxWidth: 620, marginInline: "auto" }}>
              From multi-tenant ERPs and real-time trading platforms to offline
              desktop apps — every project shipped with clean architecture,
              security-first thinking, and a responsive experience.
            </p>
            <div className="underline" />
          </div>
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={(idx % 3) * 90}>
              <TiltCard className="h-100" maxTilt={6}>
                <div className="card-top">
                  <h3 className="card-title">
                    <span className="mono" style={{ fontSize: 13, color: "#475569", marginRight: 6 }}>
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {project.title}
                  </h3>
                  <span className={`tag ${project.tagClass ?? ""}`}>
                    {project.tag}
                  </span>
                </div>
                <div className="card-body">
                  <p className="tech-line">{project.tech}</p>
                  <ul>
                    {project.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                  {project.link && (
                    <a
                      className="card-link"
                      href={project.link}
                      {...(project.download
                        ? { download: "MCTV_ERP_Presentation.pptx" }
                        : project.link.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                    >
                      {project.linkLabel ?? "View Live ↗"}
                    </a>
                  )}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}