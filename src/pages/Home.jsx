import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LayoutGrid } from "lucide-react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";

export function Hero() {
  const HERO_PRODUCTS = [
    {
      id: 1,
      image: "/imges/product_5.png",
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
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-900 leading-tight md:leading-tight">
              هديتك تحمل شعورًا، <br />
              ونحن نمنحه{" "}
              <span className="font-black text-green-600 inline-block">جمـــــالًا</span>
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
              onClick={() => swiperInstance?.slidePrev()}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:bg-neutral-50 active:scale-95 transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={() => swiperInstance?.slideNext()}
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
            onSwiper={setSwiperInstance}
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
            className="w-full overflow-visible!"
          >
            {BEST_PRODUCTS.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="flex flex-col gap-4 group cursor-pointer">
                  {/* Image Wrapper */}
                  <div className="aspect-square rounded-4xl overflow-hidden bg-neutral-50 border border-neutral-100">
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
  ];

  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-50 rounded-4xl lg:rounded-4xl p-6 md:p-10">
          
          <div className="mb-8 max-w-xl">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">
              لماذا تختارنا؟
            </h2>
            <p className="text-sm md:text-base text-neutral-500 leading-relaxed">
              نفخر بتقديم منتجات وتنسيقات هدايا تفوق توقعاتكم، حيث تخضع كل قطعة لمعايير جودة صارمة لضمان إدخال البهجة والسرور على قلوب أحبابكم.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
            <div className="relative aspect-square lg:aspect-auto min-h-[300px] lg:min-h-[400px] rounded-3xl lg:rounded-4xl overflow-hidden">
              <img
                src="/logo.png"
                alt="لماذا تختارنا"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4">
              {ACCORDION_DATA.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-neutral-200 pb-4 last:border-0 last:pb-0">
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
                        isOpen ? "grid-rows-[1fr] opacity-100 pt-2" : "grid-rows-[0fr] opacity-0"
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
  const PRODUCTS = [
    {
      id: "ready-1",
      title: "صندوق السعادة الفاخر",
      desc: "تنسيق متكامل يجمع بين الفخامة والأناقة ليناسب جميع مناسباتكم السعيدة والخاصة.",
      price: "150 ر.س",
      image: "/imges/product_1.png",
      to: "/product/ready-1"
    },
    {
      id: "custom-1",
      title: "صندوق الذكريات الخشبي",
      desc: "محفور يدوياً بدقة عالية ليحفظ أدق تفاصيل ولحظات العمر الجميلة والمميزة.",
      price: "180 ر.س",
      image: "/imges/product_2.png",
      to: "/product/custom-1"
    },
    {
      id: "royal-box",
      title: "تنسيق ملكي خاص",
      desc: "مجموعة حصرية مصممة خصيصاً للشخصيات المميزة لتترك انطباعاً ساحراً لا ينسى.",
      price: "290 ر.س",
      image: "/imges/product_3.png",
      to: "/product/royal-box"
    },
    {
      id: "flowers-package",
      title: "باقة ورد جوري طبيعي",
      desc: "تنسيق كلاسيكي مذهل من أجود أنواع الورد الطبيعي لتعبر عن أصدق وأرقى المشاعر.",
      price: "95 ر.س",
      image: "/imges/product_4.png",
      to: "/product/flowers-package"
    },
    {
      id: "perfume-set-1",
      title: "مجموعة الاسترخاء العطرية",
      desc: "تحتوي على روائح مهدئة ومختارة بعناية فائقة لتجربة استرخاء فريدة ومثالية.",
      price: "210 ر.س",
      image: "/imges/product_5.png",
      to: "/product/perfume-set"
    },
    {
      id: "perfume-set-2",
      title: "مجموعة الاسترخاء العطرية",
      desc: "تحتوي على روائح مهدئة ومختارة بعناية فائقة لتجربة استرخاء فريدة ومثالية.",
      price: "210 ر.س",
      image: "/imges/product_5.png",
      to: "/product/perfume-set"
    },
    {
      id: "perfume-set-3",
      title: "مجموعة الاسترخاء العطرية",
      desc: "تحتوي على روائح مهدئة ومختارة بعناية فائقة لتجربة استرخاء فريدة ومثالية.",
      price: "210 ر.س",
      image: "/imges/product_5.png",
      to: "/product/perfume-set"
    },
    {
      id: "perfume-set-4",
      title: "مجموعة الاسترخاء العطرية",
      desc: "تحتوي على روائح مهدئة ومختارة بعناية فائقة لتجربة استرخاء فريدة ومثالية.",
      price: "210 ر.س",
      image: "/imges/product_5.png",
      to: "/product/perfume-set"
    },
    {
      id: "perfume-set-5",
      title: "مجموعة الاسترخاء العطرية",
      desc: "تحتوي على روائح مهدئة ومختارة بعناية فائقة لتجربة استرخاء فريدة ومثالية.",
      price: "210 ر.س",
      image: "/imges/product_5.png",
      to: "/product/perfume-set"
    },
    {
      id: "perfume-set-6",
      title: "مجموعة الاسترخاء العطرية",
      desc: "تحتوي على روائح مهدئة ومختارة بعناية فائقة لتجربة استرخاء فريدة ومثالية.",
      price: "210 ر.س",
      image: "/imges/product_5.png",
      to: "/product/perfume-set"
    }
  ];

  // حساب عدد المنتجات المطلوبة فورياً لتجنب مشاكل الأداء
  const [limit, setLimit] = useState(window.innerWidth < 640 ? 8 : 10);

  useEffect(() => {
    const handleResize = () => {
      setLimit(window.innerWidth < 640 ? 8 : 10);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-10 md:mb-14">
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
              تصفح منتجاتنا
            </h2>
            <p className="text-sm md:text-base text-neutral-500 max-w-xl font-light leading-relaxed">
              اكتشف عالمًا من الأناقة والخيارات المتنوعة، واطلع على أحدث تشكيلاتنا من الهدايا الجاهزة والمصممة بعناية فائقة.
            </p>
          </div>
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
          {PRODUCTS.slice(0, limit).map((product) => (
            <Link 
              key={product.id} 
              to={product.to}
              className="flex flex-col gap-3 group cursor-pointer"
            >
              {/* Card Image - Fixed Square */}
              <div className="aspect-square rounded-2xl sm:rounded-[2rem] overflow-hidden bg-neutral-50 border border-neutral-100 relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              
              {/* Card Details */}
              <div className="space-y-1.5 px-1">
                {/* Title & Price Row Container */}
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-bold text-sm sm:text-base md:text-lg text-neutral-900 transition-colors group-hover:text-neutral-700 line-clamp-1 flex-1">
                    {product.title}
                  </h3>
                  <span className="text-[10px] sm:text-xs font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full shrink-0 whitespace-nowrap">
                    {product.price}
                  </span>
                </div>
                
                {/* Description: Exactly 2 lines layout */}
                <p className="text-[11px] sm:text-xs md:text-sm text-neutral-500 leading-relaxed font-light h-8 sm:h-9 md:h-10 line-clamp-2">
                  {product.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Footer Link - Displayed centered below the grid */}
        <div className="mt-12 md:mt-16 flex justify-center">
          <Link 
            to="/products" 
            className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 hover:text-neutral-700 transition-colors hover:border-b border-neutral-900 pb-1"
          >
            <span>عرض جميع المنتجات</span>
            <LayoutGrid className="w-4 h-4" />
          </Link>
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

      <About />

      <Footer />
    </div>
  );
}