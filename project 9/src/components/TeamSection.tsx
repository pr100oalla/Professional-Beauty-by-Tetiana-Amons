import React from 'react';
import { useTranslation } from 'react-i18next';
import { Star, Award, Sparkles, ChevronLeft, ChevronRight, Leaf, Diamond } from 'lucide-react';

export default function TeamSection() {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [touchStart, setTouchStart] = React.useState(0);
  const [touchEnd, setTouchEnd] = React.useState(0);
  
  const ownerImages = [
    'https://imgur.com/T3xD3ZS.jpg',
    'https://imgur.com/ulLsXP1.jpg',
    'https://imgur.com/VnBxcIT.jpg'
  ];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ownerImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      setCurrentImageIndex((prev) => (prev + 1) % ownerImages.length);
    }
    if (isRightSwipe) {
      setCurrentImageIndex((prev) => (prev - 1 + ownerImages.length) % ownerImages.length);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % ownerImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + ownerImages.length) % ownerImages.length);
  };

  return (
    <section className="py-20 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-serif text-center mb-16 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
          {t('about.title')}
        </h2>

        {/* Owner Section */}
        <div className="bg-dark-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gold-500/20 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Star className="w-8 h-8 text-gold-400" />
                <h3 className="text-2xl font-serif text-white">
                  {t('about.owner.name')}
                </h3>
              </div>
              <h4 className="text-lg text-gold-400 mb-6">
                {t('about.owner.position')}
              </h4>
              <p className="text-dark-200 mb-6 leading-relaxed">
                {t('about.owner.intro')}
              </p>
              <p className="text-dark-200 mb-6 leading-relaxed">
                {t('about.owner.expertise')}
              </p>
              <p className="text-dark-200 leading-relaxed flex items-start gap-2">
                <Award className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                {t('about.owner.principles')}
              </p>
            </div>
            <div 
              className="relative h-[400px] md:h-[600px] group touch-pan-y"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {ownerImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={t('about.owner.name')}
                  className={`absolute inset-0 w-full h-full object-contain md:object-cover rounded-xl shadow-lg transition-opacity duration-1000 ${
                    currentImageIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent rounded-xl pointer-events-none" />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-dark-900/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-dark-900/75"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-dark-900/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-dark-900/75"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image Navigation Dots */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {ownerImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentImageIndex === index
                        ? 'bg-gold-400 w-4'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Cosmetologist Section */}
        <div className="bg-dark-800/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-gold-500/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Sparkles className="w-8 h-8 text-gold-400" />
                <h3 className="text-2xl font-serif text-white">
                  {t('about.cosmetologist.title')}
                </h3>
              </div>
              <p className="text-dark-200 mb-6 leading-relaxed">
                {t('about.cosmetologist.intro')}
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gold-400 mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  {t('about.cosmetologist.specialization')}
                </h4>
                <ul className="space-y-3">
                  {Object.entries(t('about.cosmetologist.items', { returnObjects: true })).map(([key, value]) => (
                    <li key={key} className="flex items-start gap-2 text-dark-200">
                      <span className="text-gold-400 mt-1">•</span>
                      {value}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-dark-200 mb-6 leading-relaxed">
                {t('about.cosmetologist.development')}
              </p>
              <p className="text-dark-200 leading-relaxed flex items-start gap-2">
                <Diamond className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                {t('about.cosmetologist.commitment')}
              </p>
            </div>
            <div className="relative h-[400px] md:h-[600px]">
              <img
                src="https://imgur.com/DVmkvqm.jpg"
                alt="Cosmetologist"
                className="w-full h-full object-contain md:object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-900/50 to-transparent rounded-xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}