import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const PRODUCTS = {
  ready: [
    { id: "ready-bag-1", name: "أكياس هدايا فاخرة (وردي)", price: 15, badge: "الأكثر مبيعاً" },
    { id: "ready-box-1", name: "صندوق مجوهرات مخملي", price: 35, badge: "جديد" },
    { id: "ready-wrapping-paper", name: "رول تغليف هدايا مورد", price: 25 },
    { id: "ready-card-1", name: "كروت تهنئة (مجموعة 5 قطع)", price: 20 },
    { id: "ready-bag-2", name: "كيس هدايا كرافت كلاسيك", price: 10 },
    { id: "ready-box-2", name: "صندوق هدايا بنافذة شفافة", price: 22 },
  ],
  custom: [
    { id: "custom-box", name: "كرتون بريدي مطبوع بشعارك", price: 4.5, badge: "يبدأ من" },
    { id: "custom-bag", name: "أكياس تسوق ورقية مطبوعة", price: 3.2, badge: "يبدأ من" },
    { id: "custom-sticker", name: "ملصقات دائرية مخصصة للعلب", price: 0.25, badge: "يبدأ من" },
    { id: "custom-party", name: "أوراق ثيمات ومناسبات مطبوعة", price: 1.2, badge: "يبدأ من" },
  ]
};

export default function Category() {
  const { type } = useParams();
  
  const isReady = type === "ready";
  const title = isReady ? "المنتجات الجاهزة للشراء" : "المنتجات القابلة للتخصيص";
  const description = isReady 
    ? "تشكيلة من الأكياس والعلب وكروت الإهداء الجاهزة للتوصيل الفوري لتغليف منتجاتك وهداياك بشكل جميل وبدون أي مجهود."
    : "ارفع تصميمك الخاص، أو دعنا نساعدك في تصميم كراتين وملصقات تعبر عن هويتك التجارية بأرقى جودة طباعة.";
    
  const products = PRODUCTS[type] || [];

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans" dir="rtl">
      <Header />

      {/* Header Section */}
      <div className="bg-white py-12 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-black text-neutral-900">{title}</h1>
          <p className="text-neutral-500 max-w-2xl mx-auto">{description}</p>
        </div>
      </div>

      {/* Products Grid */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {products.map((prod) => (
              <Link to={`/product/${prod.id}`} key={prod.id} className="bg-white rounded-2xl border border-neutral-100 p-3 sm:p-4 hover:shadow-xl transition-shadow duration-300 group block">
                <div className="bg-neutral-50 rounded-xl aspect-square mb-3 sm:mb-4 relative overflow-hidden flex items-center justify-center group-hover:scale-[1.02] transition-transform duration-300 text-neutral-300">
                  {prod.badge && (
                    <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-white/90 backdrop-blur-sm text-neutral-900 text-[9px] sm:text-[10px] font-bold px-2 py-1 sm:px-2.5 sm:py-1 rounded-full shadow-sm z-10">
                      {prod.badge}
                    </span>
                  )}
                  {/* Placeholder icon since we don't have images */}
                  <svg className="w-10 h-10 sm:w-16 sm:h-16 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-sm sm:text-base text-neutral-900 group-hover:text-brand-green transition-colors line-clamp-1">{prod.name}</h3>
                  <div className="flex justify-between items-center pt-1 sm:pt-2">
                    <span className="text-base sm:text-lg font-black text-brand-green">{prod.price} ريال</span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-brand-green group-hover:text-white transition-colors">
                      <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-neutral-500">
            لا توجد منتجات في هذا القسم حالياً.
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
