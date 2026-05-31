import React from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";

const SECTIONS = [
  { title: "1. جمع المعلومات الشخصية", text: "نقوم بجمع المعلومات التي تقدمها طواعية عند التسجيل أو تقديم طلب أو التواصل معنا. قد تشمل: الاسم، البريد الإلكتروني، رقم الهاتف، وعنوان الشحن." },
  { title: "2. استخدام المعلومات", text: "نستخدم المعلومات لمعالجة طلباتك وتوصيلها، وتحسين تجربة المستخدم، وإرسال تحديثات حول حالة الطلب." },
  { title: "3. حماية البيانات", text: "نتخذ إجراءات أمنية صارمة لحماية معلوماتك من الوصول غير المصرح به. نستخدم تقنيات التشفير لحماية بيانات الدفع." },
  { title: "4. مشاركة المعلومات", text: "لا نقوم ببيع معلوماتك لأطراف ثالثة. نشارك مع شركاء موثوقين (الشحن والدفع) فقط بالقدر اللازم لإتمام طلباتك." },
  { title: "5. حقوق المستخدم", text: "يحق لك الوصول إلى معلوماتك وتحديثها أو طلب حذفها. تواصل معنا عبر صفحة 'تواصل معنا' لأي استفسار." },
];

export default function Privacy() {
  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      <PageHero title="سياسة الخصوصية" subtitle="آخر تحديث: 22 مايو 2026" />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="bg-neutral-50 rounded-4xl p-6 md:p-10 border border-neutral-100 space-y-10">
          {SECTIONS.map((section) => (
            <section key={section.title} className="space-y-3">
              <h2 className="text-lg sm:text-xl font-black text-neutral-900">{section.title}</h2>
              <p className="text-sm md:text-base text-neutral-500 leading-relaxed">{section.text}</p>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
