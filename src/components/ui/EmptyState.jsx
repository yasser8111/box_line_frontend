import React from "react";
import { PackageX } from "lucide-react";
import Button from "./Button";

export default function EmptyState({ 
  title = "عذراً، القسم فارغ حالياً", 
  description = "لا توجد منتجات متوفرة في هذا القسم حالياً. يمكنك العودة لتصفح بقية المنتجات المميزة.", 
  buttonText = "الزر الافتراضي", 
  onAction 
}) {
  return (
    <div className="text-center py-16 md:py-28 px-4 flex flex-col items-center justify-center gap-5 max-w-md mx-auto w-full animate-fade-in">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-green-50 flex items-center justify-center border border-green-100 text-green-600 shrink-0">
        <PackageX className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
      </div>

      <div className="space-y-1.5">
        <h3 className="text-base md:text-lg font-bold text-neutral-900">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-neutral-400 leading-relaxed text-balance">
          {description}
        </p>
      </div>

      {onAction && (
        <Button
          variant="primary"
          size="md"
          className="w-full sm:w-auto px-6 font-bold text-sm transition-transform active:scale-95 duration-200 mt-2 bg-green-600 hover:bg-green-700 text-white border-none"
          onClick={onAction}
        >
          {buttonText}
        </Button>
      )}
    </div>
  );
}