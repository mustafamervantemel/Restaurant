import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => (
  <footer className="bg-white border-t mt-12">
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <div className="text-center md:text-left">
        <h2 className="text-xl font-bold text-amber-600 mb-1">Bella Vista</h2>
        <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Bella Vista. Tüm hakları saklıdır.</p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-4">
          <a href="tel:+903124567890" className="flex items-center text-gray-600 hover:text-amber-600 text-sm">
            <Phone className="h-4 w-4 mr-1" /> 0312 456 78 90
          </a>
          <a href="mailto:info@bellavista.com" className="flex items-center text-gray-600 hover:text-amber-600 text-sm">
            <Mail className="h-4 w-4 mr-1" /> info@bellavista.com
          </a>
        </div>
        <div className="flex gap-3 mt-2">
          <a href="#" className="text-gray-500 hover:text-amber-600" aria-label="Instagram">
            <Instagram className="h-5 w-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-amber-600" aria-label="Facebook">
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer; 