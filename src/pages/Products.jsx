import React, { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/ui/PageBanner";
import ProductCard from "../components/ui/ProductCard";
import Button from "../components/ui/Button";
import EmptyState from "../components/ui/EmptyState";
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
          <EmptyState
            title="عذراً، القسم فارغ حالياً"
            description="لا توجد منتجات متوفرة في هذا القسم حالياً. يمكنك العودة لتصفح بقية المنتجات المميزة."
            buttonText="عرض جميع المنتجات"
            onAction={() => setActiveTab("all")}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}
