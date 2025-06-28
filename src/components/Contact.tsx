import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Users } from 'lucide-react';

interface ContactProps {
  language: string;
}

const Contact: React.FC<ContactProps> = ({ language }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const content = {
    ar: {
      subtitle: 'تواصل معنا',
      title: 'ابدأ رحلتك الصحية معنا',
      description: 'مستعدون لتحقيق رؤيتك الصحية؟ نحن نحب أن نسمع عن احتياجاتك ونناقش كيف يمكننا مساعدتك في تحقيق أهدافك الصحية.',
      contactInfo: 'معلومات التواصل',
      workingHours: 'ساعات العمل',
      whyChooseUs: 'لماذا تختارنا؟',
      sendMessage: 'أرسل لنا رسالة',
      messageSent: 'تم إرسال الرسالة!',
      thankYou: 'شكراً لتواصلك معنا. سنعود إليك قريباً.',
      contactDetails: [
        { title: 'اتصل بنا', details: '+966 11 123 4567', link: 'tel:+966111234567' },
        { title: 'البريد الإلكتروني', details: 'info@hcare.sa', link: 'mailto:info@hcare.sa' },
        { title: 'موقعنا', details: 'الرياض، المملكة العربية السعودية', link: '#' }
      ],
      schedule: [
        { day: 'السبت - الخميس', hours: '8:00 ص - 10:00 م' },
        { day: 'الجمعة', hours: '2:00 م - 10:00 م' },
        { day: 'الطوارئ', hours: '24 ساعة' }
      ],
      benefits: [
        'أكثر من 15 سنة من الخبرة الطبية',
        'أكثر من 10,000 مريض سعيد',
        'دعم ومتابعة على مدار الساعة',
        'ضمان الجودة والرضا 100%'
      ],
      form: {
        fullName: 'الاسم الكامل',
        phone: 'رقم الهاتف',
        email: 'البريد الإلكتروني',
        subject: 'الموضوع',
        message: 'الرسالة',
        send: 'إرسال الرسالة',
        placeholders: {
          name: 'أحمد محمد',
          phone: '+966 50 123 4567',
          email: 'ahmed@example.com',
          subject: 'استشارة طبية',
          message: 'أخبرنا عن احتياجاتك الطبية...'
        }
      }
    },
    en: {
      subtitle: 'Contact Us',
      title: 'Start Your Health Journey With Us',
      description: 'Ready to achieve your health vision? We love to hear about your needs and discuss how we can help you achieve your health goals.',
      contactInfo: 'Contact Information',
      workingHours: 'Working Hours',
      whyChooseUs: 'Why Choose Us?',
      sendMessage: 'Send Us a Message',
      messageSent: 'Message Sent!',
      thankYou: 'Thank you for contacting us. We will get back to you soon.',
      contactDetails: [
        { title: 'Call Us', details: '+966 11 123 4567', link: 'tel:+966111234567' },
        { title: 'Email', details: 'info@hcare.sa', link: 'mailto:info@hcare.sa' },
        { title: 'Location', details: 'Riyadh, Saudi Arabia', link: '#' }
      ],
      schedule: [
        { day: 'Saturday - Thursday', hours: '8:00 AM - 10:00 PM' },
        { day: 'Friday', hours: '2:00 PM - 10:00 PM' },
        { day: 'Emergency', hours: '24 Hours' }
      ],
      benefits: [
        'More than 15 years of medical experience',
        'More than 10,000 happy patients',
        '24/7 support and follow-up',
        '100% quality and satisfaction guarantee'
      ],
      form: {
        fullName: 'Full Name',
        phone: 'Phone Number',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        placeholders: {
          name: 'Ahmed Mohammed',
          phone: '+966 50 123 4567',
          email: 'ahmed@example.com',
          subject: 'Medical Consultation',
          message: 'Tell us about your medical needs...'
        }
      }
    }
  };

  const t = content[language as keyof typeof content];

  return (
    <section id="contact" className="py-20 bg-gray-50">
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h4 className="text-2xl font-bold text-gray-900 mb-6">{t.contactInfo}</h4>
              <div className="space-y-6">
                {t.contactDetails.map((info, index) => {
                  const icons = [Phone, Mail, MapPin];
                  const IconComponent = icons[index];
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-center gap-inline-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow duration-300 group"
                    >
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-hcare-primary to-hcare-secondary rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div className="text-align-start">
                        <div className="font-semibold text-gray-900">{info.title}</div>
                        <div className="text-gray-600">{info.details}</div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Working Hours */}
            <div className="bg-white rounded-2xl p-6">
              <h5 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-inline-2">
                <Clock size={24} className="text-hcare-primary" />
                {t.workingHours}
              </h5>
              <div className="space-y-3">
                {t.schedule.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-hcare-primary font-semibold">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-hcare-primary to-hcare-secondary rounded-2xl p-8 text-white">
              <h5 className="text-xl font-bold mb-4">{t.whyChooseUs}</h5>
              <ul className="space-y-3">
                {t.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-inline-3">
                    <CheckCircle size={20} className="text-hcare-light" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">{t.sendMessage}</h4>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle size={64} className="text-hcare-primary margin-inline-auto mb-4" />
                <h5 className="text-xl font-semibold text-gray-900 mb-2">{t.messageSent}</h5>
                <p className="text-gray-600">{t.thankYou}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2 text-align-start">
                      {t.form.fullName}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full padding-inline-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hcare-primary focus:border-transparent transition-colors duration-200 text-align-start"
                      placeholder={t.form.placeholders.name}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2 text-align-start">
                      {t.form.phone}
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full padding-inline-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hcare-primary focus:border-transparent transition-colors duration-200 text-align-start"
                      placeholder={t.form.placeholders.phone}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2 text-align-start">
                    {t.form.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full padding-inline-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hcare-primary focus:border-transparent transition-colors duration-200 text-align-start"
                    placeholder={t.form.placeholders.email}
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2 text-align-start">
                    {t.form.subject}
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full padding-inline-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hcare-primary focus:border-transparent transition-colors duration-200 text-align-start"
                    placeholder={t.form.placeholders.subject}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2 text-align-start">
                    {t.form.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full padding-inline-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-hcare-primary focus:border-transparent transition-colors duration-200 resize-none text-align-start"
                    placeholder={t.form.placeholders.message}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-hcare-primary to-hcare-secondary text-white py-4 padding-inline-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-inline-2"
                >
                  <Send size={20} />
                  <span>{t.form.send}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;