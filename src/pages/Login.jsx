import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Button from "../components/ui/Button";
import { useToast } from "../context/ToastContext";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.info("مرحباً بك", {
      message: "تم استلام بيانات الدخول — النسخة التجريبية.",
    });
  };

  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />

      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 mt-20">
        <div className="w-full max-w-md bg-neutral-50 rounded-4xl p-8 md:p-10 border border-neutral-100">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-black text-neutral-900 mb-2">
              أهلاً بك مجدداً
            </h1>
            <p className="text-sm text-neutral-500 font-light">
              سجل دخولك للوصول إلى طلباتك وتخصيص هداياك
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-neutral-900 mr-1">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                className="w-full bg-white border border-neutral-200 text-neutral-900 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-neutral-950 transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center justify-between px-1">
                <label className="text-xs font-bold text-neutral-900">
                  كلمة المرور
                </label>
                <Link
                  to="/forgot-password"
                  className="text-xs text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  نسيت كلمة المرور؟
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="••••••••"
                  className="w-full bg-white border border-neutral-200 text-neutral-900 text-sm px-4 py-3 rounded-2xl focus:outline-none focus:border-neutral-950 transition-colors pl-12"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-neutral-900 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <Button type="submit" fullWidth size="lg" className="mt-2">
              تسجيل الدخول
            </Button>
          </form>

          <div className="mt-8 pt-6 border-t border-neutral-200 text-center">
            <p className="text-sm text-neutral-500 font-light">
              ليس لديك حساب بعد؟{" "}
              <Link to="/register" className="font-bold text-neutral-900 hover:underline">
                إنشاء حساب جديد
              </Link>
            </p>

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors mt-6"
            >
              <span>العودة للرئيسية</span>
              <ArrowLeft className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
