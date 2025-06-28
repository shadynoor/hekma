import React, { useState } from 'react';
import { Award, Users, Zap, Target, ChevronDown, ChevronUp } from 'lucide-react';

interface AboutProps {
  language: string;
}

const About: React.FC<AboutProps> = ({ language }) => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);

  const content = {
    ar: {
      subtitle: 'من نحن',
      title: 'نصنع التميز الطبي منذ عام 2009',
      description: 'نحن فريق متخصص من الأطباء والمختصين المتفانين في تقديم تجارب طبية استثنائية تحقق النتائج وتلهم المرضى بأحدث التقنيات والمعايير العالمية.',
      accordionItems: [
        {
          title: 'رؤيتنا',
          content: 'أن نكون المؤسسة الطبية الرائدة في المملكة العربية السعودية، نقدم أعلى مستويات الرعاية الصحية المتخصصة والمبتكرة، ونساهم في بناء مجتمع صحي متقدم يواكب أفضل المعايير العالمية.'
        },
        {
          title: 'رسالتنا',
          content: 'نلتزم بتقديم خدمات طبية متميزة وشاملة تركز على المريض، من خلال فريق طبي متخصص وتقنيات متطورة، مع ضمان الجودة والسلامة في بيئة طبية مريحة وداعمة.'
        },
        {
          title: 'قيمنا',
          content: 'التميز في الخدمة الطبية، الشفافية والصدق مع المرضى، الابتكار في العلاج، العمل بروح الفريق الواحد، والالتزام بأعلى معايير الأخلاق الطبية والمهنية.'
        },
        {
          title: 'إنجازاتنا',
          content: 'حققنا العديد من الإنجازات المهمة منذ تأسيسنا، بما في ذلك علاج أكثر من 10,000 مريض، إجراء أكثر من 5,000 عملية ناجحة، والحصول على شهادات الجودة الدولية.'
        }
      ],
      stats: [
        { label: 'سنوات الخبرة', value: '15+' },
        { label: 'المرضى السعداء', value: '10000+' },
        { label: 'العمليات الناجحة', value: '5000+' },
        { label: 'معدل النجاح', value: '99%' }
      ]
    },
    en: {
      subtitle: 'About Us',
      title: 'Creating Medical Excellence Since 2009',
      description: 'We are a specialized team of dedicated doctors and specialists committed to delivering exceptional medical experiences that achieve results and inspire patients with the latest technologies and international standards.',
      accordionItems: [
        {
          title: 'Our Vision',
          content: 'To be the leading medical institution in Saudi Arabia, providing the highest levels of specialized and innovative healthcare, and contributing to building an advanced healthy society that keeps pace with the best international standards.'
        },
        {
          title: 'Our Mission',
          content: 'We are committed to providing excellent and comprehensive medical services that focus on the patient, through a specialized medical team and advanced technologies, while ensuring quality and safety in a comfortable and supportive medical environment.'
        },
        {
          title: 'Our Values',
          content: 'Excellence in medical service, transparency and honesty with patients, innovation in treatment, teamwork spirit, and commitment to the highest standards of medical and professional ethics.'
        },
        {
          title: 'Our Achievements',
          content: 'We have achieved many important milestones since our establishment, including treating more than 10,000 patients, performing more than 5,000 successful operations, and obtaining international quality certifications.'
        }
      ],
      stats: [
        { label: 'Years of Experience', value: '15+' },
        { label: 'Happy Patients', value: '10000+' },
        { label: 'Successful Operations', value: '5000+' },
        { label: 'Success Rate', value: '99%' }
      ]
    }
  };

  const t = content[language as keyof typeof content];
  const stats = [
    { icon: Award, label: t.stats[0].label, value: t.stats[0].value },
    { icon: Users, label: t.stats[1].label, value: t.stats[1].value },
    { icon: Zap, label: t.stats[2].label, value: t.stats[2].value },
    { icon: Target, label: t.stats[3].label, value: t.stats[3].value },
  ];

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl margin-inline-auto padding-inline-4 sm:padding-inline-6 lg:padding-inline-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-hcare-primary uppercase tracking-wider mb-4">{t.subtitle}</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl margin-inline-auto">
            {t.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Accordion */}
          <div className="space-y-4">
            {t.accordionItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full padding-inline-6 py-4 text-align-start flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                >
                  <h4 className="text-lg font-semibold text-gray-900">{item.title}</h4>
                  {openAccordion === index ? (
                    <ChevronUp size={20} className="text-hcare-primary" />
                  ) : (
                    <ChevronDown size={20} className="text-hcare-primary" />
                  )}
                </button>
                {openAccordion === index && (
                  <div className="padding-inline-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{item.content}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-br from-hcare-light to-hcare-light/50 rounded-2xl p-8 transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-hcare-primary to-hcare-secondary rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon size={28} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;