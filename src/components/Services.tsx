import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Settings, Award, TestTube, Microscope, Heart, ArrowRight, ArrowLeft } from 'lucide-react';

interface ServicesProps {
  language: string;
}

const Services: React.FC<ServicesProps> = ({ language }) => {
  const content = {
    ar: {
      subtitle: 'الخدمات والمنتجات',
      title: 'ماذا تقدم لك حكمة الخبرة من خدمات ومنتجات؟',
      description: 'نقدم مجموعة شاملة من الخدمات والمنتجات الطبية المتخصصة لتلبية جميع احتياجاتكم الصحية.',
      findMore: 'اعرف المزيد',
      services: [
        {
          id: 'medical-consulting',
          title: 'توفير خدمات استشارية متخصصة في مجال المعدات الطبية',
          description: 'نقدم استشارات متخصصة لاختيار وتطبيق أفضل المعدات الطبية المناسبة لاحتياجاتكم.',
          features: ['تقييم الاحتياجات', 'اختيار المعدات', 'التخطيط والتنفيذ', 'المتابعة والدعم']
        },
        {
          id: 'equipment-maintenance',
          title: 'صيانة وتركيب المعدات الطبية',
          description: 'خدمات صيانة وتركيب شاملة للمعدات الطبية لضمان الأداء الأمثل والسلامة.',
          features: ['صيانة دورية', 'إصلاح طارئ', 'تركيب احترافي', 'ضمان الجودة']
        },
        {
          id: 'technical-support',
          title: 'تقديم خدمات الدعم الفني والتدريب للمختبرات',
          description: 'دعم فني متخصص وبرامج تدريبية شاملة لفرق المختبرات الطبية.',
          features: ['دعم فني 24/7', 'برامج تدريبية', 'استشارات تقنية', 'تطوير المهارات']
        },
        {
          id: 'laboratory-supplies',
          title: 'مستلزمات مختبرات طبية استهلاكية',
          description: 'توفير جميع المستلزمات الاستهلاكية عالية الجودة للمختبرات الطبية.',
          features: ['مواد استهلاكية', 'أدوات تشخيص', 'مواد كيميائية', 'معايير الجودة']
        },
        {
          id: 'advanced-equipment',
          title: 'أجهزة ومعدات مختبرات طبية متطورة',
          description: 'أحدث الأجهزة والمعدات الطبية المتطورة للمختبرات والمراكز الطبية.',
          features: ['تقنيات حديثة', 'دقة عالية', 'سهولة الاستخدام', 'ضمان شامل']
        },
        {
          id: 'veterinary-solutions',
          title: 'حلول وتقنيات بيطرية متخصصة',
          description: 'حلول طبية متخصصة للطب البيطري مع أحدث التقنيات والمعدات.',
          features: ['معدات بيطرية', 'أدوية متخصصة', 'أدوات جراحية', 'نظم تشخيص']
        }
      ]
    },
    en: {
      subtitle: 'Services and Products',
      title: 'What services and products does Hikmat Al-Khibra offer you?',
      description: 'We provide a comprehensive range of specialized medical services and products to meet all your healthcare needs.',
      findMore: 'Learn More',
      services: [
        {
          id: 'medical-consulting',
          title: 'Providing specialized consulting services in the field of medical equipment',
          description: 'We provide specialized consultations for selecting and implementing the best medical equipment suitable for your needs.',
          features: ['Needs Assessment', 'Equipment Selection', 'Planning & Implementation', 'Follow-up & Support']
        },
        {
          id: 'equipment-maintenance',
          title: 'Maintenance and installation of medical equipment',
          description: 'Comprehensive maintenance and installation services for medical equipment to ensure optimal performance and safety.',
          features: ['Periodic Maintenance', 'Emergency Repair', 'Professional Installation', 'Quality Assurance']
        },
        {
          id: 'technical-support',
          title: 'Providing technical support and training services for laboratories',
          description: 'Specialized technical support and comprehensive training programs for medical laboratory teams.',
          features: ['24/7 Technical Support', 'Training Programs', 'Technical Consultations', 'Skill Development']
        },
        {
          id: 'laboratory-supplies',
          title: 'Medical laboratory consumable supplies',
          description: 'Providing all high-quality consumable supplies for medical laboratories.',
          features: ['Consumable Materials', 'Diagnostic Tools', 'Chemical Materials', 'Quality Standards']
        },
        {
          id: 'advanced-equipment',
          title: 'Advanced medical laboratory equipment and devices',
          description: 'Latest advanced medical equipment and devices for laboratories and medical centers.',
          features: ['Modern Technologies', 'High Accuracy', 'Ease of Use', 'Comprehensive Warranty']
        },
        {
          id: 'veterinary-solutions',
          title: 'Specialized veterinary solutions and techniques',
          description: 'Specialized medical solutions for veterinary medicine with the latest technologies and equipment.',
          features: ['Veterinary Equipment', 'Specialized Medicines', 'Surgical Instruments', 'Diagnostic Systems']
        }
      ]
    }
  };

  const t = content[language as keyof typeof content];
  const icons = [Users, Settings, Award, TestTube, Microscope, Heart];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-hcare-primary uppercase tracking-wider mb-4">{t.subtitle}</h2>
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
              <div key={index} className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-hcare-primary to-hcare-secondary rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent size={28} className="text-white" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 mb-4 leading-tight">{service.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-hcare-primary rounded-full ml-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={`/category/${service.id}`}
                  className="inline-flex items-center gap-2 text-hcare-primary hover:text-hcare-secondary font-semibold transition-colors duration-200 group/link"
                >
                  {t.findMore}
                  {language === 'ar' ? (
                    <ArrowLeft size={16} className="transition-transform duration-200 group-hover/link:-translate-x-1" />
                  ) : (
                    <ArrowRight size={16} className="transition-transform duration-200 group-hover/link:translate-x-1" />
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