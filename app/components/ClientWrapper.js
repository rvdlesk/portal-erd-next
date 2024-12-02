// components/ClientWrapper.js
"use client"; // Asegura que el componente solo se renderice en el cliente

import LoadingScreen from '@/app/components/LoadingScreen/LoadingScreen';
import { useEffect, useState } from 'react';
import useMenuStore from '@/app/store/menuStore';

const ClientWrapper = ({ children }) => {
  const { loading } = useMenuStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Este useEffect asegura que el componente solo se renderice en el cliente
    setIsClient(true);
  }, []);

  useEffect(() => {
    // Controla el scroll de la página durante el estado de carga
    if (isClient) {
      document.body.style.overflow = loading ? 'hidden' : 'auto';
    }
  }, [loading, isClient]);

  if (!isClient) return null; // Evita renderizar en el servidor

  return (
    <>
      {loading && <LoadingScreen />}
      {children}
    </>
  );
};

export default ClientWrapper;
