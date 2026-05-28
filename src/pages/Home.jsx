import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ProductCard from "../components/ui/ProductCard";
import SectionTitle from "../components/ui/SectionTitle";
import { READY_PRODUCTS, CATEGORIES } from "../data/products";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const FEATURES = [
  { icon: "🚚", title: "توصيل سريع", desc: "شحن لجميع مدن المملكة" },
  { icon: "🎨", title: "تخصيص كامل", desc: "صمّم تغليفك بلمساتك" },
  { icon: "✅", title: "جودة مضمونة", desc: "مواد فاخرة وطباعة دقيقة" },
  { icon: "💬", title: "دعم مباشر", desc: "فريقنا جاهز لمساعدتك" },
];

const WRAPPING_STEPS = [
  {
    num: "01",
    title: "نستلم الهدية",
    desc: "مندوبنا يصل لبابك لاستلام الهدية بأمان.",
  },
  {
    num: "02",
    title: "نغلفها باحتراف",
    desc: "فريقنا يبدع في التغليف بأرقى الخامات.",
    highlight: true,
  },
  {
    num: "03",
    title: "نوصلها للمستلم",
    desc: "توصيل الهدية المغلفة مباشرة لمن تحب.",
  },
];


export function Hero() {
  const HERO_PRODUCTS = [
    {
      id: 1,
      image: "/imges/product_1.png",
      alt: "تغليف منتجات",
    },
    {
      id: 2,
      image: "/imges/product_2.png",
      alt: "صناديق هدايا",
    },
    {
      id: 3,
      image: "/imges/product_3.png",
      alt: "تغليف فاخر",
    },
  ];

  return (
    <section className="bg-white min-h-[calc(100vh-80px)] flex items-center py-4 lg:py-6 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between gap-6 lg:gap-10">
        
        {/* Top Content: Title & Stats */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
          <div className="w-full md:max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight md:leading-tight">
              هديتك تحمل شعورًا، <br />
              ونحن نمنحه{" "}
              <span className="font-black text-black inline-block">جمـــالًا</span>
              
              {/* Desktop Button with Arrow */}
              <span className="hidden md:inline-flex items-center gap-4 mr-4 whitespace-nowrap">
                <svg
                  className="w-10 h-6 text-neutral-950 shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <Link
                  to="/contact"
                  className="bg-neutral-950 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-neutral-800 transition-colors"
                >
                  تواصل معنا
                </Link>
              </span>
            </h1>

            {/* Mobile Button: Below text, no arrow */}
            <div className="block md:hidden pt-1">
              <Link
                to="/contact"
                className="inline-block bg-neutral-950 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-neutral-800 transition-colors text-center"
              >
                تواصل معنا
              </Link>
            </div>
          </div>

          {/* Happy Customers Badge (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-3 self-start md:self-end shrink-0">
            <div className="flex -space-x-2 space-x-reverse">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                  alt="user"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-neutral-100 flex items-center justify-center text-xs font-medium text-neutral-500">
                +
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-bold text-neutral-900">+500</p>
              <p className="text-xs text-neutral-400">عميل سعيد</p>
            </div>
          </div>
        </div>

        {/* Desktop View: Grid (Hidden on mobile) */}
        <div className="hidden md:grid grid-cols-3 gap-6">
          {HERO_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="aspect-square rounded-4xl lg:rounded-[2.5rem] overflow-hidden group bg-neutral-50 border border-neutral-100"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile View: Swiper (Hidden on desktop) */}
        <div className="block md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {HERO_PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="aspect-square rounded-4xl overflow-hidden bg-neutral-50 border border-neutral-100">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />

      <Hero />

      {/* Features strip — marquee bar */}
      <section className="bg-neutral-950 py-8">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          {FEATURES.map((f) => (
            <div key={f.title} className="flex items-center gap-3 text-white">
              <span className="text-2xl">{f.icon}</span>
              <div>
                <p className="font-bold text-sm">{f.title}</p>
                <p className="text-xs text-neutral-400 font-light">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="أقسامنا"
            title="ماذا تبحث عنه؟"
            description="اختر القسم المناسب لاحتياجك"
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={cat.link}
                className="hover-card group card p-8 text-center space-y-4"
              >
                <span className="text-4xl">{cat.icon}</span>
                <h3 className="text-xl font-black text-neutral-900 group-hover:text-neutral-700 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-sm text-neutral-500">{cat.desc}</p>
                <span className="inline-flex items-center gap-1 text-neutral-900 font-bold text-sm">
                  تصفح
                  <svg
                    className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <SectionTitle
              label="الأكثر طلباً"
              title="منتجات جاهزة مميزة"
              description="تشكيلة واسعة من الهدايا والتغليف الجاهز"
            />
            <Link
              to="/category/ready"
              className="text-neutral-900 font-bold hover:underline shrink-0 underline-offset-4"
            >
              عرض الكل ←
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {READY_PRODUCTS.slice(0, 4).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Custom products CTA — dark charcoal color block */}
      <section className="py-20 bg-neutral-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-neutral-800/20 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-white">
              <span className="inline-block px-3 py-1 bg-white/10 text-neutral-200 text-[11px] font-mono tracking-widest font-bold rounded-full uppercase">
                التميز لك وحدك
              </span>
              <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight">
                صمّم هويتك واطبعها بجودة استثنائية
              </h2>
              <p className="text-neutral-400 leading-relaxed font-light">
                كراتين، أكياس، ملصقات — ارفع تصميمك ونطبعه بأعلى المعايير. لا
                تملك تصميماً؟ فريقنا الإبداعي في خدمتك.
              </p>
              <ul className="space-y-3">
                {[
                  "رفع تصاميمك بسهولة",
                  "خيارات متعددة للخامات",
                  "أسعار منافسة للكميات",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <span className="w-5 h-5 rounded-full bg-white flex items-center justify-center text-neutral-900 text-xs font-black">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/category/custom"
                className="btn-primary inline-flex mt-4 bg-white text-neutral-900 hover:bg-neutral-100"
              >
                ابدأ التخصيص الآن
              </Link>
            </div>
            <div className="flex justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10">
                <svg
                  className="w-40 h-40 animate-float"
                  viewBox="0 0 100 100"
                  fill="none"
                >
                  <polygon
                    points="50,20 85,38 50,56 15,38"
                    fill="#ffffff"
                    opacity="0.9"
                  />
                  <polygon
                    points="15,38 50,56 50,88 15,70"
                    fill="#ebebeb"
                    opacity="0.5"
                  />
                  <polygon
                    points="50,56 85,38 85,70 50,88"
                    fill="#d4d4d4"
                    opacity="0.4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wrapping service */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            label="خدمة حصرية"
            title="تغليف الهدايا من الباب للباب"
            description="نستلم، نغلف، ونوصل — بكل احترافية"
            align="center"
          />
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {WRAPPING_STEPS.map((step) => (
              <div
                key={step.num}
                className={`card p-8 text-center space-y-4 ${step.highlight ? "border-neutral-900 border-2" : ""}`}
              >
                <span className="text-4xl font-black text-neutral-200">
                  {step.num}
                </span>
                <h3 className="text-lg font-black text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-500 font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/service/wrapping" className="btn-secondary px-10 py-4">
              اطلب المندوب الآن
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
