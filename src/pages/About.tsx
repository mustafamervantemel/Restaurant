import React from 'react';
import { Heart, Users, Award, Utensils } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-amber-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">Hikayemiz</h1>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            Yemek tutkusu, mükemmellik taahhhüdü ve insanları bir araya getirme sevgisi
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Misyonumuz</h2>
              <p className="text-gray-600 mb-6 text-lg">
                Bella Vista'da, harika yemeğin insanları bir araya getirme, 
                kalıcı anılar yaratma ve hayatın en değerli anlarını kutlama gücüne 
                sahip olduğuna inanıyoruz. Misyonumuz otantik lezzetleri sıcak misafirperverlik 
                ile birleştiren olağanüstü bir yemek deneyimi sunmaktır.
              </p>
              <p className="text-gray-600 mb-8 text-lg">
                Yalnızca en kaliteli malzemeleri kullanmaya, yerel çiftciçileri desteklemeye 
                ve yeniliği benimserken geleneksel tarifleri onurlandıran yemekler yaratmaya kararlıyız.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
                  <div className="text-gray-600">Yıl Deneyim</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-600 mb-2">50K+</div>
                  <div className="text-gray-600">Mutlu Müşteri</div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Yemek hazırlayan şef"
                className="w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Değerlerimiz</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Bu temel ilkeler Bella Vista'da yaptığımız her şeye rehberlik eder
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Tutku</h3>
              <p className="text-gray-600 text-sm">
                Yaratmış olduğumuz her yemeğe kalbimizi koyuyoruz
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Topluluk</h3>
              <p className="text-gray-600 text-sm">
                Paylaşılan yemekler aracılığıyla bağ kurma
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mükemmellik</h3>
              <p className="text-gray-600 text-sm">
                Her detayda kalite taahhhüdü
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Utensils className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Gelenek</h3>
              <p className="text-gray-600 text-sm">
                Otantik lezzetleri ve teknikleri onurlandırma
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Ekibimizle Tanışın</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Bella Vista'yı özel kılan tutkulu bireyler
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Baş Şef"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mehmet Özkan</h3>
              <p className="text-amber-600 mb-2">Baş Şef</p>
              <p className="text-gray-600 text-sm">
                20 yıllık mutfak deneyimi ile Mehmet, her yemeğe otantik lezzetler ve yenilikçi teknikler getiriyor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Restoran Müdürü"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ayşe Yılmaz</h3>
              <p className="text-amber-600 mb-2">Restoran Müdürü</p>
              <p className="text-gray-600 text-sm">
                Ayşe her misafirin kendini karşılanmış hissetmesini ve baştan sona olağanüstü bir yemek deneyimi yaşamasını sağlıyor.
              </p>
            </div>

            <div className="text-center">
              <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Sommelier"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Ali Demir</h3>
              <p className="text-amber-600 mb-2">Baş Sommelier</p>
              <p className="text-gray-600 text-sm">
                Ali, menü tekliflerimizi mükemmel bir şekilde tamamlayacak şarap seçimlerimizi özenle hazırlıyor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </div>
  );
};

export default About;