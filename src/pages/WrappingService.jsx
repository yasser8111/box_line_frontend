import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function WrappingService() {
  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans" dir="rtl">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
        <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm p-8 md:p-12 text-center space-y-8 animate-fade-in-up">
          <div className="w-20 h-20 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-black text-neutral-900">خدمة التغليف من الباب للباب</h1>
            <p className="text-lg text-neutral-500 max-w-2xl mx-auto leading-relaxed">
              نوفر لك خدمة استلام هديتك من مكانك، وتغليفها بأرقى المواد في متجرنا، ثم إعادة توصيلها لك أو إرسالها لمن تحب.
            </p>
          </div>

          <div className="bg-neutral-50 p-6 rounded-2xl text-right space-y-6 max-w-xl mx-auto border border-neutral-100">
            <h3 className="font-bold text-neutral-900 text-lg border-b border-neutral-200 pb-3">كيف تعمل الخدمة؟</h3>
            <ul className="space-y-4 text-neutral-600">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                <span>قم بتعبئة نموذج الطلب أدناه أو تواصل معنا عبر الواتساب لتحديد موعد الاستلام.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                <span>سيصلك مندوبنا لاستلام الهدية بكل أمان.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                <span>سنقوم بتغليفها وتنسيقها حسب اختيارك (ورود، بطاقات، أشرطة).</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">4</span>
                <span>توصيل الهدية لك أو للمستلم في الموعد المحدد.</span>
              </li>
            </ul>
          </div>

          <div className="pt-8">
            <a 
              href="https://wa.me/966920001234" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-brand-green text-white font-bold rounded-xl shadow-lg hover:bg-green-600 transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              <span>اطلب الخدمة عبر الواتساب</span>
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
