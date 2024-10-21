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
