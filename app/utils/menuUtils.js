// app/utils/menuUtils.js

import useMenuStore from '../store/menuStore'; 

export const getOriginalTitle = (sanitizedPart) => {
  const { menuItems } = useMenuStore.getState(); // Usar el estado directamente

  // Buscar en los elementos del nivel principal
  let menuItem = menuItems.find(item => item.sanitizedTitle === sanitizedPart);
  
  // Si no lo encuentra en el nivel principal, buscar en los hijos
  if (!menuItem) {
    menuItems.forEach(item => {
      const foundChild = item.children?.find(child => child.sanitizedTitle === sanitizedPart);
      if (foundChild) {
        menuItem = foundChild; // Asignar el hijo encontrado
      }
    });
  }

  // Retornar el título original o el valor sanitizado si no lo encuentra
  return menuItem ? menuItem.title : sanitizedPart;
};


export const sanitizeTitle = (title) => {
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
    .replace(/[\u0300-\u036f]/g, "") // Remueve diacríticos
    .replace(/[?!¡¿]/g, '') // Remueve signos de interrogación y exclamación
    .replace(/[^a-zA-Z0-9\s-]/g, '') // Elimina otros caracteres especiales
    .replace(/\s+/g, '-') // Reemplaza espacios por guiones
    .toLowerCase(); // Convierte a minúsculas
};

