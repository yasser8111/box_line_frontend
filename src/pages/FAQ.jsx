import React, { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";

const FAQS = [
  { q: "ما هي أقل كمية للطلب المخصص؟", a: "تختلف أقل كمية بناءً على نوع المنتج. للعلب الكرتونية تبدأ الكمية من 50-100 حبة عادةً." },
  { q: "كم يستغرق وقت الإنتاج؟", a: "المنتجات المخصصة: 7-14 يوم عمل. المنتجات الجاهزة: 24-48 ساعة." },
  { q: "هل تقدمون خدمة التصميم؟", a: "نعم، نقدم خدمة تصميم مقابل رسوم إضافية أثناء الطلب." },
  { q: "كيف يمكنني تتبع طلبي؟", a: "من صفحة 'تتبع الطلبات' باستخدام رقم الطلب ورقم الجوال." },
  { q: "هل تقومون بالشحن لجميع مدن المملكة؟", a: "نعم، نشحن لجميع مناطق المملكة العربية السعودية." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      <PageHero title="الأسئلة الشائعة" subtitle="إجابات على أكثر الأسئلة شيوعاً" />

      <main className="flex-grow max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="bg-neutral-50 rounded-4xl p-6 md:p-8 border border-neutral-100 space-y-2">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="border-b border-neutral-200 pb-4 last:border-0 last:pb-0">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between py-2 text-right group"
                >
                  <span className="font-bold text-base md:text-lg text-neutral-900 group-hover:text-neutral-700 transition-colors">
                    {faq.q}
                  </span>
                  <span className="text-xl font-light text-neutral-900 mr-4 shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100 pt-2" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-xs md:text-sm text-neutral-500 leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center pt-10">
          <p className="text-neutral-500 mb-4 text-sm font-light">لم تجد إجابة لسؤالك؟</p>
          <Button to="/contact" variant="secondary" size="md">
            تواصل مع الدعم
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
