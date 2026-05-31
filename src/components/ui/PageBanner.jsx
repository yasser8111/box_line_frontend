import React, { useEffect, useState } from "react";

export default function PageBanner({ title, image, children }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="mt-[64px] lg:mt-[72px] relative w-full h-[20vh] min-h-[120px] sm:h-[30vh] sm:min-h-[150px] max-h-[400px] overflow-hidden"
      dir="rtl"
    >
      <div className="absolute inset-0 z-0 bg-neutral-50">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-auto h-full min-w-full object-cover object-center sm:object-left will-change-transform"
            style={{
              transform: `translateY(${scrollY * 0.2}px) scale(1.1)`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-l from-white via-white/80 to-transparent sm:bg-none" />
      </div>

      <div className="relative z-10 w-full h-full flex flex-col items-start justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-center sm:text-right text-4xl sm:text-4xl md:text-5xl font-black text-neutral-900 tracking-tight mb-4 drop-shadow-sm">
          {title}
        </h1>
        {children && (
          <div className="mt-4 text-white sm:text-inherit">{children}</div>
        )}
      </div>
    </section>
  );
}
