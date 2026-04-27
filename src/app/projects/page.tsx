import React from "react";

const projects = [
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
    link: "https://milansip.mctv.co.tz",
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
    bullets: [
      "Multi-role platform for admins, trainers, and clients with secure authentication and real-time messaging",
      "CRUD for users, workouts, and classes; trainer search, progress tracking, and profile image uploads",
    ]
  }
];

export default function Projects() {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
      gap: 32,
      maxWidth: 1100,
      margin: '0 auto',
      padding: '32px 0'
    }}>
      {projects.map((project, idx) => (
        <div key={idx} style={{
          background: 'rgba(24,31,42,0.97)',
          borderRadius: 16,
          boxShadow: '0 4px 24px #0006',
          padding: '32px 24px',
          color: '#ededed',
          display: 'flex', flexDirection: 'column', gap: 10,
          borderTop: '3px solid #2d8cff'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8, flexWrap: 'wrap' }}>
            <h2 style={{ color: '#8ecfff', fontSize: 20, margin: 0, flex: 1 }}>{project.title}</h2>
            {project.tag && (
              <span style={{ background: '#1a2a3a', color: '#2d8cff', border: '1px solid #2d8cff', borderRadius: 20, padding: '2px 12px', fontSize: 12, fontWeight: 600, whiteSpace: 'nowrap' }}>
                {project.tag}
              </span>
            )}
          </div>
          <p style={{ color: '#4aa8ff', fontWeight: 500, margin: 0, fontSize: 14 }}>
            {project.tech}
          </p>
          <ul style={{ marginLeft: 18, fontSize: 15, lineHeight: 1.75, marginTop: 4 }}>
            {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer"
              style={{ color: '#2d8cff', fontWeight: 600, fontSize: 14, marginTop: 4, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              View Live ↗
            </a>
          )}
        </div>
      ))}
    </section>
  );
} 