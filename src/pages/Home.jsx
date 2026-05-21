import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const CATEGORIES = [
  {
    id: "packaging",
    name: "كراتين وتغليف مخصص",
    desc: "كراتين شحن، علب بريدية، وعلب هدايا فاخرة بمقاسات وتصاميم مخصصة.",
    icon: (
      <svg className="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    badge: "الأكثر طلباً 🔥",
  },
  {
    id: "events",
    name: "مطبوعات المناسبات والحفلات",
    desc: "أوراق زينة وثيمات، كروت دعوة، أوراق تغليف شوكولاتة، ومستلزمات الحفلات.",
    icon: (
      <svg className="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    badge: "مستلزمات حفلات 🎉",
  },
  {
    id: "stickers",
    name: "ستيكرات وملصقات لاصقة",
    desc: "ستيكرات دائرية، مربعة، أو مقصوصة حسب الشكل لمنتجاتك وعلب مشروعك.",
    icon: (
      <svg className="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    badge: "مقاوم للماء 💧",
  },
  {
    id: "bags",
    name: "أكياس ورقية مطبوعة",
    desc: "أكياس تسوق ورقية متينة بمقابض مختلفة تعبر عن فخامة هويتك وهداياك.",
    icon: (
      <svg className="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    badge: "صديق للبيئة 🌿",
  },
  {
    id: "business",
    name: "مطبوعات تجارية ومكتبية",
    desc: "كروت عمل شخصية فاخرة، بروشورات تسويقية، فواتير ورقية، ومستندات رسمية.",
    icon: (
      <svg className="w-12 h-12 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    badge: "احترافي 💼",
  },
];

const POPULAR_PRODUCTS = [
  {
    id: "mailer-box",
    name: "كرتون بريدي مطبوع (Mailer Box)",
    category: "packaging",
    basePrice: 4.5,
    minQty: 100,
    desc: "كرتون مموج قوي ومثالي لشحن المنتجات، متاح بطباعة خارجية كاملة وداخلية.",
    imageSvg: (
      <svg className="w-full h-full p-4" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="8" fill="#1e1e1e" />
        <polygon points="50,22 80,35 50,48 20,35" fill="#2fa134" opacity="0.8" />
        <polygon points="50,48 80,35 80,68 50,81" fill="#fff" opacity="0.8" />
        <polygon points="20,35 50,48 50,81 20,68" fill="#fff" opacity="0.65" />
      </svg>
    ),
  },
  {
    id: "round-stickers",
    name: "ملصقات دائرية مخصصة للعلب",
    category: "stickers",
    basePrice: 0.25,
    minQty: 250,
    desc: "ستيكر ورقي أو بلاستيكي لاصق عالي الوضوح، مثالي لإغلاق الأكياس وتزيين العلب.",
    imageSvg: (
      <svg className="w-full h-full p-4" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="8" fill="#1e1e1e" />
        <circle cx="50" cy="50" r="32" fill="#2fa134" />
        <circle cx="50" cy="50" r="27" fill="none" stroke="#fff" strokeWidth="2" strokeDasharray="4 2" />
        <text x="50" y="54" fontFamily="sans-serif" fontSize="11" fontWeight="bold" fill="#fff" textAnchor="middle">BOX LINE</text>
      </svg>
    ),
  },
  {
    id: "party-sheets",
    name: "أوراق ثيمات الحفلات المخصصة",
    category: "events",
    basePrice: 1.2,
    minQty: 50,
    desc: "طباعة ثيمات الحفلات بالكامل على أوراق فاخرة، مقاسات A4 أو مخصصة للزينة والشوكولاتة.",
    imageSvg: (
      <svg className="w-full h-full p-4" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="8" fill="#1e1e1e" />
        <path d="M30 20h40v60H30z" fill="#fff" />
        <path d="M40 30h20v2H40zm0 8h20v2H40zm0 8h15v2H40z" fill="#2fa134" />
        <polygon points="60,70 65,65 65,75" fill="#2fa134" />
        <polygon points="50,75 55,70 55,80" fill="#2fa134" />
      </svg>
    ),
  },
  {
    id: "luxury-bags",
    name: "أكياس تسوق ورقية فاخرة",
    category: "bags",
    basePrice: 3.2,
    minQty: 100,
    desc: "أكياس ورقية متينة مع طباعة شعارك على الوجهين ومقابض حبل قطنية فاخرة.",
    imageSvg: (
      <svg className="w-full h-full p-4" viewBox="0 0 100 100" fill="none">
        <rect width="100" height="100" rx="8" fill="#1e1e1e" />
        <path d="M32 40v38a2 2 0 002 2h32a2 2 0 002-2V40H32z" fill="#fff" />
        <path d="M42 40c0-6 3-10 8-10s8 4 8 10" stroke="#2fa134" strokeWidth="3" fill="none" />
        <circle cx="50" cy="58" r="8" fill="#2fa134" />
      </svg>
    ),
  },
];

export default function Home() {
  const navigate = useNavigate();

  // Instant Calculator States
  const [calcProduct, setCalcProduct] = useState("mailer-box");
  const [calcQty, setCalcQty] = useState(500);
  const [calcPaper, setCalcPaper] = useState("standard");
  const [calcFinish, setCalcFinish] = useState("none");

  // Calculate quick estimate
  const getQuickEstimate = () => {
    let base = 1.5;
    if (calcProduct === "mailer-box") base = 4.5;
    else if (calcProduct === "round-stickers") base = 0.25;
    else if (calcProduct === "party-sheets") base = 1.2;
    else if (calcProduct === "luxury-bags") base = 3.2;

    let multiplier = 1.0;
    if (calcPaper === "premium") multiplier += 0.35;
    if (calcFinish === "gold") multiplier += 0.25;

    let bulkDiscount = 1.0;
    if (calcQty >= 2000) bulkDiscount = 0.65;
    else if (calcQty >= 1000) bulkDiscount = 0.75;
    else if (calcQty >= 500) bulkDiscount = 0.85;
    else if (calcQty >= 250) bulkDiscount = 0.92;

    const unitPrice = parseFloat((base * multiplier * bulkDiscount).toFixed(2));
    const total = parseFloat((unitPrice * calcQty).toFixed(2));

    return { unitPrice, total };
  };

  const { unitPrice, total } = getQuickEstimate();

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans" dir="rtl">
      <Header />

      {/* 1. Hero Section */}
      <section className="relative bg-brand-dark text-white py-20 md:py-28 overflow-hidden">
        {/* Background Decorative Patterns */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-neutral-900 via-neutral-950 to-black opacity-95"></div>
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-brand-green/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-0 w-80 h-80 bg-brand-green/5 rounded-full blur-2xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Hero Text Content */}
          <div className="flex-1 space-y-6 text-center lg:text-right max-w-2xl animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
              <span>مطبعة ومصنع متكامل في خدمتكم</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-white">
              نصنع لهويتك <span className="text-brand-green underline decoration-brand-green/30">غلافاً</span> يليق بجمال صنعك
            </h1>
            
            <p className="text-base md:text-lg text-neutral-450 leading-relaxed font-light">
              حوّل علاماتك التجارية إلى حقيقة ملموسة. نقوم بتصميم وطباعة الكراتين والعلب المخصصة، ملصقات المنتجات، أكياس التسوق الورقية ومطبوعات المناسبات والحفلات بأرقى الخامات وخصومات هائلة للكميات الكبيرة.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                to="/categories/packaging"
                className="px-8 py-3.5 bg-brand-green text-white font-bold rounded-lg shadow-lg shadow-brand-green/25 hover:bg-green-600 transition-all hover:scale-105 duration-200"
              >
                ابدأ طلبك المخصص
              </Link>
              <a
                href="#quick-calc"
                className="px-8 py-3.5 bg-neutral-900 border border-neutral-800 text-neutral-300 font-semibold rounded-lg hover:bg-neutral-850 transition-all duration-200"
              >
                حاسبة الأسعار السريعة
              </a>
            </div>

            {/* Micro Trust badges */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-neutral-900/50 max-w-lg mx-auto lg:mx-0">
              <div className="text-center lg:text-right">
                <span className="block text-2xl font-black text-brand-green">100%</span>
                <span className="text-xs text-neutral-500">جودة طباعة مضمونة</span>
              </div>
              <div className="text-center lg:text-right">
                <span className="block text-2xl font-black text-brand-green">+5000</span>
                <span className="text-xs text-neutral-500">عميل يثق بنا</span>
              </div>
              <div className="text-center lg:text-right">
                <span className="block text-2xl font-black text-brand-green">3-5 أيام</span>
                <span className="text-xs text-neutral-500">متوسط الشحن والتوصيل</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Block */}
          <div className="flex-1 w-full max-w-md lg:max-w-lg flex justify-center animate-scale-in">
            <div className="relative w-full aspect-square max-w-sm md:max-w-md bg-neutral-900/40 border border-neutral-850 rounded-3xl p-6 flex flex-col justify-between shadow-2xl glass-dark">
              {/* Dynamic decorative cubes rendering with SVGs */}
              <div className="flex justify-between items-start">
                <span className="text-[11px] text-neutral-400 font-mono tracking-widest uppercase">BOX LINE CO.</span>
                <span className="w-2.5 h-2.5 rounded-full bg-brand-green animate-ping"></span>
              </div>

              {/* Large central floating isometric Box SVG */}
              <div className="w-64 h-64 mx-auto my-auto flex items-center justify-center relative">
                <div className="absolute inset-0 bg-brand-green/20 rounded-full blur-2xl animate-pulse"></div>
                <svg className="w-48 h-48 drop-shadow-[0_20px_50px_rgba(47,161,52,0.3)]" viewBox="0 0 100 100" fill="none">
                  {/* B Letter */}
                  <text x="8" y="65" fontFamily="Georgia, serif" fontSize="62" fontWeight="900" fill="#FFFFFF" fillOpacity="0.15">B</text>
                  {/* L Letter */}
                  <text x="45" y="65" fontFamily="Georgia, serif" fontSize="62" fontWeight="900" fill="#2fa134" fillOpacity="0.15">L</text>
                  
                  {/* Box Drawing */}
                  <polygon points="50,30 72,18 72,42 50,54" fill="#2fa134" />
                  <polygon points="50,30 72,18 94,30 72,42" fill="#FFFFFF" />
                  <polygon points="72,42 94,30 94,54 72,66" fill="#f0fdf4" />

                  {/* Small sliding Box */}
                  <polygon points="12,58 24,51 24,65 12,72" fill="#2fa134" opacity="0.6" />
                  <polygon points="12,58 24,51 36,58 24,65" fill="#FFFFFF" opacity="0.6" />
                  <polygon points="24,65 36,58 36,72 24,79" fill="#FFFFFF" opacity="0.4" />
                </svg>
              </div>

              <div className="border-t border-neutral-850/60 pt-4 flex justify-between items-center text-xs text-neutral-400">
                <span>تغليف يدوم طويلاً</span>
                <span className="text-brand-green font-bold">هويتك مطبوعة باحترافية</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Custom Categories Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-4 mb-16">
          <span className="text-brand-green font-bold text-sm tracking-wider uppercase">أقسام المطبعة</span>
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900">
            تصفح خدمات الطباعة والتغليف التي نقدمها
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            نوفر لكم تشكيلة واسعة من حلول الطباعة الرقمية والأوفست والتفصيل المخصص لتلبية كافة متطلبات مشروعك التجاري أو مناسبتك الشخصية.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="bg-white rounded-2xl p-8 border border-neutral-100 hover-card flex flex-col justify-between h-[300px] relative overflow-hidden group"
            >
              {/* Decorative Corner Glow */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-brand-green/5 rounded-bl-full transition-all group-hover:scale-150 duration-300"></div>

              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-green/5 rounded-xl border border-brand-green/10">
                    {cat.icon}
                  </div>
                  <span className="text-[10px] font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full">
                    {cat.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 mb-3">{cat.name}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-light">{cat.desc}</p>
              </div>

              <div className="pt-6">
                <Link
                  to={`/categories/${cat.id}`}
                  className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 hover:text-brand-green transition-colors"
                >
                  <span>استكشف المنتجات</span>
                  <svg className="w-4 h-4 transform rotate-180 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Pricing Tool */}
      <section id="quick-calc" className="py-16 bg-neutral-900 text-white border-y border-neutral-850">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Col: Explainer */}
            <div className="space-y-6 text-right">
              <span className="text-brand-green font-bold text-sm">التسعير التفاعلي والفوري</span>
              <h2 className="text-3xl md:text-4xl font-black text-white">
                احسب تكلفة مطبوعاتك فوراً بلمح البصر!
              </h2>
              <p className="text-neutral-450 text-sm md:text-base leading-relaxed">
                لا داعي لانتظار عروض الأسعار التقليدية لأيام! حدد المنتج، الكمية التي تحتاجها، ونوع الورق أو المواد وسوف توفر لك حاسبتنا الذكية تقديراً فورياً دقيقاً، مع احتساب خصومات الجملة تلقائياً.
              </p>
              
              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                    ✓
                  </div>
                  <span className="text-sm text-neutral-300">تحديث تلقائي للسعر عند تغيير المدخلات.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                    ✓
                  </div>
                  <span className="text-sm text-neutral-300">خصم يصل إلى 35% للطلبيات الكبيرة (أكثر من 2000 قطعة).</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center text-brand-green">
                    ✓
                  </div>
                  <span className="text-sm text-neutral-300">إمكانية تخصيص المقاسات والتغليف الحراري بدقة.</span>
                </div>
              </div>
            </div>

            {/* Right Col: Interactive Widget */}
            <div className="bg-neutral-950 border border-neutral-850 p-6 md:p-8 rounded-3xl space-y-6 shadow-2xl glass-dark">
              <h3 className="text-lg font-bold text-white border-b border-neutral-850 pb-4">حاسبة الأسعار السريعة</h3>
              
              {/* Product Type Select */}
              <div className="space-y-2">
                <label className="block text-xs text-neutral-400 font-semibold">نوع منتج الطباعة:</label>
                <select
                  value={calcProduct}
                  onChange={(e) => setCalcProduct(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-850 bg-neutral-900 text-white focus:ring-1 focus:ring-brand-green focus:outline-none text-sm"
                >
                  <option value="mailer-box">كرتون بريدي مطبوع (Mailer Box)</option>
                  <option value="round-stickers">ملصقات دائرية مخصصة للعلب</option>
                  <option value="party-sheets">أوراق ثيمات الحفلات المخصصة</option>
                  <option value="luxury-bags">أكياس تسوق ورقية فاخرة</option>
                </select>
              </div>

              {/* Slider for Quantity */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-neutral-400">
                  <label className="font-semibold">الكمية المطلوبة:</label>
                  <span className="font-bold text-brand-green">{calcQty} قطعة</span>
                </div>
                <input
                  type="range"
                  min="100"
                  max="3000"
                  step="50"
                  value={calcQty}
                  onChange={(e) => setCalcQty(parseInt(e.target.value))}
                  className="w-full accent-brand-green bg-neutral-850 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-neutral-500">
                  <span>100 قطعة</span>
                  <span>1000 قطعة (25% خصم)</span>
                  <span>3000 قطعة (35% خصم)</span>
                </div>
              </div>

              {/* Material Type Select */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-xs text-neutral-400 font-semibold">نوع المواد والورق:</label>
                  <select
                    value={calcPaper}
                    onChange={(e) => setCalcPaper(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-neutral-850 bg-neutral-900 text-white focus:ring-1 focus:ring-brand-green focus:outline-none text-xs"
                  >
                    <option value="standard">ورق / كرتون قياسي</option>
                    <option value="premium">ورق مقوى فاخر مموج (+35%)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-xs text-neutral-400 font-semibold">طبقة الحماية واللمعان:</label>
                  <select
                    value={calcFinish}
                    onChange={(e) => setCalcFinish(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-lg border border-neutral-850 bg-neutral-900 text-white focus:ring-1 focus:ring-brand-green focus:outline-none text-xs"
                  >
                    <option value="none">بدون تأثير إضافي</option>
                    <option value="gold">رقائق ذهبية Gold Foil (+25%)</option>
                  </select>
                </div>
              </div>

              {/* Price Output Display Area */}
              <div className="p-5 bg-neutral-900 rounded-2xl border border-neutral-850 flex items-center justify-between gap-4">
                <div>
                  <span className="block text-[10px] text-neutral-500">السعر التقريبي للقطعة</span>
                  <span className="text-xl font-bold text-white">{unitPrice} ريال</span>
                </div>
                
                <div className="text-left">
                  <span className="block text-[10px] text-neutral-500">السعر الإجمالي التقريبي</span>
                  <span className="text-3xl font-black text-brand-green">{total} ريال</span>
                </div>
              </div>

              {/* Quick Checkout Link */}
              <button
                onClick={() => {
                  // Pre-populate details in redirect
                  navigate(`/product/${calcProduct}`);
                }}
                className="w-full py-3.5 bg-brand-green hover:bg-green-600 text-white font-bold rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
              >
                <span>ابدأ بتخصيص هذا المنتج ورفع التصميم</span>
                <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Popular Products Showcase */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-4 mb-16">
          <span className="text-brand-green font-bold text-sm tracking-wider uppercase">أبرز المنتجات والمطبوعات</span>
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900">المنتجات الأكثر مبيعاً والأسرع تسليماً</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            مجموعة متميزة من كراتين الشحن، ملصقات المنتجات، وأوراق زينة الحفلات جاهزة للتخصيص الفوري ورفع الملفات لطباعتها فوراً.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {POPULAR_PRODUCTS.map((prod) => (
            <div key={prod.id} className="bg-white rounded-2xl border border-neutral-100 p-5 flex flex-col justify-between hover-card group">
              <div>
                {/* Product Image representation using inline SVGs */}
                <div className="w-full aspect-square bg-neutral-950 rounded-xl overflow-hidden mb-4 relative flex items-center justify-center">
                  {prod.imageSvg}
                  {/* Category badge */}
                  <span className="absolute top-3 right-3 text-[9px] font-bold bg-neutral-900/85 text-neutral-300 px-2 py-1 rounded border border-neutral-800">
                    {prod.category === "packaging" ? "علب وتغليف" : prod.category === "stickers" ? "ملصقات" : prod.category === "events" ? "مناسبات وحفلات" : "أكياس ورقية"}
                  </span>
                </div>

                <h3 className="text-base font-bold text-neutral-900 group-hover:text-brand-green transition-colors mb-2 line-clamp-1">
                  {prod.name}
                </h3>
                <p className="text-xs text-neutral-500 leading-relaxed font-light mb-4 line-clamp-2">
                  {prod.desc}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-neutral-50">
                <div className="flex justify-between items-end">
                  <div>
                    <span className="block text-[10px] text-neutral-400">يبدأ من</span>
                    <span className="text-lg font-black text-brand-green">{prod.basePrice} ريال <span className="text-xs font-light text-neutral-400">/ قطعة</span></span>
                  </div>
                  <span className="text-[10px] text-neutral-500">أقل كمية: {prod.minQty} قطة</span>
                </div>

                <Link
                  to={`/product/${prod.id}`}
                  className="w-full py-2.5 bg-neutral-900 hover:bg-brand-green text-white text-xs font-bold rounded-lg text-center block transition-all group-hover:scale-[1.02] duration-200"
                >
                  اختر المقاس واطبع الآن
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. How It Works Timeline */}
      <section className="py-20 bg-neutral-100 w-full border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <span className="text-brand-green font-bold text-sm tracking-wider uppercase">رحلة طلبك في BOX LINE</span>
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900">4 خطوات بسيطة لتحصل على مطبوعاتك المخصصة</h2>
            <p className="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              نعتمد على نظام تقني ذكي يبسّط لك تصميم وتخصيص الكراتين والمطبوعات الورقية ورفع تصاميمك لمراجعتها وطباعتها.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 relative space-y-4">
              <span className="absolute -top-6 right-6 w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-neutral-100">1</span>
              <h3 className="text-lg font-bold text-neutral-900 pt-4">اختر المنتج والتصنيف</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                تصفح أقسامنا المتعددة من كراتين التغليف، ملصقات المنتجات، أكياس الشراء، أو مطبوعات ثيم الحفلات والمناسبات.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 relative space-y-4">
              <span className="absolute -top-6 right-6 w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-neutral-100">2</span>
              <h3 className="text-lg font-bold text-neutral-900 pt-4">حدد أبعادك ومواصفاتك</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                اختر المقاس الذي يناسب منتجك، نوع الورق وسماكته، نوع التلميع والتغليف، والكمية التي تحتاجها بوضوح.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 relative space-y-4">
              <span className="absolute -top-6 right-6 w-12 h-12 bg-brand-green text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-neutral-100">3</span>
              <h3 className="text-lg font-bold text-neutral-900 pt-4">ارفع تصميمك المخصص</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                قم بسحب وإفلات ملف التصميم الخاص بك (PDF, AI, PNG)، أو يمكنك اختيار طلب خدمة التصميم وسيتولى فريقنا تصميمها لك.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-2xl border border-neutral-200 relative space-y-4">
              <span className="absolute -top-6 right-6 w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center font-black text-xl shadow-lg border-4 border-neutral-100">4</span>
              <h3 className="text-lg font-bold text-neutral-900 pt-4">نطبع ونشحن لباب منزلك</h3>
              <p className="text-xs text-neutral-500 leading-relaxed font-light">
                يقوم مهندسو الطباعة بمراجعة ملفك للتأكد من المقاسات والدقة، ثم نطلق الطباعة ونسلمها لشركاء الشحن لتصلك سريعة وآمنة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center space-y-4 mb-16">
          <span className="text-brand-green font-bold text-sm tracking-wider uppercase">شركاء النجاح</span>
          <h2 className="text-3xl md:text-4xl font-black text-neutral-900">ماذا يقول عملاؤنا ومتاجرنا الشريكة؟</h2>
          <p className="text-neutral-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            نفخر بطباعة وتصميم الكراتين ومستلزمات التغليف لأكثر من 5000 علامة تجارية ومتاجر إلكترونية ومخططي مناسبات.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white border border-neutral-150 p-6 rounded-2xl space-y-4 hover-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center font-bold text-brand-green text-sm">
                م ع
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">متجر عود وعطورات</h4>
                <span className="text-[10px] text-neutral-400">الرياض</span>
              </div>
            </div>
            <p className="text-xs text-neutral-550 leading-relaxed">
              "تعاملنا مع بوكس لاين لطباعة علب العطور الفاخرة الخاصة بنا. الدقة في تفاصيل رقائق الذهب ومقاس الكرتون كانت ممتازة جداً والتزامهم بموعد التسليم أبهرنا."
            </p>
            <div className="text-brand-green text-xs font-bold">★★★★★</div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-neutral-150 p-6 rounded-2xl space-y-4 hover-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center font-bold text-brand-green text-sm">
                س ن
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">منظمة حفلات ومناسبات</h4>
                <span className="text-[10px] text-neutral-400">جدة</span>
              </div>
            </div>
            <p className="text-xs text-neutral-550 leading-relaxed">
              "ثيمات الحفلات المطبوعة والأوراق مقصوصة بشكل رائع وجاهزة للاستخدام فوراً. نظام رفع الملفات في الموقع سهّل علي جداً إرسال ملفات الفوتوشوب المفتوحة لمطابقتها."
            </p>
            <div className="text-brand-green text-xs font-bold">★★★★★</div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-neutral-150 p-6 rounded-2xl space-y-4 hover-card">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center font-bold text-brand-green text-sm">
                خ أ
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-900">متجر ملابس وأزياء</h4>
                <span className="text-[10px] text-neutral-400">الدمام</span>
              </div>
            </div>
            <p className="text-xs text-neutral-550 leading-relaxed">
              "نطلب الأكياس الورقية المطبوعة والملصقات بشكل دوري من بوكس لاين. خصومات الكميات توفر لنا مبالغ كبيرة كل شهر، وخيار تكرار الطلب سريع وعملي."
            </p>
            <div className="text-brand-green text-xs font-bold">★★★★★</div>
          </div>
        </div>
      </section>

      {/* 7. Call To Action (CTA) */}
      <section className="bg-brand-green text-white py-16 px-4 text-center relative overflow-hidden w-full">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-5xl font-black">جاهز لتصميم وطباعة علب ومطبوعات مشروعك؟</h2>
          <p className="text-sm md:text-base text-neutral-100 max-w-2xl mx-auto font-light leading-relaxed">
            تواصل مع مهندسي الإنتاج ومصممينا لمساعدتك في إطلاق هويتك، أو ابدأ بتجربة التسوق وحساب السعر فوراً من خلال موقعنا الإلكتروني.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4 flex-wrap">
            <Link
              to="/categories/packaging"
              className="px-8 py-4 bg-brand-dark text-white hover:bg-neutral-950 font-bold rounded-xl shadow-xl transition-all"
            >
              ابدأ التخصيص والطلب
            </Link>
            <a
              href="https://wa.me/966920001234"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-brand-dark hover:bg-neutral-100 font-bold rounded-xl shadow-xl flex items-center gap-2 transition-all"
            >
              <span>استشارة مجانية واتساب</span>
              <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
