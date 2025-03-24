import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Menu, Globe, Instagram } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'de' ? 'uk' : 'de');
  };

  return (
    <div className="min-h-screen bg-dark-900">
      <nav className="bg-dark-800/80 backdrop-blur-md border-b border-gold-500/20 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link to="/" className="flex items-center">
                <div className="text-center">
                  <span className="block text-xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
                    Professional Beauty
                  </span>
                  <span className="block text-sm text-gold-400 font-light">
                    by Tetiana Amons
                  </span>
                </div>
              </Link>
            </div>

            <div className="hidden sm:flex sm:items-center sm:space-x-8">
              <Link to="/" className="text-white hover:text-gold-400 transition-colors">{t('nav.home')}</Link>
              <Link to="/about" className="text-white hover:text-gold-400 transition-colors">{t('about.title')}</Link>
              <Link to="/services" className="text-white hover:text-gold-400 transition-colors">{t('nav.services')}</Link>
              <Link to="/gallery" className="text-white hover:text-gold-400 transition-colors">{t('nav.gallery')}</Link>
              <Link to="/reviews" className="text-white hover:text-gold-400 transition-colors">{t('nav.reviews')}</Link>
              <Link to="/contact" className="text-white hover:text-gold-400 transition-colors">{t('nav.contact')}</Link>
              <button
                onClick={toggleLanguage}
                className="p-2 rounded-full hover:bg-dark-700 focus:outline-none transition-colors"
              >
                <Globe className="h-5 w-5 text-gold-400" />
              </button>
            </div>

            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-white hover:text-gold-400 hover:bg-dark-700 focus:outline-none transition-colors"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="sm:hidden bg-dark-800">
            <div className="pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-base font-medium text-white hover:text-gold-400 hover:bg-dark-700 transition-colors">{t('nav.home')}</Link>
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-white hover:text-gold-400 hover:bg-dark-700 transition-colors">{t('about.title')}</Link>
              <Link to="/services" className="block px-3 py-2 text-base font-medium text-white hover:text-gold-400 hover:bg-dark-700 transition-colors">{t('nav.services')}</Link>
              <Link to="/gallery" className="block px-3 py-2 text-base font-medium text-white hover:text-gold-400 hover:bg-dark-700 transition-colors">{t('nav.gallery')}</Link>
              <Link to="/reviews" className="block px-3 py-2 text-base font-medium text-white hover:text-gold-400 hover:bg-dark-700 transition-colors">{t('nav.reviews')}</Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-white hover:text-gold-400 hover:bg-dark-700 transition-colors">{t('nav.contact')}</Link>
            </div>
          </div>
        )}
      </nav>

      <main>{children}</main>

      <footer className="bg-dark-800/80 backdrop-blur-md border-t border-gold-500/20">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 mb-2">
                Professional Beauty
              </h3>
              <p className="text-sm text-gold-400 mb-4">by Tetiana Amons</p>
              <p className="text-dark-200">{t('motto')}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Kontakt</h3>
              <p className="text-dark-200">
                Email: info@beautystudio.de<br />
                Tel: +49 123 456789
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Social Media</h3>
              <div className="flex space-x-4">
                <a 
                  href="https://wa.me/+491234567890" 
                  className="text-dark-300 hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  WhatsApp
                </a>
                <a 
                  href="https://t.me/beautystudio" 
                  className="text-dark-300 hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  Telegram
                </a>
                <a 
                  href="https://instagram.com/beautystudio" 
                  className="text-dark-300 hover:text-gold-400 transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}