import React, { useState, useEffect } from "react";
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { getCartPositionsCount } = useCart();
  const location = useLocation();

  // Store status logic (Open 9 AM to 10 PM)
  const currentHour = new Date().getHours();
  const isOpenNow = currentHour >= 9 && currentHour < 22;

  // Handle scroll to add shadow and hide on scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setShow(false); // Hide on scroll down
        } else {
          setShow(true);  // Show on scroll up
        }
        setLastScrollY(window.scrollY);
        setIsScrolled(window.scrollY > 20);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`w-full sticky top-0 z-50 font-sans transition-all duration-300 ${show ? 'translate-y-0' : '-translate-y-full'} ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-white'}`} dir="rtl">
      {/* 1. Announcement Bar */}
      <div className={`text-white text-xs py-1.5 px-4 text-center font-medium ${isOpenNow ? 'bg-brand-green' : 'bg-neutral-800'}`}>
        <span className="inline-flex items-center gap-1.5">
          {isOpenNow ? (
            <span>🟢 المتجر مفتوح الآن - نستقبل طلباتكم</span>
          ) : (
            <span>🔴 المتجر مغلق الآن - سيتم معالجة الطلبات أوقات العمل (9ص - 10م)</span>
          )}
        </span>
      </div>

      {/* 2. Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-20 gap-4">
          
          {/* Right Side Icons (Start in RTL) */}
          <div className="flex items-center gap-2 md:gap-4 shrink-0">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="md:hidden p-2 text-neutral-600 hover:text-brand-green transition-colors"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>

            {/* Search Icon (simplified) */}
            <button className="text-neutral-500 hover:text-brand-green transition-colors hidden sm:block p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Cart Link */}
            <Link
              to="/cart"
              className="relative p-2 text-neutral-600 hover:text-brand-green transition-colors flex items-center"
              title="سلة المشتريات"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {getCartPositionsCount() > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white rounded-full flex items-center justify-center text-[10px] font-bold border-2 border-white">
                  {getCartPositionsCount()}
                </span>
              )}
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex items-center gap-8 text-sm font-semibold text-neutral-600">
              <li>
                <NavLink
                  to="/category/ready"
                  className={({ isActive }) =>
                    `transition-colors duration-200 hover:text-brand-green ${isActive ? "text-brand-green font-bold" : ""}`
                  }
                >
                  منتجات جاهزة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/category/custom"
                  className={({ isActive }) =>
                    `transition-colors duration-200 hover:text-brand-green ${isActive ? "text-brand-green font-bold" : ""}`
                  }
                >
                  منتجات مخصصة
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/service/wrapping"
                  className={({ isActive }) =>
                    `transition-colors duration-200 hover:text-brand-green ${isActive ? "text-brand-green font-bold" : ""}`
                  }
                >
                  خدمة تغليف الهدايا
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Left Side (End in RTL): Logo */}
          <Link to="/" className="flex items-center shrink-0 group">
            <img 
              src="/logo.png" 
              alt="Box Line Logo" 
              className="h-10 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
            />
          </Link>

        </div>
      </div>

      {/* 3. Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-neutral-100 shadow-lg animate-fade-in-up">
          <nav className="px-4 py-6 flex flex-col space-y-4">
            <NavLink
              to="/category/ready"
              className={({ isActive }) =>
                `text-base font-bold pb-4 border-b border-neutral-50 ${
                  isActive ? "text-brand-green" : "text-neutral-600"
                }`
              }
            >
              منتجات جاهزة للشراء
            </NavLink>
            <NavLink
              to="/category/custom"
              className={({ isActive }) =>
                `text-base font-bold pb-4 border-b border-neutral-50 ${
                  isActive ? "text-brand-green" : "text-neutral-600"
                }`
              }
            >
              منتجات قابلة للتخصيص
            </NavLink>
            <NavLink
              to="/service/wrapping"
              className={({ isActive }) =>
                `text-base font-bold pb-4 border-b border-neutral-50 ${
                  isActive ? "text-brand-green" : "text-neutral-600"
                }`
              }
            >
              خدمة تغليف الهدايا
            </NavLink>
          </nav>
        </div>
      )}
    </header>
  );
}
