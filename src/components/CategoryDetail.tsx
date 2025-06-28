import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Phone, Calendar, Clock, CheckCircle, Star, Users, Award } from 'lucide-react';

interface CategoryDetailProps {
  language: string;
}

const CategoryDetail: React.FC<CategoryDetailProps> = ({ language }) => {
  const { categoryId } = useParams();

  const categoryData = {
    ar: {
      'medical-consulting': {
        title: 'خدمات استشارية متخصصة في مجال المعدات الطبية',
        subtitle: 'استشارات طبية متخصصة وحلول مبتكرة',
        description: 'نقدم خدمات استشارية متخصصة في مجال المعدات الطبية، حيث نساعد المؤسسات الصحية في اختيار وتطبيق أفضل الحلول التقنية المناسبة لاحتياجاتها الخاصة.',
        image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
        services: [
          'تقييم شامل للاحتياجات الطبية',
          'اختيار المعدات المناسبة',
          'دراسات الجدوى الاقتصادية',
          'التخطيط الاستراتيجي للتطوير',
          'إدارة المشاريع الطبية',
          'ضمان الجودة والمعايير'
        ],
        features: [
          { title: 'خبرة متخصصة', desc: 'فريق من الخبراء في المعدات الطبية' },
          { title: 'حلول مخصصة', desc: 'استشارات مصممة حسب احتياجاتكم' },
          { title: 'معايير دولية', desc: 'التزام بأعلى المعايير العالمية' },
          { title: 'دعم مستمر', desc: 'متابعة ودعم على مدار الساعة' }
        ],
        stats: [
          { number: '200+', label: 'مشروع استشاري' },
          { number: '15+', label: 'سنة خبرة' },
          { number: '98%', label: 'رضا العملاء' },
          { number: '50+', label: 'عميل راضي' }
        ]
      },
      'equipment-maintenance': {
        title: 'صيانة وتركيب المعدات الطبية',
        subtitle: 'خدمات صيانة شاملة ومتخصصة',
        description: 'نوفر خدمات صيانة وتركيب شاملة للمعدات الطبية لضمان الأداء الأمثل والسلامة، مع فريق فني متخصص ومدرب على أحدث التقنيات.',
        image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
        services: [
          'صيانة دورية مجدولة',
          'إصلاحات طارئة سريعة',
          'تركيب المعدات الجديدة',
          'معايرة وضبط الأجهزة',
          'استبدال القطع والمكونات',
          'تحديث البرمجيات'
        ],
        features: [
          { title: 'فريق فني مؤهل', desc: 'مهندسون وفنيون معتمدون' },
          { title: 'استجابة سريعة', desc: 'خدمة طوارئ على مدار الساعة' },
          { title: 'قطع غيار أصلية', desc: 'استخدام قطع غيار معتمدة فقط' },
          { title: 'ضمان الخدمة', desc: 'ضمان شامل على جميع الأعمال' }
        ],
        stats: [
          { number: '1000+', label: 'جهاز تم صيانته' },
          { number: '24/7', label: 'خدمة طوارئ' },
          { number: '99%', label: 'معدل الإصلاح' },
          { number: '2', label: 'ساعة متوسط الاستجابة' }
        ]
      },
      'technical-support': {
        title: 'خدمات الدعم الفني والتدريب للمختبرات',
        subtitle: 'دعم فني متخصص وتدريب شامل',
        description: 'نقدم خدمات دعم فني متخصصة وبرامج تدريبية شاملة لفرق المختبرات الطبية لضمان الاستخدام الأمثل للمعدات والتقنيات.',
        image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg',
        services: [
          'دعم فني على مدار الساعة',
          'برامج تدريبية متخصصة',
          'ورش عمل تطبيقية',
          'استشارات تقنية',
          'تطوير المهارات المهنية',
          'شهادات معتمدة'
        ],
        features: [
          { title: 'خبراء متخصصون', desc: 'فريق من الخبراء في التقنيات الطبية' },
          { title: 'برامج مخصصة', desc: 'تدريب مصمم حسب احتياجاتكم' },
          { title: 'تقنيات حديثة', desc: 'استخدام أحدث طرق التدريب' },
          { title: 'متابعة مستمرة', desc: 'دعم وتطوير مستمر للمهارات' }
        ],
        stats: [
          { number: '500+', label: 'متدرب مؤهل' },
          { number: '50+', label: 'برنامج تدريبي' },
          { number: '95%', label: 'معدل النجاح' },
          { number: '24/7', label: 'دعم فني' }
        ]
      },
      'laboratory-supplies': {
        title: 'مستلزمات مختبرات طبية استهلاكية',
        subtitle: 'مستلزمات عالية الجودة للمختبرات',
        description: 'نوفر جميع المستلزمات الاستهلاكية عالية الجودة للمختبرات الطبية من مصادر موثوقة ومعتمدة عالمياً.',
        image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
        services: [
          'مواد استهلاكية متنوعة',
          'أدوات تشخيص دقيقة',
          'مواد كيميائية معتمدة',
          'أدوات حماية شخصية',
          'مستلزمات عينات',
          'مواد معايرة وضبط'
        ],
        features: [
          { title: 'جودة عالمية', desc: 'منتجات من أفضل الشركات العالمية' },
          { title: 'توفر مستمر', desc: 'مخزون دائم لجميع المستلزمات' },
          { title: 'أسعار تنافسية', desc: 'أفضل الأسعار في السوق' },
          { title: 'توصيل سريع', desc: 'خدمة توصيل سريعة وموثوقة' }
        ],
        stats: [
          { number: '1000+', label: 'منتج متوفر' },
          { number: '100+', label: 'مختبر يثق بنا' },
          { number: '99%', label: 'رضا العملاء' },
          { number: '24', label: 'ساعة توصيل' }
        ]
      },
      'advanced-equipment': {
        title: 'أجهزة ومعدات مختبرات طبية متطورة',
        subtitle: 'أحدث التقنيات الطبية المتطورة',
        description: 'نقدم أحدث الأجهزة والمعدات الطبية المتطورة للمختبرات والمراكز الطبية من أفضل الشركات المصنعة عالمياً.',
        image: 'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg',
        services: [
          'أجهزة تحليل متطورة',
          'معدات تشخيص دقيقة',
          'أنظمة مراقبة ذكية',
          'تقنيات تصوير طبي',
          'أجهزة قياس متخصصة',
          'حلول أتمتة المختبرات'
        ],
        features: [
          { title: 'تقنيات متقدمة', desc: 'أحدث التقنيات في المجال الطبي' },
          { title: 'دقة عالية', desc: 'نتائج دقيقة وموثوقة' },
          { title: 'سهولة الاستخدام', desc: 'واجهات بسيطة وسهلة التشغيل' },
          { title: 'ضمان شامل', desc: 'ضمان وخدمة ما بعد البيع' }
        ],
        stats: [
          { number: '200+', label: 'جهاز متطور' },
          { number: '50+', label: 'مركز طبي' },
          { number: '98%', label: 'دقة النتائج' },
          { number: '5', label: 'سنوات ضمان' }
        ]
      },
      'veterinary-solutions': {
        title: 'حلول وتقنيات بيطرية متخصصة',
        subtitle: 'رعاية طبية متخصصة للحيوانات',
        description: 'نوفر حلول طبية متخصصة للطب البيطري مع أحدث التقنيات والمعدات لضمان أفضل رعاية صحية للحيوانات.',
        image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
        services: [
          'معدات بيطرية متخصصة',
          'أدوية وعلاجات بيطرية',
          'أدوات جراحية دقيقة',
          'أنظمة تشخيص متطورة',
          'مستلزمات رعاية الحيوانات',
          'تقنيات تصوير بيطري'
        ],
        features: [
          { title: 'تخصص بيطري', desc: 'حلول مصممة خصيصاً للطب البيطري' },
          { title: 'جودة عالية', desc: 'منتجات معتمدة ومضمونة الجودة' },
          { title: 'دعم متخصص', desc: 'فريق دعم متخصص في الطب البيطري' },
          { title: 'تدريب شامل', desc: 'برامج تدريبية للأطباء البيطريين' }
        ],
        stats: [
          { number: '300+', label: 'منتج بيطري' },
          { number: '80+', label: 'عيادة بيطرية' },
          { number: '97%', label: 'رضا الأطباء' },
          { number: '10+', label: 'سنوات خبرة' }
        ]
      }
    },
    en: {
      'medical-consulting': {
        title: 'Specialized consulting services in the field of medical equipment',
        subtitle: 'Specialized medical consultations and innovative solutions',
        description: 'We provide specialized consulting services in the field of medical equipment, helping healthcare institutions select and implement the best technical solutions suitable for their specific needs.',
        image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
        services: [
          'Comprehensive medical needs assessment',
          'Appropriate equipment selection',
          'Economic feasibility studies',
          'Strategic development planning',
          'Medical project management',
          'Quality assurance and standards'
        ],
        features: [
          { title: 'Specialized Expertise', desc: 'Team of experts in medical equipment' },
          { title: 'Customized Solutions', desc: 'Consultations designed according to your needs' },
          { title: 'International Standards', desc: 'Commitment to the highest global standards' },
          { title: 'Continuous Support', desc: 'Follow-up and support around the clock' }
        ],
        stats: [
          { number: '200+', label: 'Consulting Projects' },
          { number: '15+', label: 'Years Experience' },
          { number: '98%', label: 'Client Satisfaction' },
          { number: '50+', label: 'Satisfied Clients' }
        ]
      },
      'equipment-maintenance': {
        title: 'Maintenance and installation of medical equipment',
        subtitle: 'Comprehensive and specialized maintenance services',
        description: 'We provide comprehensive maintenance and installation services for medical equipment to ensure optimal performance and safety, with a specialized technical team trained on the latest technologies.',
        image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
        services: [
          'Scheduled periodic maintenance',
          'Quick emergency repairs',
          'New equipment installation',
          'Device calibration and adjustment',
          'Parts and components replacement',
          'Software updates'
        ],
        features: [
          { title: 'Qualified Technical Team', desc: 'Certified engineers and technicians' },
          { title: 'Quick Response', desc: '24/7 emergency service' },
          { title: 'Original Spare Parts', desc: 'Using only certified spare parts' },
          { title: 'Service Warranty', desc: 'Comprehensive warranty on all work' }
        ],
        stats: [
          { number: '1000+', label: 'Devices Maintained' },
          { number: '24/7', label: 'Emergency Service' },
          { number: '99%', label: 'Repair Rate' },
          { number: '2', label: 'Hours Average Response' }
        ]
      },
      'technical-support': {
        title: 'Technical support and training services for laboratories',
        subtitle: 'Specialized technical support and comprehensive training',
        description: 'We provide specialized technical support services and comprehensive training programs for medical laboratory teams to ensure optimal use of equipment and technologies.',
        image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg',
        services: [
          '24/7 technical support',
          'Specialized training programs',
          'Practical workshops',
          'Technical consultations',
          'Professional skill development',
          'Certified certificates'
        ],
        features: [
          { title: 'Specialized Experts', desc: 'Team of experts in medical technologies' },
          { title: 'Customized Programs', desc: 'Training designed according to your needs' },
          { title: 'Modern Techniques', desc: 'Using the latest training methods' },
          { title: 'Continuous Follow-up', desc: 'Continuous support and skill development' }
        ],
        stats: [
          { number: '500+', label: 'Qualified Trainees' },
          { number: '50+', label: 'Training Programs' },
          { number: '95%', label: 'Success Rate' },
          { number: '24/7', label: 'Technical Support' }
        ]
      },
      'laboratory-supplies': {
        title: 'Medical laboratory consumable supplies',
        subtitle: 'High-quality supplies for laboratories',
        description: 'We provide all high-quality consumable supplies for medical laboratories from reliable and internationally certified sources.',
        image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
        services: [
          'Various consumable materials',
          'Accurate diagnostic tools',
          'Certified chemical materials',
          'Personal protective equipment',
          'Sample supplies',
          'Calibration and adjustment materials'
        ],
        features: [
          { title: 'Global Quality', desc: 'Products from the best global companies' },
          { title: 'Continuous Availability', desc: 'Permanent stock of all supplies' },
          { title: 'Competitive Prices', desc: 'Best prices in the market' },
          { title: 'Fast Delivery', desc: 'Fast and reliable delivery service' }
        ],
        stats: [
          { number: '1000+', label: 'Available Products' },
          { number: '100+', label: 'Trusting Laboratories' },
          { number: '99%', label: 'Customer Satisfaction' },
          { number: '24', label: 'Hours Delivery' }
        ]
      },
      'advanced-equipment': {
        title: 'Advanced medical laboratory equipment and devices',
        subtitle: 'Latest advanced medical technologies',
        description: 'We provide the latest advanced medical equipment and devices for laboratories and medical centers from the best global manufacturers.',
        image: 'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg',
        services: [
          'Advanced analysis devices',
          'Accurate diagnostic equipment',
          'Smart monitoring systems',
          'Medical imaging technologies',
          'Specialized measuring devices',
          'Laboratory automation solutions'
        ],
        features: [
          { title: 'Advanced Technologies', desc: 'Latest technologies in the medical field' },
          { title: 'High Accuracy', desc: 'Accurate and reliable results' },
          { title: 'Ease of Use', desc: 'Simple and easy-to-operate interfaces' },
          { title: 'Comprehensive Warranty', desc: 'Warranty and after-sales service' }
        ],
        stats: [
          { number: '200+', label: 'Advanced Devices' },
          { number: '50+', label: 'Medical Centers' },
          { number: '98%', label: 'Result Accuracy' },
          { number: '5', label: 'Years Warranty' }
        ]
      },
      'veterinary-solutions': {
        title: 'Specialized veterinary solutions and techniques',
        subtitle: 'Specialized medical care for animals',
        description: 'We provide specialized medical solutions for veterinary medicine with the latest technologies and equipment to ensure the best healthcare for animals.',
        image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
        services: [
          'Specialized veterinary equipment',
          'Veterinary medicines and treatments',
          'Precise surgical instruments',
          'Advanced diagnostic systems',
          'Animal care supplies',
          'Veterinary imaging technologies'
        ],
        features: [
          { title: 'Veterinary Specialization', desc: 'Solutions designed specifically for veterinary medicine' },
          { title: 'High Quality', desc: 'Certified and quality-guaranteed products' },
          { title: 'Specialized Support', desc: 'Support team specialized in veterinary medicine' },
          { title: 'Comprehensive Training', desc: 'Training programs for veterinarians' }
        ],
        stats: [
          { number: '300+', label: 'Veterinary Products' },
          { number: '80+', label: 'Veterinary Clinics' },
          { number: '97%', label: 'Doctor Satisfaction' },
          { number: '10+', label: 'Years Experience' }
        ]
      }
    }
  };

  const t = categoryData[language as keyof typeof categoryData];
  const category = t[categoryId as keyof typeof t];

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {language === 'ar' ? 'القسم غير موجود' : 'Category Not Found'}
          </h1>
          <Link
            to="/"
            className="text-hcare-primary hover:text-hcare-secondary font-semibold"
          >
            {language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}
          </Link>
        </div>
      </div>
    );
  }

  const backText = language === 'ar' ? 'العودة للخدمات' : 'Back to Services';
  const contactText = language === 'ar' ? 'تواصل معنا' : 'Contact Us';
  const callText = language === 'ar' ? 'اتصل بنا' : 'Call Us';
  const servicesTitle = language === 'ar' ? 'خدماتنا' : 'Our Services';
  const featuresTitle = language === 'ar' ? 'مميزاتنا' : 'Our Features';
  const statsTitle = language === 'ar' ? 'إحصائياتنا' : 'Our Statistics';

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
                {language === 'ar' ? (
                  <ArrowRight size={20} />
                ) : (
                  <ArrowLeft size={20} />
                )}
                {backText}
              </button>
              
              <div>
                <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">{category.title}</h1>
                <p className="text-xl text-hcare-light mb-6">{category.subtitle}</p>
                <p className="text-lg leading-relaxed">{category.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-white text-hcare-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                  <Calendar size={20} />
                  {contactText}
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-hcare-primary transition-colors duration-200 flex items-center justify-center gap-2">
                  <Phone size={20} />
                  {callText}
                </button>
              </div>
            </div>

            <div className="relative">
              <img
                src={category.image}
                alt={category.title}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{servicesTitle}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.services.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={20} className="text-hcare-primary" />
                  <h3 className="font-semibold text-gray-900">{service}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">{featuresTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {category.features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-hcare-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-hcare-primary text-white">
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
            {language === 'ar' ? 'هل تحتاج لاستشارة متخصصة؟' : 'Need a Specialized Consultation?'}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {language === 'ar' 
              ? 'فريقنا المتخصص جاهز لتقديم أفضل الحلول والخدمات لك'
              : 'Our specialized team is ready to provide you with the best solutions and services'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-hcare-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-hcare-secondary transition-colors duration-200 flex items-center justify-center gap-2">
              <Calendar size={20} />
              {contactText}
            </button>
            <button className="border-2 border-hcare-primary text-hcare-primary px-8 py-4 rounded-full font-semibold hover:bg-hcare-primary hover:text-white transition-colors duration-200 flex items-center justify-center gap-2">
              <Phone size={20} />
              +966 11 123 4567
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;