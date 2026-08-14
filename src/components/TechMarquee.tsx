"use client";

const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "PHP",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Redis",
  "Socket.io",
  "Docker",
  "Nginx",
  "Electron.js",
  "Git & GitHub",
  "PWA",
  "Tailwind CSS",
  "Linux / Ubuntu",
  "REST APIs",
  "JWT Auth",
  "Bootstrap",
  "jQuery",
  "SQL.js",
  "HLS.js",
  "SQLite",
];

export default function TechMarquee() {
  const doubled = [...skills, ...skills];
  return (
    <div className="marquee-wrap" aria-hidden>
      <div className="marquee">
        {doubled.map((s, i) => (
          <span key={i} className="marquee-item">
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}