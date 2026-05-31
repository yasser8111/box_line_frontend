import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";

const ToastContext = createContext(null);

const DEFAULT_DURATION = 4500;
const EXIT_ANIMATION_MS = 380;

function createId() {
  return `toast-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  const toastsRef = useRef(toasts);
  const timersRef = useRef(new Map());
  const exitTimersRef = useRef(new Map());

  useEffect(() => {
    toastsRef.current = toasts;
  }, [toasts]);

  const dismiss = useCallback((id) => {
    const target = toastsRef.current.find((t) => t.id === id);
    if (!target || target.exiting) return;

    const autoTimer = timersRef.current.get(id);
    if (autoTimer) {
      clearTimeout(autoTimer);
      timersRef.current.delete(id);
    }

    if (exitTimersRef.current.has(id)) return;

    setToasts((prev) =>
      prev.map((t) => (t.id === id ? { ...t, exiting: true } : t))
    );

    const exitTimer = setTimeout(() => {
      exitTimersRef.current.delete(id);
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, EXIT_ANIMATION_MS);

    exitTimersRef.current.set(id, exitTimer);
  }, []);

  const show = useCallback(
    ({ type = "info", title, message, duration = DEFAULT_DURATION, action }) => {
      const id = createId();
      const toast = { id, type, title, message, action };

      setToasts((prev) => [...prev, toast]);

      if (duration > 0) {
        const timer = setTimeout(() => dismiss(id), duration);
        timersRef.current.set(id, timer);
      }

      return id;
    },
    [dismiss]
  );

  const success = useCallback(
    (title, options = {}) => show({ type: "success", title, ...options }),
    [show]
  );

  const error = useCallback(
    (title, options = {}) => show({ type: "error", title, ...options }),
    [show]
  );

  const warning = useCallback(
    (title, options = {}) => show({ type: "warning", title, ...options }),
    [show]
  );

  const info = useCallback(
    (title, options = {}) => show({ type: "info", title, ...options }),
    [show]
  );

  return (
    <ToastContext.Provider value={{ toasts, show, success, error, warning, info, dismiss }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}
