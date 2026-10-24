"use client";

import { useRef, useState } from "react";

export type WorkItem = {
  title: string;
  kind: string;
  body: string;
  chips: string[];
  href?: string;
  linkLabel?: string;
  download?: boolean;
};

export default function WorkAccordion({ items }: { items: WorkItem[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const refs = useRef<Array<HTMLDetailsElement | null>>([]);

  const handleToggle = (index: number) => {
    const el = refs.current[index];
    if (!el) return;
    if (el.open) {
      setOpenIndex(index);
      refs.current.forEach((other, i) => {
        if (other && i !== index) other.open = false;
      });
    } else if (openIndex === index) {
      setOpenIndex(-1);
    }
  };

  return (
    <div className="work">
      {items.map((item, index) => (
        <details
          key={item.title}
          ref={(el) => {
            refs.current[index] = el;
          }}
          open={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          <summary>
            <span className="n">{String(index + 1).padStart(2, "0")}</span>
            <span className="t">{item.title}</span>
            <span className="k">{item.kind}</span>
            <span className="plus">+</span>
          </summary>
          <div className="body">
            <span />
            <div>
              <p>{item.body}</p>
              {item.href && (
                <a
                  href={item.href}
                  {...(item.download
                    ? { download: "MCTV_ERP_Presentation.pptx" }
                    : item.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                >
                  {item.linkLabel ?? "View project ↗"}
                </a>
              )}
            </div>
            <div className="chips">
              {item.chips.map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}