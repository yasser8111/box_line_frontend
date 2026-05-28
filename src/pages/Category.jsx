import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";
import ProductCard from "../components/ui/ProductCard";
import { READY_PRODUCTS, CUSTOM_PRODUCTS } from "../data/products";

export default function Category() {
  const { type } = useParams();
  const isReady = type === "ready";

  const title = isReady ? "المنتجات الجاهزة" : "المنتجات المخصصة";
  const description = isReady
    ? "أكياس وعلب وكروت هدايا جاهزة للتوصيل الفوري"
    : "صمّم تغليفك واطبعه بجودة استثنائية";

  const products = isReady ? READY_PRODUCTS : CUSTOM_PRODUCTS;

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      <PageHero title={title} subtitle={description} />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {products.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
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
