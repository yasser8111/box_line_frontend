import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      <PageHero
        title="من نحن"
        subtitle="نحن في BOX LINE نؤمن بأن التغليف هو الواجهة الأولى لهديتك"
      />

      <main className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full space-y-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-black text-brand-dark">رؤيتنا</h2>
            <p className="text-neutral-600 leading-relaxed text-sm">
              أن نكون الخيار الأول في المملكة العربية السعودية لتقديم حلول الهدايا والتغليف المبتكرة للشركات والأفراد، مع الالتزام بأعلى معايير الجودة.
            </p>
          </div>
          <div className="bg-brand-green-light rounded-3xl h-56 flex items-center justify-center">
            <img src="/logo.png" alt="BOX LINE" className="h-32 w-auto object-contain" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-brand-gray rounded-3xl h-56 flex items-center justify-center md:order-1 order-2">
            <svg className="w-24 h-24 text-brand-green" viewBox="0 0 100 100" fill="none">
              <polygon points="50,20 85,38 50,56 15,38" fill="currentColor" />
              <polygon points="15,38 50,56 50,88 15,70" fill="#e5e5e5" />
              <polygon points="50,56 85,38 85,70 50,88" fill="#ccc" />
            </svg>
          </div>
          <div className="space-y-4 md:order-2 order-1">
            <h2 className="text-2xl font-black text-brand-dark">مهمتنا</h2>
            <p className="text-neutral-600 leading-relaxed text-sm">
              تقديم منتجات هدايا وتغليف ذات جودة عالية وتصاميم فريدة تعكس ذوق عملائنا بأسعار تنافسية. نسعى دائماً لابتكار حلول تلبي احتياجات السوق.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-neutral-100 pt-16">
          {[
            { value: "+5000", label: "عميل سعيد" },
            { value: "+10k", label: "طلب مكتمل" },
            { value: "+50", label: "منتج متنوع" },
            { value: "100%", label: "ضمان الجودة" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-3xl font-black text-brand-green">{stat.value}</div>
              <div className="text-xs font-bold text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
