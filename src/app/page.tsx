import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section style={{
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      minHeight: '70vh',
      background: 'none',
      color: '#ededed',
      textAlign: 'center',
      gap: 32
    }}>
      <Image
        src="/pro-pic.png"
        alt="Profile photo"
        width={140}
        height={140}
        style={{ borderRadius: '50%', border: '4px solid #2d8cff', boxShadow: '0 4px 24px #0008', objectFit: 'cover', marginBottom: 16 }}
        priority
      />
      <h1 style={{ fontSize: 40, fontWeight: 800, margin: 0 }}>Joseph Billa</h1>
      <h2 style={{ fontSize: 24, color: '#8ecfff', fontWeight: 500, margin: 0 }}>Full-Stack Developer | FX, Stocks and Crypto Trader</h2>
      <p style={{ maxWidth: 600, fontSize: 20, margin: '24px 0 0 0', color: '#b3d8ff' }}>
        A passionate and self-driven Computer Science graduate with hands-on expertise in full-stack web development. Demonstrated skills in building dynamic, responsive web applications using modern technologies like JavaScript, PHP, HTML, CSS, and frameworks such as React and Express. Known for problem-solving ability, clean code, and strong enthusiasm for building impactful digital solutions.
      </p>
      <div style={{ display: 'flex', gap: 24, margin: '32px 0' }}>
        <Link href="/projects" style={{
          background: '#2d8cff', color: '#fff', padding: '12px 32px', borderRadius: 32, fontWeight: 600, fontSize: 18, textDecoration: 'none', boxShadow: '0 2px 8px #0004', transition: 'background 0.2s'
        }}>View Projects</Link>
        <Link href="/contact" style={{
          background: 'none', color: '#2d8cff', border: '2px solid #2d8cff', padding: '12px 32px', borderRadius: 32, fontWeight: 600, fontSize: 18, textDecoration: 'none', boxShadow: '0 2px 8px #0002', transition: 'background 0.2s'
        }}>Contact Me</Link>
      </div>
      <div style={{ display: 'flex', gap: 24, marginTop: 16, justifyContent: 'center' }}>
        <a href="https://github.com/Joe-Bills" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ color: '#ededed', fontSize: 28 }}>
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/joseph-billa-5a2726288/" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ color: '#ededed', fontSize: 28 }}>
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
        </a>
        <a href="mailto:josephbilla746@gmail.com" title="Email" style={{ color: '#ededed', fontSize: 28 }}>
          <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24"><path d="M12 13.065l-8-6.065v12h16v-12zm8-8.065h-16c-1.104 0-2 .896-2 2v.217l10 7.583 10-7.583v-.217c0-1.104-.896-2-2-2z"/></svg>
        </a>
      </div>
      <div style={{ marginTop: 48, maxWidth: 900, width: '100%' }}>
        <h3 style={{ color: '#8ecfff', fontSize: 26, marginBottom: 16 }}>Featured Projects</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          <div style={{ background: 'rgba(24,31,42,0.97)', borderRadius: 16, boxShadow: '0 4px 24px #0006', padding: '24px 20px', minWidth: 260, maxWidth: 340, color: '#ededed', textAlign: 'left' }}>
            <h4 style={{ color: '#2d8cff', fontSize: 20, marginBottom: 8 }}>CHARTBOT-ADVANCED ALGORITHMIC TRADING FOR MT5</h4>
            <p style={{ color: '#8ecfff', fontWeight: 500, marginBottom: 8 }}>HTML, CSS, Vanilla JS, Python</p>
            <ul style={{ fontSize: 15, lineHeight: 1.6, marginLeft: 18 }}>
              <li>Interactive web interface for a chart-based chatbot</li>
              <li>Python backend for chart generation and bot responses</li>
            </ul>
            <Link href="/projects" style={{ color: '#2d8cff', fontWeight: 600, fontSize: 15, marginTop: 8, display: 'inline-block' }}>See more</Link>
          </div>
          <div style={{ background: 'rgba(24,31,42,0.97)', borderRadius: 16, boxShadow: '0 4px 24px #0006', padding: '24px 20px', minWidth: 260, maxWidth: 340, color: '#ededed', textAlign: 'left' }}>
            <h4 style={{ color: '#2d8cff', fontSize: 20, marginBottom: 8 }}>FOREX SIGNALS PLATFORM</h4>
            <p style={{ color: '#8ecfff', fontWeight: 500, marginBottom: 8 }}>Node.js (Express), MongoDB, React.js</p>
            <ul style={{ fontSize: 15, lineHeight: 1.6, marginLeft: 18 }}>
              <li>Full-stack platform for managing and delivering forex trading signals</li>
              <li>Real-time notifications, trading journal, and admin panel</li>
            </ul>
            <Link href="/projects" style={{ color: '#2d8cff', fontWeight: 600, fontSize: 15, marginTop: 8, display: 'inline-block' }}>See more</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
