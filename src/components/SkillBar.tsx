"use client";

import { useEffect, useRef, useState } from "react";

export default function SkillBar({
  name,
  level,
}: {
  name: string;
  level: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="skill-row" ref={ref}>
      <div className="meta">
        <b>{name}</b>
        <span>{level}%</span>
      </div>
      <div className="skill-bar">
        <div
          className="skill-fill"
          style={filled ? { width: `${level}%` } : undefined}
        />
      </div>
    </div>
  );
}