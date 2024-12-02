// const MegaMenu = () => {
//   return(<>
//   <div className="main-menu">
//             <div className="container">
//                 <div className="main-menu-cont">
//                     <div className="menu">
//                         <a href="#" className="menu-item">Inicio</a>
//                         <div className="dropdown menu-dropdown">
//                             <a className="dropdown-toggle menu-item d-flex" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                               Sobre nosotros <i className="ri-arrow-down-s-line"></i>
//                             </a>
//                             <div className="dropdown-menu">
//                               <a className="dropdown-item" href="#">Misión</a>
//                               <a className="dropdown-item" href="#">Visión</a>
//                               <a className="dropdown-item" href="#">Políticas de Privacidad</a>
//                             </div>
//                         </div>
//                         <a href="#" className="menu-item">Depacho del ministro</a>
//                         <a href="#" className="menu-item">Servicios</a>
//                         <a href="#" className="menu-item">Marco Legal</a>
//                         <a href="transparencia.html" className="menu-item">Transparencia</a>
//                         <a href="#" className="menu-item">Noticias</a>
//                     </div>
//                 </div>
//             </div>
//         </div>
//   </>)
// }


// import React, { useState, useRef, useEffect } from 'react';
// import './MainMenu.css';

// const MegaMenu = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const megaMenuRef = useRef(null);
//   const menuLinkRef = useRef(null);

//   // Detectar si es móvil o escritorio
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };

//     handleResize(); // Comprobar una vez al montar el componente
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Controlar el hover y el clic según el tipo de dispositivo
//   const toggleMenu = (event) => {
//     if (isMobile) {
//       event.preventDefault();
//       setIsMenuOpen((prev) => !prev);
//     }
//   };

