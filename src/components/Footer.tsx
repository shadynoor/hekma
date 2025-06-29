import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Heart,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import logo2 from "../assets/logo2.png";

interface FooterProps {
  language: string;
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  const content = {
    ar: {
      description:
        "مؤسسة حكمة الخبرة الطبية - نقدم أفضل الخدمات الطبية والرعاية الصحية المتخصصة بأحدث التقنيات والمعايير العالمية.",
      copyright: "© 2024 H-CARE مؤسسة حكمة الخبرة الطبية. جميع الحقوق محفوظة.",
      madeWith: "صُنع بـ",
      team: "من فريق H-CARE",
    },
    en: {
      description:
        "H-CARE Hikmat Al-Khibra Medical Foundation - We provide the best medical services and specialized healthcare with the latest technologies and international standards.",
      copyright:
        "© 2024 H-CARE Hikmat Al-Khibra Medical Foundation. All rights reserved.",
      madeWith: "Made with",
      team: "by H-CARE Team",
    },
  };

  const t = content[language as keyof typeof content];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl margin-inline-auto padding-inline-4 sm:padding-inline-6 lg:padding-inline-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <img src={logo2} alt="H-CARE" className="h-16 mb-4" />
            <p className="text-gray-400 leading-relaxed mb-6">
              {t.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-inline-3 text-sm text-gray-400">
                <Phone size={16} className="text-hcare-primary" />
                <span dir="ltr">+966 11 123 4567</span>
              </div>
              <div className="flex items-center gap-inline-3 text-sm text-gray-400">
                <Mail size={16} className="text-hcare-primary" />
                <span>info@hcare.sa</span>
              </div>
              <div className="flex items-center gap-inline-3 text-sm text-gray-400">
                <MapPin size={16} className="text-hcare-primary" />
                <span>
                  {language === "ar"
                    ? "الرياض، المملكة العربية السعودية"
                    : "Riyadh, Saudi Arabia"}
                </span>
              </div>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="flex gap-inline-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-hcare-primary transition-colors duration-300 group"
                >
                  <social.icon
                    size={20}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="lg:col-span-1 text-center lg:text-align-end">
            <div className="text-gray-400 text-sm mb-2">{t.copyright}</div>
            <div className="flex items-center justify-center lg:justify-end gap-inline-2 text-gray-400 text-sm">
              <span>{t.madeWith}</span>
              <Heart size={16} className="text-hcare-primary fill-current" />
              <span>{t.team}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
