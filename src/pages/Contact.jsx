import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      <PageHero title="تواصل معنا" subtitle="فريقنا متواجد دائماً للرد على استفساراتكم" />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="card p-8">
            <h2 className="text-xl font-black text-brand-dark mb-6">أرسل لنا رسالة</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {[
                { key: "name", label: "الاسم الكريم", type: "text", placeholder: "أدخل اسمك" },
                { key: "email", label: "البريد الإلكتروني", type: "email", placeholder: "example@domain.com" },
                { key: "subject", label: "الموضوع", type: "text", placeholder: "موضوع الرسالة" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-bold text-neutral-700 mb-1">{field.label}</label>
                  <input
                    type={field.type}
                    required
                    value={formData[field.key]}
                    onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-sm"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-bold text-neutral-700 mb-1">الرسالة</label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-brand-green/30 focus:border-brand-green text-sm"
                  placeholder="اكتب رسالتك هنا..."
                />
              </div>
              <button type="submit" className="btn-primary w-full py-4">
                إرسال الرسالة
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-black text-brand-dark mb-2">معلومات الاتصال</h2>
              <p className="text-neutral-500 text-sm">نسعد بتواصلكم خلال أوقات العمل الرسمية.</p>
            </div>

            {[
              { title: "الموقع", value: "الرياض، المملكة العربية السعودية", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z" },
              { title: "البريد الإلكتروني", value: "info@boxline.com.sa", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z", href: "mailto:info@boxline.com.sa" },
              { title: "الهاتف", value: "+966 92 000 1234", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z", href: "tel:+966920001234" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-green-light text-brand-green rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-neutral-500 mt-1 hover:text-brand-green transition-colors block">{item.value}</a>
                  ) : (
                    <p className="text-sm text-neutral-500 mt-1">{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <a
              href="https://wa.me/966920001234"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full py-4"
            >
              تواصل عبر واتساب
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
