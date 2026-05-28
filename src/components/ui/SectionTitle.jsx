import React from "react";

export default function SectionTitle({ label, title, description, align = "right" }) {
  const alignClass = align === "center" ? "text-center items-center" : "text-right items-start";
  return (
    <div className={`flex flex-col gap-3 ${alignClass}`}>
      {label && (
        <span className="inline-flex items-center gap-2 text-neutral-800 text-[11px] font-mono tracking-widest uppercase font-bold">
          <span className="w-6 h-0.5 bg-neutral-900" />
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">{title}</h2>
      {description && <p className="text-neutral-500 max-w-xl leading-relaxed text-sm md:text-base font-light">{description}</p>}
    </div>
  );
}

