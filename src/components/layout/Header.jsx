import React, { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {
  ClipboardList,
  User,
  ShoppingBasket,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const MENU_DATA = {
  mainLinks: [
    { path: "/", label: "الرئـسيـة" },
    { path: "/products", label: "المنتجات" },
    { path: "/about", label: "من نحن" },
    { path: "/contact", label: "التواصل" },
  ],
  serviceLinks: [
    { path: "/category/ready", label: "منتجات جاهزة" },
    { path: "/category/custom", label: "منتجات مخصصة" },
    { path: "/service/wrapping", label: "تغليف الهدايا" },
  ],
};

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const { getCartPositionsCount } = useCart();
  const location = useLocation();

  const mobileMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getDesktopClass = ({ isActive }) =>
    `text-sm font-semibold transition-colors hover:text-neutral-900 ${
      isActive ? "text-neutral-900" : "text-neutral-500"
    }`;

  const getMobileClass = ({ isActive }) =>
    `px-4 py-3 rounded-xl text-sm font-semibold transition-colors ${
      isActive
        ? "bg-neutral-100 text-neutral-900"
        : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
    }`;

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 bg-white py-3 ${
        isScrolled ? "shadow-md" : ""
      }`}
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Icons Section - Moved to Right & Internal Order Reversed */}
          <div className="flex items-center gap-2 shrink-0 order-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(!isOpen);
              }}
              className="lg:hidden p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-xl transition-colors"
              aria-label="فتح القائمة"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>

            <Link
              to="/cart"
              className="relative p-2.5 bg-neutral-900 text-white rounded-xl hover:bg-neutral-800 active:scale-90 transition-all duration-200 flex items-center justify-center"
            >
              <ShoppingBasket className="w-5 h-5" />
              {getCartPositionsCount() > 0 && (
                <span className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-black text-white rounded-full flex items-center justify-center text-[10px] font-black border-2 border-white">
                  {getCartPositionsCount()}
                </span>
              )}
            </Link>

            <Link
              to="/login"
              className="p-2 text-neutral-500 hover:text-neutral-900 transition-colors rounded-xl hover:bg-neutral-100"
              title="تسجيل الدخول"
            >
              <User className="w-5 h-5" />
            </Link>

            <Link
              to="/orders"
              className="hidden sm:flex p-2 text-neutral-500 hover:text-neutral-900 transition-colors rounded-xl hover:bg-neutral-100"
              title="تتبع الطلبات"
            >
              <ClipboardList className="w-5 h-5" />
            </Link>
          </div>

          {/* Navigation Links - Center Section */}
          <nav className="hidden lg:flex items-center gap-7 order-2">
            {MENU_DATA.mainLinks.slice(0, 2).map((link) => (
              <NavLink key={link.path} to={link.path} className={getDesktopClass}>
                {link.label}
              </NavLink>
            ))}

            <div className="relative group">
              <button className="flex items-center gap-1 text-sm font-semibold text-neutral-500 hover:text-neutral-900 transition-colors">
                الخدمات
                <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute top-full right-0 pt-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-1 group-hover:translate-y-0 z-50">
                <div className="bg-white rounded-2xl shadow-xl border border-neutral-100 p-1.5 flex flex-col gap-0.5">
                  {MENU_DATA.serviceLinks.map((s) => (
                    <Link
                      key={s.path}
                      to={s.path}
                      className="px-4 py-2.5 rounded-xl text-sm font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {MENU_DATA.mainLinks.slice(2).map((link) => (
              <NavLink key={link.path} to={link.path} className={getDesktopClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Logo Section - Moved to Left */}
          <Link to="/" className="shrink-0 order-3">
            <img
              src="/logo.png"
              alt="BOX LINE"
              className="h-10 w-auto object-contain"
            />
          </Link>

        </div>
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 top-[65px] bg-neutral-900/40 backdrop-blur-sm lg:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={mobileMenuRef}
            className="absolute top-full left-0 w-full lg:hidden border-t border-neutral-100 bg-white shadow-xl z-50 animate-fade-in-down"
          >
            <nav className="flex flex-col px-4 py-3 gap-1">
              {MENU_DATA.mainLinks.slice(0, 2).map((link) => (
                <NavLink key={link.path} to={link.path} className={getMobileClass}>
                  {link.label}
                </NavLink>
              ))}

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors"
                >
                  <span>الخدمات</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {servicesOpen && (
                  <div className="mr-4 mb-1 bg-neutral-50 rounded-xl border border-neutral-100 overflow-hidden">
                    {MENU_DATA.serviceLinks.map((s) => (
                      <NavLink
                        key={s.path}
                        to={s.path}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm font-semibold transition-colors border-b border-neutral-100 last:border-0 ${
                            isActive
                              ? "text-neutral-900 bg-neutral-100"
                              : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100/60"
                          }`
                        }
                      >
                        {s.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              {MENU_DATA.mainLinks.slice(2).map((link) => (
                <NavLink key={link.path} to={link.path} className={getMobileClass}>
                  {link.label}
                </NavLink>
              ))}

              <NavLink to="/orders" className={getMobileClass}>
                تتبع الطلبات
              </NavLink>
            </nav>
          </div>
        </>
      )}
    </header>
  );
}