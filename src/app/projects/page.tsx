import React from "react";

const projects = [
  {
    title: "CHARTBOT-ADVANCED ALGORITHMIC TRADING FOR MT5",
    tech: "HTML, CSS, Vanilla JS, Python",
    bullets: [
      "Developed an interactive web interface for a chart-based chatbot using HTML, CSS, and JavaScript",
      "Integrated Python backend logic for chart generation and bot responses",
      "Designed a user-friendly layout with a consistent color theme and accessible font colors",
      "Enabled real-time user interaction with the bot and dynamic chart rendering",
      "Ensured cross-browser compatibility and responsive design for various devices"
    ]
  },
  {
    title: "FOREX SIGNALS PLATFORM",
    tech: "Node.js (Express), MongoDB, React.js",
    bullets: [
      "Developed a full-stack platform for managing and delivering forex trading signals, with user authentication and subscription management",
      "Implemented real-time notifications, trading journal, and activity logging for enhanced user engagement",
      "Built an admin panel for managing users, signals, and notifications, including chat functionality between users and admins",
      "Designed a responsive, theme-consistent UI ensuring all font colors are visible and accessible",
      "Integrated notification settings and user preferences for a personalized experience"
    ]
  },
  {
    title: "FITNESS MANAGEMENT SYSTEM",
    tech: "HTML, CSS, Vanilla JS, PHP (Core)",
    bullets: [
      "Built a responsive, multi-role platform for admins, trainers, and clients with secure authentication, profile management, and real-time messaging.",
      "Implemented CRUD operations for users, workouts, and classes, including advanced trainer search, progress tracking, and secure profile image uploads."
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
          display: 'flex', flexDirection: 'column', gap: 12
        }}>
          <h2 style={{ color: '#8ecfff', fontSize: 22, marginBottom: 4 }}>{project.title}</h2>
          <p style={{ color: '#2d8cff', fontWeight: 500, marginBottom: 8 }}>Tech Stack: {project.tech}</p>
          <ul style={{ marginLeft: 18, fontSize: 17, lineHeight: 1.7 }}>
            {project.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
        </div>
      ))}
    </section>
  );
} 