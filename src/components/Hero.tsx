import React, { useState } from "react";
import { ArrowDown, Play, Phone, MapPin } from "lucide-react";
import VimeoBackground from "./VimeoBackground";

interface HeroProps {
  language: string;
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const [videoId, setVideoId] = useState(
    language == "ar" ? "1097276425" : "1097277008"
  ); // Placeholder - replace with actual Vimeo ID

  const content = {
    ar: {
      title1: "مؤسسة حكمة",
      title2: "الخبرة الطبية",
      subtitle: "H-CARE",
      description:
        "نقدم أفضل الخدمات الطبية والرعاية الصحية المتخصصة بأحدث التقنيات والمعايير العالمية",
      bookBtn: "احجز موعدك الآن",
      videoBtn: "شاهد الفيديو",
      callUs: "اتصل بنا",
      location: "موقعنا",
      locationText: "الرياض، المملكة العربية السعودية",
      discover: "اكتشف المزيد",
    },
    en: {
      title1: "Hikmat Al-Khibra",
      title2: "Medical Foundation",
      subtitle: "H-CARE",
      description:
        "We provide the best medical services and specialized healthcare with the latest technologies and international standards",
      bookBtn: "Book Your Appointment",
      videoBtn: "Watch Video",
      callUs: "Call Us",
      location: "Our Location",
      locationText: "Riyadh, Saudi Arabia",
      discover: "Discover More",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="home" className="relative">
      <VimeoBackground videoId={videoId}></VimeoBackground>
    </section>
  );
};

export default Hero;
