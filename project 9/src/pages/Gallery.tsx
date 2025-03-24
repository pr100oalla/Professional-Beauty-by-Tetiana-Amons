import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Scissors, Footprints, Paintbrush, Flower2 } from 'lucide-react';

export default function Gallery() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      id: 'manicure',
      icon: <Scissors className="w-5 h-5" />,
      images: [
        'https://imgur.com/NpUTl2q.jpg',
        'https://imgur.com/wPHtXqs.jpg',
        'https://imgur.com/lGLuOjC.jpg',
        'https://imgur.com/s0taa84.jpg',
        'https://imgur.com/IevON6N.jpg',
        'https://imgur.com/Txmg6aH.jpg',
        'https://imgur.com/hyBKiLQ.jpg',
        'https://imgur.com/1xvKbbe.jpg',
        'https://imgur.com/LrUGGme.jpg',
        'https://imgur.com/ZTlRxU7.jpg',
        'https://imgur.com/pIsahtJ.jpg',
        'https://imgur.com/HBt2vZQ.jpg',
        'https://imgur.com/s6nVDxL.jpg',
        'https://imgur.com/4yL2GtW.jpg',
        'https://imgur.com/T9cYR2X.jpg',
        'https://imgur.com/ORLeZgE.jpg',
        'https://imgur.com/gcV4ezO.jpg',
        'https://imgur.com/VEmtE6m.jpg',
        'https://imgur.com/byGW3JC.jpg',
        'https://imgur.com/AGMP28E.jpg',
        'https://imgur.com/zzuKV4k.jpg',
        'https://imgur.com/8Dz2jgd.jpg',
        'https://imgur.com/El38mmV.jpg',
        'https://imgur.com/6y8w1Di.jpg',
        'https://imgur.com/XpB1WMf.jpg',
        'https://imgur.com/c4XxdpI.jpg',
        'https://imgur.com/E5vp8ie.jpg',
        'https://imgur.com/4LDCA4p.jpg',
        'https://imgur.com/dqdbShF.jpg',
        'https://imgur.com/O06dGa2.jpg'
      ]
    },
    {
      id: 'pedicure',
      icon: <Footprints className="w-5 h-5" />,
      images: [
        'https://imgur.com/NO0DhV9.jpg',
        'https://imgur.com/ZNIA9gw.jpg'
      ]
    },
    {
      id: 'design',
      icon: <Paintbrush className="w-5 h-5" />,
      images: [
        'https://imgur.com/2j1o4Jj.jpg',
        'https://imgur.com/7r87SvJ.jpg',
        'https://imgur.com/SLowHcO.jpg',
        'https://imgur.com/hssTOql.jpg',
        'https://imgur.com/3XT86IY.jpg',
        'https://imgur.com/hwr62b6.jpg',
        'https://imgur.com/w0xEUfH.jpg',
        'https://imgur.com/a0E7UZb.jpg',
        'https://imgur.com/D7YqiSU.jpg',
        'https://imgur.com/IO7RCeA.jpg',
        'https://imgur.com/vEnI8O2.jpg',
        'https://imgur.com/TZR8U2p.jpg',
        'https://imgur.com/qlSs1so.jpg',
        'https://imgur.com/HO4n976.jpg',
        'https://imgur.com/eubCVIP.jpg',
        'https://imgur.com/Ve9STjA.jpg'
      ]
    },
    {
      id: 'lashes',
      icon: <Flower2 className="w-5 h-5" />,
      images: [
        'https://imgur.com/QM6w6q2.jpg',
        'https://imgur.com/5SuqjV9.jpg',
        'https://imgur.com/P8kuuAk.jpg',
        'https://imgur.com/XK040p0.jpg'
      ]
    }
  ];

  const filteredImages = activeCategory
    ? categories.find(c => c.id === activeCategory)?.images
    : categories.flatMap(c => c.images);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
        {t('nav.gallery')}
      </h1>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-6 py-2 rounded-full border transition-all ${
            activeCategory === null
              ? 'bg-gold-500 text-dark-900 border-gold-500'
              : 'border-gold-500/20 text-white hover:border-gold-500'
          }`}
        >
          Alle
        </button>
        {categories.map(category => (
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

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredImages?.map((image, index) => (
          <div key={index} className="relative group hover-scale">
            <div className="relative rounded-xl overflow-hidden shadow-lg aspect-square">
              <img
                src={image}
                alt={activeCategory ? t(`services.${activeCategory}.title`) : 'Gallery Image'}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                <p className="text-gold-400 text-lg font-semibold">
                  {activeCategory 
                    ? t(`services.${activeCategory}.title`)
                    : categories.find(c => c.images.includes(image))?.id 
                      ? t(`services.${categories.find(c => c.images.includes(image))?.id}.title`)
                      : ''}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}