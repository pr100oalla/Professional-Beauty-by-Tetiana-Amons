import React from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => i18n.changeLanguage('de')}
        className={`px-3 py-1 rounded-md transition-colors ${
          i18n.language === 'de'
            ? 'bg-gold-500 text-dark-900'
            : 'text-gold-500 hover:bg-gold-500/10'
        }`}
      >
        DE
      </button>
      <button
        onClick={() => i18n.changeLanguage('uk')}
        className={`px-3 py-1 rounded-md transition-colors ${
          i18n.language === 'uk'
            ? 'bg-gold-500 text-dark-900'
            : 'text-gold-500 hover:bg-gold-500/10'
        }`}
      >
        UK
      </button>
    </div>
  );
}