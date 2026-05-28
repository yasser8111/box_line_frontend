import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";
import ProductCard from "../components/ui/ProductCard";
import { ALL_PRODUCTS } from "../data/products";

export default function Products() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered = activeTab === "all" ? ALL_PRODUCTS : ALL_PRODUCTS.filter((p) => p.category === activeTab);

  const tabs = [
    { id: "all", label: "الكل" },
    { id: "ready", label: "منتجات جاهزة" },
    { id: "custom", label: "منتجات مخصصة" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      <PageHero
        title="جميع المنتجات"
        subtitle="تصفح تشكيلتنا المتنوعة من منتجات الهدايا الجاهزة والتغليف المخصص"
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        <div className="flex justify-center gap-2 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-neutral-900 text-white shadow-md"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200 hover:text-neutral-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
