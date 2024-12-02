// components/home/parts/Header.js
'use client';
import { useEffect } from 'react';
import LoadingScreen from '@/app/components/LoadingScreen/LoadingScreen';
import MainMenu from '../menus/menu/MainMenu';
import TopBar from '../menus/topbar/TopBar';
import useMenuStore from '@/app/store/menuStore';

export default function Header() {
  const { loading, fetchMenuPortal, menuPortalItems } = useMenuStore(); // Accede a `menuPortalItems`

  // Llama a `fetchMenuPortal` solo si no hay items en `menuPortalItems`
  useEffect(() => {
    if (menuPortalItems.length === 0) {
      fetchMenuPortal();
    }
  }, [fetchMenuPortal, menuPortalItems]);

  // Muestra `LoadingScreen` mientras `loading` es `true` y `menuPortalItems` está vacío
  if (loading && menuPortalItems.length === 0) {
    return <LoadingScreen />;
  }

  // Renderiza el header completo una vez que `loading` es `false` o ya hay items
  return (
    <>
      <header className="header-light">
        <div className="topbar">
          <div className="container">
            <TopBar />
          </div>
        </div>
        <MainMenu />
      </header>
    </>
  );
}
