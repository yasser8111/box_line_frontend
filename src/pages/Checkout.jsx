import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useCart } from "../context/CartContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import { useToast } from "../context/ToastContext";

export default function Checkout() {
  const { cart, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();
  const toast = useToast();

  const subtotal = getCartTotal();
  const tax = parseFloat((subtotal * 0.15).toFixed(2));
  const shipping = subtotal >= 499 ? 0 : 35;
  const grandTotal = parseFloat((subtotal + tax + shipping).toFixed(2));

  // Customer form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("الرياض");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("mada");
  const [notes, setNotes] = useState("");

  // Success modal state
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  const generateOrderNumber = () => {
    return "BL-" + Date.now().toString().slice(-6) + Math.floor(Math.random() * 100);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Quick validation
    if (!name.trim() || !phone.trim() || !city.trim() || !address.trim()) {
      toast.error("يرجى تعبئة جميع الحقول المطلوبة", {
        message: "الاسم، الجوال، المدينة، والعنوان التفصيلي إلزامية.",
      });
      return;
    }

    const newOrderNumber = generateOrderNumber();
    setOrderNumber(newOrderNumber);
    setShowSuccess(true);
    clearCart();
    toast.success("تم إرسال طلبك بنجاح", {
      message: `رقم الطلب: ${newOrderNumber}`,
      duration: 8000,
    });
  };

  // Redirect if cart is empty and not showing success
  if (cart.length === 0 && !showSuccess) {
    return (
      <div className="min-h-screen bg-white flex flex-col" dir="rtl">
        <Header />
        <main className="flex-grow flex flex-col items-center justify-center py-20 px-4 text-center space-y-6 animate-fade-in-up mt-20">
          <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-neutral-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </div>
          <h2 className="text-2xl font-black text-neutral-900">لا يمكن إتمام الطلب</h2>
          <p className="text-sm text-neutral-500">السلة فارغة. أضف منتجات طباعة مخصصة أولاً.</p>
          <Button to="/products" size="lg">
            تصفح المنتجات
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />

      {/* Breadcrumb */}
      <div className="mt-20 bg-white border-b border-neutral-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-neutral-500 overflow-x-auto whitespace-nowrap">
          <Link to="/" className="hover:text-neutral-900 transition-colors">الرئيسية</Link>
          <span>/</span>
          <Link to="/cart" className="hover:text-neutral-900 transition-colors">السلة</Link>
          <span>/</span>
          <span className="text-neutral-900 font-bold">إتمام الطلب والدفع</span>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 w-full pb-28 lg:pb-10">
        
        {/* Success Modal Overlay */}
        {showSuccess && (
          <div className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-0 sm:p-4 animate-fade-in-up">
            <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-md w-full p-5 sm:p-8 shadow-2xl text-center space-y-5 sm:space-y-6 animate-scale-in max-h-[92vh] overflow-y-auto">
              {/* Success Icon */}
              <div className="w-20 h-20 mx-auto bg-neutral-900 rounded-full flex items-center justify-center shadow-md">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl font-black text-neutral-900">تم إرسال طلبك بنجاح! 🎉</h2>
                <p className="text-sm text-neutral-500">
                  شكراً لك على ثقتك بـ BOX LINE. سيقوم فريقنا بمراجعة ملفاتك وتفاصيل الطباعة والتواصل معك خلال ساعات.
                </p>
              </div>

              {/* Order Number */}
              <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100 space-y-3">
                <span className="block text-xs text-neutral-450">رقم طلبك</span>
                <span className="block text-3xl font-black text-neutral-900 tracking-wider">{orderNumber}</span>
                <span className="block text-[10px] text-neutral-450">احتفظ بهذا الرقم لمتابعة طلبك</span>
              </div>

              {/* QR Code Emulation */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-28 h-28 bg-neutral-900 rounded-xl flex items-center justify-center p-2">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <rect width="100" height="100" fill="#111" />
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(row =>
                      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(col => (
                        <rect
                          key={`${row}-${col}`}
                          x={col * 10 + 1}
                          y={row * 10 + 1}
                          width="8"
                          height="8"
                          fill={(row + col) % 3 === 0 || (row * col) % 5 === 0 ? "#888" : "#222"}
                          rx="1"
                        />
                      ))
                    )}
                    <rect x="2" y="2" width="25" height="25" fill="none" stroke="#fff" strokeWidth="3" rx="3" />
                    <rect x="73" y="2" width="25" height="25" fill="none" stroke="#fff" strokeWidth="3" rx="3" />
                    <rect x="2" y="73" width="25" height="25" fill="none" stroke="#fff" strokeWidth="3" rx="3" />
                    <rect x="8" y="8" width="13" height="13" fill="#fff" rx="2" />
                    <rect x="79" y="8" width="13" height="13" fill="#fff" rx="2" />
                    <rect x="8" y="79" width="13" height="13" fill="#fff" rx="2" />
                  </svg>
                </div>
                <span className="text-[10px] text-neutral-400">امسح الكود لمتابعة حالة طلبك</span>
              </div>

              {/* Summary */}
              <div className="space-y-2 text-xs text-neutral-500 border-t border-neutral-100 pt-4">
                <div className="flex justify-between">
                  <span>الإجمالي المدفوع:</span>
                  <span className="font-bold text-neutral-900">{grandTotal.toFixed(2)} ريال</span>
                </div>
                <div className="flex justify-between">
                  <span>طريقة الدفع:</span>
                  <span className="font-bold text-neutral-900">
                    {paymentMethod === "mada" ? "بطاقة مدى" :
                     paymentMethod === "visa" ? "بطاقة ائتمانية (فيزا/ماستر)" :
                     paymentMethod === "tamara" ? "تمارا - قسّط مشترياتك" :
                     paymentMethod === "tabby" ? "تابي - اشتر الآن وادفع لاحقاً" : "الدفع عند الاستلام"}
                  </span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <Button onClick={() => navigate("/")} fullWidth size="md">
                  العودة للرئيسية
                </Button>
                <Button
                  href={`https://wa.me/966920001234?text=مرحباً، أود متابعة طلبي رقم ${orderNumber}`}
                  target="_blank"
                  variant="outline"
                  fullWidth
                  size="md"
                >
                  تابع عبر واتساب
                </Button>
              </div>
            </div>
          </div>
        )}

        {!showSuccess && (
          <form id="checkout-form" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

              {/* Form Fields (8 cols) */}
              <div className="lg:col-span-8 space-y-6">
                <h1 className="text-xl sm:text-2xl font-black text-neutral-900">إتمام طلب الطباعة والدفع</h1>

                {/* Customer Information */}
                <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm p-6 space-y-5">
                  <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-black">1</span>
                    معلومات العميل
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs text-neutral-500 font-bold">الاسم الكامل <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="مثال: محمد العتيبي"
                        className="w-full px-4 py-3 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 text-sm transition-all bg-neutral-50/50"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs text-neutral-500 font-bold">رقم الجوال <span className="text-red-500">*</span></label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        placeholder="05XXXXXXXX"
                        className="w-full px-4 py-3 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 text-sm transition-all bg-neutral-50/50"
                      />
                    </div>
                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="block text-xs text-neutral-500 font-bold">البريد الإلكتروني (اختياري)</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="email@example.com"
                        className="w-full px-4 py-3 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 text-sm transition-all bg-neutral-50/50"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm p-6 space-y-5">
                  <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-black">2</span>
                    عنوان الشحن والتوصيل
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs text-neutral-500 font-bold">المدينة <span className="text-red-500">*</span></label>
                      <select
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-4 py-3 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 text-sm transition-all bg-neutral-50/50"
                      >
                        <option value="الرياض">الرياض</option>
                        <option value="جدة">جدة</option>
                        <option value="الدمام">الدمام</option>
                        <option value="مكة المكرمة">مكة المكرمة</option>
                        <option value="المدينة المنورة">المدينة المنورة</option>
                        <option value="الخبر">الخبر</option>
                        <option value="أبها">أبها</option>
                        <option value="تبوك">تبوك</option>
                        <option value="القصيم">القصيم</option>
                        <option value="حائل">حائل</option>
                        <option value="أخرى">مدينة أخرى</option>
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs text-neutral-500 font-bold">الحي <span className="text-red-500">*</span></label>
                      <input
                        type="text"
                        value={district}
                        onChange={(e) => setDistrict(e.target.value)}
                        placeholder="مثال: حي الملقا"
                        className="w-full px-4 py-3 rounded-full border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 text-sm transition-all bg-neutral-50/50"
                      />
                    </div>
                    <div className="sm:col-span-2 space-y-1.5">
                      <label className="block text-xs text-neutral-500 font-bold">العنوان التفصيلي <span className="text-red-500">*</span></label>
                      <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                        rows="2"
                        placeholder="اسم الشارع، رقم المبنى، الدور، أقرب معلم..."
                        className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 text-sm transition-all bg-neutral-50/50 resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm p-6 space-y-5">
                  <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-black">3</span>
                    طريقة الدفع
                  </h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      { id: "mada", label: "بطاقة مدى", badge: "mada", badgeColor: "text-blue-800 bg-blue-50" },
                      { id: "visa", label: "فيزا / ماستركارد", badge: "VISA", badgeColor: "text-blue-900 bg-blue-50" },
                      { id: "tamara", label: "تمارا - قسّط مشترياتك", badge: "tamara", badgeColor: "text-amber-700 bg-amber-50" },
                      { id: "tabby", label: "تابي - اشتر الآن ادفع لاحقاً", badge: "tabby", badgeColor: "text-neutral-950 bg-neutral-100" },
                      { id: "cod", label: "الدفع عند الاستلام (COD)", badge: "COD", badgeColor: "text-neutral-700 bg-neutral-100" },
                    ].map((method) => (
                      <label
                        key={method.id}
                        className={`flex items-center gap-3 p-4 rounded-2xl border cursor-pointer transition-all ${
                          paymentMethod === method.id
                            ? "border-neutral-900 bg-neutral-50 ring-1 ring-neutral-900/10"
                            : "border-neutral-200 hover:border-neutral-900"
                        }`}
                      >
                        <input
                          type="radio"
                          name="paymentMethod"
                          value={method.id}
                          checked={paymentMethod === method.id}
                          onChange={(e) => setPaymentMethod(e.target.value)}
                          className="accent-neutral-900"
                        />
                        <div className="flex-grow">
                          <span className="text-sm font-bold text-neutral-900">{method.label}</span>
                        </div>
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded ${method.badgeColor}`}>
                          {method.badge}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Order Notes */}
                <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm p-6 space-y-4">
                  <h2 className="text-base font-bold text-neutral-900 flex items-center gap-2">
                    <span className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-black">4</span>
                    ملاحظات إضافية (اختياري)
                  </h2>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows="3"
                    placeholder="أي تعليمات خاصة بالطلب أو الشحن أو التوقيت..."
                    className="w-full px-4 py-3 rounded-2xl border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900/20 focus:border-neutral-900 text-sm transition-all bg-neutral-50/50 resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Order Summary Sidebar (4 cols) */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
                <div className="bg-white rounded-3xl border border-neutral-100 shadow-sm p-6 space-y-5">
                  <h2 className="text-lg font-black text-neutral-900 border-b border-neutral-50 pb-3">ملخص الفاتورة</h2>

                  {/* Order items compact list */}
                  <div className="space-y-3 max-h-64 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.cartItemId} className="flex items-center gap-3 p-3 bg-neutral-50 rounded-2xl border border-neutral-100">
                        <div className="w-10 h-10 bg-neutral-900 rounded-lg flex items-center justify-center shrink-0">
                          <svg className="w-full h-full p-1" viewBox="0 0 100 100" fill="none">
                            <polygon points="50,22 80,35 50,48 20,35" fill="#555" opacity="0.8" />
                            <polygon points="50,48 80,35 80,68 50,81" fill="#fff" opacity="0.8" />
                          </svg>
                        </div>
                        <div className="flex-grow min-w-0">
                          <span className="block text-xs font-bold text-neutral-900 line-clamp-1">{item.product.name}</span>
                          <span className="block text-[10px] text-neutral-400">{item.quantity} قطعة</span>
                        </div>
                        <span className="text-xs font-black text-neutral-900 whitespace-nowrap">{item.price.toFixed(2)} ر.س</span>
                      </div>
                    ))}
                  </div>

                  {/* Totals */}
                  <div className="space-y-3 text-sm text-neutral-600 border-t border-neutral-100 pt-4">
                    <div className="flex justify-between">
                      <span>المجموع الفرعي:</span>
                      <span className="font-bold text-neutral-900">{subtotal.toFixed(2)} ريال</span>
                    </div>
                    <div className="flex justify-between">
                      <span>الشحن:</span>
                      <span className="font-bold text-neutral-900">
                        {shipping === 0 ? "مجاناً" : `${shipping.toFixed(2)} ريال`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>الضريبة (15%):</span>
                      <span className="font-bold text-neutral-900">{tax.toFixed(2)} ريال</span>
                    </div>
                    <div className="flex justify-between items-end border-t border-neutral-100 pt-4">
                      <span className="text-base font-bold">الإجمالي النهائي:</span>
                      <span className="text-2xl font-black text-neutral-900">{grandTotal.toFixed(2)} ريال</span>
                    </div>
                  </div>

                  <Button type="submit" fullWidth size="lg" className="hidden lg:flex">
                    تأكيد الطلب والدفع
                  </Button>

                  <p className="text-[10px] text-neutral-400 text-center">
                    بالضغط على "تأكيد الطلب" فإنك توافق على <Link to="/terms" className="text-neutral-900 underline">الشروط والأحكام</Link> وسياسة الاستخدام.
                  </p>
                </div>
              </div>

            </div>
          </form>
        )}
      </main>

      {!showSuccess && cart.length > 0 && (
        <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-100 px-4 py-3 shadow-[0_-8px_30px_rgba(0,0,0,0.08)]">
          <div className="max-w-7xl mx-auto flex items-center gap-3">
            <div className="shrink-0">
              <span className="text-[10px] text-neutral-400 block">الإجمالي</span>
              <span className="text-lg font-black text-neutral-900">{grandTotal.toFixed(2)} ريال</span>
            </div>
            <Button type="submit" form="checkout-form" size="md" className="flex-1">
              تأكيد الطلب
            </Button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
