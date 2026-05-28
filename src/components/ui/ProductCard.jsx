import React from "react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="hover-card group block card overflow-hidden">
      <div className="aspect-square bg-neutral-100 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        {product.badge && (
          <span className="absolute top-3 right-3 bg-neutral-900 text-white text-[10px] font-bold px-3 py-1 rounded-full z-10">
            {product.badge}
          </span>
        )}
        <svg className="w-16 h-16 text-neutral-300 group-hover:text-neutral-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      </div>
      <div className="p-4 space-y-2">
        <h3 className="font-bold text-neutral-900 group-hover:text-neutral-700 transition-colors line-clamp-2 text-sm md:text-base">
          {product.name}
        </h3>
        <div className="flex justify-between items-center pt-1">
          <span className="text-lg font-black text-neutral-900">
            {product.price} <span className="text-xs font-medium text-neutral-400">ريال</span>
          </span>
          <span className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 group-hover:bg-neutral-900 group-hover:text-white transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
}

