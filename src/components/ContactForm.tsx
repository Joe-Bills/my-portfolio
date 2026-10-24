"use client";

import { useState, type FormEvent } from "react";

const EMAIL = "josephbilla746@gmail.com";

export default function ContactForm() {
  const [note, setNote] = useState("");
  const [type, setType] = useState("Full-time role");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `${type} enquiry from ${name}`;
    const body =
      `Hello Joseph,\n\nType: ${type}\nName: ${name}` +
      (company ? `\nCompany/project: ${company}` : "") +
      `\n\n${message}`;

    if (EMAIL) {
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setNote("Opening your email app…");
      return;
    }

    const done = () => {
      setNote("Message copied. Paste it into a LinkedIn message and send.");
      window.open(
        "https://www.linkedin.com/in/joseph-billa-5a2726288/",
        "_blank",
        "noopener"
      );
    };
    try {
      navigator.clipboard.writeText(body).then(done, done);
    } catch {
      done();
    }
  };

  return (
    <form id="f" onSubmit={onSubmit}>
      <h3>Send a brief</h3>
      <div className="pills">
        {["Full-time role", "Freelance project", "Collaboration"].map((t) => (
          <label key={t}>
            <input
              type="radio"
              name="t"
              value={t}
              checked={type === t}
              onChange={() => setType(t)}
            />
            <span>{t}</span>
          </label>
        ))}
      </div>
      <label className="f">
        <small>Your name</small>
        <input
          id="nm"
          required
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="f">
        <small>Company or project</small>
        <input
          id="co"
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        />
      </label>
      <label className="f">
        <small>What are you building?</small>
        <textarea
          id="ms"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label>
      <button className="btn solid" type="submit">
        Send message
      </button>
      <p className="note" id="note" aria-live="polite">
        {note}
      </p>
    </form>
  );
}