import React, { useState } from "react";
import { Link } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import ProductCard from "../components/ui/ProductCard.jsx";

import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import * as pd from "../data/products.js";

export function Hero() {
  const HERO_PRODUCTS = pd.getHeroProducts();

  return (
    <section className="mt-20 lg:min-h-[calc(100vh-80px)] flex items-center py-4 lg:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between gap-6 lg:gap-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
          <div className="w-full md:max-w-3xl space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-900 leading-tight md:leading-tight">
              هديتك تحمل شعورًا، <br />
              ونحن نمنحه{" "}
              <span className="font-black text-green-600 inline-block">
                جمـــــالًا
              </span>
            </h1>

            <div className="block md:hidden pt-1">
              <Button to="/contact" size="md">
                تواصل معنا
              </Button>
            </div>
          </div>

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

        <div className="hidden md:grid grid-cols-3 gap-6">
          {HERO_PRODUCTS.map((product) => (
            <div
              key={product.id}
              className="aspect-square rounded-3xl lg:rounded-[2.5rem] overflow-hidden group bg-neutral-50 border border-neutral-100"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

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
                <div className="aspect-square rounded-3xl overflow-hidden bg-neutral-50 border border-neutral-100">
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

export function BestSellers() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const BEST_PRODUCTS = pd.getBestSellers();

  return (
    <section className="bg-white py-10 md:py-16 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            المنتجات الأكثر مبيعًـــا
          </h2>

          <div className="flex items-center gap-2" dir="ltr">
            <button
              onClick={() => swiperInstance?.slidePrev()}
              className="w-10 h-10 md:w-11 md:h-11 rounded-xl sm:rounded-2xl border border-neutral-100 bg-neutral-50 flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 active:scale-95 transition-all duration-300 shadow-sm"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
            </button>
            <button
              onClick={() => swiperInstance?.slideNext()}
              className="w-10 h-10 md:w-11 md:h-11 rounded-xl sm:rounded-2xl border border-neutral-100 bg-neutral-50 flex items-center justify-center text-neutral-800 hover:bg-neutral-900 hover:text-white hover:border-neutral-900 active:scale-95 transition-all duration-300 shadow-sm"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" strokeWidth={2} />
            </button>
          </div>
        </div>

        <div className="w-full overflow-hidden">
          <Swiper
            onSwiper={setSwiperInstance}
            modules={[Autoplay]}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 16 },
              640: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
              1280: { slidesPerView: 5, spaceBetween: 24 },
            }}
            className="w-full overflow-visible!"
          >
            {BEST_PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} linkPrefix="product" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export function About() {
  const [openIndex, setOpenIndex] = useState(2);

  const ACCORDION_DATA = [
    {
      title: "جودة لا تضاهى",
      desc: "نختار خامات التغليف والمنتجات بعناية فائقة لضمان تقديم هدية تليق بمشاعركم وتدوم ذكراها طويلاً.",
    },
    {
      title: "استدامة وجمال",
      desc: "نهتم بالبيئة بقدر اهتمامنا بالجمال، ونوفر خيارات تغليف صديقة للبيئة ومصنعة من مواد مستدامة عالية الفخامة.",
    },
    {
      title: "تنوع فريد ومميز",
      desc: "نؤمن بأن لكل هدية قصة، لذلك نقدم تشكيلة واسعة من الصناديق، الباقات، والتنسيقات التي تناسب جميع الأذواق والمناسبات.",
    },
    {
      title: "إرث من التميز",
      desc: "خبرتنا الطويلة في عالم الهدايا تجعلنا الخيار الأول لمن يبحث عن الاحترافية، الدقة، واللمسة اليدوية الساحرة.",
    },
    {
      title: "كم يستغرق توصيل الطلب؟",
      desc: "تتراوح مدة التوصيل للمنتجات الجاهزة بين 24 إلى 48 ساعة، بينما تستغرق المنتجات والخدمات المخصصة من 3 إلى 5 أيام عمل حسب حجم الطلب والتصميم.",
    },
    {
      title: "هل يمكنني تعديل التصميم أو الشعار؟",
      desc: "نعم بكل تأكيد، تتيح لك خدماتنا المخصصة رفع شعارك الخاص واختيار الألوان والأبعاد التي تناسب هويتك التجارية أو مناسبتك الفريدة.",
    },
  ];

  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-4xl p-6 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="flex flex-col gap-6">
              <div className="relative aspect-square lg:aspect-auto min-h-[300px] lg:min-h-[400px] rounded-3xl overflow-hidden">
                <img
                  src="/the_shop.jpeg"
                  alt="لماذا تختارنا"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="max-w-xl">
                <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
                  لماذا تختارنا؟
                </h2>
                <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
                  نفخر بتقديم منتجات وتنسيقات هدايا تفوق توقعاتكم، حيث تخضع كل
                  قطعة لمعايير جودة صارمة لضمان إدخال البهجة والسرور على قلوب
                  أحبابكم.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center space-y-4 lg:pt-4">
              {ACCORDION_DATA.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div
                    key={index}
                    className="border-b border-neutral-200 pb-4 last:border-0 last:pb-0"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between py-2 text-right group"
                    >
                      <span className="font-bold text-base md:text-lg text-neutral-900 group-hover:text-neutral-700 transition-colors">
                        {item.title}
                      </span>
                      <span className="text-xl font-light text-neutral-900 mr-4 shrink-0">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100 pt-2"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="text-xs md:text-sm text-neutral-500 leading-relaxed max-w-xl">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OurProducts() {
  const PRODUCTS = pd.getAllProducts();

  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            تصفح منتجاتنا
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {PRODUCTS.slice(0, 10).map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              linkPrefix="product"
            />
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex justify-start">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors group"
          >
            <span className="border-b-2 border-transparent group-hover:border-neutral-600 pb-0.5 transition-colors">
              عرض جميع المنتجات
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function OurServices() {
  const SERVICES = pd.getCustomProducts();

  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            تصفح خدماتنا
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {SERVICES.slice(0, 8).map((service) => (
            <ProductCard
              key={service.id}
              product={service}
              linkPrefix="service"
            />
          ))}
        </div>

        <div className="mt-10 md:mt-14 flex justify-start">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-neutral-900 hover:text-neutral-600 transition-colors group"
          >
            <span className="border-b-2 border-transparent group-hover:border-neutral-600 pb-0.5 transition-colors">
              عرض جميع الخدمات
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function MarketingBanner() {
  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0a0a0a] text-white rounded-4xl p-8 md:p-16 relative overflow-hidden">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 md:space-y-8 relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight tracking-tight text-white">
              اصنع هديتك{" "}
              <span className="font-black text-[#ffffff]">ببصمتـك الخاصـة</span>
            </h2>

            <p className="text-sm md:text-base text-[#6b7280] max-w-xl font-light leading-relaxed">
              نحول أفكارك وشعارك إلى تفاصيل استثنائية محفورة على صناديق التغليف
              والأكياس الفاخرة، لتترك انطباعًا مذهلاً يليق بمناسبتك أو هويتك
              التجارية.
            </p>

            <div className="pt-2">
              <Button variant="white" size="lg">
                ابدأ بتخصيص طلبك الآن
              </Button>
            </div>
          </div>
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
      <BestSellers />
      <OurProducts />
      <OurServices />
      <About />
      <MarketingBanner />
      <Footer />
    </div>
  );
}
