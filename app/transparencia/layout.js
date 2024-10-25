'use client';
import { useState, useEffect } from 'react';
import ListMenu from './ListMenu';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import useMenuStore from '../store/menuStore'; // Import Zustand store
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import './style.css';
import './wordpress.css'
import LoadingContent from '../components/Loading';

export default function TransparenciaLayout({ children }) {
  const pathname = usePathname();
  const { menuItems, fetchMenu } = useMenuStore(); // Usar el store para obtener items y la función fetch

  const [isMenuLoaded, setIsMenuLoaded] = useState(false); // Controla si los menús están cargados

  // Carga el menú en el Layout en lugar de ListMenu
  useEffect(() => {
    if (menuItems.length === 0) {
      fetchMenu(); // Fetch solo si no hay items
    } else {
      setIsMenuLoaded(true); // Una vez cargados, actualiza el estado
    }
  }, [menuItems, fetchMenu]);

  const pathParts = pathname.split('/').filter((part) => part);

  const getOriginalTitle = (sanitizedPart) => {
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

  if(menuItems.length < 1){
    return  <div  style={{display:'flex',justifyContent:'center', height:"100vh"}}>
    <LoadingContent/></div>
  }

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs-cont">
            <div className="path">
              <Link href="/">INICIO</Link>  <span>{` > `}</span>
              <Link href="/transparencia"> TRANSPARENCIA</Link>
              {pathParts.slice(1).map((part, index) => (
                <span key={index}> {` > `} {getOriginalTitle(decodeURIComponent(part)).toUpperCase()}</span>
              ))}
            </div>
          </div>
          {pathParts.length > 2 ? (
            <h1>{getOriginalTitle(decodeURIComponent(pathParts[2])).toUpperCase()}</h1>
          ) : pathParts.length === 2 ? (
            <h1>{getOriginalTitle(decodeURIComponent(pathParts[1])).toUpperCase()}</h1>
          ) : (
            <h1>TRANSPARENCIA</h1>
          )}
        </div>
      </div>

      <div className="container" style={{height:"100vh"}}>
        <div className="row">
          <div className="col-md-3">
            <div className="list-submenu">
             
              {isMenuLoaded ? <ListMenu /> : <LoadingContent/>} {/* Mostrar el ListMenu solo si los datos están listos */}
            </div>
          </div>
          <div className="col-md-9">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
