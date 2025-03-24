import React from 'react';
import { useTranslation } from 'react-i18next';
import { X, Calendar, Clock } from 'lucide-react';
import { ServiceDetails } from '../types';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    name: string;
    details: ServiceDetails;
  } | null;
}

export default function BookingModal({ isOpen, onClose, service }: BookingModalProps) {
  const { t } = useTranslation();

  if (!isOpen || !service) return null;

  const handleBooking = () => {
    window.location.href = 'https://professionalbeautybytetianaamons.bookinbeautiful.de/users/sign_in';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose} />
      
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-dark-800 rounded-xl border border-gold-500/20 w-full max-w-2xl p-6">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-dark-200 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <h2 className="text-2xl font-serif text-white mb-6 pr-8">{t('booking.title')}</h2>

          <div className="space-y-6">
            {/* Service Details */}
            <div className="bg-dark-700/50 rounded-lg p-4">
              <h3 className="text-lg font-medium text-gold-400 mb-2">{service.name}</h3>
              <div className="flex items-center gap-4 text-dark-200">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {service.details.duration}
                </div>
                <div>€{service.details.price}</div>
              </div>
            </div>

            <button
              onClick={handleBooking}
              className="w-full px-6 py-3 bg-gold-500 text-dark-900 rounded-lg font-medium hover:bg-gold-400 transition-colors flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              {t('booking.title')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}