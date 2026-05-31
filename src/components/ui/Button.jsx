import React from "react";
import { Link } from "react-router-dom";

const VARIANTS = {
  primary:
    "bg-green-500 text-white hover:bg-green-600 active:scale-[0.98] shadow-md hover:shadow-lg",
  secondary:
    "bg-neutral-100 text-neutral-900 hover:bg-neutral-200 active:scale-[0.98]",
  outline:
    "border border-neutral-200 bg-white text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 active:scale-[0.98]",
  ghost:
    "bg-transparent text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 active:scale-[0.98]",
  white:
    "bg-white text-neutral-950 hover:bg-neutral-100 active:scale-[0.98] shadow-md",
  danger:
    "bg-red-500 text-white hover:bg-red-600 active:scale-[0.98]",
  link:
    "bg-transparent text-neutral-900 hover:text-neutral-700 p-0 rounded-none font-medium hover:underline underline-offset-4",
};

const SIZES = {
  sm: "text-xs px-4 py-2 gap-1.5",
  md: "text-sm px-6 py-2.5 gap-2",
  lg: "text-sm md:text-base px-8 py-3.5 gap-2.5",
};

function Spinner({ className = "w-4 h-4" }) {
  return (
    <span
      className={`${className} border-2 border-current/30 border-t-current rounded-full animate-spin shrink-0`}
      aria-hidden="true"
    />
  );
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  loading = false,
  type = "button",
  to,
  href,
  target,
  rel,
  className = "",
  onClick,
  ...props
}) {
  const isDisabled = disabled || loading;
  const isLinkVariant = variant === "link";

  const classes = [
    "inline-flex items-center justify-center font-bold transition-all duration-300 cursor-pointer",
    isLinkVariant ? "" : "rounded-full",
    VARIANTS[variant] ?? VARIANTS.primary,
    SIZES[size] ?? SIZES.md,
    fullWidth ? "w-full" : "",
    isDisabled ? "opacity-50 cursor-not-allowed pointer-events-none" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && <Spinner />}
      {children}
    </>
  );

  if (to && !isDisabled) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...props}>
        {content}
      </Link>
    );
  }

  if (href && !isDisabled) {
    return (
      <a
        href={href}
        target={target}
        rel={rel ?? (target === "_blank" ? "noopener noreferrer" : undefined)}
        className={classes}
        onClick={onClick}
      {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={isDisabled}
      className={classes}
      onClick={onClick}
    >
      {content}
    </button>
  );
}