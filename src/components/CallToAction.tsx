import React from 'react';
import { Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="bg-gradient-to-r from-amber-600 to-red-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Harika Yemek Deneyimi Yaşamaya Hazır mısınız?
        </h2>
        <p className="text-amber-100 mb-8 text-lg">
          Rezervasyon veya paket servis siparişi için hemen arayın
        </p>
        <a
          href="tel:+903124567890"
          className="inline-flex items-center space-x-2 bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors duration-200 shadow-lg"
        >
          <Phone className="h-5 w-5" />
          <span>Hemen Ara: (0312) 456-7890</span>
        </a>
      </div>
    </div>
  );
};

export default CallToAction;