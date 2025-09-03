import { ArrowLeft, ArrowRight, Calendar, Phone } from "lucide-react";
import React from "react";
import { Link, useParams } from "react-router-dom";
import img1 from "../assets/Laboratory-Consumables/1.jpg";
import img2 from "../assets/Laboratory-Consumables/2.jpg";
import img3 from "../assets/Laboratory-Consumables/3.jpg";
import img4 from "../assets/Laboratory-Consumables/4.jpg";
import img5 from "../assets/Laboratory-Consumables/5.jpg";
import img6 from "../assets/Laboratory-Consumables/plastic/1.jpg";
import img15 from "../assets/Laboratory-Consumables/plastic/10.jpg";
import img16 from "../assets/Laboratory-Consumables/plastic/11.jpg";
import img7 from "../assets/Laboratory-Consumables/plastic/2.jpg";
import img8 from "../assets/Laboratory-Consumables/plastic/3.jpg";
import img9 from "../assets/Laboratory-Consumables/plastic/4.jpg";
import img10 from "../assets/Laboratory-Consumables/plastic/5.jpg";
import img11 from "../assets/Laboratory-Consumables/plastic/6.jpg";
import img12 from "../assets/Laboratory-Consumables/plastic/7.jpg";
import img13 from "../assets/Laboratory-Consumables/plastic/8.jpg";
import img14 from "../assets/Laboratory-Consumables/plastic/9.jpg";

import image1 from "../assets/Laboratory Equipment/1.jpg";
import image10 from "../assets/Laboratory Equipment/10.jpg";
import image11 from "../assets/Laboratory Equipment/11.jpg";
import image12 from "../assets/Laboratory Equipment/12.jpg";
import image13 from "../assets/Laboratory Equipment/13.jpg";
import image14 from "../assets/Laboratory Equipment/14.jpg";
import image15 from "../assets/Laboratory Equipment/15.jpg";
import image2 from "../assets/Laboratory Equipment/2.jpg";
import image3 from "../assets/Laboratory Equipment/3.jpg";
import image4 from "../assets/Laboratory Equipment/4.jpg";
import image5 from "../assets/Laboratory Equipment/5.jpg";
import image6 from "../assets/Laboratory Equipment/6.jpg";
import image7 from "../assets/Laboratory Equipment/7.jpg";
import image8 from "../assets/Laboratory Equipment/8.jpg";
import image9 from "../assets/Laboratory Equipment/9.jpg";

import image from "../assets/Microbiology-Dehydrated/dehdrated culture media.jpg";

interface CategoryDetailProps {
  language: string;
}

window.scrollTo({
  top: 0,
  behavior: "smooth",
});

