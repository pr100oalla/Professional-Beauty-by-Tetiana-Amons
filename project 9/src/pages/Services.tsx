import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Search, Sparkles, Scissors, Footprints, Paintbrush, Wand2, Eye, Flower2, Star, Calendar } from 'lucide-react';

export default function Services() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const handleBooking = () => {
    window.location.href = 'https://professionalbeautybytetianaamons.bookinbeautiful.de/users/sign_in';
  };

  const serviceCategories = [
    {
      id: 'cosmetology',
      icon: <Sparkles className="w-6 h-6" />,
      images: [
        'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80',
        'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80'
      ]
    },
    {
      id: 'manicure',
      icon: <Scissors className="w-6 h-6" />,
      images: [
        'https://imgur.com/NpUTl2q.jpg',
        'https://imgur.com/wPHtXqs.jpg',
        'https://imgur.com/lGLuOjC.jpg'
      ]
    },
    {
      id: 'pedicure',
      icon: <Footprints className="w-6 h-6" />,
      images: [
        'https://imgur.com/NO0DhV9.jpg',
        'https://imgur.com/ZNIA9gw.jpg'
      ]
    },
    {
      id: 'design',
      icon: <Paintbrush className="w-6 h-6" />,
      images: [
        'https://imgur.com/2j1o4Jj.jpg',
        'https://imgur.com/7r87SvJ.jpg',
        'https://imgur.com/SLowHcO.jpg'
      ]
    },
    {
      id: 'sugaring',
      icon: <Wand2 className="w-6 h-6" />,
      images: [
        'https://imgur.com/yjZCS8q.jpg',
        'https://imgur.com/cUiURBE.jpg',
        'https://imgur.com/Jkqj7i6.jpg'
      ]
    },
    {
      id: 'waxing',
      icon: <Wand2 className="w-6 h-6" />,
      images: [
        'https://imgur.com/g5cWrQ7.jpg',
        'https://imgur.com/kswcQ8i.jpg',
        'https://imgur.com/IxHd8TP.jpg'
      ]
    },
    {
      id: 'eyebrows',
      icon: <Eye className="w-6 h-6" />,
      images: [
        'https://imgur.com/NQFUgWU.jpg',
        'https://imgur.com/CQG3ZaZ.jpg',
        'https://imgur.com/mGRuSxK.jpg'
      ]
    },
    {
      id: 'lashes',
      icon: <Flower2 className="w-6 h-6" />,
      images: [
        'https://imgur.com/QM6w6q2.jpg',
        'https://imgur.com/5SuqjV9.jpg',
        'https://imgur.com/P8kuuAk.jpg'
      ]
    }
  ];

  const filteredServices = serviceCategories.filter(category => {
    if (activeCategory !== 'all' && category.id !== activeCategory) return false;
    
    const items = t(`services.${category.id}.items`, { returnObjects: true });
    return Object.values(items).some(item => 
      item.toString().toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const toggleService = (serviceId: string) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-dark-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
          {t('nav.services')}
        </h1>

        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gold-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Suchen Sie nach Services..."
                className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-gold-500/20 rounded-full focus:ring-2 focus:ring-gold-500 focus:border-gold-500 text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex flex-wrap gap-3 justify-center">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-6 py-2 rounded-full border transition-all ${
                  activeCategory === 'all'
                    ? 'bg-gold-500 text-dark-900 border-gold-500'
                    : 'border-gold-500/20 text-white hover:border-gold-500'
                }`}
              >
                Alle
              </button>
              {serviceCategories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-2 rounded-full border transition-all flex items-center gap-2 ${
                    activeCategory === category.id
                      ? 'bg-gold-500 text-dark-900 border-gold-500'
                      : 'border-gold-500/20 text-white hover:border-gold-500'
                  }`}
                >
                  {category.icon}
                  {t(`services.${category.id}.title`)}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {filteredServices.map((category) => (
            <div 
              key={category.id}
              className="bg-dark-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gold-500/20"
            >
              <div 
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleService(category.id)}
              >
                <div className="flex items-center gap-3">
                  {category.icon}
                  <h2 className="text-2xl font-serif text-white">
                    {t(`services.${category.id}.title`)}
                  </h2>
                </div>
                <Star className={`w-6 h-6 text-gold-400 transition-transform ${
                  expandedService === category.id ? 'rotate-180' : ''
                }`} />
              </div>

              {expandedService === category.id && (
                <div className="mt-6 space-y-6">
                  <p className="text-dark-200 leading-relaxed">
                    {t(`services.${category.id}.description`)}
                  </p>

                  {category.images.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {category.images.map((image, index) => (
                        <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
                          <img
                            src={image}
                            alt={t(`services.${category.id}.title`)}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                            <p className="text-gold-400 text-lg font-semibold">
                              {t(`services.${category.id}.title`)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.entries(t(`services.${category.id}.items`, { returnObjects: true })).map(([key, name]) => (
                      <div
                        key={key}
                        className="bg-dark-700/50 backdrop-blur-sm p-6 rounded-xl border border-gold-500/20 hover:border-gold-500 transition-all group"
                      >
                        <p className="text-lg text-white group-hover:text-gold-400 transition-colors mb-4">
                          {name}
                        </p>
                        <button
                          onClick={handleBooking}
                          className="w-full px-4 py-2 bg-dark-600/50 text-white rounded-lg font-medium border border-gold-500/20 hover:border-gold-500 transition-all group-hover:bg-dark-500/50 flex items-center justify-center gap-2"
                        >
                          <Calendar className="w-4 h-4" />
                          {t('booking.title')}
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}