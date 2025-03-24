import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { 
  Calendar, Star, Phone, Mail, MapPin, Shield, Coffee, Gem, Award,
  Scissors, Footprints, Paintbrush, Wand2, Eye, Flower2, ChevronDown, ChevronUp,
  Sparkles
} from 'lucide-react';
import QRCodeSection from '../components/QRCodeSection';
import TeamSection from '../components/TeamSection';

export default function Home() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleBooking = () => {
    window.location.href = 'https://professionalbeautybytetianaamons.bookinbeautiful.de/users/sign_in';
  };

  const advantages = [
    {
      icon: <Shield className="w-12 h-12 text-gold-400" />,
      translationKey: 'sterilization'
    },
    {
      icon: <Coffee className="w-12 h-12 text-gold-400" />,
      translationKey: 'atmosphere'
    },
    {
      icon: <Gem className="w-12 h-12 text-gold-400" />,
      translationKey: 'materials'
    },
    {
      icon: <Award className="w-12 h-12 text-gold-400" />,
      translationKey: 'quality'
    }
  ];

  const services = [
    { id: 'cosmetology', icon: <Sparkles className="w-6 h-6" /> },
    { id: 'manicure', icon: <Scissors className="w-6 h-6" /> },
    { id: 'pedicure', icon: <Footprints className="w-6 h-6" /> },
    { id: 'design', icon: <Paintbrush className="w-6 h-6" /> },
    { id: 'sugaring', icon: <Wand2 className="w-6 h-6" /> },
    { id: 'waxing', icon: <Wand2 className="w-6 h-6" /> },
    { id: 'eyebrows', icon: <Eye className="w-6 h-6" /> },
    { id: 'lashes', icon: <Flower2 className="w-6 h-6" /> }
  ];

  const handleServiceClick = (serviceId: string) => {
    if (expandedService === serviceId) {
      setExpandedService(null);
    } else {
      setExpandedService(serviceId);
    }
  };

  const handleSubServiceClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigate('/services');
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-[600px] bg-cover bg-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("https://imgur.com/bU4OA8t.jpg")'
          }}
        />
        <div className="absolute inset-0 bg-dark-900/30 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-900/20 to-dark-900" />
        
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-serif mb-4 text-white">
              Professional Beauty
              <span className="block text-2xl md:text-3xl mt-2 text-gold-400">
                by Tetiana Amons
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              {t('motto')}
            </p>
            <button
              onClick={handleBooking}
              className="inline-flex items-center px-8 py-4 text-lg font-medium rounded-full bg-dark-800/80 backdrop-blur-md border border-gold-500 hover:bg-dark-800/90 transition-all hover:shadow-gold text-white"
            >
              <Calendar className="mr-2 h-6 w-6 text-gold-400" />
              {t('booking.title')}
            </button>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <TeamSection />

      {/* Advantages Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            {t('advantages.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-dark-900/50 backdrop-blur-sm p-8 rounded-xl border border-gold-500/20 hover:border-gold-500 transition-all group"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                    {advantage.icon}
                  </div>
                  <h3 className="text-xl font-serif text-white mb-4">
                    {t(`advantages.items.${advantage.translationKey}.title`)}
                  </h3>
                  <p className="text-dark-200 leading-relaxed">
                    {t(`advantages.items.${advantage.translationKey}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            {t('nav.services')}
          </h2>
          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id}>
                <button
                  onClick={() => handleServiceClick(service.id)}
                  className="w-full bg-dark-800/50 backdrop-blur-sm p-6 rounded-xl border border-gold-500/20 hover:border-gold-500 transition-all group flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-gold-400 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-serif text-white">
                      {t(`services.${service.id}.title`)}
                    </h3>
                  </div>
                  {expandedService === service.id ? (
                    <ChevronUp className="w-5 h-5 text-gold-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gold-400" />
                  )}
                </button>
                {expandedService === service.id && (
                  <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pl-16">
                    {Object.entries(t(`services.${service.id}.items`, { returnObjects: true })).map(([key, name]) => (
                      <button
                        key={key}
                        onClick={handleSubServiceClick}
                        className="p-4 bg-dark-700/50 backdrop-blur-sm rounded-lg border border-gold-500/20 hover:border-gold-500 transition-all text-left"
                      >
                        <span className="text-white hover:text-gold-400 transition-colors">
                          {name}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            {t('contact.title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-dark-900/80 backdrop-blur-sm p-8 rounded-xl border border-gold-500/20">
              <h3 className="text-2xl font-serif mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                {t('contact.contactUs')}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-gold-400 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-white">+491515 6688 711</p>
                    <a 
                      href="https://wa.me/+4915156688711" 
                      className="text-sm text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-gold-400 mr-4 flex-shrink-0" />
                  <span className="text-white">info@beautystudio.de</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-gold-400 mr-4 mt-1 flex-shrink-0" />
                  <span className="text-white">
                    Alfred-Brodauf-Str. 10<br />
                    08280, Aue-Bad Schlema
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-dark-900/80 backdrop-blur-sm p-8 rounded-xl border border-gold-500/20">
              <h3 className="text-2xl font-serif mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                {t('contact.writeUs')}
              </h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-dark-700 border border-gold-500/20 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-dark-700 border border-gold-500/20 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-700 border border-gold-500/20 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-dark-700 text-white rounded-lg font-medium border border-gold-500 hover:bg-dark-600 transition-all hover:shadow-gold flex items-center justify-center"
                >
                  {t('contact.send')}
                </button>
              </form>
            </div>

            <QRCodeSection />
          </div>
        </div>
      </section>
    </div>
  );
}