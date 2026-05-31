import React from "react";
import { Link } from "react-router-dom";
import { AlertCircle, CheckCircle2, Info, X, XCircle } from "lucide-react";

import { useToast } from "../../context/ToastContext";

const STYLES = {
  success: {
    icon: CheckCircle2,
    iconClass: "text-green-600 bg-green-50",
    bg: "bg-white border-neutral-100",
  },
  error: {
    icon: XCircle,
    iconClass: "text-red-600 bg-red-50",
    bg: "bg-white border-neutral-100",
  },
  warning: {
    icon: AlertCircle,
    iconClass: "text-amber-600 bg-amber-50",
    bg: "bg-white border-neutral-100",
  },
  info: {
    icon: Info,
    iconClass: "text-neutral-900 bg-neutral-100",
    bg: "bg-white border-neutral-100",
  },
};

function ToastItem({ toast, onDismiss }) {
  const style = STYLES[toast.type] ?? STYLES.info;
  const Icon = style.icon;

  const actionClass =
    "text-xs font-bold text-neutral-900 hover:text-neutral-600 underline underline-offset-2 transition-colors shrink-0";

  const animationClass = toast.exiting 
    ? "opacity-0 scale-95 transition-all duration-300 ease-in" 
    : "animate-fade-in-down";

  return (
    <div
      role="alert"
      className={`pointer-events-auto relative overflow-hidden rounded-2xl border shadow-sm flex items-start gap-3 p-3.5 sm:p-4 ${style.bg} ${animationClass}`}
    >
      <div className={`shrink-0 mt-0.5 flex items-center justify-center w-8 h-8 rounded-full ${style.iconClass}`}>
        <Icon className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2.5} />
      </div>

      <div className="flex-1 min-w-0 space-y-1">
        <p className="text-sm font-bold text-neutral-900 leading-snug">{toast.title}</p>
        {toast.message && (
          <p className="text-xs text-neutral-500 leading-relaxed">{toast.message}</p>
        )}
        {toast.action && !toast.exiting && (
          <div className="pt-1">
            {toast.action.to ? (
              <Link to={toast.action.to} className={actionClass} onClick={() => onDismiss(toast.id)}>
                {toast.action.label}
              </Link>
            ) : toast.action.href ? (
              <a
                href={toast.action.href}
                target="_blank"
                rel="noopener noreferrer"
                className={actionClass}
              >
                {toast.action.label}
              </a>
            ) : toast.action.onClick ? (
              <button type="button" onClick={toast.action.onClick} className={actionClass}>
                {toast.action.label}
              </button>
            ) : null}
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={() => onDismiss(toast.id)}
        disabled={toast.exiting}
        className="shrink-0 p-1.5 rounded-full text-neutral-400 hover:text-neutral-900 hover:bg-neutral-100 transition-colors disabled:opacity-40"
        aria-label="إغلاق الإشعار"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

export default function ToastContainer() {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      className="fixed top-20 end-4 start-4 sm:start-auto z-[200] flex flex-col gap-3 w-auto sm:w-full sm:max-w-sm pointer-events-none"
      dir="rtl"
      aria-live="polite"
      aria-label="الإشعارات"
    >
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} onDismiss={dismiss} />
      ))}
    </div>
  );
}
