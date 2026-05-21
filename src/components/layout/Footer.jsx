import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-neutral-300 font-sans border-t border-neutral-800" dir="rtl">
      {/* Upper Footer: Branding & Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
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
            </Link>
            
            <p className="text-sm text-neutral-450 leading-relaxed">
              شريكك الأمثل لتصميم وتصنيع كافة مطبوعات التغليف، الكراتين، الأكياس، والمطبوعات التجارية لمشروعك بأعلى جودة وأفضل الأسعار في المملكة.
            </p>
            
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-850 hover:bg-brand-green hover:text-white rounded-full transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-850 hover:bg-brand-green hover:text-white rounded-full transition-all duration-200">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
              </a>
              <a href="https://wa.me/966920001234" target="_blank" rel="noopener noreferrer" className="p-2 bg-neutral-850 hover:bg-brand-green hover:text-white rounded-full transition-all duration-200">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Products Col */}
          <div>
            <h3 className="text-white text-base font-bold mb-4">خدمات الطباعة والتغليف</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/categories/packaging" className="hover:text-brand-green transition-colors">كراتين مموجة وعلب هدايا</Link>
              </li>
              <li>
                <Link to="/categories/events" className="hover:text-brand-green transition-colors">مطبوعات الحفلات والورق المخصص</Link>
              </li>
              <li>
                <Link to="/categories/stickers" className="hover:text-brand-green transition-colors">ملصقات المنتجات والستيكرات</Link>
              </li>
              <li>
                <Link to="/categories/bags" className="hover:text-brand-green transition-colors">أكياس ورقية مطبوعة بهويتك</Link>
              </li>
              <li>
                <Link to="/categories/business" className="hover:text-brand-green transition-colors">كروت عمل ومطبوعات تجارية</Link>
              </li>
            </ul>
          </div>
          
          {/* Help Links Col */}
          <div>
            <h3 className="text-white text-base font-bold mb-4">روابط تهمك</h3>
            <ul className="space-y-2 text-sm text-neutral-400">
              <li>
                <Link to="/about" className="hover:text-brand-green transition-colors">من نحن</Link>
              </li>
              <li>
                <Link to="/quality" className="hover:text-brand-green transition-colors">معايير جودة الطباعة</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-brand-green transition-colors">الشروط والأحكام</Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-green transition-colors">الأسئلة الشائعة</Link>
              </li>
              <li>
                <Link to="/track" className="hover:text-brand-green transition-colors">تتبع حالة طلبك</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Col */}
          <div className="space-y-4">
            <h3 className="text-white text-base font-bold">اتصل بنا</h3>
            <ul className="space-y-3 text-sm text-neutral-400">
              <li className="flex items-start gap-2.5">
                <svg className="w-5 h-5 text-brand-green shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>المطبعة الرئيسية والمصنع: الرياض، المدينة الصناعية الثانية، المملكة العربية السعودية.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-brand-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@boxline.com.sa" className="hover:text-brand-green transition-colors">info@boxline.com.sa</a>
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-5 h-5 text-brand-green shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>السبت - الخميس: 9:00 ص - 10:00 م</span>
              </li>
            </ul>
          </div>
          
        </div>
      </div>

      {/* Lower Footer: Payments & Copyright */}
      <div className="bg-neutral-950 py-6 border-t border-neutral-900 text-center px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            جميع الحقوق محفوظة © {new Date().getFullYear()} لشركة **BOX LINE** للطباعة والتغليف المحدودة.
          </p>
          
          {/* Payment Badges (Clean SVG layouts for Saudi local market) */}
          <div className="flex items-center gap-3">
            {/* mada */}
            <div className="h-6 w-10 bg-white rounded flex items-center justify-center p-0.5" title="مدى">
              <span className="text-[10px] font-black text-blue-800">mada</span>
            </div>
            {/* Visa */}
            <div className="h-6 w-10 bg-white rounded flex items-center justify-center p-0.5" title="فيزا">
              <span className="text-[11px] font-bold italic text-blue-900">VISA</span>
            </div>
            {/* MasterCard */}
            <div className="h-6 w-10 bg-white rounded flex items-center justify-center p-0.5" title="ماستركارد">
              <span className="text-[9px] font-bold text-red-650">Master</span>
            </div>
            {/* Tamara */}
            <div className="h-6 w-10 bg-amber-50 rounded flex items-center justify-center p-0.5" title="تمارا">
              <span className="text-[9px] font-black text-amber-700">tamara</span>
            </div>
            {/* Tabby */}
            <div className="h-6 w-10 bg-emerald-50 rounded flex items-center justify-center p-0.5" title="تابي">
              <span className="text-[10px] font-black text-black">tabby</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
