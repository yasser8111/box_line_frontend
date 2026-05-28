import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart, getCartTotal } = useCart();
  const navigate = useNavigate();

  const subtotal = getCartTotal();
  const tax = parseFloat((subtotal * 0.15).toFixed(2));
  const shipping = subtotal >= 499 ? 0 : 35;
  const grandTotal = parseFloat((subtotal + tax + shipping).toFixed(2));

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans" dir="rtl">
      <Header />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-neutral-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-neutral-500">
          <Link to="/" className="hover:text-neutral-900 transition-colors">الرئيسية</Link>
          <span>/</span>
          <span className="text-neutral-900 font-bold">سلة المشتريات ({cart.length} منتج)</span>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="flex flex-col items-center justify-center py-24 space-y-6 text-center animate-fade-in-up">
            <div className="w-28 h-28 bg-neutral-100 rounded-full flex items-center justify-center">
              <svg className="w-14 h-14 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-neutral-900">سلة المشتريات فارغة</h2>
            <p className="text-sm text-neutral-500 max-w-sm">
              لم تقم بإضافة أي منتجات طباعة مخصصة بعد. تصفح خدماتنا واختر ما يناسب مشروعك.
            </p>
            <Link
              to="/"
              className="px-8 py-3 bg-neutral-900 text-white font-bold rounded-full hover:bg-neutral-800 transition-all shadow-md"
            >
              تصفح خدمات الطباعة
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

            {/* Cart Items List (8 cols) */}
            <div className="lg:col-span-8 space-y-5">
              <div className="flex justify-between items-center">
                <h1 className="text-2xl font-black text-neutral-900">سلة طلبات الطباعة</h1>
                <button
                  onClick={clearCart}
                  className="text-xs text-red-500 hover:text-red-700 font-bold flex items-center gap-1 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                  <span>تفريغ السلة</span>
                </button>
              </div>

              {cart.map((item, idx) => (
                <div
                  key={item.cartItemId}
                  className="bg-white rounded-2xl border border-neutral-100 p-5 shadow-sm animate-fade-in-up"
                  style={{ animationDelay: `${idx * 0.08}s` }}
                >
                  <div className="flex flex-col sm:flex-row gap-5">
                    {/* Product Visual */}
                    <div className="w-full sm:w-32 h-32 bg-neutral-950 rounded-xl flex items-center justify-center shrink-0 overflow-hidden">
                      <svg className="w-full h-full p-4" viewBox="0 0 100 100" fill="none">
                        <polygon points="50,22 80,35 50,48 20,35" fill="#555" opacity="0.8" />
                        <polygon points="50,48 80,35 80,68 50,81" fill="#fff" opacity="0.8" />
                        <polygon points="20,35 50,48 50,81 20,68" fill="#fff" opacity="0.65" />
                      </svg>
                    </div>

                    {/* Product Info */}
                    <div className="flex-grow space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-base font-bold text-neutral-900">
                            {item.product.name}
                          </h3>
                          <span className="text-[10px] text-neutral-400 bg-neutral-100 px-2 py-0.5 rounded-full">
                            {item.product.category === "packaging" ? "كراتين وتغليف" :
                             item.product.category === "stickers" ? "ملصقات وستيكرات" :
                             item.product.category === "events" ? "مطبوعات مناسبات" :
                             item.product.category === "bags" ? "أكياس ورقية" : "مطبوعات تجارية"}
                          </span>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="p-1.5 rounded-full text-neutral-400 hover:text-red-500 hover:bg-red-50 transition-all"
                          title="حذف المنتج"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>

                      {/* Specifications grid */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-[11px] text-neutral-500 bg-neutral-50 p-3 rounded-xl border border-neutral-100">
                        {item.options.size && (
                          <div>
                            <span className="block text-neutral-400 text-[9px] font-bold">المقاس:</span>
                            <span className="font-semibold text-neutral-700">{item.options.size}</span>
                          </div>
                        )}
                        {item.options.paperType && (
                          <div>
                            <span className="block text-neutral-400 text-[9px] font-bold">نوع الورق:</span>
                            <span className="font-semibold text-neutral-700 line-clamp-1">{item.options.paperType}</span>
                          </div>
                        )}
                        {item.options.thickness && (
                          <div>
                            <span className="block text-neutral-400 text-[9px] font-bold">السماكة:</span>
                            <span className="font-semibold text-neutral-700">{item.options.thickness}</span>
                          </div>
                        )}
                        {item.options.finish && (
                          <div>
                            <span className="block text-neutral-400 text-[9px] font-bold">التشطيب:</span>
                            <span className="font-semibold text-neutral-700 line-clamp-1">{item.options.finish}</span>
                          </div>
                        )}
                        {item.options.printSides && (
                          <div>
                            <span className="block text-neutral-400 text-[9px] font-bold">جهات الطباعة:</span>
                            <span className="font-semibold text-neutral-700 line-clamp-1">{item.options.printSides}</span>
                          </div>
                        )}
                        {item.options.uploadedFile && (
                          <div>
                            <span className="block text-neutral-400 text-[9px] font-bold">ملف التصميم:</span>
                             <span className="font-semibold text-neutral-800 line-clamp-1">📎 {item.options.uploadedFile}</span>
                          </div>
                        )}
                        {item.options.designService === "needed" && (
                          <div className="col-span-2">
                            <span className="block text-neutral-400 text-[9px] font-bold">خدمة التصميم:</span>
                            <span className="font-semibold text-amber-600">مطلوب تصميم من فريقنا (+100 ريال)</span>
                          </div>
                        )}
                      </div>

                      {/* Price & Quantity Row */}
                      <div className="flex items-center justify-between pt-2 border-t border-neutral-50">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-neutral-400">الكمية:</span>
                          <div className="flex items-center bg-neutral-100 rounded-full overflow-hidden border border-neutral-200">
                            <button
                              onClick={() => updateQuantity(item.cartItemId, item.quantity - (item.quantity >= 500 ? 50 : item.quantity >= 100 ? 25 : 10))}
                              disabled={item.quantity <= 50}
                              className="px-2.5 py-1 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 transition-colors disabled:opacity-30 disabled:cursor-not-allowed text-sm font-bold"
                            >
                              −
                            </button>
                            <span className="px-3 py-1 text-xs font-bold text-neutral-900 min-w-[50px] text-center border-x border-neutral-200 bg-white">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.cartItemId, item.quantity + (item.quantity >= 500 ? 50 : item.quantity >= 100 ? 25 : 10))}
                              className="px-2.5 py-1 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-200 transition-colors text-sm font-bold"
                            >
                              +
                            </button>
                          </div>
                          <span className="text-[10px] text-neutral-400">قطعة</span>
                        </div>

                        <div className="text-left">
                          <span className="block text-[10px] text-neutral-400">سعر القطعة: {item.options.unitPrice} ريال</span>
                           <span className="text-lg font-black text-neutral-900">{item.price.toFixed(2)} ريال</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Sidebar (4 cols) */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
              <div className="bg-white rounded-2xl border border-neutral-100 shadow-sm p-6 space-y-5">
                <h2 className="text-lg font-black text-neutral-900 border-b border-neutral-50 pb-3">ملخص الطلب</h2>
                
                <div className="space-y-3 text-sm text-neutral-600">
                  <div className="flex justify-between">
                    <span>المجموع الفرعي ({cart.length} منتج):</span>
                    <span className="font-bold text-neutral-900">{subtotal.toFixed(2)} ريال</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span>رسوم الشحن والتوصيل:</span>
                    <span className={`font-bold ${shipping === 0 ? "text-neutral-900" : "text-neutral-900"}`}>
                      {shipping === 0 ? "مجاناً 🎉" : `${shipping.toFixed(2)} ريال`}
                    </span>
                  </div>

                  {shipping > 0 && (
                    <div className="text-[10px] text-amber-600 bg-amber-50 p-2 rounded-lg text-center">
                      أضف منتجات بقيمة {(499 - subtotal).toFixed(2)} ريال إضافية للحصول على شحن مجاني!
                    </div>
                  )}
                  
                  <div className="flex justify-between">
                    <span>ضريبة القيمة المضافة (15%):</span>
                    <span className="font-bold text-neutral-900">{tax.toFixed(2)} ريال</span>
                  </div>

                  <div className="flex justify-between items-end border-t border-neutral-100 pt-4">
                    <span className="text-base font-bold text-neutral-900">الإجمالي النهائي:</span>
                     <span className="text-2xl font-black text-neutral-900">{grandTotal.toFixed(2)} ريال</span>
                  </div>
                </div>

                 <button
                  onClick={() => navigate("/checkout")}
                  className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-full shadow-md transition-all text-sm flex items-center justify-center gap-2"
                >
                  <span>إتمام الطلب والدفع</span>
                  <svg className="w-4 h-4 transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
 
                <Link
                  to="/"
                  className="w-full py-3 border border-neutral-200 bg-white hover:bg-neutral-50 text-neutral-700 font-semibold rounded-full text-sm text-center block transition-all"
                >
                  العودة للتسوق
                </Link>
              </div>

              <div className="bg-white rounded-2xl border border-neutral-100 p-5 space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 text-sm">🔒</div>
                  <div>
                    <span className="block text-xs font-bold text-neutral-900">دفع آمن 100%</span>
                    <span className="block text-[10px] text-neutral-400">نستخدم أحدث تقنيات التشفير لحماية بياناتك</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 text-sm">📦</div>
                  <div>
                    <span className="block text-xs font-bold text-neutral-900">شحن مؤمّن وسريع</span>
                    <span className="block text-[10px] text-neutral-400">تغليف مضاعف وشحن خلال 3-5 أيام عمل</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-900 text-sm">✅</div>
                  <div>
                    <span className="block text-xs font-bold text-neutral-900">مراجعة فنية مجانية</span>
                    <span className="block text-[10px] text-neutral-400">مهندسو الطباعة يفحصون ملفاتك قبل الإنتاج</span>
                  </div>
                </div>
              </div>

          </div>
        </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