//   // Cerrar el menú al hacer clic fuera de él
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (megaMenuRef.current && !megaMenuRef.current.contains(event.target) && !menuLinkRef.current.contains(event.target)) {
//         setIsMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, []);

//   // Estilos dinámicos para posicionar el mega menú justo debajo del enlace
//   const menuStyles = isMenuOpen && menuLinkRef.current
//     ? { top: `${menuLinkRef.current.offsetHeight}px`, left: `${menuLinkRef.current.offsetLeft}px` }
//     : {};

//   return (
//     <div className="main-menu">
//       <div className="container">
//         <div className="main-menu-cont">
//         <div className="menu">
     
//           <ul className="nav-menu">
//             <li className="menu-element">
//               <a className='menu-item' href="#!">Inicio</a>
//             </li>
//             <li
//               className="menu-element has-mega-menu"
//               ref={megaMenuRef}
//               onMouseEnter={() => !isMobile && setIsMenuOpen(true)}
//               onMouseLeave={() => !isMobile && setIsMenuOpen(false)}
//             >
//               <a
//                 href="#!"
//                 className=" menu-item menu-link"
//                 onClick={toggleMenu}
//                 ref={menuLinkRef}
//               >
//                 Sobre Nosotros <i className="arrow-down"></i>
//               </a>
//               <div
//                 className={`mega-menu ${isMenuOpen ? 'show' : ''}`}
//                 style={menuStyles}
//               >
//                 <div className="mega-menu-column">
//                   <ul>
//                     <li><a href="#!">Principios</a></li>
//                     <li><a href="#!">Organización</a></li>
//                     <li><a href="#!">Marco Legal</a></li>
//                     <li><a href="#!">Organigrama</a></li>
//                     <li><a href="#!">Despacho Comandante General</a></li>
//                     <li><a href="#!">Galería de Ex-Comandantes</a></li>
//                     <li className="has-submenu">
//                       <a href="#!">Unidades <i className="arrow-right"></i></a>
//                       <ul className="submenu">
//                         <li><a href="#!">1ra. Brigada de Infantería ERD</a></li>
//                         <li><a href="#!">2da. Brigada de Infantería ERD</a></li>
//                         <li><a href="#!">3ra. Brigada de Infantería ERD</a></li>
//                         <li><a href="#!">4ta. Brigada de Infantería ERD</a></li>
//                         <li><a href="#!">5ta. Brigada de Infantería ERD</a></li>
//                         <li><a href="#!">6ta. Brigada de Infantería ERD</a></li>
//                       </ul>
//                     </li>
//                     <li className="has-submenu">
//                       <a href="#!">Símbolos <i className="arrow-right"></i></a>
//                       <ul className="submenu">
//                         <li><a href="#!">Bandera Nacional</a></li>
//                         <li><a href="#!">Escudo Nacional</a></li>
//                         <li><a href="#!">Himno Nacional</a></li>
//                         <li><a href="#!">Bandera del Ejército de República Dominicana</a></li>
//                         <li><a href="#!">Himno del Ejército de República Dominicana</a></li>
//                         <li><a href="#!">Logo del Ejército de República Dominicana</a></li>
//                       </ul>
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </li>
//             <li className="menu-element"><a href="#!">Servicios</a></li>
//             <li className="menu-element"><a href="#!">Transparencia</a></li>
//             <li className="menu-element"><a href="#!">Multimedia</a></li>
//             <li className="menu-element"><a href="#!">Publicaciones</a></li>
//             <li className="menu-element"><a href="#!">Contacto</a></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default MegaMenu;
import React, { useState, useRef, useEffect } from 'react';
import useMenuStore from '@/app/store/menuStore';
import './MainMenu.css';

const MegaMenu = () => {
  const { menuPortalItems, fetchMenuPortal, loading } = useMenuStore();
  const [openMenuId, setOpenMenuId] = useState(null); // Estado para rastrear qué menú está abierto
  const [isMobile, setIsMobile] = useState(false);
  const menuContainerRef = useRef(null); // Referencia única para todo el menú

  // Detectar si es móvil o escritorio
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Cerrar el menú al hacer clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target)
      ) {
        setOpenMenuId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Función para construir el enlace completo incluyendo el parentPath
  const buildLink = (item, parentPath = '') => {
    const fullPath = `${parentPath}/${item.sanitizedTitle}`; // Construye el URL completo
    if (item.url.startsWith('https:')) {
      return { href: item.url, target: "_blank", rel: "noopener noreferrer" };
    } else if (item.title === 'Inicio') {
      return { href: `/` };
    } else {
      return { href: fullPath };
    }
  };

  // Renderizado recursivo de los submenús
  const renderMenuItems = (items, parentPath = '') => {
    return items.map((item) => (
      <li key={item.id} className={`menu-element ${item.children.length ? 'has-submenu' : ''}`}>
        <a {...buildLink(item, parentPath)} className="menu-item menu-item-space">
          {item.title} {item.children.length > 0 && <i className="arrow-right"></i>}
        </a>
        {item.children.length > 0 && (
          <ul className="submenu">
            {renderMenuItems(item.children, `${parentPath}/${item.sanitizedTitle}`)}
          </ul>
        )}
      </li>
    ));
  };

  if (loading) return <>Cargando ...</>;

  // Función para manejar la apertura del menú
  const handleMenuToggle = (menuId) => {
    if (openMenuId === menuId) {
      setOpenMenuId(null); // Cerrar si ya está abierto
    } else {
      setOpenMenuId(menuId); // Abrir el menú seleccionado
    }
  };

  // Renderizado del mega menú completo
  return (
    <div className="main-menu">
      <div className="container">
        <div className="main-menu-cont">
          <div className="menu" ref={menuContainerRef}>
            <ul className="nav-menu">
              {menuPortalItems.map((item) => (
                <li
                  key={item.id}
                  className={`menu-element ${item.children.length ? 'has-mega-menu' : ''}`}
                  onMouseEnter={() => {
                    if (!isMobile && item.children.length > 0) {
                      setOpenMenuId(item.id);
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isMobile && item.children.length > 0) {
                      setOpenMenuId(null);
                    }
                  }}
                >
                  <a
                    {...buildLink(item)}
                    className="menu-item menu-link"
                    onClick={(e) => {
                      if (isMobile && item.children.length > 0) {
                        e.preventDefault();
                        handleMenuToggle(item.id);
                      }
                    }}
                  >
                    {item.title} {item.children.length > 0 && <i className="arrow-down"></i>}
                  </a>
                  {item.children.length > 0 && (
                    <div
                      className={`mega-menu ${openMenuId === item.id ? 'show' : ''}`}
                    >
                      <div className="mega-menu-column">
                        <ul>
                          {renderMenuItems(item.children, `/${item.sanitizedTitle}`)}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
