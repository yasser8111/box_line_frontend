import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Complete database of printing products
const PRODUCTS_DB = {
  "mailer-box": {
    id: "mailer-box",
    name: "كرتون بريدي مطبوع (Mailer Box)",
    category: "packaging",
    price: 4.50,
    minQty: 100,
    desc: "علبة بريدية كرتونية مموجة وقوية، مثالية لشحن منتجات المتاجر الإلكترونية وحمايتها بأسلوب فاخر. تتاح بخيارات طباعة خارجية وداخلية ممتازة.",
    sizes: ["15x15x5", "20x15x8", "25x20x10", "30x22x12", "custom"],
    papers: [
      { id: "standard_kraft", name: "ورق كرافت بني كلاسيكي مموج" },
      { id: "white_coated", name: "ورق أبيض مصقول فاخر مموج" },
      { id: "luxury", name: "كرتون أسود مموج فاخر (+1.2 ريال)" }
    ],
    thicknesses: ["300g", "350g", "400g"],
    finishes: [
      { id: "none", name: "بدون إضافة حماية" },
      { id: "matte_lamination", name: "سلوفان مطفي حماية (+0.15 ريال)" },
      { id: "glossy_lamination", name: "سلوفان لامع حماية (+0.15 ريال)" },
      { id: "gold_foil", name: "بصمة رقائق الذهب Gold Foil (+0.30 ريال + 50 ريال إعداد)" },
      { id: "spot_uv", name: "ورنيش بقعي بارز Spot UV (+0.20 ريال + 40 ريال إعداد)" }
    ],
    hasSides: true,
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <polygon points="50,15 82,30 50,45 18,30" fill="#2fa134" />
        <polygon points="50,45 82,30 82,68 50,83" fill="#ffffff" stroke="#2fa134" strokeWidth="0.5" />
        <polygon points="18,30 50,45 50,83 18,68" fill="#e5e5e5" />
      </svg>
    )
  },
  "gift-box": {
    id: "gift-box",
    name: "علب هدايا فاخرة مخصصة (Gift Box)",
    category: "packaging",
    price: 8.50,
    minQty: 50,
    desc: "علب هدايا كرتونية صلبة (Rigid Boxes) ومغناطيسية مخصصة للشوكولاتة، العطور، والساعات. تعكس قمة الجودة والفخامة لهويتك التجارية.",
    sizes: ["10x10x10", "15x15x8", "22x16x7", "30x20x10", "custom"],
    papers: [
      { id: "rigid_cardboard", name: "كرتون صلب مغطى بورق فاخر" },
      { id: "textured_paper", name: "كرتون صلب مغطى بورق محبب ملمس (+1.5 ريال)" }
    ],
    thicknesses: ["350g", "400g"],
    finishes: [
      { id: "none", name: "بدون إضافة حماية" },
      { id: "matte_lamination", name: "سلوفان مطفي حماية (+0.20 ريال)" },
      { id: "gold_foil", name: "بصمة رقائق ذهبية فاخرة (+0.50 ريال + 50 ريال إعداد)" },
      { id: "spot_uv", name: "تأثير بارز لامع Spot UV (+0.30 ريال + 40 ريال إعداد)" }
    ],
    hasSides: false,
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <rect x="25" y="30" width="50" height="45" fill="#2fa134" rx="2" />
        <rect x="22" y="25" width="56" height="12" fill="#ffffff" stroke="#2fa134" strokeWidth="1" rx="1" />
        <path d="M50 25v50M22 42h56" stroke="#2fa134" strokeWidth="2" opacity="0.3" />
      </svg>
    )
  },
  "round-stickers": {
    id: "round-stickers",
    name: "ملصقات دائرية مخصصة للعلب والأكياس",
    category: "stickers",
    price: 0.25,
    minQty: 250,
    desc: "ستيكر لاصق مقصوص دائرياً بدقة عالية، مناسب لتزيين علب الهدايا، علب الطعام، وأكياس الشراء. متاح بنسخة ورقية أو بلاستيكية مقاومة للرطوبة.",
    sizes: ["3cm", "4cm", "5cm", "6cm", "8cm"],
    papers: [
      { id: "sticker_paper", name: "ستيكر ورقي لامع قياسي" },
      { id: "sticker_vinyl", name: "ستيكر بلاستيك فينيل مقاوم للمياه (+0.10 ريال)" },
      { id: "sticker_transparent", name: "ستيكر فينيل شفاف مخصص (+0.15 ريال)" }
    ],
    thicknesses: ["80g", "120g"],
    finishes: [
      { id: "none", name: "بدون تأثيرات إضافية" },
      { id: "glossy_lamination", name: "سلوفان لامع حماية (+0.03 ريال)" },
      { id: "gold_foil", name: "بصمة رقائق الذهب Gold Foil (+0.08 ريال + 50 ريال إعداد)" }
    ],
    hasSides: false,
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <circle cx="50" cy="50" r="35" fill="#2fa134" />
        <circle cx="50" cy="50" r="30" fill="none" stroke="#fff" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="23" fill="none" stroke="#fff" strokeWidth="1" strokeDasharray="3 3" />
      </svg>
    )
  },
  "party-sheets": {
    id: "party-sheets",
    name: "أوراق ثيمات ومطبوعات الحفلات",
    category: "events",
    price: 1.20,
    minQty: 50,
    desc: "طباعة وتجهيز أوراق زينة الحفلات ومطبوعات الثيمات للأكواب، علب الماء، أكياس الفشار، أو تغليف الشوكولاتة بأعلى دقة ألوان ممكنة.",
    sizes: ["A4", "A3", "مخصص ثيم شوكولاتة", "مخصص ثيم علب مياه"],
    papers: [
      { id: "glossy_paper", name: "ورق مصقول لامع 150 جرام" },
      { id: "matte_paper", name: "ورق مطفي فاخر 150 جرام" },
      { id: "cardstock", name: "ورق مقوى سميك 250 جرام (+0.30 ريال)" }
    ],
    thicknesses: ["150g", "250g", "300g"],
    finishes: [
      { id: "none", name: "بدون تأثيرات إضافية" },
      { id: "glossy_lamination", name: "تلميع سلوفان لامع (+0.10 ريال)" }
    ],
    hasSides: true,
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <path d="M25 15h40l15 15v55H25z" fill="#ffffff" stroke="#2fa134" strokeWidth="2" />
        <path d="M65 15v15h15" fill="none" stroke="#2fa134" strokeWidth="2" />
        <circle cx="42" cy="45" r="8" fill="#2fa134" />
        <line x1="35" y1="62" x2="65" y2="62" stroke="#2fa134" strokeWidth="3" />
        <line x1="35" y1="70" x2="55" y2="70" stroke="#2fa134" strokeWidth="3" />
      </svg>
    )
  },
  "luxury-bags": {
    id: "luxury-bags",
    name: "أكياس تسوق ورقية فاخرة مطبوعة",
    category: "bags",
    price: 3.20,
    minQty: 100,
    desc: "أكياس ورقية فاخرة للتسوق والهدايا، مزودة بمقابض حبل قطنية أو شريط ستان أنيق مع طباعة الشعار على الوجهين.",
    sizes: ["15x20x8", "25x32x10", "30x40x12", "custom"],
    papers: [
      { id: "white_kraft", name: "ورق كرافت أبيض متين" },
      { id: "brown_kraft", name: "ورق كرافت بني بيئي متين" },
      { id: "luxury_art", name: "ورق فني مصقول سميك فاخر (+0.50 ريال)" }
    ],
    thicknesses: ["200g", "250g", "300g"],
    finishes: [
      { id: "none", name: "بدون تأثيرات إضافية" },
      { id: "matte_lamination", name: "سلوفان مطفي حماية (+0.15 ريال)" },
      { id: "gold_foil", name: "بصمة شعار ذهبي بارز (+0.40 ريال + 50 ريال إعداد)" }
    ],
    hasSides: true,
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <path d="M30 35v45a4 4 0 004 4h32a4 4 0 004-4V35H30z" fill="#ffffff" stroke="#2fa134" strokeWidth="2.5" />
        <path d="M42 35c0-7 3-12 8-12s8 5 8 12" stroke="#2fa134" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <rect x="40" y="50" width="20" height="15" fill="#2fa134" rx="1" />
        <text x="50" y="60" fill="#fff" fontSize="8" fontWeight="bold" textAnchor="middle">BL</text>
      </svg>
    )
  },
  "business-cards": {
    id: "business-cards",
    name: "كروت عمل شخصية فاخرة (Business Cards)",
    category: "business",
    price: 0.80,
    minQty: 100,
    desc: "كرت شخصي لعملك يعبر عن احترافية هويتك، يطبع على كرتون فني فائق السماكة مع خيارات اللمعة البارزة أو رقائق الذهب البارزة.",
    sizes: ["9x5.5cm (قياسي سيدي)", "8.5x5.5cm (قياسي أوروبي)"],
    papers: [
      { id: "art_board_standard", name: "كرتون كوتد مصقول فاخر" },
      { id: "cotton_luxury", name: "ورق قطني فخم ملمس مميز (+0.40 ريال)" },
      { id: "recycle_eco", name: "ورق معاد تدويره صديق للبيئة" }
    ],
    thicknesses: ["350g", "400g", "600g (سوبر سميك +0.50 ريال)"],
    finishes: [
      { id: "none", name: "بدون تأثيرات إضافية" },
      { id: "matte_lamination", name: "سلوفان مطفي ناعم (+0.05 ريال)" },
      { id: "gold_foil", name: "بصمة رقائق الذهب على الحواف أو الشعار (+0.25 ريال + 50 ريال إعداد)" },
      { id: "spot_uv", name: "تلميع بارز مخصص للبقع الشفافة Spot UV (+0.15 ريال + 40 ريال إعداد)" }
    ],
    hasSides: true,
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <rect x="15" y="25" width="70" height="50" rx="4" fill="#ffffff" stroke="#2fa134" strokeWidth="2.5" />
        <circle cx="35" cy="50" r="8" fill="#2fa134" />
        <line x1="48" y1="45" x2="72" y2="45" stroke="#2fa134" strokeWidth="3.5" strokeLinecap="round" />
        <line x1="48" y1="55" x2="65" y2="55" stroke="#2fa134" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  },
  "ready-bag-1": {
    id: "ready-bag-1",
    name: "أكياس هدايا فاخرة (وردي)",
    price: 15,
    minQty: 1,
    isReady: true,
    desc: "أكياس هدايا ورقية جاهزة بلون وردي مبهج ومقابض قطنية مريحة. مثالية للهدايا السريعة والمناسبات الشخصية.",
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <path d="M30 35v45a4 4 0 004 4h32a4 4 0 004-4V35H30z" fill="#fbcfe8" stroke="#db2777" strokeWidth="2" />
        <path d="M42 35c0-7 3-12 8-12s8 5 8 12" stroke="#db2777" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    )
  },
  "ready-box-1": {
    id: "ready-box-1",
    name: "صندوق مجوهرات مخملي",
    price: 35,
    minQty: 1,
    isReady: true,
    desc: "علبة مجوهرات فاخرة مبطنة بالمخمل الناعم لحماية الخواتم، القلائد، والأقراط الثمينة وتقديمها بشكل أنيق.",
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <rect x="25" y="30" width="50" height="40" fill="#818cf8" rx="4" />
        <rect x="22" y="25" width="56" height="10" fill="#4f46e5" rx="2" />
        <path d="M50 25v45M22 35h56" stroke="#ffffff" strokeWidth="1.5" opacity="0.5" />
      </svg>
    )
  },
  "ready-wrapping-paper": {
    id: "ready-wrapping-paper",
    name: "رول تغليف هدايا مورد",
    price: 25,
    minQty: 1,
    isReady: true,
    desc: "ورق تغليف هدايا عالي الجودة بطبعات ورود زاهية تضفي لمسة ربيعية رقيقة على هديتك.",
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <rect x="35" y="15" width="30" height="70" rx="3" fill="#34d399" />
        <path d="M35 25h30M35 45h30M35 65h30" stroke="#ffffff" strokeWidth="2" opacity="0.4" />
      </svg>
    )
  },
  "ready-card-1": {
    id: "ready-card-1",
    name: "كروت تهنئة (مجموعة 5 قطع)",
    price: 20,
    minQty: 1,
    isReady: true,
    desc: "مجموعة من 5 كروت تهنئة متنوعة لجميع المناسبات مع أظرفها الفاخرة لكتابة أرق الكلمات لمن تحب.",
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <rect x="25" y="25" width="50" height="50" rx="4" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
        <circle cx="50" cy="50" r="10" fill="#ffffff" />
        <path d="M47 50l2 2 4-4" stroke="#d97706" strokeWidth="2" fill="none" strokeLinecap="round" />
      </svg>
    )
  },
  "ready-bag-2": {
    id: "ready-bag-2",
    name: "كيس هدايا كرافت كلاسيك",
    price: 10,
    minQty: 1,
    isReady: true,
    desc: "كيس هدايا ورقي بيئي مصنوع من ورق كرافت البني المتين بمظهر ريفي دافئ وأنيق.",
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <path d="M30 35v45a4 4 0 004 4h32a4 4 0 004-4V35H30z" fill="#d97706" opacity="0.6" stroke="#78350f" strokeWidth="2" />
        <path d="M42 35c0-7 3-12 8-12s8 5 8 12" stroke="#78350f" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>
    )
  },
  "ready-box-2": {
    id: "ready-box-2",
    name: "صندوق هدايا بنافذة شفافة",
    price: 22,
    minQty: 1,
    isReady: true,
    desc: "علبة هدايا كرتونية أنيقة مزودة بنافذة PVC شفافة تظهر جمال ما بداخلها ومناسبة للحلويات والمخبوزات والهدايا الفنية.",
    imageSvg: (
      <svg className="w-full h-full p-8" viewBox="0 0 100 100" fill="none">
        <rect x="25" y="30" width="50" height="40" fill="#e5e7eb" stroke="#4b5563" strokeWidth="2" rx="4" />
        <rect x="35" y="40" width="30" height="20" fill="#ffffff" stroke="#9ca3af" strokeWidth="1" rx="2" opacity="0.8" />
      </svg>
    )
  }
};

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  // Find product from DB or fallback
  const product = PRODUCTS_DB[id] || PRODUCTS_DB["mailer-box"];

  // Configurator Options States
  const [size, setSize] = useState(product.sizes ? product.sizes[0] : "حجم قياسي");
  const [customW, setCustomW] = useState("20");
  const [customH, setCustomH] = useState("15");
  const [customD, setCustomD] = useState("8");
  
  const [paperType, setPaperType] = useState(product.papers ? product.papers[0]?.id : "");
  const [thickness, setThickness] = useState(product.thicknesses ? product.thicknesses[0] : "");
  const [finish, setFinish] = useState(product.finishes ? product.finishes[0]?.id : "");
  const [printSides, setPrintSides] = useState(product.hasSides ? "outer" : "none");
  const [quantity, setQuantity] = useState(product.minQty || 1);
  
  const [designService, setDesignService] = useState("uploaded");
  const [designNotes, setDesignNotes] = useState("");
  
  // Simulated File Upload States
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  
  // Toast Alert State
  const [showToast, setShowToast] = useState(false);

  // Sync initial options if product changes
  useEffect(() => {
    setSize(product.sizes ? product.sizes[0] : "حجم قياسي");
    setPaperType(product.papers ? product.papers[0]?.id : "");
    setThickness(product.thicknesses ? product.thicknesses[0] : "");
    setFinish(product.finishes ? product.finishes[0]?.id : "");
    setPrintSides(product.hasSides ? "outer" : "none");
    setQuantity(product.minQty || 1);
    setUploadedFile(null);
    setUploadProgress(0);
  }, [product]);

  // Simulate File Uploading
  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      startUploadEmulation(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      startUploadEmulation(e.target.files[0]);
    }
  };

  const startUploadEmulation = (file) => {
    setIsUploading(true);
    setUploadProgress(0);
    setUploadedFile(null);

    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsUploading(false);
          setUploadedFile({
            name: file.name,
            size: (file.size / (1024 * 1024)).toFixed(2) + " MB"
          });
          return 100;
        }
        return prev + 10;
      });
    }, 150);
  };

  // Price Calculation Logic
  const calculateCurrentPrice = () => {
    const basePrice = product.price;

    // Ready products: simple pricing
    if (product.isReady) {
      const unitPrice = basePrice;
      const subtotal = parseFloat((unitPrice * quantity).toFixed(2));
      const tax = parseFloat((subtotal * 0.15).toFixed(2));
      const total = parseFloat((subtotal + tax).toFixed(2));
      return { unitPrice, subtotal, tax, total, discountPct: 0 };
    }

    let unitMultiplier = 1.0;
    
    // Paper modifier
    if (product.papers) {
      const selectedPaperObj = product.papers.find(p => p.id === paperType);
      if (selectedPaperObj) {
        if (paperType.includes("luxury") || paperType.includes("textured") || paperType.includes("art_board_standard")) {
          unitMultiplier += 0.3;
        }
      }
    }
    
    // Sizing surface area modifier
    if (size === "custom") {
      const w = parseFloat(customW) || 10;
      const h = parseFloat(customH) || 10;
      const d = parseFloat(customD) || 5;
      const surfaceArea = (w * h + h * d + w * d) * 2;
      if (surfaceArea > 1000) unitMultiplier += 0.5;
      else if (surfaceArea > 500) unitMultiplier += 0.2;
    } else if (size && (size.includes("A4") || size.includes("25x") || size.includes("30x"))) {
      unitMultiplier += 0.2;
    } else if (size && size.includes("A3")) {
      unitMultiplier += 0.4;
    }

    // Thickness modifier
    if (thickness && thickness.includes("350g")) unitMultiplier += 0.15;
    else if (thickness && thickness.includes("400g")) unitMultiplier += 0.3;
    else if (thickness && thickness.includes("600g")) unitMultiplier += 0.5;

    // Sides print modifier
    if (printSides === "both") unitMultiplier += 0.25;

    // Finish modifier
    let extraFlatFee = 0;
    if (finish === "gold_foil") {
      unitMultiplier += 0.2;
      extraFlatFee += 50;
    } else if (finish === "spot_uv") {
      unitMultiplier += 0.15;
      extraFlatFee += 40;
    } else if (finish && finish.includes("lamination")) {
      unitMultiplier += 0.08;
    }

    // Design service
    if (designService === "needed") {
      extraFlatFee += 100;
    }

    // Bulk discount factor
    let bulkDiscount = 1.0;
    if (quantity >= 2000) bulkDiscount = 0.65;
    else if (quantity >= 1000) bulkDiscount = 0.75;
    else if (quantity >= 500) bulkDiscount = 0.85;
    else if (quantity >= 250) bulkDiscount = 0.92;

    const unitPrice = parseFloat((basePrice * unitMultiplier * bulkDiscount).toFixed(2));
    const subtotal = parseFloat((unitPrice * quantity + extraFlatFee).toFixed(2));
    const tax = parseFloat((subtotal * 0.15).toFixed(2));
    const total = parseFloat((subtotal + tax).toFixed(2));

    return { unitPrice, subtotal, tax, total, discountPct: Math.round((1 - bulkDiscount) * 100) };
  };

  const priceReport = calculateCurrentPrice();

  const handleAddToCart = () => {
    const optionsObj = product.isReady ? {
      size: "قياسي",
      customDimensions: null,
      paperType: "جاهز",
      thickness: "",
      finish: "",
      printSides: "",
      designService: "none",
      designNotes: "",
      uploadedFile: null,
      quantity,
    } : {
      size: size === "custom" ? `مخصص: ${customW}x${customH}x${customD} سم` : size,
      customDimensions: size === "custom" ? { w: parseFloat(customW), h: parseFloat(customH), d: parseFloat(customD) } : null,
      paperType: product.papers?.find(p => p.id === paperType)?.name || paperType,
      thickness,
      finish: product.finishes?.find(f => f.id === finish)?.name || finish,
      printSides: printSides === "outer" ? "طباعة وجه واحد خارجي" : printSides === "both" ? "طباعة وجهين داخلي وخارجي" : "بدون طباعة",
      designService,
      designNotes,
      uploadedFile: uploadedFile ? uploadedFile.name : null,
      quantity,
    };

    addToCart(product, optionsObj);
    
    setShowToast(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    setTimeout(() => {
      setShowToast(false);
    }, 6000);
  };

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col font-sans" dir="rtl">
      <Header />

      {/* Breadcrumb Nav */}
      <div className="bg-white border-b border-neutral-100 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-xs text-neutral-500">
          <Link to="/" className="hover:text-neutral-900 transition-colors">الرئيسية</Link>
          <span>/</span>
          <span className="text-neutral-400">تخصيص مطبوعاتك</span>
          <span>/</span>
          <span className="text-neutral-900 font-bold">{product.name}</span>
        </div>
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full relative">
        
        {/* Success Toast Notification */}
        {showToast && (
          <div className="mb-6 p-4 bg-neutral-900 border border-neutral-800 text-white rounded-2xl flex items-center justify-between gap-4 animate-scale-in shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white text-neutral-900 flex items-center justify-center font-black text-lg">✓</div>
              <div>
                <h4 className="font-bold text-sm text-white">تم إضافة طلب التخصيص بنجاح في السلة!</h4>
                <p className="text-xs text-neutral-400">يمكنك تعديل خياراتك في السلة أو الانتقال لطلب الطباعة فوراً.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link to="/cart" className="px-4 py-2 bg-white hover:bg-neutral-100 text-neutral-900 font-bold rounded-full text-xs transition-colors">عرض السلة</Link>
              <button onClick={() => setShowToast(false)} className="text-neutral-400 hover:text-white text-xs px-2 transition-colors">إغلاق</button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:items-start">
          
          {/* LEFT COLUMN: Visual Preview (Desktop Sticky, spans 5 cols) */}
          <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-28">
            <div className="bg-white rounded-3xl border border-neutral-100 p-6 shadow-sm flex flex-col items-center justify-center">
              <div className="w-full aspect-square bg-neutral-950 rounded-2xl overflow-hidden relative flex items-center justify-center">
                {product.imageSvg}
                
                {/* Specs Overlay Tag */}
                <div className="absolute bottom-4 right-4 bg-neutral-900/90 border border-neutral-800 rounded-xl p-3 text-[10px] text-neutral-300 space-y-1">
                  <span className="block font-bold text-white text-xs border-b border-neutral-800 pb-1 mb-1">المواصفات الحالية</span>
                  <span className="block">المقاس: {size === "custom" ? `${customW}x${customH}x${customD} سم` : size}</span>
                  <span className="block">السماكة: {thickness}</span>
                  <span className="block">التشطيب: {product.finishes.find(f => f.id === finish)?.name}</span>
                </div>
              </div>
              
              <div className="w-full mt-6 text-center space-y-2">
                <h2 className="text-xl font-bold text-neutral-900">{product.name}</h2>
                <p className="text-xs text-neutral-500 leading-relaxed font-light">{product.desc}</p>
              </div>
            </div>

            {/* Quick Helper info cards */}
            <div className="bg-white rounded-2xl border border-neutral-100 p-5 space-y-4">
              <h3 className="text-sm font-bold text-neutral-900 border-b border-neutral-50 pb-2">تفاصيل هامة حول الملفات:</h3>
              <ul className="text-xs text-neutral-500 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-neutral-900 font-bold">✓</span>
                  <span>نقبل الملفات بصيغ PDF, AI, PSD أو صور عالية الجودة PNG.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-900 font-bold">✓</span>
                  <span>تأكد من ترك مسافة أمان (Bleed) 2 مم على الأقل في أطراف التصميم.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-neutral-900 font-bold">✓</span>
                  <span>يقوم مهندسونا بمراجعة دقة التصميم وتطابقه مع القالب قبل البدء الفعلي للطباعة.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Purchase or Configurator (spans 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-neutral-100 p-6 md:p-8 shadow-sm space-y-8">

            {product.isReady ? (
              /* ===== READY PRODUCT: SIMPLE PURCHASE UI ===== */
              <>
                <div>
                  <h2 className="text-2xl font-black text-neutral-900">{product.name}</h2>
                  <p className="text-sm text-neutral-500 mt-2 leading-relaxed">{product.desc}</p>
                </div>
                <div className="flex items-center gap-4 py-4 border-y border-neutral-100">
                  <span className="text-3xl font-black text-neutral-900">{product.price} ريال</span>
                  <span className="text-xs text-neutral-400 bg-neutral-50 px-3 py-1.5 rounded-full">شامل الضريبة</span>
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-neutral-900">الكمية:</label>
                  <div className="flex items-center gap-3">
                    <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors text-lg font-bold">−</button>
                    <input type="number" min="1" value={quantity} onChange={(e) => { const v = parseInt(e.target.value); if (v >= 1) setQuantity(v); }} className="w-20 text-center py-2.5 border border-neutral-200 rounded-full font-bold focus:outline-none focus:ring-1 focus:ring-neutral-900" />
                    <button type="button" onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-600 hover:border-neutral-900 hover:text-neutral-900 transition-colors text-lg font-bold">+</button>
                  </div>
                </div>
                <div className="p-5 bg-neutral-900 rounded-2xl text-white space-y-4">
                  <div className="flex justify-between text-sm"><span className="text-neutral-400">السعر × {quantity}</span><span className="font-bold">{priceReport.subtotal} ريال</span></div>
                  <div className="flex justify-between text-sm"><span className="text-neutral-400">ضريبة القيمة المضافة (15%)</span><span className="font-bold">{priceReport.tax} ريال</span></div>
                  <div className="flex justify-between items-end border-t border-neutral-800 pt-3"><span className="text-xs text-neutral-500">الإجمالي</span><span className="text-2xl font-black text-white">{priceReport.total} ريال</span></div>
                </div>
                <button type="button" onClick={handleAddToCart} className="w-full py-4 bg-neutral-900 hover:bg-neutral-800 text-white font-bold rounded-full shadow-md transition-all text-sm flex items-center justify-center gap-2.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                  <span>أضف إلى السلة</span>
                </button>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  {[{ icon: "🚚", text: "توصيل سريع" }, { icon: "✅", text: "جاهز للشحن" }, { icon: "🔄", text: "إرجاع سهل" }, { icon: "💳", text: "دفع آمن" }].map((f, i) => (
                    <div key={i} className="flex items-center gap-2 p-3 bg-neutral-50 rounded-xl">
                      <span className="text-lg">{f.icon}</span>
                      <span className="text-xs font-bold text-neutral-600">{f.text}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              /* ===== CUSTOM PRODUCT: FULL CONFIGURATOR ===== */
              <>
            <div>
              <h2 className="text-2xl font-black text-neutral-900">تخصيص مواصفات الطباعة</h2>
              <p className="text-xs text-neutral-400 mt-1">حدد تفاصيل طباعة وهندسة كرتونتك/مطبوعاتك بدقة للحصول على التكلفة الفورية.</p>
            </div>

            {/* Configurator Section */}
            <div className="space-y-6">
              
              {/* Option 1: Sizes */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-neutral-900">1. الأبعاد والمقاسات:</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {product.sizes.map((s) => (
                    <button
                       key={s}
                       type="button"
                       onClick={() => setSize(s)}
                       className={`px-3 py-2.5 text-xs font-semibold rounded-full border text-center transition-all ${
                         size === s
                           ? "bg-neutral-900 border-neutral-900 text-white font-bold"
                           : "border-neutral-200 hover:border-neutral-900 text-neutral-600"
                       }`}
                     >
                      {s === "custom" ? "📐 مقاس مخصص" : `${s} سم`}
                    </button>
                  ))}
                </div>

                {/* Custom Dimensions Form */}
                {size === "custom" && (
                  <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-150 grid grid-cols-3 gap-3 animate-scale-in mt-3">
                    <div className="space-y-1">
                      <span className="block text-[10px] text-neutral-500 font-bold">الطول (سم):</span>
                      <input
                        type="number"
                        value={customW}
                        onChange={(e) => setCustomW(e.target.value)}
                        className="w-full px-3 py-1.5 border border-neutral-200 rounded-full bg-white text-xs text-center focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] text-neutral-500 font-bold">العرض (سم):</span>
                      <input
                        type="number"
                        value={customH}
                        onChange={(e) => setCustomH(e.target.value)}
                        className="w-full px-3 py-1.5 border border-neutral-200 rounded-full bg-white text-xs text-center focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] text-neutral-500 font-bold">الارتفاع/العمق (سم):</span>
                      <input
                        type="number"
                        value={customD}
                        onChange={(e) => setCustomD(e.target.value)}
                        className="w-full px-3 py-1.5 border border-neutral-200 rounded-full bg-white text-xs text-center focus:outline-none focus:ring-1 focus:ring-neutral-900"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Option 2: Paper/Materials */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-neutral-900">2. نوع المواد والورق:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.papers.map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPaperType(p.id)}
                      className={`px-4 py-3 text-xs font-semibold rounded-2xl border text-right transition-all flex items-center justify-between ${
                        paperType === p.id
                          ? "bg-neutral-100 border-neutral-900 text-neutral-900 font-bold"
                          : "border-neutral-200 hover:border-neutral-900 text-neutral-600"
                      }`}
                    >
                      <span>{p.name}</span>
                      {paperType === p.id && <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 3: Thickness & Sides */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <label className="block text-sm font-bold text-neutral-900">3. سماكة الكرتون/الورق:</label>
                  <select
                    value={thickness}
                    onChange={(e) => setThickness(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold text-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                  >
                    {product.thicknesses.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {product.hasSides && (
                  <div className="space-y-3">
                    <label className="block text-sm font-bold text-neutral-900">4. جهات الطباعة:</label>
                    <select
                      value={printSides}
                      onChange={(e) => setPrintSides(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-full border border-neutral-200 bg-white text-xs font-semibold text-neutral-700 focus:outline-none focus:ring-1 focus:ring-neutral-900"
                    >
                      <option value="outer">طباعة وجه واحد (خارجي)</option>
                      <option value="both">طباعة وجهين (داخلي وخارجي) (+25%)</option>
                      <option value="none">سادة بدون طباعة</option>
                    </select>
                  </div>
                )}
              </div>

              {/* Option 4: Finishes & Coatings */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-neutral-900">5. المعالجة واللمعان (التشطيب):</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.finishes.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      onClick={() => setFinish(f.id)}
                      className={`px-4 py-3 text-xs font-semibold rounded-2xl border text-right transition-all flex items-center justify-between ${
                        finish === f.id
                          ? "bg-neutral-100 border-neutral-900 text-neutral-900 font-bold"
                          : "border-neutral-200 hover:border-neutral-900 text-neutral-600"
                      }`}
                    >
                      <span>{f.name}</span>
                      {finish === f.id && <span className="w-1.5 h-1.5 bg-neutral-900 rounded-full"></span>}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 5: Quantity Selection */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                  <label className="block text-sm font-bold text-neutral-900">6. الكمية المطلوبة:</label>
                  <span className="text-xs font-bold text-neutral-500">أقل كمية: {product.minQty} قطعة</span>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  {[product.minQty, product.minQty * 2, 500, 1000, 2000].map((qtyPreset) => (
                    <button
                      key={qtyPreset}
                      type="button"
                      onClick={() => setQuantity(qtyPreset)}
                      className={`px-3 py-2 text-xs font-semibold rounded-full border text-center transition-all ${
                        quantity === qtyPreset
                          ? "bg-neutral-900 text-white border-neutral-900 font-bold"
                          : "border-neutral-200 hover:border-neutral-900 text-neutral-600 bg-white"
                      }`}
                    >
                      {qtyPreset}
                    </button>
                  ))}
                </div>
              </div>

              {/* Option 6: Design Service */}
              <div className="space-y-3">
                <label className="block text-sm font-bold text-neutral-900">7. خدمة التصميم:</label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setDesignService("uploaded")}
                    className={`px-4 py-3 text-xs font-semibold rounded-2xl border text-center transition-all ${
                      designService === "uploaded"
                        ? "bg-neutral-100 border-neutral-900 text-neutral-900 font-bold"
                        : "border-neutral-200 hover:border-neutral-900 text-neutral-600"
                    }`}
                  >
                    سأرفع تصميمي الجاهز
                  </button>
                  <button
                    type="button"
                    onClick={() => setDesignService("needed")}
                    className={`px-4 py-3 text-xs font-semibold rounded-2xl border text-center transition-all ${
                      designService === "needed"
                        ? "bg-neutral-100 border-neutral-900 text-neutral-900 font-bold"
                        : "border-neutral-200 hover:border-neutral-900 text-neutral-600"
                    }`}
                  >
                    أحتاج خدمة التصميم (+100 ريال)
                  </button>
                </div>

                {designService === "uploaded" ? (
                  <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className={`p-6 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center transition-all bg-neutral-50 relative ${
                      dragActive ? "border-neutral-900 bg-neutral-100/50" : "border-neutral-300 hover:border-neutral-900"
                    }`}
                  >
                    <input
                      type="file"
                      id="file-upload"
                      onChange={handleFileChange}
                      accept=".pdf,.ai,.psd,.png,.jpg,.jpeg"
                      className="hidden"
                    />
                    {!uploadedFile && !isUploading && (
                      <label htmlFor="file-upload" className="cursor-pointer space-y-2.5">
                        <svg className="w-10 h-10 text-neutral-400 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        <div className="text-xs text-neutral-600">
                          <span className="font-bold text-neutral-900 underline">اضغط هنا لرفع الملف</span> أو قم بسحبه وإفلاته هنا
                        </div>
                        <p className="text-[10px] text-neutral-400">PDF, AI, PSD, PNG (الحد الأقصى 50 ميجا بايت)</p>
                      </label>
                    )}
                    {isUploading && (
                      <div className="w-full max-w-[200px] space-y-2">
                        <span className="text-xs text-neutral-500 font-semibold block">جاري تحميل وفحص الملف... {uploadProgress}%</span>
                        <div className="w-full bg-neutral-200 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-neutral-900 h-full transition-all duration-150" style={{ width: `${uploadProgress}%` }}></div>
                        </div>
                      </div>
                    )}
                    {uploadedFile && (
                      <div className="space-y-3 animate-scale-in">
                        <div className="w-10 h-10 rounded-full bg-neutral-900 text-white flex items-center justify-center font-bold mx-auto">✓</div>
                        <div>
                          <span className="block text-xs font-bold text-neutral-900">{uploadedFile.name}</span>
                          <span className="block text-[10px] text-neutral-400">{uploadedFile.size}</span>
                        </div>
                        <button
                          type="button"
                          onClick={() => { setUploadedFile(null); setUploadProgress(0); }}
                          className="text-[10px] text-neutral-600 hover:text-neutral-900 hover:underline font-bold transition-colors"
                        >
                          حذف الملف وإعادة الرفع
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="space-y-2 animate-scale-in">
                    <label className="block text-xs text-neutral-500 font-semibold">اكتب فكرة التصميم وشعار مشروعك بالتفصيل:</label>
                    <textarea
                      value={designNotes}
                      onChange={(e) => setDesignNotes(e.target.value)}
                      placeholder="يرجى ذكر ألوان هويتك، النصوص المراد كتابتها، مواقع وضع الشعار، إلخ."
                      rows="4"
                      className="w-full p-4 rounded-2xl border border-neutral-200 focus:outline-none focus:ring-1 focus:ring-neutral-900 text-xs"
                    ></textarea>
                  </div>
                )}
              </div>

            </div>

            {/* LIVE PRICE REPORT CARD & ACTIONS */}
            <div className="p-6 bg-neutral-900 rounded-3xl text-white space-y-6">
              <div className="flex justify-between items-center border-b border-neutral-800 pb-4">
                <h3 className="font-bold text-white text-base">حاسبة تسعير الطلب الفورية</h3>
                {priceReport.discountPct > 0 && (
                  <span className="bg-neutral-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                    تم تطبيق {priceReport.discountPct}% خصم جملة! 🎉
                  </span>
                )}
              </div>

              <div className="space-y-3 text-xs text-neutral-450">
                <div className="flex justify-between">
                  <span>سعر القطعة المخصصة:</span>
                  <span className="text-white font-bold">{priceReport.unitPrice} ريال</span>
                </div>
                <div className="flex justify-between">
                  <span>الكمية:</span>
                  <span className="text-white font-bold">{quantity} قطعة</span>
                </div>
                
                {designService === "needed" && (
                  <div className="flex justify-between">
                    <span>خدمة تصميم الهوية والتفصيل:</span>
                    <span className="text-white font-bold">+100.00 ريال</span>
                  </div>
                )}

                {finish === "gold_foil" && (
                  <div className="flex justify-between">
                    <span>رسوم ضبط وتجهيز قوالب رقائق الذهب:</span>
                    <span className="text-white font-bold">+50.00 ريال</span>
                  </div>
                )}

                {finish === "spot_uv" && (
                  <div className="flex justify-between">
                    <span>رسوم ضبط وتجهيز قوالب الـ UV:</span>
                    <span className="text-white font-bold">+40.00 ريال</span>
                  </div>
                )}

                <div className="flex justify-between border-t border-neutral-850 pt-3">
                  <span>المجموع الفرعي (قبل الضريبة):</span>
                  <span className="text-white font-semibold">{priceReport.subtotal} ريال</span>
                </div>
                <div className="flex justify-between">
                  <span>ضريبة القيمة المضافة (15%):</span>
                  <span className="text-white font-semibold">{priceReport.tax} ريال</span>
                </div>
                
                <div className="flex justify-between items-end border-t border-neutral-800 pt-4">
                  <div>
                    <span className="block text-[10px] text-neutral-500">السعر الإجمالي النهائي</span>
                    <span className="text-3xl font-black text-white">{priceReport.total} ريال</span>
                  </div>
                  <span className="text-[10px] text-neutral-500 font-light">يشمل الضريبة والخيارات المختارة</span>
                </div>
              </div>

              {/* Order buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={designService === "uploaded" && !uploadedFile}
                  className={`w-full py-4 font-bold rounded-full text-center text-sm transition-all duration-200 flex items-center justify-center gap-2.5 ${
                    designService === "uploaded" && !uploadedFile
                      ? "bg-neutral-800 text-neutral-555 cursor-not-allowed border border-neutral-850"
                      : "bg-neutral-900 hover:bg-neutral-800 text-white shadow-md hover:shadow-lg"
                  }`}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>أضف طلب التخصيص للسلة</span>
                </button>

                <a
                  href={`https://wa.me/966920001234?text=مرحباً، أرغب بالاستفسار عن طباعة وتفصيل ${product.name} كمية ${quantity} قطعة.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 bg-neutral-850 hover:bg-neutral-800 border border-neutral-800 font-bold rounded-full text-center text-sm text-neutral-200 transition-all flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>استفسار فني واتساب</span>
                </a>
              </div>

              {designService === "uploaded" && !uploadedFile && (
                <p className="text-[10px] text-amber-500 text-center font-bold">⚠️ يرجى رفع ملف التصميم الخاص بك أولاً لتفعيل خيار الإضافة للسلة.</p>
              )}
            </div>
            </>
            )}

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
