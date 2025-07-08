import React, { createContext, useContext, useState, useEffect } from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  available: boolean;
  preparationTime: string;
}

interface MenuContextType {
  menuItems: MenuItem[];
  addMenuItem: (item: Omit<MenuItem, 'id'>) => void;
  updateMenuItem: (id: string, item: Partial<MenuItem>) => void;
  deleteMenuItem: (id: string) => void;
  categories: string[];
  addCategory: (category: string) => void;
  deleteCategory: (category: string) => void;
}

const MenuContext = createContext<MenuContextType | undefined>(undefined);

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    {
      id: '1',
      name: 'Margherita Pizza',
      description: 'Taze domates sosu, mozzarella ve fes ileğen, ince hamur üzerinde',
      price: 45.99,
      category: 'Pizza',
      image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '15-20 dakika'
    },
    {
      id: '2',
      name: 'Izgara Somon',
      description: 'Otlar ve limon tereyağı ile taze Atlantik somonu',
      price: 89.99,
      category: 'Ana Yemek',
      image: 'https://images.pexels.com/photos/1343752/pexels-photo-1343752.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '20-25 dakika'
    },
    {
      id: '3',
      name: 'Sezar Salata',
      description: 'Gevrek marul, parmesan, kruton ve Sezar sosu',
      price: 35.99,
      category: 'Salatalar',
      image: 'https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '10-15 dakika'
    },
    {
      id: '4',
      name: 'Çikolatalı Lav Keki',
      description: 'Eriymiş merkezli sıcak çikolata keki ve vanilya dondurması',
      price: 28.99,
      category: 'Tatlılar',
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=500',
      available: true,
      preparationTime: '12-18 dakika'
    }
  ]);
  const [categories, setCategories] = useState<string[]>([
    'Pizza', 'Ana Yemek', 'Salatalar', 'Tatlılar', 'İçecekler', 'Mezeler'
  ]);

  // Load menu items from localStorage on mount
  useEffect(() => {
    const savedItems = localStorage.getItem('menuItems');
    if (savedItems) {
      setMenuItems(JSON.parse(savedItems));
    }
  }, []);

  // Save menu items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('menuItems', JSON.stringify(menuItems));
  }, [menuItems]);

  const addMenuItem = (item: Omit<MenuItem, 'id'>) => {
    const newItem = {
      ...item,
      id: Date.now().toString()
    };
    setMenuItems(prev => [...prev, newItem]);
  };

  const updateMenuItem = (id: string, updates: Partial<MenuItem>) => {
    setMenuItems(prev => 
      prev.map(item => 
        item.id === id ? { ...item, ...updates } : item
      )
    );
  };

  const deleteMenuItem = (id: string) => {
    setMenuItems(prev => prev.filter(item => item.id !== id));
  };

  const addCategory = (category: string) => {
    setCategories(prev => prev.includes(category) ? prev : [...prev, category]);
  };
  const deleteCategory = (category: string) => {
    setCategories(prev => prev.filter(cat => cat !== category));
    // Ayrıca o kategoriye ait menü öğelerini de güncelleyebilirsiniz (isteğe bağlı)
  };

  const value = {
    menuItems,
    addMenuItem,
    updateMenuItem,
    deleteMenuItem,
    categories,
    addCategory,
    deleteCategory
  };

  return (
    <MenuContext.Provider value={value}>
      {children}
    </MenuContext.Provider>
  );
}