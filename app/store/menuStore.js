// app/store/menuStore.js
import { create } from 'zustand';

// Función para sanitizar el título
const sanitizeTitle = (title) => {
  const accentMap = {
    'á': 'a', 'é': 'e', 'í': 'i', 'ó': 'o', 'ú': 'u',
    'Á': 'A', 'É': 'E', 'Í': 'I', 'Ó': 'O', 'Ú': 'U',
    'ñ': 'n', 'Ñ': 'N',
  };

  return title
    .split('')
    .map(char => accentMap[char] || char) // Reemplaza acentos
    .join('')
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remover diacríticos
    .replace(/\s+/g, '-') // Reemplazar espacios con guiones
    .toLowerCase(); // Convertir a minúsculas
};

// Zustand Store
const useMenuStore = create((set) => ({
  menuItems: [],
  fetchMenu: async () => {
    try {
      const response = await fetch('https://apird.mantosoft.com/wp-json/custom-api/v1/menu-transparencia');
      const data = await response.json();
      
      // Sanitizar el menú
      const sanitizedData = data.map(item => ({
        ...item,
        sanitizedTitle: sanitizeTitle(item.title),
        children: item.children.map(child => ({
          ...child,
          sanitizedTitle: sanitizeTitle(child.title),
        })),
      }));
      
      set({ menuItems: sanitizedData });
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  },
}));

export default useMenuStore;
