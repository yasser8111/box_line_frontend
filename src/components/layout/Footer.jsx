import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Link to="/">
              <img src="/logo.png" alt="BOX LINE" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed font-light">
              متجر BOX LINE — وجهتك الأولى للهدايا الفاخرة، التغليف المخصص، وخدمة تغليف من الباب للباب.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://instagram.com", label: "Instagram", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { href: "https://wa.me/966920001234", label: "WhatsApp", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
              ].map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="p-2.5 bg-white/8 hover:bg-white/15 rounded-full transition-colors text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={s.icon} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-black mb-5 text-[11px] font-mono tracking-widest uppercase">المنتجات</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/category/ready" className="hover:text-white transition-colors font-light">منتجات جاهزة</Link></li>
              <li><Link to="/category/custom" className="hover:text-white transition-colors font-light">منتجات مخصصة</Link></li>
              <li><Link to="/service/wrapping" className="hover:text-white transition-colors font-light">تغليف الهدايا</Link></li>
              <li><Link to="/products" className="hover:text-white transition-colors font-light">جميع المنتجات</Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-black mb-5 text-[11px] font-mono tracking-widest uppercase">روابط تهمك</h3>
            <ul className="space-y-3 text-sm">
              <li><Link to="/about" className="hover:text-white transition-colors font-light">من نحن</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors font-light">الأسئلة الشائعة</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition-colors font-light">سياسة الخصوصية</Link></li>
              <li><Link to="/orders" className="hover:text-white transition-colors font-light">تتبع الطلبات</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-black mb-5 text-[11px] font-mono tracking-widest uppercase">تواصل معنا</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-neutral-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                <span className="font-light">الرياض، المملكة العربية السعودية</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@boxline.com.sa" className="hover:text-white transition-colors font-light">info@boxline.com.sa</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-neutral-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-light">السبت - الخميس: 9ص - 10م</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/8 py-5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>جميع الحقوق محفوظة © {new Date().getFullYear()} <span className="text-white font-bold">BOX LINE</span></p>
          <div className="flex items-center gap-2 opacity-60">
            {["mada", "VISA", "Master", "tamara", "tabby"].map((p) => (
              <div key={p} className="h-7 px-2 bg-white rounded-md flex items-center justify-center">
                <span className="text-[9px] font-black text-neutral-800">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
