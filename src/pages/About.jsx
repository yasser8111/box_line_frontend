import React from "react";
import { ShieldCheck, Sparkles, Heart, Award } from "lucide-react";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import PageBanner from "../components/ui/PageBanner";

const STATS = [
  { value: "+5,000", label: "عميل يثق بنا" },
  { value: "+10,000", label: "هدية مجهزة بحب" },
  { value: "+150", label: "تصميم ومنتج حصري" },
  { value: "100%", label: "ضمان جودة وتوصيل" },
];

const VALUES = [
  {
    icon: <Sparkles className="w-6 h-6 text-green-600" />,
    title: "شغف الابتكار",
    desc: "لا نصنع مجرد أكياس وصناديق، بل نبتكر أفكاراً تجعل من فتح الهدية تجربة لا تُنسى."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-600" />,
    title: "الجودة الفاخرة",
    desc: "نختار أدق تفاصيل المواد من الورق المخملي والشرائط الفاخرة لضمان تقديم مستوى يليق بكم."
  },
  {
    icon: <Heart className="w-6 h-6 text-green-600" />,
    title: "صُنع بحب",
    desc: "كل تفصيل في هدايانا وباقاتنا يجري إعداده وتنسيقه بعناية فائقة ليرسم ابتسامة حقيقية."
  },
  {
    icon: <Award className="w-6 h-6 text-green-600" />,
    title: "هوية متكاملة",
    desc: "نساعد الأفراد والشركات على طباعة وتجسيد هويتهم الخاصة بجودة استثنائية وبصمة فريدة."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-white flex flex-col" dir="rtl">
      <Header />
      
      <PageBanner
        title="قصتنا ومن نحن"
        subtitle="في BOX LINE، نحول التغليف والهدية من مجرد شكل مادي إلى رسالة ومشاعر صادقة تلامس القلوب"
        image="/imges/bunners/about-us-banner.jpeg"
      />

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20 w-full space-y-16 lg:space-y-24">
        
        {/* قصة البراند والرسالة */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-bold text-green-600 uppercase tracking-wider bg-green-50 px-3 py-1.5 rounded-full">من نحن</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 leading-tight">
              نمنح هداياكم فخامة <br /> وتفاصيل تستحقها
            </h2>
          </div>
          <div className="lg:col-span-7 text-neutral-500 text-sm md:text-base leading-relaxed space-y-4 font-normal">
            <p>
              بدأت رحلتنا في <strong>BOX LINE</strong> من شغف حقيقي بتفاصيل الضيافة والاهتمام بالهدية، إيماناً منا بأن الطريقة التي تقدم بها هديتك تعكس عمق مشاعرك وقيمتك لدى الآخرين. نحن لسنا مجرد متجر لبيع الصناديق والأكياس، بل نحن شركاء في صناعة لحظاتكم السعيدة وتوثيق ذكرياتكم.
            </p>
            <p>
              سواء كنت تبحث عن هدية جاهزة وتنسيق ساحر من الورد وباقات العطور المناسبة، أو كنت صاحب عمل تجاري يرغب في تصميم وطباعة تغليف مخصص يعكس قوة واحترافية علامته التجارية؛ فإننا نضع بين يديك خبرتنا الطويلة وأحدث تقنيات التصميم والطباعة لضمان تجربة مذهلة.
            </p>
          </div>
        </div>

        {/* الرؤية والمهمة مصممة بشكل عصري بدون صور */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="bg-neutral-50 rounded-3xl p-8 lg:p-10 border border-neutral-100 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-black text-neutral-900">رؤيتنا</h3>
              <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-normal">
                أن نكون الوجهة الأولى الرائدة في المملكة العربية السعودية والخليج لابتكار حلول التغليف الفاخر وتنسيق الهدايا الاستثنائية، ملهمين الأفراد والشركات لتقديم مشاعرهم بأبهى صورة ممكنة ومواكبين لأحدث صيحات التصميم العالمية.
              </p>
            </div>
          </div>

          <div className="bg-neutral-50 rounded-3xl p-8 lg:p-10 border border-neutral-100 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-black text-neutral-900">مهمتنا</h3>
              <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-normal">
                توفير تشكيلة راقية ومتنوعة من الهدايا والحلول التغليفية التي تجمع بين الإبداع والجودة العالية وبأسعار تنافسية. نلتزم بالاهتمام بأدق التفاصيل والسرعة في التنفيذ لضمان كسب ثقة ومحبة عملائنا دائماً.
              </p>
            </div>
          </div>
        </div>

        {/* قيمنا وبماذا نتميز باستخدام الايقونات */}
        <div className="space-y-10">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-neutral-900">المبادئ التي تميز BOX LINE</h3>
            <p className="text-xs md:text-sm text-neutral-400">الركائز الأساسية التي نعتمد عليها في خدمة كل عميل</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value, i) => (
              <div key={i} className="p-6 rounded-2xl border border-neutral-100 bg-white space-y-4 text-right">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center shrink-0">
                  {value.icon}
                </div>
                <div className="space-y-1.5">
                  <h4 className="font-bold text-base text-neutral-900">{value.title}</h4>
                  <p className="text-xs md:text-sm text-neutral-500 leading-relaxed font-normal">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* إحصائيات المتجر */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center border-t border-neutral-100 pt-12 lg:pt-16">
          {STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-black text-green-600">{stat.value}</div>
              <div className="text-xs sm:text-sm font-bold text-neutral-500">{stat.label}</div>
            </div>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}