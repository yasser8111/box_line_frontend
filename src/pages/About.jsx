import React from "react";
import { ShieldCheck, Sparkles, Heart, Award } from "lucide-react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/ui/PageBanner";

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      
      <PageBanner
        title="عن BOX LINE"
        image="/imges/bunners/about-us-banner.jpeg"
      />

      <main className="grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-20 w-full space-y-16 lg:space-y-28">
        
        {/* Our Story Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 border-r-4 border-emerald-600 pr-4">
              قصتنا
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              بدأت رحلة <span className="font-semibold text-emerald-600">BOX LINE</span> من شغفنا بتحويل الهدايا التقليدية إلى تجارب استثنائية تُحفر في الذاكرة. نحن لا نبيع مجرد منتجات، بل نجمع مشاعركم ونصيغها in صناديق فاخرة مصممة بعناية لتعبّر عن كل لحظة حب، تقدير، أو امتنان.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              كل صندوق يخرج من متجرنا هو خطوة نخطوها معكم لمشاركة الفرحة، حيث نعتني بأدق التفاصيل ابتداءً من جودة المنتجات ووصولاً إلى طريقة التغليف الفاخرة التي تليق بمناسباتكم.
            </p>
          </div>
          <div className="flex items-center justify-center h-80">
            <img 
              src="/logo.png" 
              alt="BOX LINE Logo" 
              className="w-80 h-80 object-cover rounded-3xl"
            />
          </div>
        </section>

        {/* Core Values Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">قيمنا ورؤيتنا</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">المبادئ التي نلتزم بها لتقديم أفضل تجربة إهداء لكم.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-50 rounded-2xl p-6 text-center space-y-4 hover:shadow-md transition-shadow border border-gray-100">
              <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">التميز والإبداع</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                نبتكر أفكاراً وتصاميم حصرية وغير تقليدية لتكون هديتكم فريدة من نوعها دائماً.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center space-y-4 hover:shadow-md transition-shadow border border-gray-100">
              <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">صُنع بحب</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                نتعامل مع كل طلب وكأنه هدية منا لشخص عزيز، بكل شغف واهتمام ودقة وعناية.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center space-y-4 hover:shadow-md transition-shadow border border-gray-100">
              <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">الجودة والموثوقية</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                نختار أفضل الخامات والمنتجات لنضمن لكم تجربة راقية ترقى لتطلعاتكم وتبيض وجوهكم.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 text-center space-y-4 hover:shadow-md transition-shadow border border-gray-100">
              <div className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-xl">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">سرعة وإتقان</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                نلتزم بتجهيز وتوصيل هداياكم في الوقت المحدد وبأعلى معايير الإتقان والسلامة.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="bg-gray-900 rounded-3xl text-white p-8 md:p-16 text-center space-y-6 shadow-xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#059669,transparent_50%)] opacity-20" />
          <h2 className="text-2xl md:text-4xl font-bold relative z-10">هل تبحث عن الهدية المثالية؟</h2>
          <p className="text-gray-300 max-w-xl mx-auto text-base md:text-lg relative z-10">
            دعنا نساعدك في رسم الابتسامة على وجوه من تحب وتخليد لحظاتكم السعيدة بصناديق مبتكرة.
          </p>
          <div className="pt-4 relative z-10">
            <a 
              href="/products" 
              className="inline-block bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20"
            >
              اكتشف مجموعتنا الآن
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}