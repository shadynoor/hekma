import {
  ArrowLeft,
  ArrowRight,
  Award,
  Heart,
  Microscope,
  Settings,
  TestTube,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

interface ServicesProps {
  language: string;
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const content = {
    ar: {
      subtitle: "الخدمات والمنتجات",
      title: "ماذا تقدم لك حكمة الخبرة من خدمات ومنتجات؟",
      description:
        "نقدم مجموعة شاملة من الخدمات والمنتجات الطبية المتخصصة لتلبية جميع احتياجاتكم الصحية.",
      findMore: "اعرف المزيد",
      services: [
        {
          id: "Laboratory-Consumables",
          title: "المستلزمات المخبرية",
          description:
            "نقدم استشارات متخصصة لاختيار وتطبيق أفضل المعدات الطبية المناسبة لاحتياجاتكم.",
          sub1: "الأواني الزجاجية الأساسية",
          feats1: [
            "أنابيب اختبار",
            "دورق إرلنماير",
            "كؤوس زجاجية (Beakers)",
            "أسطوانة مدرجة",
            "دورق حجمي",
          ],
          sub2: "الأدوات البلاستيكية",
          feats2: [
            "أنابيب تفاعل PCR",
            "أنبوب إبندورف",
            "ألواح PCR",
            "شرائط أنابيب / أغطية",
            "أغطية لاصقة / أغطية بصرية",
            "رؤوس ماصات بفلتر",
            "طبق بتري",
            "حلقة تلقيح",
            "رؤوس ماصات",
            "دورق زراعة الخلايا",
            "ألواح ELISA",
          ],
          features: [
            "تقييم الاحتياجات",
            "اختيار المعدات",
            "التخطيط والتنفيذ",
            "المتابعة والدعم",
          ],
        },

        {
          id: "Laboratory-Equipment",
          title: "الأجهزة المخبرية",
          description: "",
          sub1: "أجهزة القياس والتحليل",
          feats1: [
            "ميزان إلكتروني",
            "جهاز قياس الأس الهيدروجيني (pH Meter)",
            "مطياف ضوئي (Spectrophotometer)",
            "جهاز طرد مركزي (Centrifuge)",
          ],
          sub2: "أجهزة التسخين والتعقيم",
          feats2: [
            "حمام مائي",
            "صفيحة تسخين مع محرك مغناطيسي",
            "الأوتوكلاف (Autoclave)",
          ],

          sub3: "أجهزة التبريد والتخزين",
          feats3: [
            "ثلاجة مخبرية",
            "مجمد مخبري (-20/-80 درجة مئوية)",
            "خزانة السلامة البيولوجية",
          ],
          sub4: "أجهزة التحليل الحيوي المتقدمة",
          feats4: [
            "جهاز PCR",
            "محلل الدم (Hematology Analyzer)",
            "محلل الكيمياء الحيوية",
            "مجهر ضوئي",
            "ماصة دقيقة (Pipette)",
          ],
          features: [
            "تقييم الاحتياجات",
            "اختيار المعدات",
            "التخطيط والتنفيذ",
            "المتابعة والدعم",
          ],
        },
        {
          id: "Microbiology-Dehydrated-Media",
          title: "وسائط مجففة لعلم الأحياء الدقيقة",
          description: "",
          sub1: "وسائط للأغراض العامة",
          feats1: [
            "آجار/مرق المغذيات",
            "آجار صويا التربتيك (TSA)",
            "تسريب دماغ قلب (BHI)",
          ],
          sub2: "وسائط مُثرية",
          feats2: ["آجار الدم الأساسي", "آجار الشوكولاتة الأساسي"],

          sub3: "وسائط انتقائية",
          feats3: ["آجار ماكونكي", "آجار مانيتول الملحي (MSA)", "آجار XLD"],

          sub4: "وسائط تفريقية",
          feats4: ["آجار EMB (إيوزين ميثيلين أزرق)", "آجار CLED"],
          features: [
            "تقييم الاحتياجات",
            "اختيار المعدات",
            "التخطيط والتنفيذ",
            "المتابعة والدعم",
          ],

          sub5: "وسائط للإثراء",
          feats5: ["مرق سيلينيت إف", "مرق التيتراثيونات"],
        },
      ],
    },

    en: {
      subtitle: "Services and Products",
      title: "What services and products does H-Care?",
      description:
        "We provide a comprehensive range of specialized medical services and products to meet all your healthcare needs.",
      findMore: "Learn More",
      services: [
        {
          id: "Laboratory-Consumables",
          title:
            "Providing specialized consulting services in the field of medical equipment",
          description:
            "We provide specialized consultations for selecting and implementing the best medical equipment suitable for your needs.",
          sub1: "Basic Glassware",
          feats1: [
            "Test Tubes",
            "Erlenmeyer Flask",
            "Beakers",
            "Graduated Cylinder",
            "Volumetric flask",
          ],
          sub2: "Plastic ware",
          feats2: [
            "PCR Tubes",
            "Eppendorf Tube",
            "PCR Plates",
            "Tube Strips / Cap Strips",
            "Adhesive Seals / Optical Caps",
            "Filtered Pipette Tips",
            "Petri dish",
            "Inoculation loop",
            "Pipette tips",
            "Cell culture flask",
            "ELISA plates",
          ],
          features: [
            "Needs Assessment",
            "Equipment Selection",
            "Planning & Implementation",
            "Follow-up & Support",
          ],
        },

        {
          id: "Laboratory-Equipment",
          title: "Laboratory Equipment",
          description: "",
          sub1: "Measurement and Analysis Instruments",
          feats1: [
            "Electronic Balance",
            "pH Meter",
            "Spectrophotometer",
            "Centrifuge",
          ],
          sub2: "Heating and Sterilization Equipment",
          feats2: [
            "Water Bath",
            "Hot Plate with Magnetic Stirrer",
            "Autoclave",
          ],

          sub3: "Refrigeration and Storage Equipment",
          feats3: [
            "Laboratory Refrigerator",
            "Laboratory Freezer (-20/-80°C)",
            "Biological Safety Cabinet",
          ],
          sub4: "Advanced Bioanalytical Equipment",
          feats4: [
            "PCR Machine",
            "Hematology Analyzer",
            "Biochemistry Analyzer",
            "Light Microscope",
            "Pipette",
          ],
          features: [
            "تقييم الاحتياجات",
            "اختيار المعدات",
            "التخطيط والتنفيذ",
            "المتابعة والدعم",
          ],
        },

        {
          id: "Microbiology-Dehydrated-Media",
          title: "Microbiology Dehydrated Media",
          description: "",
          sub1: "General Purpose Media",
          feats1: [
            "Nutrient Agar/Broth",
            "Tryptic Soy Agar (TSA)",
            "Brain Heart Infusion (BHI)",
          ],
          sub2: "Enriched Media",
          feats2: ["Blood Agar Base", "Chocolate Agar Base"],

          sub3: "Selective Media",
          feats3: ["MacConkey Agar", "Mannitol Salt Agar (MSA)", "XLD Agar"],

          sub4: "Differential Media",
          feats4: ["EMB Agar (Eosin Methylene Blue)", "CLED Agar"],
          features: [
            "تقييم الاحتياجات",
            "اختيار المعدات",
            "التخطيط والتنفيذ",
            "المتابعة والدعم",
          ],

          sub5: "Enrichment Media",
          feats5: ["Selenite F Brot", "Tetrathionate Broth"],
        },
      ],
    },
  };

  const t = content[language as keyof typeof content];
  const icons = [Microscope, Settings, Award, TestTube, Microscope, Heart];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-hcare-primary uppercase tracking-wider mb-4">
            {t.subtitle}
          </h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.map((service, index) => {
            const IconComponent = icons[index];
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-hcare-primary to-hcare-secondary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                  {service.title}
                </h4>
                <strong className="text-gray-600 mb-6 leading-relaxed">
                  {service.sub1}
                </strong>
                <ul className="space-y-2 mb-6 mt-2">
                  {service.feats1!.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-hcare-primary rounded-full me-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <strong className="text-gray-600 mb-6 leading-relaxed">
                  {service.sub2}
                </strong>
                <ul className="space-y-2 mb-6 mt-2">
                  {service.feats2!.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600"
                    >
                      <div className="w-1.5 h-1.5 bg-hcare-primary rounded-full me-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <strong className="text-gray-600 mb-6 leading-relaxed">
                  {service.sub3 && service.sub3}
                </strong>
                <ul className="space-y-2 mb-6 mt-2">
                  {service.feats3 &&
                    service.feats3.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-hcare-primary rounded-full me-3"></div>
                        {feature}
                      </li>
                    ))}
                </ul>

                <strong className="text-gray-600 mb-6 leading-relaxed">
                  {service.sub4 && service.sub4}
                </strong>
                <ul className="space-y-2 mb-6 mt-2">
                  {service.feats4 &&
                    service.feats4.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-hcare-primary rounded-full me-3"></div>
                        {feature}
                      </li>
                    ))}
                </ul>
                <strong className="text-gray-600 mb-6 leading-relaxed">
                  {service.sub5 && service.sub5}
                </strong>
                <ul className="space-y-2 mb-6 mt-2">
                  {service.feats5 &&
                    service.feats5.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-hcare-primary rounded-full me-3"></div>
                        {feature}
                      </li>
                    ))}
                </ul>

                <Link
                  to={`/hekma/category/${service.id}`}
                  className="inline-flex absolute bottom-4 items-center gap-2 text-hcare-primary hover:text-hcare-secondary font-semibold transition-colors duration-200 group/link"
                >
                  {t.findMore}
                  {language === "ar" ? (
                    <ArrowLeft
                      size={16}
                      className="transition-transform duration-200 group-hover/link:-translate-x-1"
                    />
                  ) : (
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
