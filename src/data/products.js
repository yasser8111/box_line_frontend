export const READY_PRODUCTS = [
  { id: "ready-bag-1", name: "أكياس هدايا فاخرة (وردي)", price: 15, badge: "الأكثر مبيعاً", category: "ready" },
  { id: "ready-box-1", name: "صندوق مجوهرات مخملي", price: 35, badge: "إصدار محدود", category: "ready" },
  { id: "ready-wrapping-paper", name: "رول تغليف هدايا مورد", price: 25, category: "ready" },
  { id: "ready-card-1", name: "كروت تهنئة (مجموعة 5 قطع)", price: 20, category: "ready" },
  { id: "ready-bag-2", name: "كيس هدايا كرافت كلاسيك", price: 10, category: "ready" },
  { id: "ready-box-2", name: "صندوق هدايا بنافذة شفافة", price: 22, badge: "جديد", category: "ready" },
];

export const CUSTOM_PRODUCTS = [
  { id: "mailer-box", name: "كرتون بريدي مطبوع بشعارك", price: 4.5, badge: "يبدأ من", category: "custom" },
  { id: "gift-box", name: "علب هدايا فاخرة مخصصة", price: 8.5, badge: "يبدأ من", category: "custom" },
  { id: "luxury-bags", name: "أكياس تسوق ورقية مطبوعة", price: 3.2, badge: "يبدأ من", category: "custom" },
  { id: "round-stickers", name: "ملصقات دائرية مخصصة", price: 0.25, badge: "يبدأ من", category: "custom" },
  { id: "party-sheets", name: "أوراق ثيمات ومناسبات", price: 1.2, badge: "يبدأ من", category: "custom" },
  { id: "business-cards", name: "كروت عمل شخصية فاخرة", price: 0.8, badge: "يبدأ من", category: "custom" },
];

export const ALL_PRODUCTS = [...READY_PRODUCTS, ...CUSTOM_PRODUCTS];

export const CATEGORIES = [
  { id: "ready", title: "منتجات جاهزة", desc: "أكياس وعلب وكروت هدايا جاهزة للتوصيل الفوري", link: "/category/ready", icon: "🎁" },
  { id: "custom", title: "منتجات مخصصة", desc: "صمّم تغليفك واطبعه بجودة استثنائية", link: "/category/custom", icon: "✨" },
  { id: "wrapping", title: "تغليف الهدايا", desc: "خدمة من الباب للباب — نستلم ونغلف ونوصل", link: "/service/wrapping", icon: "📦" },
];
