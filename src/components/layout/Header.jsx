import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { getCartPositionsCount } = useCart();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Simply log or navigate to a category search page if implemented
      console.log("Searching for:", searchQuery);
    }
  };

  return (
    <header className="w-full sticky top-0 z-50 font-sans shadow-md" dir="rtl">
      {/* 1. Announcement Bar */}
      <div className="bg-brand-green text-white text-xs md:text-sm py-2.5 px-4 text-center font-medium relative">
        <span className="inline-flex items-center gap-1.5">
          <span>📦 خصومات الجملة: وفر حتى 35% عند زيادة الكمية! + شحن مجاني للطلبات فوق 499 ريال.</span>
          <Link to="/categories/packaging" className="underline hover:text-neutral-100 font-bold">اطلب عيناتك الآن</Link>
        </span>
      </div>

      {/* 2. Main Header */}
      <div className="bg-brand-dark py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-brand-green hover:bg-neutral-800 focus:outline-none md:hidden transition-colors"
            aria-expanded="false"
          >
            <span className="sr-only">فتح القائمة</span>
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

          {/* Logo (Custom SVG BOX LINE logo matching the original design) */}
          <Link to="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative w-12 h-12 flex items-center justify-center select-none bg-neutral-900 rounded-lg p-1 border border-neutral-800">
              <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Elegant White Serif Letter B */}
                <text x="8" y="63" fontFamily="Georgia, serif" fontSize="58" fontWeight="900" fill="#FFFFFF" className="select-none">B</text>
                {/* Elegant Green Serif Letter L */}
                <text x="44" y="63" fontFamily="Georgia, serif" fontSize="58" fontWeight="900" fill="#2fa134" className="select-none">L</text>
                
                {/* Speed motion lines for the box */}
                <line x1="38" y1="42" x2="48" y2="42" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                <line x1="34" y1="49" x2="47" y2="49" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                <line x1="38" y1="56" x2="49" y2="56" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                
                {/* Isometric Cube (Box) */}
                {/* Green side (Left) */}
                <polygon points="51,46 63,38 63,55 51,63" fill="#2fa134" />
                {/* White side (Top) */}
                <polygon points="51,46 63,38 75,46 63,54" fill="#FFFFFF" opacity="0.9" />
                {/* White side (Right) */}
                <polygon points="63,54 75,46 75,63 63,71" fill="#FFFFFF" />
              </svg>
            </div>
            <div className="flex flex-col items-start leading-none">
              <span className="text-xl md:text-2xl font-black text-white tracking-wider group-hover:text-brand-green transition-colors">
                BOX LINE
              </span>
              <span className="text-[9px] md:text-[10px] text-brand-green font-medium mt-1">
                نصنع لهويتك غلافاً يليق بجمال صنعك
              </span>
            </div>
          </Link>

          {/* Search Bar (Desktop) */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-4 relative">
            <input
              type="text"
              placeholder="ابحث عن كرتون، ستيكر، أكياس هدايا..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-2.5 pr-12 rounded-full border border-neutral-700 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-sm transition-all shadow-inner placeholder-neutral-400"
            />
            <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-brand-green transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>

          {/* Action Buttons */}
          <div className="flex items-center gap-2 md:gap-4">
            
            {/* Contact Callout (Desktop) */}
            <div className="hidden lg:flex flex-col text-left items-end ml-2">
              <span className="text-[10px] text-neutral-400">تواصل معنا واتساب</span>
              <a href="https://wa.me/966920001234" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-white hover:text-brand-green transition-colors">
                +966 920001234
              </a>
            </div>

            {/* Cart Link */}
            <Link
              to="/cart"
              className="p-2 px-3 md:px-4 rounded-full bg-brand-green/10 text-brand-green hover:bg-brand-green hover:text-white transition-all duration-200 flex items-center gap-2.5 font-bold text-sm border border-brand-green/20 shadow-sm"
              title="سلة المشتريات"
            >
              <div className="bg-brand-green text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-black">
                {getCartPositionsCount()}
              </div>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="hidden sm:inline">السلة</span>
            </Link>

          </div>
        </div>
      </div>

      {/* 3. Navigation Bar (Desktop Links) */}
      <nav className="hidden md:block bg-neutral-900 border-t border-neutral-800">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center justify-between">
          <ul className="flex items-center gap-8 text-sm font-semibold text-neutral-300">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `transition-colors duration-200 pb-1 ${
                    isActive ? "text-brand-green border-b-2 border-brand-green font-bold" : "hover:text-brand-green"
                  }`
                }
              >
                الرئيسية
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories/packaging"
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-brand-green ${isActive ? "text-brand-green font-bold" : ""}`
                }
              >
                كراتين وتغليف مخصص
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories/events"
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-brand-green ${isActive ? "text-brand-green font-bold" : ""}`
                }
              >
                مطبوعات المناسبات
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories/stickers"
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-brand-green ${isActive ? "text-brand-green font-bold" : ""}`
                }
              >
                ملصقات وستيكرات
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories/bags"
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-brand-green ${isActive ? "text-brand-green font-bold" : ""}`
                }
              >
                أكياس ورقية وهدايا
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/categories/business"
                className={({ isActive }) =>
                  `transition-colors duration-200 hover:text-brand-green ${isActive ? "text-brand-green font-bold" : ""}`
                }
              >
                مطبوعات تجارية
              </NavLink>
            </li>
          </ul>

          <div className="text-xs text-neutral-400 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-ping"></span>
            <span>أوقات العمل: من 9 صباحاً إلى 10 مساءً</span>
          </div>
        </div>
      </nav>

      {/* Mobile Search Bar (Only visible on mobile) */}
      <div className="md:hidden bg-brand-dark px-4 pb-3">
        <form onSubmit={handleSearch} className="relative">
          <input
            type="text"
            placeholder="ابحث عن منتج طباعة مخصص..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-2 pr-12 rounded-full border border-neutral-700 bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent text-sm placeholder-neutral-400"
          />
          <button type="submit" className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </form>
      </div>

      {/* 4. Mobile Menu Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex animate-fade-in-up" dir="rtl">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onClick={() => setIsOpen(false)}></div>

          {/* Drawer Content */}
          <div className="relative flex-1 flex flex-col max-w-xs w-full bg-brand-dark border-l border-neutral-800 pt-5 pb-4 shadow-2xl z-50">
            <div className="absolute top-4 left-4">
              <button
                type="button"
                className="flex items-center justify-center h-10 w-10 rounded-full bg-neutral-850 hover:bg-neutral-800 text-neutral-400 hover:text-white focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <span className="sr-only">إغلاق القائمة</span>
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Logo in Drawer */}
            <div className="px-5 flex items-center gap-2.5 border-b border-neutral-850 pb-5">
              <div className="w-10 h-10 bg-neutral-900 rounded-lg p-0.5 border border-neutral-800">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <text x="8" y="63" fontFamily="Georgia, serif" fontSize="58" fontWeight="900" fill="#FFFFFF">B</text>
                  <text x="44" y="63" fontFamily="Georgia, serif" fontSize="58" fontWeight="900" fill="#2fa134">L</text>
                  <polygon points="51,46 63,38 63,55 51,63" fill="#2fa134" />
                  <polygon points="51,46 63,38 75,46 63,54" fill="#FFFFFF" opacity="0.9" />
                  <polygon points="63,54 75,46 75,63 63,71" fill="#FFFFFF" />
                </svg>
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-lg font-black text-white">BOX LINE</span>
                <span className="text-[8px] text-brand-green font-semibold mt-1">نصنع لهويتك غلافاً يليق بجمال صنعك</span>
              </div>
            </div>

            {/* Navigation links in Drawer */}
            <div className="mt-4 flex-1 h-0 overflow-y-auto">
              <nav className="px-3 space-y-1">
                <NavLink
                  to="/"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3.5 text-base font-bold rounded-lg transition-all ${
                      isActive ? "bg-neutral-850 text-brand-green" : "text-neutral-300 hover:bg-neutral-900 hover:text-brand-green"
                    }`
                  }
                >
                  الرئيسية
                </NavLink>

                <NavLink
                  to="/categories/packaging"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3.5 text-base font-bold rounded-lg transition-all ${
                      isActive ? "bg-neutral-850 text-brand-green" : "text-neutral-300 hover:bg-neutral-900 hover:text-brand-green"
                    }`
                  }
                >
                  كراتين وتغليف مخصص
                </NavLink>

                <NavLink
                  to="/categories/events"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3.5 text-base font-bold rounded-lg transition-all ${
                      isActive ? "bg-neutral-850 text-brand-green" : "text-neutral-300 hover:bg-neutral-900 hover:text-brand-green"
                    }`
                  }
                >
                  مطبوعات المناسبات
                </NavLink>

                <NavLink
                  to="/categories/stickers"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3.5 text-base font-bold rounded-lg transition-all ${
                      isActive ? "bg-neutral-850 text-brand-green" : "text-neutral-300 hover:bg-neutral-900 hover:text-brand-green"
                    }`
                  }
                >
                  ملصقات وستيكرات
                </NavLink>

                <NavLink
                  to="/categories/bags"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3.5 text-base font-bold rounded-lg transition-all ${
                      isActive ? "bg-neutral-850 text-brand-green" : "text-neutral-300 hover:bg-neutral-900 hover:text-brand-green"
                    }`
                  }
                >
                  أكياس ورقية وهدايا
                </NavLink>

                <NavLink
                  to="/categories/business"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center px-4 py-3.5 text-base font-bold rounded-lg transition-all ${
                      isActive ? "bg-neutral-850 text-brand-green" : "text-neutral-300 hover:bg-neutral-900 hover:text-brand-green"
                    }`
                  }
                >
                  مطبوعات تجارية
                </NavLink>
              </nav>
            </div>

            {/* Bottom info in Drawer */}
            <div className="border-t border-neutral-850 p-4">
              <div className="text-sm text-neutral-300 flex items-center gap-2 mb-2 justify-start">
                <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/966920001234" className="font-bold text-white hover:text-brand-green">+966 920001234</a>
              </div>
              <p className="text-xs text-neutral-400">يسعدنا تواصلكم وخدمتكم على مدار الساعة.</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
