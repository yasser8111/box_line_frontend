import React from "react";

export default function PageHero({ title, subtitle, children }) {
  return (
    <div className="page-hero">
      <div className="relative z-10 max-w-3xl mx-auto space-y-4">
        <h1 className="text-3xl md:text-5xl font-black">{title}</h1>
        {subtitle && <p className="text-neutral-400 text-sm md:text-base leading-relaxed">{subtitle}</p>}
        {children}
      </div>
    </div>
  );
}
