import React, { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

interface PortfolioProps {
  language: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ language }) => {
  const [activeFilter, setActiveFilter] = useState(language === 'ar' ? 'الكل' : 'All');
  
  const content = {
    ar: {
      subtitle: 'أعمالنا',
      title: 'مشاريعنا المميزة',
      description: 'استكشف مجموعة من مشاريعنا الناجحة التي تعكس خبرتنا والتزامنا بالتميز في الرعاية الصحية.',
      filters: ['الكل', 'جراحة القلب', 'طب الأطفال', 'جراحة العظام', 'طب العيون'],
      projects: [
        {
          id: 1,
          title: 'مركز جراحة القلب المتقدم',
          category: 'جراحة القلب',
          image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
          description: 'مركز متطور لجراحة القلب مجهز بأحدث التقنيات والمعدات الطبية العالمية.',
          technologies: ['جراحة بالمنظار', 'قسطرة القلب', 'زراعة الصمامات', 'جراحة الشرايين'],
          liveUrl: '#',
        },
        {
          id: 2,
          title: 'وحدة العناية المركزة للأطفال',
          category: 'طب الأطفال',
          image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
          description: 'وحدة عناية مركزة مخصصة للأطفال مع فريق طبي متخصص ومعدات متطورة.',
          technologies: ['رعاية حديثي الولادة', 'أجهزة تنفس صناعي', 'مراقبة حيوية', 'طوارئ الأطفال'],
          liveUrl: '#',
        },
        {
          id: 3,
          title: 'مركز جراحة العظام والمفاصل',
          category: 'جراحة العظام',
          image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
          description: 'مركز متخصص في جراحة العظام والمفاصل بأحدث التقنيات الجراحية.',
          technologies: ['استبدال المفاصل', 'جراحة العمود الفقري', 'علاج الكسور', 'الطب الرياضي'],
          liveUrl: '#',
        },
        {
          id: 4,
          title: 'مركز طب وجراحة العيون',
          category: 'طب العيون',
          image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg',
          description: 'مركز شامل لطب العيون يقدم خدمات تشخيصية وعلاجية متقدمة.',
          technologies: ['جراحة الليزر', 'زراعة العدسات', 'علاج الشبكية', 'جراحة المياه البيضاء'],
          liveUrl: '#',
        },
        {
          id: 5,
          title: 'قسم الطوارئ والإسعاف',
          category: 'جراحة القلب',
          image: 'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg',
          description: 'قسم طوارئ مجهز بالكامل لاستقبال الحالات الحرجة على مدار الساعة.',
          technologies: ['إنعاش القلب', 'جراحة طوارئ', 'رعاية حرجة', 'نقل طبي'],
          liveUrl: '#',
        },
        {
          id: 6,
          title: 'مختبرات التشخيص المتقدمة',
          category: 'طب الأطفال',
          image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
          description: 'مختبرات طبية متطورة للتشخيص الدقيق والسريع للأمراض المختلفة.',
          technologies: ['تحاليل الدم', 'الأشعة المقطعية', 'الرنين المغناطيسي', 'الموجات فوق الصوتية'],
          liveUrl: '#',
        }
      ]
    },
    en: {
      subtitle: 'Our Work',
      title: 'Our Distinguished Projects',
      description: 'Explore a collection of our successful projects that reflect our expertise and commitment to excellence in healthcare.',
      filters: ['All', 'Cardiology', 'Pediatrics', 'Orthopedics', 'Ophthalmology'],
      projects: [
        {
          id: 1,
          title: 'Advanced Cardiac Surgery Center',
          category: 'Cardiology',
          image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg',
          description: 'Advanced cardiac surgery center equipped with the latest technologies and international medical equipment.',
          technologies: ['Laparoscopic Surgery', 'Cardiac Catheterization', 'Valve Replacement', 'Arterial Surgery'],
          liveUrl: '#',
        },
        {
          id: 2,
          title: 'Pediatric Intensive Care Unit',
          category: 'Pediatrics',
          image: 'https://images.pexels.com/photos/236380/pexels-photo-236380.jpeg',
          description: 'Dedicated pediatric intensive care unit with specialized medical team and advanced equipment.',
          technologies: ['Neonatal Care', 'Ventilators', 'Vital Monitoring', 'Pediatric Emergency'],
          liveUrl: '#',
        },
        {
          id: 3,
          title: 'Orthopedic and Joint Surgery Center',
          category: 'Orthopedics',
          image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
          description: 'Specialized center for orthopedic and joint surgery with the latest surgical techniques.',
          technologies: ['Joint Replacement', 'Spine Surgery', 'Fracture Treatment', 'Sports Medicine'],
          liveUrl: '#',
        },
        {
          id: 4,
          title: 'Eye Medicine and Surgery Center',
          category: 'Ophthalmology',
          image: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg',
          description: 'Comprehensive eye medicine center providing advanced diagnostic and therapeutic services.',
          technologies: ['Laser Surgery', 'Lens Implantation', 'Retinal Treatment', 'Cataract Surgery'],
          liveUrl: '#',
        },
        {
          id: 5,
          title: 'Emergency and Ambulance Department',
          category: 'Cardiology',
          image: 'https://images.pexels.com/photos/263337/pexels-photo-263337.jpeg',
          description: 'Fully equipped emergency department for receiving critical cases 24/7.',
          technologies: ['Cardiac Resuscitation', 'Emergency Surgery', 'Critical Care', 'Medical Transport'],
          liveUrl: '#',
        },
        {
          id: 6,
          title: 'Advanced Diagnostic Laboratories',
          category: 'Pediatrics',
          image: 'https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg',
          description: 'Advanced medical laboratories for accurate and rapid diagnosis of various diseases.',
          technologies: ['Blood Tests', 'CT Scan', 'MRI', 'Ultrasound'],
          liveUrl: '#',
        }
      ]
    }
  };

  const t = content[language as keyof typeof content];
  
  const filteredProjects = activeFilter === (language === 'ar' ? 'الكل' : 'All')
    ? t.projects 
    : t.projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-hcare-primary uppercase tracking-wider mb-4">{t.subtitle}</h2>
          <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {t.title}
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            {t.description}
          </p>

          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {t.filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-hcare-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex gap-3 justify-center">
                    <a
                      href={project.liveUrl}
                      className="flex items-center justify-center w-12 h-12 bg-hcare-primary/80 backdrop-blur-sm rounded-full text-white hover:bg-hcare-primary transition-colors duration-200"
                    >
                      <Eye size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="text-sm font-medium text-hcare-primary mb-2">{project.category}</div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h4>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-hcare-light text-hcare-accent text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;