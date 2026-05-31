import React, { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/ui/PageBanner";
import ProductCard from "../components/ui/ProductCard";
import Button from "../components/ui/Button";
import { PackageX } from "lucide-react";
import { ALL_PRODUCTS } from "../data/products";

const TABS = [
  { id: "all", label: "الكل" },
  { id: "ready", label: "منتجات جاهزة" },
  { id: "custom", label: "منتجات مخصصة" },
  { id: "flowers", label: "ورد وباقات" },
  { id: "perfumes", label: "عطور وبخور" },
  { id: "occasions", label: "هدايا المناسبات" },
  { id: "boxes", label: "صناديق هدايا" },
  { id: "cards", label: "كروت معايدة" },
];

export default function Products() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? ALL_PRODUCTS
      : ALL_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      <PageBanner
        title="جميع المنتجات"
        subtitle="تصفح تشكيلتنا المتنوعة من منتجات الهدايا الجاهزة والتغليف المخصص"
        image="/imges/bunners/all-products-banner.jpeg"
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="mb-6 md:mb-10">
          <div className="flex flex-row flex-nowrap gap-2 overflow-x-auto pb-1 -mx-1 px-1 scrollbar-none snap-x">
            {TABS.map((tab) => (
              <Button
                key={tab.id}
                variant={activeTab === tab.id ? "primary" : "secondary"}
                size="md"
                className="shrink-0 snap-start"
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </Button>
            ))}
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 md:py-28 px-4 flex flex-col items-center justify-center gap-5 max-w-md mx-auto w-full animate-fade-in">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-green-50 flex items-center justify-center border border-green-100 text-green-600 shrink-0">
              <PackageX className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
            </div>

            <div className="space-y-1.5">
              <h3 className="text-base md:text-lg font-bold text-neutral-900">
                عذراً، القسم فارغ حالياً
              </h3>
              <p className="text-xs md:text-sm text-neutral-400 leading-relaxed text-balance">
                لا توجد منتجات متوفرة في هذا القسم حالياً. يمكنك العودة لتصفح
                بقية المنتجات المميزة.
              </p>
            </div>

            <Button
              variant="primary"
              size="md"
              className="w-full sm:w-auto px-6 font-bold text-sm transition-transform active:scale-95 duration-200 mt-2 bg-green-600 hover:bg-green-700 text-white border-none"
              onClick={() => setActiveTab("all")}
            >
              عرض جميع المنتجات
            </Button>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
