import React, { useState } from "react";
import { MapPin, Mail, Phone, MessageSquare } from "lucide-react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/ui/PageBanner";
import Button from "../components/ui/Button";
import { useToast } from "../context/ToastContext";

const CONTACT_INFO = [
  {
    title: "الموقع",
    value: "الرياض، المملكة العربية السعودية",
    icon: <MapPin className="w-5 h-5" strokeWidth={2} />,
  },
  {
    title: "البريد الإلكتروني",
    value: "info@boxline.com.sa",
    icon: <Mail className="w-5 h-5" strokeWidth={2} />,
    href: "mailto:info@boxline.com.sa",
  },
  {
    title: "الهاتف",
    value: "+966 92 000 1234",
    icon: <Phone className="w-5 h-5" strokeWidth={2} />,
    href: "tel:+966920001234",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("تم إرسال رسالتك بنجاح", {
      message: "سيتواصل معك فريقنا في أقرب وقت.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      <PageBanner 
        title="تواصل معنا" 
        subtitle="فريقنا متواجد دائماً للرد على استفساراتكم" 
        image="/imges/bunners/contact-page-banner.jpeg"
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* قسم معلومات الاتصال والواتساب */}
          <div className="lg:col-span-5 space-y-8 order-2 lg:order-1">
            <div className="space-y-2">
              <span className="text-xs font-bold text-green-600 uppercase tracking-wider bg-green-50 px-3 py-1.5 rounded-full">بيانات التواصل</span>
              <h2 className="text-2xl font-black text-neutral-900 pt-1">معلومات الاتصال</h2>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">يسعدنا استقبال استفساراتكم وخدمتكم دائماً خلال أوقات العمل الرسمية.</p>
            </div>

            <div className="space-y-4">
              {CONTACT_INFO.map((item) => (
                <div key={item.title} className="flex items-start gap-4 p-4 rounded-2xl border border-neutral-100 bg-neutral-50/50 hover:bg-neutral-50 transition-colors duration-200">
                  <div className="w-11 h-11 bg-green-50 text-green-600 rounded-xl flex items-center justify-center shrink-0 border border-green-100">
                    {item.icon}
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="font-bold text-sm text-neutral-900">{item.title}</h3>
                    {item.href ? (
                      <a href={item.href} className="text-xs md:text-sm text-neutral-500 hover:text-green-600 transition-colors block">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-xs md:text-sm text-neutral-500">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                href="https://wa.me/966920001234"
                target="_blank"
                fullWidth
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-bold text-sm rounded-2xl flex items-center justify-center gap-2 transition-transform active:scale-95 duration-200 border-none"
              >
                <MessageSquare className="w-5 h-5 shrink-0" />
                تواصل عبر واتساب
              </Button>
            </div>
          </div>

          {/* نموذج إرسال الرسالة المعزز */}
          <div className="lg:col-span-7 bg-neutral-50 rounded-3xl p-6 md:p-10 border border-neutral-100 order-1 lg:order-2">
            <div className="mb-6">
              <h2 className="text-xl sm:text-2xl font-black text-neutral-900">أرسل لنا رسالة</h2>
              <p className="text-xs md:text-sm text-neutral-400 mt-1">قم بتعبئة النموذج وسيرد عليك ممثلي خدمة العملاء فوراً.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { key: "name", label: "الاسم الكريم", type: "text", placeholder: "أدخل اسمك الكامل" },
                  { key: "email", label: "البريد الإلكتروني", type: "email", placeholder: "example@domain.com" },
                ].map((field) => (
                  <div key={field.key} className="space-y-1.5">
                    <label className="text-xs font-bold text-neutral-800 mr-1">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={formData[field.key]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="w-full bg-white border border-neutral-200 text-neutral-900 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all placeholder:text-neutral-300"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-800 mr-1">الموضوع</label>
                <input
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-white border border-neutral-200 text-neutral-900 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all placeholder:text-neutral-300"
                  placeholder="ما هو موضوع استفسارك؟"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-neutral-800 mr-1">الرسالة</label>
                <textarea
                  required
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-white border border-neutral-200 text-neutral-900 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-green-600 focus:ring-1 focus:ring-green-600 transition-all placeholder:text-neutral-300 resize-none"
                  placeholder="اكتب تفاصيل رسالتك هنا..."
                />
              </div>

              <div className="pt-2">
                <Button 
                  type="submit" 
                  fullWidth 
                  size="lg"
                  className="bg-neutral-900 hover:bg-neutral-950 text-white font-bold text-sm rounded-2xl transition-transform active:scale-95 duration-200 border-none"
                >
                  إرسال الرسالة
                </Button>
              </div>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}