const CategoryDetail: React.FC<CategoryDetailProps> = ({ language }) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  const { categoryId } = useParams();

  const categoryData = {
    ar: {
      "Laboratory-Consumables": {
        title: "المستلزمات المخبرية",
        image: "",
        sec1Title: "الأواني الزجاجية الأساسية",
        services: [
          {
            title: "أنابيب اختبار",
            desc: "تُستخدم أنابيب الاختبار لحفظ أو تسخين أو خلط كميات صغيرة من السوائل.",
            img: img1,
          },
          {
            title: "دورق إرلنماير",
            desc: "دورق مخروطي الشكل يُستخدم للخلط والتسخين والتخزين، ويتميز برقبة ضيقة تمنع الانسكاب.",
            img: img2,
          },
          {
            title: "الكؤوس الزجاجية (Beakers)",
            desc: "حاوية واسعة الفم تُستخدم لتحضير وخلط وتسخين المواد الكيميائية.",
            img: img3,
          },
          {
            title: "أسطوانة مدرجة",
            desc: "وعاء طويل وضيّق يُستخدم لقياس أحجام السوائل بدقة أكثر من الكأس.",
            img: img4,
          },
          {
            title: "دورق حجمي",
            desc: "وعاء زجاجي ذو قاعدة مستديرة ورقبة ضيقة يُستخدم لقياس حجم محدد من السائل بدقة عالية.",
            img: img5,
          },
        ],
        sec2Title: "الأدوات البلاستيكية",
        features: [
          {
            title: "أنابيب PCR",
            desc: "أنابيب صغيرة ذات جدران رفيعة مصممة لنقل الحرارة بكفاءة في أجهزة الـ PCR.",
            img: img6,
          },
          {
            title: "أنبوب إبندورف",
            desc: "أنبوب بلاستيكي صغير مخروطي الشكل يُعرف أيضاً بأنبوب الطرد المركزي الصغير.",
            img: img7,
          },
          {
            title: "ألواح PCR",
            desc: "ألواح 96 أو 384 بئراً تُستخدم للتفاعلات عالية الإنتاجية وخاصة في qPCR.",
            img: img8,
          },
          {
            title: "شرائط الأنابيب / الأغطية",
            desc: "شرائط من 8 أو 12 أنبوب مع أغطية مطابقة لتقليل التبخر والتلوث.",
            img: img9,
          },
          {
            title: "أغطية لاصقة / بصرية",
            desc: "تُستخدم لإغلاق ألواح PCR وخاصة في PCR اللحظي (Real-Time) للسماح بالكشف البصري.",
            img: img10,
          },
          {
            title: "رؤوس ماصات بفلتر",
            desc: "تمنع انتقال الهباء الجوي أثناء تحضير تفاعلات PCR.",
            img: img11,
          },
          {
            title: "طبق بتري",
            desc: "وعاء دائري مسطح يُستخدم بشكل أساسي لزراعة الكائنات الحية الدقيقة.",
            img: img12,
          },
          {
            title: "حلقة تلقيح",
            desc: "أداة بلاستيكية معقمة تُستخدم لنقل أحجام صغيرة من العينات الميكروبية، تُستخدم لمرة واحدة لتجنب التلوث.",
            img: img13,
          },
          {
            title: "رؤوس ماصات",
            desc: "قطع بلاستيكية تستخدم مع الماصات لنقل كميات دقيقة من السوائل.",
            img: img14,
          },
          {
            title: "دورق زراعة الخلايا",
            desc: "وعاء بلاستيكي أو زجاجي معقم مُصمم خصيصاً لنمو الخلايا في ظروف معملية مضبوطة.",
            img: img15,
          },
          {
            title: "ألواح ELISA",
            desc: "ألواح بلاستيكية متعددة الآبار تُستخدم كأوعية للتفاعلات الكيميائية في اختبار ELISA.",
            img: img16,
          },
        ],
        sec3Title: "",
        feat3: [],
        sec4Title: "",
        feat4: [],
        stats: [
          { number: "200+", label: "مشروع استشاري" },
          { number: "15+", label: "سنة خبرة" },
          { number: "98%", label: "رضا العملاء" },
          { number: "50+", label: "عميل راضي" },
        ],
        multiple: [],
      },

      "Laboratory-Equipment": {
        title: "الأجهزة المخبرية",
        image: "",
        sec1Title: "أجهزة القياس والتحليل",
        services: [
          {
            title: "ميزان إلكتروني",
            desc: "يُستخدم لقياس الكتلة بدقة عالية.",
            img: image1,
          },
          {
            title: "جهاز قياس pH",
            desc: "يقيس درجة الحموضة أو القلوية بدقة.",
            img: image2,
          },
          {
            title: "مطياف ضوئي",
            desc: "يُحلل تركيز المواد من خلال امتصاص الضوء.",
            img: image3,
          },
          {
            title: "جهاز طرد مركزي",
            desc: "يفصل العينات السائلة بناءً على الكثافة بالدوران السريع.",
            img: image4,
          },
        ],
        sec2Title: "أجهزة التسخين والتعقيم",
        features: [
          {
            title: "حمام مائي",
            desc: "يحافظ على درجات حرارة ثابتة وآمنة لتسخين العينات.",
            img: image5,
          },
          {
            title: "صفيحة تسخين مع محرك مغناطيسي",
            desc: "تُسخن وتُحرك العينات تلقائياً لضمان التجانس.",
            img: image6,
          },
          {
            title: "أوتوكلاف",
            desc: "جهاز تعقيم بالبخار عالي الضغط لتعقيم المعدات والمواد.",
            img: image7,
          },
        ],
        sec3Title: "أجهزة التبريد والتخزين",
        feat3: [
          {
            title: "ثلاجة مخبرية",
            desc: "تُستخدم لتخزين الكواشف والعينات في درجات حرارة منخفضة.",
            img: image8,
          },
          {
            title: "مجمد مخبري (-20/-80°C)",
            desc: "يحافظ على المواد البيولوجية الحساسة لفترات طويلة.",
            img: image9,
          },
          {
            title: "خزانة السلامة البيولوجية",
            desc: "تحمي المستخدم والعينات والبيئة أثناء التعامل مع المواد البيولوجية الخطرة.",
            img: image10,
          },
        ],
        sec4Title: "الأجهزة الحيوية التحليلية المتقدمة",
        feat4: [
          {
            title: "جهاز PCR",
            desc: "يُستخدم لتضخيم الحمض النووي لأغراض التحليل الجيني والفيروسي.",
            img: image11,
          },
          {
            title: "محلل الدم",
            desc: "يجري تعداد دم كامل ويحلل مكوناته.",
            img: image12,
          },
          {
            title: "محلل الكيمياء الحيوية",
            desc: "يقيس مؤشرات كيميائية مثل الجلوكوز والإنزيمات والبروتينات في الدم.",
            img: image13,
          },
          {
            title: "مجهر ضوئي",
            desc: "يُكبر العينات المجهرية مثل الخلايا والبكتيريا لعرضها.",
            img: image14,
          },
          {
            title: "ماصة دقيقة",
            desc: "أداة دقيقة لقياس ونقل أحجام صغيرة جداً من السوائل.",
            img: image15,
          },
        ],
        stats: [
          { number: "200+", label: "مشروع استشاري" },
          { number: "15+", label: "سنة خبرة" },
          { number: "98%", label: "رضا العملاء" },
          { number: "50+", label: "عميل راضي" },
        ],
        multiple: [],
      },

      "Microbiology-Dehydrated-Media": {
        title: "وسائط مجففة لعلم الأحياء الدقيقة",
        image: image,
        sec1Title: "وسائط مزروعة مجففة",
        services: [],
        sec2Title: "",
        features: [],
        sec3Title: "",
        feat3: [],
        sec4Title: "",
        feat4: [],
        stats: [
          { number: "200+", label: "مشروع استشاري" },
          { number: "15+", label: "سنة خبرة" },
          { number: "98%", label: "رضا العملاء" },
          { number: "50+", label: "عميل راضي" },
        ],
        multiple: [
          {
            title: "وسائط للأغراض العامة",
            children: [
              { title: "آجار المغذيات", desc: "وسط أساسي للزراعة الروتينية." },
              {
                title: "آجار صويا التربتيك (TSA)",
                desc: "وسط غني معتمد على الصويا لنمو البكتيريا.",
              },
              {
                title: "تسريب دماغ قلب (BHI)",
                desc: "يدعم نمو الكائنات الدقيقة صعبة التغذية.",
              },
            ],
          },
          {
            title: "وسائط مُثرية",
            children: [
              { title: "آجار الدم الأساسي", desc: "يتطلب إضافة دم معقم." },
              {
                title: "آجار الشوكولاتة الأساسي",
                desc: "يُستخدم لنمو النيسرية والهيموفيلس بعد إضافة دم محلل.",
              },
            ],
          },
          {
            title: "وسائط انتقائية",
            children: [
              {
                title: "آجار ماكونكي",
                desc: "انتقائي للبكتيريا سالبة الجرام ويفرق بين المخمرة لسكريات اللاكتوز.",
              },
              {
                title: "آجار مانيتول الملحي (MSA)",
                desc: "انتقائي للمكورات العنقودية.",
              },
              {
                title: "آجار XLD",
                desc: "يُستخدم لعزل السالمونيلا والشيغيلا.",
              },
            ],
          },
          {
            title: "وسائط تفريقية",
            children: [
              {
                title: "آجار EMB (إيوزين ميثيلين أزرق)",
                desc: "يفرق بين البكتيريا المخمرة للاكتوز.",
              },
              {
                title: "آجار CLED",
                desc: "يُستخدم لعدوى المسالك البولية ويمنع انتشار بروتيوس.",
              },
            ],
          },
          {
            title: "وسائط للإثراء",
            children: [
              { title: "مرق سيلينيت إف", desc: "وسط إغناء للسالمونيلا." },
              {
                title: "مرق التيتراثيونات",
                desc: "يُستخدم أيضاً للعوامل الممرضة المعوية.",
              },
            ],
          },
          {
            title: "وسائط النقل (أساس مجفف)",
            children: [
              { title: "وسط Amies", desc: "" },
              { title: "وسط Stuart", desc: "" },
            ],
          },
          {
            title: "وسائط لا هوائية",
            children: [
              { title: "وسط الثيوغليكولات", desc: "" },
              { title: "وسط اللحم المطبوخ", desc: "" },
            ],
          },
          {
            title: "وسائط متخصصة",
            children: [
              {
                title: "آجار سابورود ديكستروز (SDA)",
                desc: "يُستخدم لزراعة الفطريات.",
              },
              {
                title: "وسط لوفنشتاين-جنسن",
                desc: "يُستخدم لعزل المتفطرة السلية.",
              },
            ],
          },
        ],
      },
    },

    en: {
      "Laboratory-Consumables": {
        title: "Laboratory Consumables",
        image: "",
        sec1Title: "Basic Glassware",
        services: [
          {
            title: "Test Tubes",
            desc: "Test Tube Used to hold, heat, or mix small quantities of liquids.",
            img: img1,
          },
          {
            title: "Erlenmeyer Flask",
            desc: "A conical flask used for mixing, heating, and storing solutions. Its narrow neck helps prevent spillage.",
            img: img2,
          },
          {
            title: "Beakers",
            desc: "A wide-mouthed glass container used for preparing, mixing, and heating chemicals.",
            img: img3,
          },
          {
            title: "Graduated Cylinder",
            desc: "A tall, narrow container used to measure liquid volumes more accurately than a beaker.",
            img: img4,
          },
          {
            title: "Volumetric flask",
            desc: "A volumetric flask is a glass container with a round bottom and a long, narrow neck, used in chemical laboratories to measure a specific volume of liquid with high accuracy. ",
            img: img5,
          },
        ],
        sec2Title: "Plastic ware",
        features: [
          {
            title: "PCR Tubes",
            desc: "Small, thin-walled tubes (typically 0.2 mL or 0.5 mL) designed for optimal heat transfer in thermal cyclers.",
            img: img6,
          },
          {
            title: "Eppendorf Tube",
            desc: "An Eppendorf tube—also known as a microcentrifuge tube—is a small, plastic, conical tube",
            img: img7,
          },
          {
            title: "PCR Plates",
            desc: "96-well or 384-well plates used for high-throughput PCR reactions, especially in qPCR (real-time PCR).",
            img: img8,
          },
          {
            title: "Tube Strips / Cap Strips",
            desc: "8-tube or 12-tube strips often used with matching caps to prevent evaporation and contamination.",
            img: img9,
          },
          {
            title: "Adhesive Seals / Optical Caps",
            desc: "Used to seal PCR plates, especially in real-time PCR, to allow for optical detection.",
            img: img10,
          },
          {
            title: "Filtered Pipette Tips",
            desc: "Filter Pipette Tips are used to prevent aerosol contamination during PCR reaction setup.",
            img: img11,
          },
          {
            title: "Petri dish",
            desc: "A Petri dish is a flat, round container used primarily to culture microorganisms such as bacteria, fungi, or cells.",
            img: img12,
          },
          {
            title: "Inoculation loop",
            desc: "A disposable inoculation loop is a pre-sterilized plastic instrument, typically made of polystyrene or polypropylene, with a loop at the end designed to hold a small, precise volume of liquid or microbial culture (e.g., 1 µL or 10 µL). It is thrown away after one use to prevent cross-contamination.",
            img: img13,
          },
          {
            title: "Pipette tips",
            desc: "Disposable attachments used with pipettes to aspirate and dispense precise volumes of liquid in laboratory .",
            img: img14,
          },
          {
            title: "Cell culture flask",
            desc: "A cell culture flask is a sterile, plastic or glass container specifically designed for growing and maintaining cells under controlled laboratory conditions.",
            img: img15,
          },
          {
            title: "ELISA plates",
            desc: "Microplates or microtiter plates are flat, rectangular plastic plates with multiple small wells used as reaction vessels in ELISA (Enzyme-Linked Immunosorbent Assay)",
            img: img16,
          },
        ],

        sec3Title: "",
        feat3: [],
        sec4Title: "",
        feat4: [],

        stats: [
          { number: "200+", label: "مشروع استشاري" },
          { number: "15+", label: "سنة خبرة" },
          { number: "98%", label: "رضا العملاء" },
          { number: "50+", label: "عميل راضي" },
        ],
        multiple: [],
      },
      "Laboratory-Equipment": {
        title: "Laboratory Equipment",
        image: "",
        sec1Title: "Measurement and Analysis Instruments",
        services: [
          {
            title: "Electronic Balance",
            desc: "Used for high-precision measurement of mass.",
            img: image1,
          },
          {
            title: "pH Meter",
            desc: "Measures the acidity or alkalinity of solutions accurately.",
            img: image2,
          },
          {
            title: "Spectrophotometer",
            desc: "Analyzes the concentration of substances by measuring light absorption.",
            img: image3,
          },
          {
            title: "Centrifuge",
            desc: "Separates liquid samples based on density using rapid spinning.",
            img: image4,
          },
        ],
        sec2Title: "Heating and Sterilization Equipment",
        features: [
          {
            title: "Water Bath",
            desc: "Maintains constant, safe temperatures for heating samples.",
            img: image5,
          },
          {
            title: "Hot Plate with Magnetic Stirrer",
            desc: "Heats and stirs samples automatically to ensure uniformity.",
            img: image6,
          },
          {
            title: "Autoclave",
            desc: "A high-pressure steam sterilizer used to disinfect lab equipment and materials.",
            img: image7,
          },
        ],
        sec3Title: "Refrigeration and Storage Equipment",
        feat3: [
          {
            title: "Laboratory Refrigerator",
            desc: "Stores reagents and samples at low temperatures.",
            img: image8,
          },
          {
            title: "Laboratory Freezer (-20/-80°C)",
            desc: "Preserves sensitive biological materials for extended periods.",
            img: image9,
          },
          {
            title: "Biological Safety Cabinet",
            desc: "Protects users, samples, and the environment while handling hazardous biological materials.",
            img: image10,
          },
        ],
        sec4Title: "Advanced Bioanalytical Equipment",
        feat4: [
          {
            title: "PCR Machine",
            desc: "Amplifies DNA for genetic and viral analysis.",
            img: image11,
          },
          {
            title: "Hematology Analyzer",
            desc: "Performs complete blood counts and analyzes blood components.",
            img: image12,
          },
          {
            title: "Biochemistry Analyzer",
            desc: "Measures chemical markers like glucose, enzymes, and proteins in blood.",
            img: image13,
          },
          {
            title: "Light Microscope",
            desc: "Magnifies and allows visualization of microscopic samples such as cells and bacteria.",
            img: image14,
          },
          {
            title: "Pipette",
            desc: "A precise instrument used to measure and transfer very small volumes of liquids.",
            img: image15,
          },
        ],
        stats: [
          { number: "200+", label: "مشروع استشاري" },
          { number: "15+", label: "سنة خبرة" },
          { number: "98%", label: "رضا العملاء" },
          { number: "50+", label: "عميل راضي" },
        ],
        multiple: [],
      },
      "Microbiology-Dehydrated-Media": {
        title: "Microbiology Dehydrated Media ",
        image: image,
        sec1Title: "Dehydrated Culture Media",
        services: [],
        sec2Title: "",
        features: [],
        sec3Title: "",
        feat3: [],
        sec4Title: "",
        feat4: [],
        stats: [
          { number: "200+", label: "مشروع استشاري" },
          { number: "15+", label: "سنة خبرة" },
          { number: "98%", label: "رضا العملاء" },
          { number: "50+", label: "عميل راضي" },
        ],
        multiple: [
          {
            title: "General Purpose Media",
            children: [
              {
                title: "Nutrient Agar",
                desc: "Basic media for routine cultivation.",
              },
              {
                title: "Tryptic Soy Agar (TSA)",
                desc: "Rich, soy-based media for bacterial growth.",
              },
              {
                title: "Brain Heart Infusion (BHI)",
                desc: "Supports fastidious organisms.",
              },
            ],
          },
          {
            title: "Enriched Media",
            children: [
              {
                title: "Blood Agar Base",
                desc: "Requires supplementation with sterile blood.",
              },
              {
                title: "Chocolate Agar Base",
                desc: "Used for growing Neisseria and Haemophilus after adding lysed blood.",
              },
            ],
          },
          {
            title: "Selective Media",
            children: [
              {
                title: "MacConkey Agar",
                desc: "Selective for Gram-negative, differentiates lactose fermenters.",
              },
              {
                title: "Mannitol Salt Agar (MSA)",
                desc: "Selective for Staphylococci.",
              },
              {
                title: "XLD Agar",
                desc: " For isolating Salmonella and Shigella.",
              },
            ],
          },
          {
            title: "Differential Media",
            children: [
              {
                title: "EMB Agar (Eosin Methylene Blue)",
                desc: "Differentiates lactose fermenters.",
              },
              {
                title: "CLED Agar",
                desc: "For urinary pathogens, prevents swarming of Proteus.",
              },
            ],
          },
          {
            title: "Enrichment Media",
            children: [
              {
                title: "Selenite F Broth",
                desc: "Enrichment for Salmonella.",
              },
              {
                title: "Tetrathionate Broth",
                desc: "Also used for enteric pathogens.",
              },
            ],
          },
          {
            title: "Transport Media (Dehydrated Base)",
            children: [
              {
                title: "Amies Medium Base",
                desc: "",
              },
              {
                title: "Stuart’s Medium Base",
                desc: "",
              },
            ],
          },
          {
            title: "Anaerobic Media",
            children: [
              {
                title: "Thioglycollate Medium",
                desc: "",
              },
              {
                title: "Cooked Meat Medium",
                desc: "",
              },
            ],
          },
          {
            title: "Specialized Media",
            children: [
              {
                title: "Sabouraud Dextrose Agar (SDA)",
                desc: "For fungal culture.",
              },
              {
                title: "Lowenstein-Jensen Medium Base",
                desc: "For Mycobacterium tuberculosis.",
              },
            ],
          },
        ],
      },
    },
  };

  const t = categoryData[language as keyof typeof categoryData];
  const category = t[categoryId as keyof typeof t];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {language === "ar" ? "القسم غير موجود" : "Category Not Found"}
          </h1>
          <Link
            to="/"
            className="text-hcare-primary hover:text-hcare-secondary font-semibold"
          >
            {language === "ar" ? "العودة للرئيسية" : "Back to Home"}
          </Link>
        </div>
      </div>
    );
  }

  const backText = language === "ar" ? "العودة للخدمات" : "Back to Services";
  const contactText = language === "ar" ? "تواصل معنا" : "Contact Us";
  const callText = language === "ar" ? "اتصل بنا" : "Call Us";
  // const servicesTitle = language === "ar" ? "خدماتنا" : "Our Services";
  // const featuresTitle = language === "ar" ? "مميزاتنا" : "Our Features";
  const statsTitle = language === "ar" ? "إحصائياتنا" : "Our Statistics";

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-hcare-primary to-hcare-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center gap-2 text-hcare-light hover:text-white transition-colors duration-200"
              >
                {language === "ar" ? (
                  <ArrowRight size={20} />
                ) : (
                  <ArrowLeft size={20} />
                )}
                {backText}
              </button>

              <div>
                <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                  {category.title}
                </h1>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to={`/hekma#${"contact"}`}
                  className="bg-white text-hcare-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Calendar size={20} />
                  {contactText}
                </Link>
                <a
                  href="tel:+966570062075"
                  className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-hcare-primary transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  <Phone size={20} />
                  {callText}
                </a>
              </div>
            </div>
            {category.image && category.image !== "" && (
              <div className="relative">
                <img
                  src={category.image}
                  alt={category.title}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {category.sec1Title && category.sec1Title}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.multiple &&
              category.multiple.length > 0 &&
              category.multiple.map((elem, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-12 text-center">
                    {elem.title && elem.title}
                  </h3>

                  {elem.children && elem.children.length > 0 && (
                    <div className="space-y-4">
                      {elem.children.map((child, cIndex) => (
                        <div key={cIndex} className="flex items-start gap-4">
                          {/* <CheckCircle size={20} className="text-hcare-primary mt-1" /> */}
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {child.title}
                            </h4>
                            <p className="text-gray-600">{child.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.services &&
              category.services.length > 0 &&
              category.services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    {/* <div className="text-sm font-medium text-hcare-primary mb-2">
                    {service.title}
                  </div> */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={
          category.features && category.features.length > 0
            ? "py-20 bg-gray-50"
            : "hidden"
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {category.sec2Title && category.sec2Title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.features &&
              category.features.length > 0 &&
              category.features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    {/* <div className="text-sm font-medium text-hcare-primary mb-2">
                    {feature.title}
                  </div> */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className={
          category.feat3 && category.feat3.length > 0
            ? "py-20 bg-white"
            : "hidden"
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {category.sec3Title && category.sec3Title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.feat3 &&
              category.feat3.length > 0 &&
              category.feat3.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    {/* <div className="text-sm font-medium text-hcare-primary mb-2">
                    {service.title}
                  </div> */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className={
          category.feat4 && category.feat4.length > 0
            ? "py-20 bg-gray-50"
            : "hidden"
        }
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            {category.sec4Title && category.sec4Title}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.feat4 &&
              category.feat4.length > 0 &&
              category.feat4.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={feature.img}
                      alt={feature.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  <div className="p-6">
                    {/* <div className="text-sm font-medium text-hcare-primary mb-2">
                    {feature.title}
                  </div> */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-hcare-primary text-white hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">{statsTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {category.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-hcare-light">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {language === "ar"
              ? "هل تحتاج لاستشارة متخصصة؟"
              : "Need a Specialized Consultation?"}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {language === "ar"
              ? "فريقنا المتخصص جاهز لتقديم أفضل الحلول والخدمات لك"
              : "Our specialized team is ready to provide you with the best solutions and services"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-hcare-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-hcare-secondary transition-colors duration-200 flex items-center justify-center gap-2">
              <Calendar size={20} />
              {contactText}
            </button>
            <a
              href="tel:+966570062075"
              dir="ltr"
              className="border-2 border-hcare-primary text-hcare-primary px-8 py-4 rounded-full font-semibold hover:bg-hcare-primary hover:text-white transition-colors duration-200 flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              +966 57 006 2075
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;
