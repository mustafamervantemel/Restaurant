import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, MapPin, ChefHat, Settings } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-gradient-to-r from-black/70 to-black/40">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-[2px] brightness-75"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&w=1200)'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent" />
        <div className="relative z-10 text-center text-white max-w-3xl mx-auto px-4 flex flex-col items-center">
          <div className="flex items-center justify-center mb-4">
            <span className="bg-amber-500/90 rounded-full p-3 shadow-lg">
              <ChefHat className="h-10 w-10 text-white" />
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            <span className="text-amber-400">Bella Vista</span>
            <span className="text-white">'ya Hoş Geldiniz</span>
          </h1>
          <p className="text-lg md:text-2xl mb-8 text-gray-200 font-medium drop-shadow">
            Otantik lezzetler, modern sunum ve unutulmaz bir atmosfer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center w-full">
            <Link
              to="/menu"
              className="bg-amber-600 shadow-lg text-white px-8 py-4 rounded-lg font-bold text-lg tracking-wide hover:bg-amber-700 transition-all duration-200 border-2 border-amber-600 hover:scale-105"
            >
              Menümüzü Görüntüle
            </Link>
            <Link
              to="/about"
              className="bg-white/90 text-amber-700 px-8 py-4 rounded-lg font-bold text-lg tracking-wide border-2 border-white hover:bg-amber-50 hover:text-amber-900 transition-all duration-200 hover:scale-105"
            >
              Hikayemiz
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Neden Bella Vista'yı Seçmelisiniz?</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Unutulmaz yemek deneyimleri yaratmak için geleneksel tarifleri modern tekniklerle birleştiriyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Uzman Şefler</h3>
              <p className="text-gray-600">
                Yetenekli şeflerimiz her yemeğe yılların deneyimini ve tutkusunu getiriyor
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Her Gün Taze</h3>
              <p className="text-gray-600">
                Tüm malzemeler en yüksek kaliteyi sağlamak için her gün taze tedarik ediliyor
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">5 Yıldızlı Hizmet</h3>
              <p className="text-gray-600">
                Her ziyareti unutulmaz kılan olağanüstü hizmet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                En İyi Kalitede Yemek Deneyimi Yaşayın
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Şehrin kalbinde yer alan Bella Vista, romantik akşam yemekleri, 
                aile kutlamaları veya iş toplantıları için mükemmel olan şık bir atmosfer sunuyor.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Ana Cadde 123, Merkez</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">Her Gün Açık: 11:00 - 22:00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Star className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-700">4.9/5 Yıldız • 500+ Değerlendirme</span>
                </div>
              </div>
              <Link
                to="/contact"
                className="inline-block bg-amber-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200"
              >
                Yol Tarifi Al
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3201921/pexels-photo-3201921.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Restoran İç Mekan"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admin Access Section - Mobile Friendly */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
              <div className="flex justify-center mb-6">
                <div className="bg-amber-100 p-4 rounded-full">
                  <Settings className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Restoran Yönetimi
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Menü güncellemeleri, fiyat değişiklikleri ve yeni ürün eklemeleri için
              </p>
              <Link
                to="/admin/login"
                className="w-full bg-amber-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-amber-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Settings className="h-5 w-5" />
                <span>Yönetim Paneline Giriş</span>
              </Link>
              <p className="text-xs text-gray-500 mt-4">
                Sadece restoran yöneticileri için
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default Home;