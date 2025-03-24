import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { useTranslation } from 'react-i18next';
import { QrCode } from 'lucide-react';

export default function QRCodeSection() {
  const { t } = useTranslation();
  const websiteUrl = window.location.origin;

  return (
    <div className="bg-dark-900/80 backdrop-blur-sm p-8 rounded-xl border border-gold-500/20">
      <h3 className="text-2xl font-serif mb-8 text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600 flex items-center gap-2">
        <QrCode className="w-6 h-6 text-gold-400" />
        QR Code
      </h3>
      <div className="flex flex-col items-center">
        <div className="bg-white p-4 rounded-xl mb-4">
          <QRCodeSVG
            value={websiteUrl}
            size={200}
            level="H"
            includeMargin={true}
            imageSettings={{
              src: "https://imgur.com/bU4OA8t.jpg",
              x: undefined,
              y: undefined,
              height: 40,
              width: 40,
              excavate: true,
            }}
          />
        </div>
        <p className="text-dark-200 text-center">
          {t('contact.scanQR')}
        </p>
      </div>
    </div>
  );
}