import React from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  MapPin 
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-400 py-16 px-4 md:px-12 lg:px-24 border-t border-neutral-800" dir="rtl">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 items-start mb-16">
          
          {/* Brand & Contact Section */}
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="inline-block">
              <img src="/logo.png" alt="BOX LINE" className="h-10 w-auto brightness-0 invert" />
            </Link>
            <p className="text-sm leading-relaxed text-neutral-300 font-light">
              متجر BOX LINE — وجهتك الأولى للهدايا الفاخرة، التغليف المخصص، وخدمة تغليف من الباب للباب.
            </p>
            <div className="space-y-3 pt-2 text-sm font-light text-neutral-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <div>
                  <p>الرياض، المملكة العربية السعودية</p>
                  <p>السبت - الخميس: 9ص - 10م</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-neutral-400 shrink-0" />
                <a href="mailto:info@boxline.com.sa" className="hover:text-white transition-colors">
                  info@boxline.com.sa
                </a>
              </div>
            </div>
          </div>

          {/* Column 1: Customers Services */}
          <div>
            <h3 className="text-base font-normal text-white mb-6">
              خدمة العملاء
            </h3>
            <ul className="space-y-3.5 text-sm font-light text-neutral-300">
              {[
                { to: "/faq", label: "الأسئلة الشائعة" },
                { to: "/orders", label: "تتبع الطلبات" },
                { to: "/returns", label: "الاسترجاع والاستبدال" },
                { to: "/shipping", label: "الشحن والتوصيل" },
                { to: "/terms", label: "الشروط والأحكام" },
                { to: "/privacy", label: "سياسة الخصوصية" }
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="text-base font-normal text-white mb-6">
              المنتجات
            </h3>
            <ul className="space-y-3.5 text-sm font-light text-neutral-300">
              {[
                { to: "/category/ready", label: "منتجات جاهزة" },
                { to: "/category/custom", label: "منتجات مخصصة" },
                { to: "/service/wrapping", label: "تغليف الهدايا" },
                { to: "/products", label: "جميع المنتجات" }
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Info */}
          <div>
            <h3 className="text-base font-normal text-white mb-6">
              معلومات الشركة
            </h3>
            <ul className="space-y-3.5 text-sm font-light text-neutral-300">
              {[
                { to: "/about", label: "من نحن" },
                { to: "/how-it-works", label: "كيف نعمل" },
                { to: "/values", label: "قيمنا" },
                { to: "/discounts", label: "الخصومات التعليمية" }
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Follow Us */}
          <div>
            <h3 className="text-base font-normal text-white mb-6">
              تابعنا على
            </h3>
            <ul className="space-y-4 text-sm font-light text-neutral-300">
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <span>انستغرام</span>
                </a>
              </li>
              <li>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <span>فيسبوك</span>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 hover:text-white transition-colors">
                  <span>لينكد إن</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-800/60 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-light text-neutral-400">
          <div>
            <p>© {new Date().getFullYear()} جميع الحقوق محفوظة لـ BOX LINE.</p>
          </div>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <Link to="/security" className="hover:text-white transition-colors">الأمان</Link>
            <Link to="/terms" className="hover:text-white transition-colors">الشروط</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}