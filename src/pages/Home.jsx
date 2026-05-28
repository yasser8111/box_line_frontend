import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";


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
    <section className=" min-h-[calc(100vh-80px)] flex items-center py-4 lg:py-6 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col justify-between gap-6 lg:gap-10">
        
        {/* Top Content: Title & Stats */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-8">
          <div className="w-full md:max-w-3xl space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-light text-neutral-900 leading-tight md:leading-tight">
              هديتك تحمل شعورًا، <br />
              ونحن نمنحه{" "}
              <span className="font-black text-green-600 inline-block">جمـــالًا</span>
              
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

export function BestSellers() {
  const swiperRef = useRef(null);

  const BEST_PRODUCTS = [
    { 
      id: 1, 
      image: "/imges/product_1.png", 
      title: "صندوق السعادة الفاخر", 
      desc: "تنسيق متكامل يجمع بين الفخامة والأناقة ليناسب جميع مناسباتكم السعيدة." 
    },
    { 
      id: 2, 
      image: "/imges/product_2.png", 
      title: "مجموعة الاسترخاء العطرية", 
      desc: "تحتوي على روائح مهدئة ومختارة بعناية لتجربة استرخاء فريدة ومثالية." 
    },
    { 
      id: 3, 
      image: "/imges/product_3.png", 
      title: "تغليف كلاسيكي راقي", 
      desc: "لمسات يدوية دقيقة بخامات فخمة تضفي على هديتك رونقاً جذاباً وساحراً." 
    },
    { 
      id: 4, 
      image: "/imges/product_4.png", 
      title: "باقة ورد جوري طبيعي", 
      desc: "تنسيق كلاسيكي مذهل من أجود أنواع الورد الطبيعي لتعبر عن أصدق المشاعر." 
    },
    { 
      id: 5, 
      image: "/imges/product_5.png", 
      title: "صندوق الذكريات الخشبي", 
      desc: "محفور يدوياً بدقة عالية ليحفظ أدق تفاصيل ولحظات العمر الجميلة." 
    },
    { 
      id: 6, 
      image: "/imges/product_6.png", 
      title: "تنسيق ملكي خاص", 
      desc: "مجموعة حصرية مصممة خصيصاً للشخصيات المميزة لتترك انطباعاً لا ينسى." 
    },
  ];

  return (
    <section className="bg-white py-10 md:py-16 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Title & Navigation Controls */}
        <div className="flex items-center justify-between mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
            المنتجات الأكثر مبيعًـــا
          </h2>
          
          {/* Custom Navigation Buttons */}
          <div className="flex items-center gap-2" dir="ltr">
            <button 
              onClick={() => swiperRef.current?.swiper?.slidePrev()}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:bg-neutral-50 active:scale-95 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => swiperRef.current?.swiper?.slideNext()}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:bg-neutral-50 active:scale-95 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Responsive Swiper Carousel */}
        <div className="w-full overflow-hidden">
          <Swiper
            ref={swiperRef}
            modules={[Autoplay, Navigation]}
            spaceBetween={24}
            loop={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 24,
              },
            }}
            className="w-full !overflow-visible"
          >
            {BEST_PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col gap-4 group cursor-pointer">
                  {/* Image Wrapper */}
                  <div className="aspect-square rounded-[2rem] overflow-hidden bg-neutral-50 border border-neutral-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Product Details */}
                  <div className="space-y-1 px-1">
                    <h3 className="font-bold text-base md:text-lg text-neutral-900 line-clamp-1 group-hover:text-neutral-700 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-xs md:text-sm text-neutral-500 h-10 md:h-12 line-clamp-2 leading-relaxed">
                      {product.desc}
                    </p>
                  </div>
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

      <BestSellers />

      <Footer />
    </div>
  );
}
