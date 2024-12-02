// components/InitialLoading.js
"use client";

import { useEffect, useState } from 'react';
import useMenuStore from '@/app/store/menuStore';
import LoadingScreen from './LoadingScreen/LoadingScreen';

const InitialLoading = () => {
  const { loading } = useMenuStore();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Marca el componente como montado en el cliente
    setIsClient(true);
  }, []);

  // Solo muestra `LoadingScreen` si el cliente está montado y `loading` es true
  if (!isClient || loading) {
    return <LoadingScreen />;
  }

  // Retorna `null` si el contenido ya está listo y cargado
  return null;
};

export default InitialLoading;
