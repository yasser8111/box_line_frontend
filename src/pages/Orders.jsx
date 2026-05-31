import React, { useState } from "react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageHero from "../components/ui/PageHero";
import Button from "../components/ui/Button";
import { useToast } from "../context/ToastContext";

const TIMELINE_STEPS = [
  { step: "✓", label: "تم استلام الطلب", active: true },
  { step: "2", label: "الطباعة والتجهيز", active: true, pulse: true },
  { step: "3", label: "في الطريق إليك", active: false },
  { step: "4", label: "تم التوصيل", active: false },
];

export default function Orders() {
  const [orderNumber, setOrderNumber] = useState("");
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState(null);
  const toast = useToast();

  const handleTrack = (e) => {
    e.preventDefault();
    setStatus("loading");

    setTimeout(() => {
      if (orderNumber.trim() === "12345") {
        setStatus("found");
        toast.success("تم العثور على طلبك", {
          message: "يمكنك متابعة حالة الطلب أدناه.",
        });
      } else {
        setStatus("error");
        toast.error("لم يتم العثور على الطلب", {
          message: "تأكد من رقم الطلب ورقم الجوال (جرب: 12345)",
        });
      }
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      <PageHero
        title="تتبع الطلبات"
        subtitle="أدخل رقم الطلب ورقم الجوال لمعرفة حالة طلبك الحالي"
      />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full">
        <div className="w-full max-w-md mx-auto bg-neutral-50 p-5 sm:p-8 rounded-4xl border border-neutral-100">
          <form onSubmit={handleTrack} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-neutral-900 mr-1">رقم الطلب</label>
              <input
                type="text"
                required
                value={orderNumber}
                onChange={(e) => setOrderNumber(e.target.value)}
                className="w-full bg-white border border-neutral-200 text-neutral-900 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-neutral-950 transition-colors text-left"
                placeholder="#12345"
                dir="ltr"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-neutral-900 mr-1">رقم الجوال مسجل بالطلب</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border border-neutral-200 text-neutral-900 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-neutral-950 transition-colors text-left"
                placeholder="05XXXXXXXX"
                dir="ltr"
              />
            </div>
            <Button type="submit" fullWidth size="lg" loading={status === "loading"}>
              بحث عن الطلب
            </Button>
          </form>

          {status === "error" && (
            <div className="mt-6 p-4 bg-white border border-neutral-200 rounded-2xl text-center">
              <span className="text-sm font-bold text-neutral-900 block mb-1">لم يتم العثور على الطلب</span>
              <span className="text-xs text-neutral-500">تأكد من رقم الطلب ورقم الجوال (جرب: 12345)</span>
            </div>
          )}
        </div>

        {status === "found" && (
          <div className="w-full mt-8 sm:mt-10 bg-neutral-50 p-5 sm:p-8 rounded-4xl border border-neutral-100">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6 sm:mb-8 pb-6 border-b border-neutral-200">
              <div>
                <h3 className="text-lg sm:text-xl font-black text-neutral-900">طلب رقم #{orderNumber}</h3>
                <p className="text-sm text-neutral-500 mt-1 font-light">تاريخ الطلب: 20 مايو 2026</p>
              </div>
              <span className="px-4 py-1.5 bg-green-50 text-green-600 text-sm font-bold rounded-full">
                جاري التجهيز والطباعة
              </span>
            </div>

            {/* خط زمني عمودي — جوال */}
            <div className="sm:hidden space-y-0">
              {TIMELINE_STEPS.map((item, index) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                        item.active
                          ? "bg-neutral-950 text-white shadow-md"
                          : "bg-neutral-200 text-neutral-400"
                      } ${item.pulse ? "animate-pulse" : ""}`}
                    >
                      {item.step}
                    </div>
                    {index < TIMELINE_STEPS.length - 1 && (
                      <div className={`w-0.5 flex-1 min-h-[32px] my-1 ${item.active ? "bg-neutral-950" : "bg-neutral-200"}`} />
                    )}
                  </div>
                  <div className="pb-6 pt-1">
                    <span
                      className={`text-sm font-bold block ${
                        item.active ? "text-neutral-900" : "text-neutral-400"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* خط زمني أفقي — شاشات أكبر */}
            <div className="hidden sm:block relative pt-4 pb-8">
              <div className="absolute top-8 left-8 right-8 h-1 bg-neutral-200 rounded-full" />
              <div className="absolute top-8 right-8 h-1 bg-neutral-950 rounded-full" style={{ width: "45%" }} />
              <div className="relative flex justify-between gap-2">
                {TIMELINE_STEPS.map((item) => (
                  <div key={item.label} className="flex flex-col items-center flex-1 min-w-0 gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-bold z-10 shrink-0 ${
                        item.active
                          ? "bg-neutral-950 text-white shadow-md"
                          : "bg-neutral-200 text-neutral-400"
                      } ${item.pulse ? "animate-pulse" : ""}`}
                    >
                      {item.step}
                    </div>
                    <span
                      className={`text-[10px] sm:text-xs font-bold text-center leading-tight px-1 ${
                        item.active ? "text-neutral-900" : "text-neutral-400"
                      }`}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-5 border border-neutral-100 mt-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="text-sm">
                <span className="block text-neutral-500 font-semibold mb-1">شركة الشحن: سمسا السريع</span>
                <span className="block text-neutral-900 font-bold">رقم التتبع: -</span>
              </div>
              <Button to="/contact" variant="outline" size="sm" fullWidth className="sm:w-auto">
                تواصل مع الدعم
              </Button>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
