import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Mock Data for Ready Products
const READY_PRODUCTS = [
  {
    id: "ready-bag-1",
    name: "أكياس هدايا فاخرة (وردي)",
    price: 15,
    imageSvg: (
      <svg className="w-full h-full p-6 text-pink-400" viewBox="0 0 100 100" fill="currentColor">
        <path d="M20 30h60v60H20z" opacity="0.2"/>
        <path d="M25 35h50v50H25z"/>
        <path d="M35 35v-10a15 15 0 0130 0v10" fill="none" stroke="currentColor" strokeWidth="4"/>
      </svg>
    ),
    badge: "الأكثر مبيعاً"
  },
  {
    id: "ready-box-1",
    name: "صندوق مجوهرات مخملي",
    price: 35,
    imageSvg: (
      <svg className="w-full h-full p-6 text-indigo-500" viewBox="0 0 100 100" fill="currentColor">
        <rect x="20" y="40" width="60" height="40" rx="4" opacity="0.8"/>
        <path d="M20 40l30-15 30 15v5H20z" opacity="0.6"/>
      </svg>
    ),
    badge: "جديد"
  },
  {
    id: "ready-wrapping-paper",
    name: "رول تغليف هدايا مورد",
    price: 25,
    imageSvg: (
      <svg className="w-full h-full p-6 text-green-500" viewBox="0 0 100 100" fill="currentColor">
        <rect x="35" y="10" width="30" height="80" rx="5" opacity="0.8"/>
        <path d="M35 20h30v10H35zm0 20h30v10H35zm0 20h30v10H35z" fill="#fff" opacity="0.3"/>
      </svg>
    )
  },
  {
    id: "ready-card-1",
    name: "كروت تهنئة (مجموعة 5 قطع)",
    price: 20,
    imageSvg: (
      <svg className="w-full h-full p-6 text-yellow-500" viewBox="0 0 100 100" fill="currentColor">
        <rect x="25" y="25" width="50" height="50" rx="4" opacity="0.8"/>
        <path d="M35 45h30v5H35zm0 10h20v5H35z" fill="#fff"/>
        <circle cx="50" cy="25" r="5" fill="#fff"/>
      </svg>
    )
  }
];

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans" dir="rtl">
      <Header />

      {/* 1. Hero Section (Clean & Light) */}
      <section className="relative bg-white pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-600 text-xs font-bold mx-auto">
            <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
            <span>وجهتك الأولى للإبداع والهدايا</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-neutral-900 tracking-tight leading-tight max-w-4xl mx-auto">
            لأن هديتك تستحق <span className="text-brand-green">غلافاً يحكي قيمتها</span>
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto font-light leading-relaxed">
            اكتشف تشكيلتنا من المنتجات الجاهزة، أو صمم تغليفك الخاص، أو دعنا نعتني بهديتك بخدمة التغليف من الباب للباب.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <Link
              to="/category/ready"
              className="w-full sm:w-auto px-8 py-4 bg-brand-green text-white font-bold rounded-xl shadow-lg shadow-brand-green/20 hover:bg-green-600 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              تسوق المنتجات الجاهزة
            </Link>
            <a
              href="#wrapping-service"
              className="w-full sm:w-auto px-8 py-4 bg-white border border-neutral-200 text-neutral-700 font-bold rounded-xl shadow-sm hover:bg-neutral-50 hover:shadow-md transition-all duration-200"
            >
              خدمة تغليف الهدايا
            </a>
          </div>
        </div>
      </section>

      {/* 2. Ready Products Section */}
      <section className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="text-brand-green font-bold text-sm tracking-wider">القسم الأول</span>
              <h2 className="text-3xl md:text-4xl font-black text-neutral-900">منتجات جاهزة للشراء</h2>
              <p className="text-neutral-500 text-sm md:text-base max-w-lg">
                تشكيلة واسعة من الأكياس، العلب، والكروت الجاهزة. اختر ما يعجبك وسيصلك في أسرع وقت بدون الحاجة لأي تصميم.
              </p>
            </div>
            <Link to="/category/ready" className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-green-700 transition-colors">
              <span>عرض الكل</span>
              <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {READY_PRODUCTS.map((prod) => (
              <div key={prod.id} className="bg-white rounded-2xl border border-neutral-100 p-3 sm:p-4 hover:shadow-xl transition-shadow duration-300 group cursor-pointer" onClick={() => navigate(`/product/${prod.id}`)}>
                <div className="bg-neutral-50 rounded-xl aspect-square mb-3 sm:mb-4 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300">
                  {prod.badge && (
                    <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm text-neutral-900 text-[9px] sm:text-[10px] font-bold px-2 py-1 sm:px-2.5 sm:py-1 rounded-full shadow-sm z-10">
                      {prod.badge}
                    </span>
                  )}
                  {prod.imageSvg}
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-brand-green transition-colors line-clamp-1">{prod.name}</h3>
                  <div className="flex justify-between items-center pt-1 sm:pt-2">
                    <span className="text-base sm:text-lg font-black text-brand-green">{prod.price} ريال</span>
                    <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-brand-green group-hover:text-white transition-colors">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Customizable Products Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-dark rounded-3xl p-8 md:p-12 relative overflow-hidden text-white flex flex-col md:flex-row items-center gap-12 shadow-2xl">
            {/* Decorative background for the dark card */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
              <svg className="absolute w-[800px] h-[800px] -top-64 -right-64 text-brand-green animate-spin-slow" viewBox="0 0 100 100" fill="currentColor">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 2" />
              </svg>
            </div>

            <div className="flex-1 space-y-6 relative z-10">
              <span className="text-brand-green font-bold text-sm tracking-wider bg-brand-green/10 px-3 py-1 rounded-full">القسم الثاني</span>
              <h2 className="text-3xl md:text-5xl font-black">منتجات قابلة للتخصيص والطباعة</h2>
              <p className="text-neutral-300 text-base md:text-lg max-w-xl font-light leading-relaxed">
                هل لديك تصميم خاص بمتجرك أو مناسبتك؟ يمكنك الآن اختيار الكراتين، الأكياس، أو الملصقات ورفع تصميمك لنقوم بطباعته بأعلى جودة. وإذا لم يكن لديك تصميم، فريقنا الإبداعي جاهز لمساعدتك!
              </p>
              <ul className="space-y-3 pt-4">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">✓</div>
                  <span className="text-sm">رفع تصاميمك بسهولة عبر الموقع</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">✓</div>
                  <span className="text-sm">خيارات متعددة للخامات واللمسات النهائية</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">✓</div>
                  <span className="text-sm">أسعار تنافسية للكميات الكبيرة</span>
                </li>
              </ul>
              <div className="pt-6">
                <Link
                  to="/category/custom"
                  className="inline-block px-8 py-4 bg-brand-green text-white font-bold rounded-xl shadow-lg hover:bg-green-600 hover:-translate-y-0.5 transition-all duration-200"
                >
                  ابدأ تخصيص منتجاتك
                </Link>
              </div>
            </div>

            <div className="flex-1 w-full relative z-10">
              <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-xl relative">
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-brand-green/20 rounded-full blur-xl"></div>
                {/* Simple 3D Box Illustration */}
                <svg className="w-full h-64 drop-shadow-2xl" viewBox="0 0 100 100" fill="none">
                  {/* Base Box */}
                  <polygon points="50,30 80,45 50,60 20,45" fill="#2fa134" opacity="0.8" />
                  <polygon points="20,45 50,60 50,90 20,75" fill="#1e1e1e" />
                  <polygon points="50,60 80,45 80,75 50,90" fill="#2a2a2a" />
                  {/* Floating Design Layer */}
                  <polygon points="50,15 75,27.5 50,40 25,27.5" fill="#ffffff" opacity="0.9" className="animate-pulse" />
                  <text x="50" y="30" fontFamily="sans-serif" fontSize="6" fontWeight="bold" fill="#2fa134" textAnchor="middle" transform="rotate(-25 50 30) skewX(30)">YOUR LOGO</text>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Wrapping Service Section */}
      <section id="wrapping-service" className="py-24 bg-neutral-50 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-brand-green font-bold text-sm tracking-wider bg-brand-green/10 px-3 py-1 rounded-full">القسم الثالث والحصري</span>
            <h2 className="text-3xl md:text-5xl font-black text-neutral-900">خدمة تغليف الهدايا من الباب للباب</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed font-light">
              هل لديك هدية وتريد تقديمها بشكل استثنائي؟ لا تشيل هم! اطلب المندوب ليستلم الهدية من مكانك، سنقوم بتغليفها باحترافية في متجرنا، ثم نعيدها إليك أو نوصلها مباشرة للمستلم.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-100 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">1. نستلم الهدية</h3>
              <p className="text-neutral-500 text-sm">مندوبنا يوصل لباب بيتك أو مكتبك لاستلام الهدية بكل أمان وعناية.</p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-100 text-center shadow-sm hover:shadow-md transition-shadow relative">
              {/* Connector lines for desktop */}
              <div className="hidden md:block absolute top-16 right-[-20%] w-[40%] h-0.5 bg-neutral-200 z-0 border-t border-dashed border-neutral-300"></div>
              <div className="hidden md:block absolute top-16 left-[-20%] w-[40%] h-0.5 bg-neutral-200 z-0 border-t border-dashed border-neutral-300"></div>

              <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">2. نغلفها بحب</h3>
              <p className="text-neutral-500 text-sm">يقوم فريقنا بتغليف الهدية باستخدام أرقى الخامات حسب اختيارك وذوقك.</p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl border border-neutral-100 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-16 h-16 bg-purple-50 text-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">3. نوصلها للمستلم</h3>
              <p className="text-neutral-500 text-sm">نعيد الهدية المغلفة إليك، أو نقوم بتوصيلها مباشرة لمن تحب بمفاجأة جميلة.</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/service/wrapping"
              className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white font-bold rounded-xl shadow-lg hover:bg-neutral-800 transition-all duration-200"
            >
              <span>اطلب المندوب الآن</span>
              <svg className="w-5 h-5 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
