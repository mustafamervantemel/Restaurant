import React, { useState } from 'react';
import { Clock } from 'lucide-react';
import { useMenu } from '../contexts/MenuContext';

const Menu = () => {
  const { menuItems } = useMenu();
  const [selectedCategory, setSelectedCategory] = useState('Hepsi');

  const categories = ['Hepsi', ...new Set(menuItems.map(item => item.category))];
  const filteredItems = selectedCategory === 'Hepsi' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="relative py-16 md:py-20 bg-gradient-to-r from-amber-600 to-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 md:mb-6">Menümüz</h1>
          <p className="text-lg md:text-xl text-amber-100 max-w-3xl mx-auto">
            En kaliteli malzemelerle hazırlanan özenle yaratmış yemeklerimizi keşfedin
          </p>
        </div>
      </section>

      {/* Menu Content */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-lg font-medium transition-colors duration-200 text-sm md:text-base ${
                  selectedCategory === category
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-amber-50 shadow-sm'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 md:h-52 object-cover"
                  />
                  {!item.available && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <span className="text-white font-semibold bg-red-600 px-4 py-2 rounded-lg text-sm">
                        Mevcut Değil
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-xs md:text-sm font-medium">
                      {item.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-4 md:p-6">
                  {/* Title and Price */}
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 leading-tight">{item.name}</h3>
                    <div className="flex items-center text-amber-600 font-bold text-lg md:text-xl ml-2">
                      <span>₺{item.price.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">{item.description}</p>
                  
                  {/* Preparation Time */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock className="h-4 w-4 mr-2 text-amber-600" />
                      <span className="font-medium">{item.preparationTime}</span>
                    </div>
                  </div>
                  
                  {/* Order Button */}
                  
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Bu kategoride ürün bulunamadı.</p>
            </div>
          )}
        </div>
      </section>

    </div>
  );
};

export default Menu;