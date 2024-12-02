// app/store/menuStore.js
import { create } from 'zustand';
import {sanitizeTitle} from '@/app/utils/menuUtils'
// Función para sanitizar el título


// Recursive function to sanitize menu items with children
const sanitizeMenuItems = (items) =>
  items.map((item) => ({
    ...item,
    sanitizedTitle: sanitizeTitle(item.title),
    children: item.children ? sanitizeMenuItems(item.children) : [],
  }));

// Zustand Store
const useMenuStore = create((set) => ({
  menuItems: [],
  menuPortalItems: [],
  loading: false,
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
  fetchMenuPortal: async () => {
    set({ loading: true }); // Start loading
    try {
      const response = await fetch('https://apird.mantosoft.com/wp-json/custom-api/v1/menu-portal');
      const data = await response.json();

      // Sanitize menu items with nested children
      const sanitizedData = sanitizeMenuItems(data);
      
      set({ menuPortalItems: sanitizedData });
    } catch (error) {
      console.error('Error fetching menu portal items:', error);
    } finally {
      set({ loading: false }); // End loading
    }
  },
  
}));

export default useMenuStore;
