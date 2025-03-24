import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
        {t('contact.title')}
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-dark-800/80 backdrop-blur-sm p-8 rounded-xl border border-gold-500/20">
          <h2 className="text-2xl font-serif mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            {t('contact.contactUs')}
          </h2>
          
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

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-6 text-white flex items-center">
              <Clock className="w-5 h-5 text-gold-400 mr-2" />
              {t('contact.openingHours')}
            </h3>
            <div className="grid grid-cols-2 gap-4 text-lg">
              <div className="text-white">{t('contact.monday')}</div>
              <div className="text-gold-400">09:00 - 19:00</div>
              <div className="text-white">{t('contact.tuesdayToSaturday')}</div>
              <div className="text-gold-400">15:00 - 20:00</div>
            </div>
          </div>
        </div>

        <div className="bg-dark-800/80 backdrop-blur-sm p-8 rounded-xl border border-gold-500/20">
          <h2 className="text-2xl font-serif mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
            {t('contact.writeUs')}
          </h2>
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
              <Send className="w-5 h-5 mr-2" />
              {t('contact.send')}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}