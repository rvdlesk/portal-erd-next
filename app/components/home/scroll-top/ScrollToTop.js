'use client'
import { useState, useEffect } from 'react';
import './ScrollTop.css'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Verificar si el componente está siendo renderizado en el cliente
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Mostrar u ocultar el botón dependiendo del scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Función para hacer scroll hacia arriba
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isClient) {
    return null; // No renderizar nada en el servidor
  }

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <button onClick={scrollToTop} className="scroll-button">
          <i style={{fontSize: '20px'}} className="ri-arrow-up-s-line"></i>
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
