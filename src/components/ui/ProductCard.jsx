import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export function ProductSkeleton() {
  return (
    <div className="flex flex-col h-full animate-pulse select-none">
      <div className="aspect-4/5 sm:aspect-square bg-neutral-200 rounded-2xl sm:rounded-3xl" />
      <div className="pt-3 sm:pt-4 flex flex-col gap-2 flex-1 justify-between px-1">
        <div className="space-y-2">
          <div className="h-4 bg-neutral-200 rounded-md w-5/6" />
          <div className="h-3 bg-neutral-200 rounded-md w-full" />
          <div className="h-3 bg-neutral-200 rounded-md w-2/3" />
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="h-5 bg-neutral-200 rounded-md w-16" />
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-200 shrink-0" />
        </div>
      </div>
    </div>
  );
}

function MainProductCard({ product, linkPrefix = "product" }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Link
      to={`/${linkPrefix}/${product?.id || ""}`}
      className="flex flex-col group cursor-pointer transition-all duration-300 h-full"
    >
      <div className="relative aspect-4/5 sm:aspect-square overflow-hidden bg-neutral-100 rounded-2xl sm:rounded-3xl">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-neutral-200 animate-pulse z-10" />
        )}

        <img
          src={product?.image}
          alt={product?.name || product?.title || ""}
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-105 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="pt-3 sm:pt-4 flex flex-col gap-2 flex-1 justify-between px-1">
        <div className="space-y-1">
          <h3 className="font-bold text-sm sm:text-base text-neutral-900 line-clamp-2 group-hover:text-green-600 transition-colors">
            {product?.name || product?.title}
          </h3>
          {product?.desc && (
            <p className="text-[10px] sm:text-xs text-neutral-500 line-clamp-2">
              {product.desc.slice(0, 100)}
            </p>
          )}
        </div>

        <div className="flex items-center justify-between mt-auto pt-2">
          <div className="flex flex-col justify-center">
            <span className="text-sm sm:text-base font-black text-green-600">
              {product?.price ?? "0"}{" "}
              <span className="text-[10px] sm:text-xs font-bold">ر.س</span>
            </span>
          </div>
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-neutral-50 group-hover:bg-green-600 text-neutral-500 group-hover:text-white flex items-center justify-center transition-colors shrink-0">
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={2} />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function ProductCard({
  product,
  linkPrefix = "product",
  isLoading = false,
}) {
  if (isLoading || !product) {
    return <ProductSkeleton />;
  }

  return <MainProductCard product={product} linkPrefix={linkPrefix} />;
}
