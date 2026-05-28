import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";

const faqs = [
  { q: "ما هي أقل كمية للطلب المخصص؟", a: "تختلف أقل كمية بناءً على نوع المنتج. للعلب الكرتونية تبدأ الكمية من 50-100 حبة عادةً." },
  { q: "كم يستغرق وقت الإنتاج؟", a: "المنتجات المخصصة: 7-14 يوم عمل. المنتجات الجاهزة: 24-48 ساعة." },
  { q: "هل تقدمون خدمة التصميم؟", a: "نعم، نقدم خدمة تصميم مقابل رسوم إضافية أثناء الطلب." },
  { q: "كيف يمكنني تتبع طلبي؟", a: "من صفحة 'تتبع الطلبات' باستخدام رقم الطلب ورقم الجوال." },
  { q: "هل تقومون بالشحن لجميع مدن المملكة؟", a: "نعم، نشحن لجميع مناطق المملكة العربية السعودية." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      <PageHero title="الأسئلة الشائعة" subtitle="إجابات على أكثر الأسئلة شيوعاً" />

      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-3">
        {faqs.map((faq, idx) => (
          <div key={idx} className="card overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full text-right p-5 flex justify-between items-center hover:bg-brand-gray transition-colors"
            >
              <span className="font-bold text-brand-dark">{faq.q}</span>
              <svg className={`w-5 h-5 text-brand-green shrink-0 transition-transform ${openIndex === idx ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${openIndex === idx ? "max-h-48 opacity-100" : "max-h-0 opacity-0"}`}>
              <div className="px-5 pb-5 text-sm text-neutral-600 leading-relaxed border-t border-neutral-50 pt-4">
                {faq.a}
              </div>
            </div>
          </div>
        ))}

        <div className="text-center pt-10">
          <p className="text-neutral-500 mb-4 text-sm">لم تجد إجابة لسؤالك؟</p>
          <Link to="/contact" className="btn-secondary px-8 py-3 text-sm">
            تواصل مع الدعم
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
