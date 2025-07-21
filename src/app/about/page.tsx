import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <section style={{
      background: 'rgba(24,31,42,0.95)',
      borderRadius: 18,
      boxShadow: '0 4px 32px #0006',
      padding: '40px 32px',
      maxWidth: 900,
      margin: '0 auto',
      color: '#ededed',
      fontSize: 18,
      lineHeight: 1.7
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 32, marginBottom: 32 }}>
        <Image src="/pro-pic.png" alt="Profile photo" width={100} height={100} style={{ borderRadius: '50%', border: '3px solid #2d8cff', objectFit: 'cover' }} />
        <div>
          <h2 style={{ fontSize: 32, fontWeight: 700, margin: 0 }}>Joseph Billa</h2>
          <p style={{ color: '#8ecfff', fontSize: 20, margin: 0 }}>Full-Stack Developer | FX, Stocks and Crypto Trader</p>
          <div style={{ marginTop: 8 }}>
            <a href="mailto:josephbilla746@gmail.com" style={{ color: '#2d8cff', marginRight: 16 }}>josephbilla746@gmail.com</a>
            <a href="https://github.com/Joe-Bills" target="_blank" rel="noopener noreferrer" style={{ color: '#ededed', marginRight: 16 }}>GitHub</a>
          </div>
        </div>
      </div>
      <hr style={{ border: 'none', borderTop: '1px solid #2d8cff', margin: '32px 0' }} />
      <section>
        <h3 style={{ color: '#8ecfff', fontSize: 24 }}>Profile Summary</h3>
        <p>A passionate and self-driven Computer Science graduate with hands-on expertise in full-stack web development. Demonstrated skills in building dynamic, responsive web applications using modern technologies like JavaScript, PHP, HTML, CSS, and frameworks such as React and Express. Known for problem-solving ability, clean code, and strong enthusiasm for building impactful digital solutions.</p>
      </section>
      <hr style={{ border: 'none', borderTop: '1px solid #2d8cff', margin: '32px 0' }} />
      <section>
        <h3 style={{ color: '#8ecfff', fontSize: 24 }}>Education</h3>
        <p><strong>Bachelor of Science in Computer Science</strong><br />Institute Of Accountancy Arusha - Arusha, Tanzania<br />2022 - 2025<br />GPA: Currently Waiting For Results<br />Final Year Project: <span style={{ color: '#2d8cff' }}>&quot;CHARTBOT-ADVANCED ALGORITHMIC TRADING FOR MT5&quot;</span></p>
      </section>
      <hr style={{ border: 'none', borderTop: '1px solid #2d8cff', margin: '32px 0' }} />
      <section>
        <h3 style={{ color: '#8ecfff', fontSize: 24 }}>Technical Field Service Experience</h3>
        <p><strong>IT Field Service – Regional Commissioner’s Office [RAS], Arusha</strong><br />15TH JULY, 2024 – 6TH SEPTMBER, 2024</p>
        <ul style={{ marginLeft: 24 }}>
          <li>Assisted in deploying and maintaining network systems and office IT infrastructure</li>
          <li>Installed and configured software on client machines</li>
          <li>Provided technical support and troubleshooting for end users</li>
          <li>Documented field reports and contributed to internal system improvements</li>
        </ul>
      </section>
      <hr style={{ border: 'none', borderTop: '1px solid #2d8cff', margin: '32px 0' }} />
      <section>
        <h3 style={{ color: '#8ecfff', fontSize: 24 }}>Technical Skills</h3>
        <ul style={{ marginLeft: 24, columns: 2 }}>
          <li><strong>Languages:</strong> JavaScript, PHP, HTML5, CSS3, SQL, Intermediate Level-Python</li>
          <li><strong>Frameworks/Libraries:</strong> React.js, Express.js, Bootstrap, jQuery, Vanilla.js</li>
          <li><strong>Databases:</strong> MySQL, MongoDB</li>
          <li><strong>Tools & Platforms:</strong> GitHub, VS Code, XAMPP</li>
          <li><strong>Other:</strong> RESTful APIs, Responsive Design, UI/UX Principles</li>
        </ul>
      </section>
      <hr style={{ border: 'none', borderTop: '1px solid #2d8cff', margin: '32px 0' }} />
      <section>
        <h3 style={{ color: '#8ecfff', fontSize: 24 }}>Certifications & Training</h3>
        <ul style={{ marginLeft: 24 }}>
          <li>Full-Stack Web Development Online Training</li>
          <li>Git & Version Control Essentials – Codecademy</li>
          <li>Intro to APIs – freeCodeCamp</li>
        </ul>
      </section>
      <hr style={{ border: 'none', borderTop: '1px solid #2d8cff', margin: '32px 0' }} />
      <section>
        <h3 style={{ color: '#8ecfff', fontSize: 24 }}>Personal Attributes</h3>
        <ul style={{ marginLeft: 24, columns: 2 }}>
          <li>Strong analytical and critical thinking</li>
          <li>Fast learner and team collaborator</li>
          <li>Detail-oriented and adaptive to new technologies</li>
          <li>Eager to take initiative and deliver quality solutions</li>
        </ul>
      </section>
      <hr style={{ border: 'none', borderTop: '1px solid #2d8cff', margin: '32px 0' }} />
      <section>
        <h3 style={{ color: '#8ecfff', fontSize: 24 }}>Referees</h3>
        <ul style={{ marginLeft: 24 }}>
          <li>Mr. Kimaro (REGIONAL ICT OFFICER ): 0757 545 575</li>
          <li>Mr. Yona (INFORMATICS LECTURER): 0763 762 334</li>
          <li>Mr. Abraham Billa (PARENT): 0767 652 458</li>
          <li>Madam Nahen (CompSci TEACHER): 0712 802 010</li>
          <li>Madam Verediana (CompSci TEACHER): 0744 575 151 / 0624 450 193</li>
        </ul>
        <p style={{ color: '#8ecfff', marginTop: 8 }}>Available upon request.</p>
      </section>
    </section>
  );
} 