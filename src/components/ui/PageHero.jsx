import React from "react";

export default function PageHero({ title, subtitle, children }) {
  return (
    <section className="mt-20 bg-white py-8 lg:py-12 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-950 text-white rounded-4xl p-8 md:p-14 relative overflow-hidden text-center">
          <div className="relative z-10 max-w-3xl mx-auto space-y-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-sm md:text-base text-neutral-400 font-light leading-relaxed">
                {subtitle}
              </p>
            )}
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
