import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { translations } from './data/translations';

// Import brother images
import yamnathImg from './assets/yamnath.jpeg';
import narayanImg from './assets/narayan.jpeg';
import tulasiImg from './assets/tulasi.jpeg';
import naraImg from './assets/nara.jpeg';

const App = () => {
  // Load language from localStorage or default to 'en'
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('acharya-language');
    return saved ? saved : 'en';
  });

  const t = translations[language];

  // Map brother names to their images
  const brotherImages = {
    'Yamnath Acharya': yamnathImg,
    'Nara Prashad Acharya': naraImg,
    'Narayan Acharya': narayanImg,
    'Tulsi Acharya': tulasiImg,
  };

  // Same for Nepali names
  const brotherImagesNe = {
    'यमनाथ आचार्य': yamnathImg,
    'नरा प्रसाद आचार्य': naraImg,
    'नारायण आचार्य': narayanImg,
    'तुलसी आचार्य': tulasiImg,
  };

  const toggleLanguage = () => {
    const newLang = language === 'en' ? 'ne' : 'en';
    setLanguage(newLang);
    localStorage.setItem('acharya-language', newLang);
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header - Compact & Modern */}
      <motion.nav
        initial={{ y: -60 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('hero')}
              className="flex items-center gap-2"
            >
              <div className="w-8 h-8 bg-linear-to-br from-blue-600 to-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-md shadow-md">AB</div>
              <span className="hidden sm:block text-lg font-bold text-blue-900">Acharya Brothers</span>
            </motion.button>
            
            <div className="flex items-center space-x-2">
              <div className="hidden lg:flex space-x-1">
                {['about', 'expertise', 'how-we-help', 'achievements', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="px-3 py-2 text-md font-medium text-gray-700 hover:text-blue-900 hover:bg-blue-50 rounded-lg transition-all"
                  >
                    {t.nav[section]}
                  </button>
                ))}
              </div>
              
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={toggleLanguage}
              className="px-3 py-1.5 text-md font-semibold bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors shadow-sm"
            >
              {language === 'en' ? 'नेपाली' : 'English'}
            </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section - Modern & Professional */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 pt-14 pb-20 overflow-hidden bg-linear-to-b from-blue-50 via-white to-blue-50">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, #1e3a8a 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto text-center z-10">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-6"
          >
            <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
            <span className="text-sm font-medium text-blue-900">25+ Years of Trusted Service</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 leading-tight"
          >
            <span className="block">{t.hero.title}</span>
            <span className="block text-3xl sm:text-4xl md:text-5xl font-semibold mt-3 text-blue-900">
              {t.hero.tagline}
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollToSection('contact')}
              className="px-10 py-4 bg-blue-900 text-white rounded-lg font-semibold text-base hover:bg-blue-800 transition-all shadow-lg"
            >
              {t.contact.title}
            </motion.button>
            <motion.button
               whileHover={{ scale: 1.02 }}
               whileTap={{ scale: 0.98 }}
               onClick={() => scrollToSection('about')}
               className="px-10 py-4 text-black rounded-lg font-semibold text-base hover:text-white hover:bg-blue-800 transition-all shadow-lg border border-gray-400 "
            >
              {t.nav.about}
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
          >
            {[
              { icon: '👥', number: '4', label: 'Brothers' },
              { icon: '📊', number: '25+', label: 'Years' },
              { icon: '💼', number: '8+', label: 'Services' },
              { icon: '🎯', number: '1000+', label: 'Families' },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 * idx }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-3xl font-bold text-blue-900">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-gray-400"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section - 4 Brothers with Professional Cards */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-blue-900">{t.about.subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.about.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">{t.about.description}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
            {t.about.brothers.map((brother, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
              >
                {/* Top Image Section */}
                <div className="h-96 relative overflow-hidden bg-gray-100">
                  <img 
                    src={brotherImages[brother.name] || brotherImagesNe[brother.name] || ''} 
                    alt={brother.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to placeholder if image fails to load
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `
                        <div class="h-full bg-linear-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                          <div class="text-6xl font-bold text-white/30">${brother.name.charAt(0)}</div>
                        </div>
                      `;
                    }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{brother.name}</h3>
                    <p className="text-blue-700 font-semibold text-sm uppercase tracking-wide">{brother.role}</p>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm">{brother.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {brother.contributions.map((contribution, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center px-3 py-1 bg-blue-50 text-blue-800 text-xs font-medium rounded-lg"
                      >
                        {contribution}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-blue-900">{t.expertise.subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.expertise.title}</h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {t.expertise.services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100 text-center"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="text-base font-bold text-blue-900 mb-2">{service.name}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section id="how-we-help" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-blue-900">{t["how-we-help"].subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t["how-we-help"].title}
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {t["how-we-help"].services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-linear-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-blue-100"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl shrink-0">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements/Journey Section with Text-Timeline Layout */}
      <section id="achievements" className="py-20 px-4 bg-linear-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-blue-900">{t.achievements.subtitle}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{t.achievements.title}</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
              {language === 'en' 
                ? "Our journey spans over two decades of dedicated service, growing from humble beginnings to becoming trusted advisors in multiple domains across Nepal."
                : "हाम्रो यात्रा दुई दशक भन्दा बढीको समर्पित सेवाको फैलावट हो, नेपालभरिका विभिन्न डोमेनहरूमा विश्वसनीय सल्लाहकारहरू बन्नु सम्मको विनम्र सुरुवातबाट बढ्दै।"}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Side - Timeline */}
            <div className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-200"></div>
              {t.achievements.timeline.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="relative pl-8 pb-8"
                >
                  <div className="absolute left-0 top-0 w-3 h-3 bg-blue-900 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="text-2xl font-bold text-blue-900 mb-1">{milestone.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 text-sm">{milestone.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Right Side - Additional Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-100"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">Our Commitment</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'en'
                    ? "Throughout our journey, we have remained committed to empowering communities through knowledge, experience, and dedicated service. Our diverse expertise allows us to provide comprehensive support to individuals and businesses across Nepal."
                    : "हाम्रो यात्राभर, हामी ज्ञान, अनुभव र समर्पित सेवा मार्फत समुदायहरूलाई सशक्त बनाउन प्रतिबद्ध रह्यौं। हाम्रो विविध विशेषज्ञताले हामीलाई नेपालभरिका व्यक्ति र व्यापारहरूलाई व्यापक सहयोग प्रदान गर्न अनुमति दिन्छ।"}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border border-blue-100"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'en'
                    ? "We envision a future where every community in Nepal has access to quality healthcare, education, business opportunities, and textile solutions. Through our continued dedication, we aim to bridge gaps and create lasting impact."
                    : "हामी भविष्यको कल्पना गर्छौं जहाँ नेपालको हरेक समुदायको पहुँच गुणस्तरीय स्वास्थ्य सेवा, शिक्षा, व्यापारिक अवसरहरू र कपडा समाधानहरूमा छ। हाम्रो निरन्तर समर्पण मार्फत, हामी खाडलहरू भरियौं र स्थायी प्रभाव सिर्जना गर्न लक्ष्य राख्छौं।"}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="bg-linear-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg border border-blue-100"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-3">Looking Forward</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {language === 'en'
                    ? "As we continue our mission, we welcome partnerships and collaborations that can amplify our impact. Together, we can build stronger communities and a better future for all."
                    : "हामीले आफ्नो मिशन जारी राख्दै, हामी त्यस्ता साझेदारी र सहकार्यहरू स्वागत गर्छौं जुन हाम्रो प्रभावलाई प्रवर्धन गर्न सक्छ। सँगै, हामी बलियो समुदायहरू र सबैका लागि राम्रो भविष्य निर्माण गर्न सक्छौं।"}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section - Connection Options */}
      <section id="contact" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block px-4 py-2 bg-blue-100 rounded-full mb-4">
              <span className="text-sm font-semibold text-blue-900">Let's Connect</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t.contact.title}
            </h2>
            <p className="text-lg text-gray-600">{t.contact.description}</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Email */}
            <motion.a
              href="mailto:acharya.family@consultancy.com"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white text-xl shrink-0 group-hover:scale-105 transition-transform">
                ✉️
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-sm text-gray-600">acharya.family@consultancy.com</p>
              </div>
            </motion.a>

            {/* Phone */}
            <motion.a
              href="tel:+977XXXXXXXXX"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white text-xl shrink-0 group-hover:scale-105 transition-transform">
                📞
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-sm text-gray-600">+977-XXX-XXXXXXX</p>
              </div>
            </motion.a>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center text-white text-xl shrink-0">
                📍
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">{t.contact.details.location}</h3>
                <p className="text-sm text-gray-600">{t.contact.details.address}</p>
              </div>
            </motion.div>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/XXXXXXXXXXX"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white text-xl shrink-0 group-hover:scale-105 transition-transform">
                💬
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                <p className="text-sm text-gray-600">Chat with us</p>
              </div>
            </motion.a>
          </div>

          {/* Visit Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="mt-8 bg-linear-to-br from-blue-50 to-white p-8 rounded-xl shadow-lg border border-blue-100"
            >
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Visit Our Offices</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div>
                <div className="font-semibold text-blue-900">Narayanghat</div>
                <div className="text-sm text-gray-600">Wholesale Business</div>
              </div>
              <div>
                <div className="font-semibold text-blue-900">Madi</div>
                <div className="text-sm text-gray-600">Business Hub</div>
              </div>
              <div>
                <div className="font-semibold text-blue-900">Kathmandu</div>
                <div className="text-sm text-gray-600">Textile Shop</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-base mb-2">{t.footer.copyright}</p>
          <p className="text-sm text-gray-400 mb-2">{t.footer.built}</p>
          <p className="text-xs text-gray-500">Built by <span className="text-gray-300 font-medium">Sujal Kumar Timilsina</span></p>
        </div>
      </footer>
    </div>
  );
};

export default App;
