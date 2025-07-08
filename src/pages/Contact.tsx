import React from 'react';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">İletişim</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Sizden haber almayı çok isteriz. Bizi ziyaret edin, arayın veya mesaj gönderin
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">İletişime Geçin</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <MapPin className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Adres</h3>
                    <p className="text-gray-600">Ana Cadde 123<br />Merkez, Ankara 06000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Telefon</h3>
                    <p className="text-gray-600">(0312) 456-7890</p>
                    <p className="text-sm text-gray-500">Rezervasyon ve sorular için</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">E-posta</h3>
                    <p className="text-gray-600">info@bellavista.com.tr</p>
                    <p className="text-sm text-gray-500">24 saat içinde yanıtlarız</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 p-3 rounded-lg">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">Saatler</h3>
                    <div className="text-gray-600 space-y-1">
                      <p>Pazartesi - Perşembe: 11:00 - 22:00</p>
                      <p>Cuma - Cumartesi: 11:00 - 23:00</p>
                      <p>Pazar: 12:00 - 21:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Müşterilerimiz Ne Diyor</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 italic">
                        "Harika yemek ve olağanüstü hizmet! Makarna mükemmel pişmiş ve atmosfer romantik bir akşam yemeği için mükemmel."
                      </p>
                      <p className="text-xs text-gray-500 mt-1">- Selin K.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-current" />
                      ))}
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 italic">
                        "Şehirdeki en iyi restoran! Personel inanılmaz dostane ve yemek sürekli mükemmel."
                      </p>
                      <p className="text-xs text-gray-500 mt-1">- Murat Y.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-8">Bizi Bulun</h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600">Etkileşimli Harita</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Ana Cadde 123, Merkez, Ankara 06000
                  </p>
                  <a
                    href="https://maps.google.com/?q=Ana+Cadde+123+Merkez+Ankara+06000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-amber-600 text-white px-4 py-2 rounded-lg hover:bg-amber-700 transition-colors duration-200"
                  >
                    Google Haritalar'da Aç
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Bize Mesaj Gönderin</h2>
            <p className="text-gray-600">
              Bir sorunuz var mı veya rezervasyon yapmak mı istiyorsunuz? Sizden haber almayı çok isteriz.
            </p>
          </div>

          <form className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  placeholder="Adınız"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  E-posta Adresi
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                  placeholder="eposta@ornek.com"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Konu
              </label>
              <select
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
              >
                <option value="">Konu seçin</option>
                <option value="reservation">Rezervasyon</option>
                <option value="catering">Catering</option>
                <option value="feedback">Geri Bildirim</option>
                <option value="other">Diğer</option>
              </select>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Mesaj
              </label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors duration-200"
                placeholder="Size nasıl yardımcı olabileceğimizi söyleyin..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
            >
              Mesaj Gönder
            </button>
          </form>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Contact;