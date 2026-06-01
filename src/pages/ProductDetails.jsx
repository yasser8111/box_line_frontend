import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  ShoppingBag,
  Truck,
  RotateCcw,
  ShieldCheck,
  Package,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import EmptyState from "../components/ui/EmptyState";
import { getProductById } from "../data/products";

export function ProductBreadcrumb({ productName }) {
  return (
    <div className="border-b border-neutral-100 py-3 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-neutral-500 overflow-x-auto whitespace-nowrap scrollbar-none">
        <Link to="/" className="hover:text-neutral-900 transition-colors">
          الرئيسية
        </Link>
        <ChevronLeft className="w-3 h-3 text-neutral-300" />
        <Link
          to="/products"
          className="hover:text-neutral-900 transition-colors"
        >
          المنتجات الجاهزة
        </Link>
        <ChevronLeft className="w-3 h-3 text-neutral-300" />
        <span className="text-neutral-900 font-bold">{productName}</span>
      </div>
    </div>
  );
}

export function ProductImagesGallery({ images = [], title }) {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [activeIdx, setActiveIdx] = useState(0);

  if (!images.length) return null;

  return (
    <div className="space-y-4">
      <div className="w-full aspect-square bg-neutral-50 rounded-xl overflow-hidden flex items-center justify-center relative">
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={images.length > 1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          onSlideChange={(swiper) => setActiveIdx(swiper.realIndex)}
          className="w-full h-full"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="w-full h-full">
              <img
                src={img}
                alt={`${title} - ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2.5 overflow-x-auto pb-1 scrollbar-none">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => {
                setActiveIdx(index);
                swiperInstance?.slideToLoop(index);
              }}
              className={`w-16 h-16 rounded-lg overflow-hidden border shrink-0 bg-neutral-50 transition-all ${
                index === activeIdx
                  ? "border-neutral-900 ring-1 ring-neutral-900"
                  : "border-neutral-200"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export function ProductDetailsInfo({
  product,
  quantity,
  setQuantity,
  priceReport,
  onAddToCart,
}) {
  return (
    <div className="space-y-6 lg:py-20 px-4">
      <div>
        <h1 className="text-xl sm:text-2xl font-black text-neutral-900 tracking-tight">
          {product.title}
        </h1>
        {product.badge && (
          <span className="inline-block mt-2 text-[11px] font-bold bg-neutral-100 text-neutral-800 px-2.5 py-1 rounded-md">
            {product.badge}
          </span>
        )}
      </div>

      <div className="flex items-baseline gap-2 py-4">
        <span className="text-5xl sm:text-4xl font-black text-neutral-900">
          {product.price}{" "}
          <span className="text-xs sm:text-sm font-normal text-neutral-500">
            ر.ي
          </span>
        </span>
      </div>

      <div className="space-y-2">
        <h3 className="text-[11px] sm:text-xs font-bold uppercase text-neutral-400 tracking-wider">
          وصف المنتج
        </h3>
        <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed font-light whitespace-pre-line">
          {product.long_desc || product.desc}
        </p>
      </div>

      <div className="space-y-3 pt-2">
        <label className="block text-xs font-bold text-neutral-500 uppercase tracking-wider">
          الكمية المطلوبة
        </label>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => {
              const val = parseInt(e.target.value);
              if (val >= 1) setQuantity(val);
            }}
            className="w-16 text-center py-2 border border-neutral-200 rounded-xl font-bold focus:outline-none focus:border-neutral-900"
          />
          <button
            type="button"
            onClick={() => setQuantity(quantity + 1)}
            className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="p-4 bg-neutral-50 rounded-xl border border-neutral-100 space-y-2.5 text-neutral-900 text-sm">
        <div className="flex justify-between">
          <span className="text-neutral-500">المجموع الفرعي</span>
          <span className="font-medium">{priceReport.subtotal} ريال</span>
        </div>
        <div className="flex justify-between text-xs text-neutral-400">
          <span>الضريبة المضافة (15%)</span>
          <span>{priceReport.tax} ريال</span>
        </div>
        <div className="flex justify-between items-end border-t border-neutral-200/60 pt-2.5 mt-1">
          <span className="text-xs font-bold text-neutral-700">
            الإجمالي النهائي
          </span>
          <span className="text-xl font-black text-neutral-900">
            {priceReport.total} ريال
          </span>
        </div>
      </div>

      <Button
        type="button"
        onClick={onAddToCart}
        fullWidth
        size="lg"
        className="hidden lg:flex items-center justify-center gap-2"
      >
        <ShoppingBag className="w-5 h-5" />
        أضف إلى السلة
      </Button>

      <div className="grid grid-cols-2 gap-2.5 pt-2">
        {[
          {
            icon: <Truck className="w-4 h-4 text-neutral-500" />,
            text: "شحن سريع وآمن",
          },
          {
            icon: <Package className="w-4 h-4 text-neutral-500" />,
            text: "منتج جاهز بالمخزن",
          },
          {
            icon: <RotateCcw className="w-4 h-4 text-neutral-500" />,
            text: "إرجاع مرن وميسر",
          },
          {
            icon: <ShieldCheck className="w-4 h-4 text-neutral-500" />,
            text: "جودة وخامات فاخرة",
          },
        ].map((feat, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 p-3 bg-neutral-50 rounded-xl border border-neutral-100"
          >
            {feat.icon}
            <span className="text-xs font-medium text-neutral-600">
              {feat.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MobileStickyActionsBar({ priceReport, onAddToCart }) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white border-t border-neutral-100 px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div>
          <span className="text-[10px] text-neutral-400 block uppercase tracking-wider">
            الإجمالي
          </span>
          <span className="text-lg font-black text-neutral-900">
            {priceReport.total} ريال
          </span>
        </div>
        <Button
          type="button"
          onClick={onAddToCart}
          size="md"
          className="flex-1 max-w-[200px] flex items-center justify-center gap-1.5"
        >
          <ShoppingBag className="w-4 h-4" />
          أضف للسلة
        </Button>
      </div>
    </div>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const toast = useToast();

  const product = getProductById(id);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex flex-col font-sans" dir="rtl">
        <Header />

        <div className="grow flex items-center justify-center py-30">
          <EmptyState
            title="عذراً، المنتج غير متاح"
            description="يبدو أن الرابط الذي اتبعته غير صحيح، أو أن المنتج قد تم حذفه أو نفدت كميته حالياً."
            buttonText="العودة للمنتجات"
            onAction={() => (window.location.href = "/products")}
          />
        </div>

        <Footer />
      </div>
    );
  }

  const subtotal = parseFloat((product.price * quantity).toFixed(2));
  const tax = parseFloat((subtotal * 0.15).toFixed(2));
  const total = parseFloat((subtotal + tax).toFixed(2));
  const priceReport = { subtotal, tax, total };

  const handleAddToCart = () => {
    const defaultReadyOptions = {
      size: "قياسي",
      paperType: "جاهز",
      quantity,
    };

    addToCart(product, defaultReadyOptions);

    toast.success("تمت إضافة المنتج بنجاح", {
      message: `${product.title} متواجد الآن في سلة تسوقك.`,
      action: { label: "عرض السلة", to: "/cart" },
      duration: 5000,
    });
  };

  const galleryImages =
    product.images && product.images.length > 0
      ? product.images
      : [product.image];

  return (
    <div
      className="min-h-screen bg-white flex flex-col font-sans antialiased"
      dir="rtl"
    >
      <Header />
      <ProductBreadcrumb productName={product.title} />

      <main className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 w-full relative pb-24 lg:pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 lg:items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <ProductImagesGallery
              images={galleryImages}
              title={product.title}
            />
          </div>

          <div className="lg:col-span-7">
            <ProductDetailsInfo
              product={product}
              quantity={quantity}
              setQuantity={setQuantity}
              priceReport={priceReport}
              onAddToCart={handleAddToCart}
            />
          </div>
        </div>

        <MobileStickyActionsBar
          priceReport={priceReport}
          onAddToCart={handleAddToCart}
        />
      </main>

      <Footer />
    </div>
  );
}
