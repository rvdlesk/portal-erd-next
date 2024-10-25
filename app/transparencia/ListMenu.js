'use client';
import React, {useState} from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useMenuStore from '../store/menuStore';



const ListMenu = () => {
  const { menuItems } = useMenuStore(); // Ya no es necesario el fetch, solo usamos los datos del store
  const pathname = usePathname();
  const [menuControl, setMenuControl ] = useState('block')
 
  const isActivePath = (parent, child = '') => {
    const encodedParent = encodeURIComponent(parent);
    const encodedChild = encodeURIComponent(child);
    return pathname.includes(`/${encodedParent}/${encodedChild}`);
  };

  const isActiveParent = (urlName) => {
      const pathParts = pathname.split("/");
      console.log(pathParts[2])
      return  pathParts[2] == urlName;
  }

  const renderMenuItems = (items) => {
    return (
      <ul>
        {items.map((item, index) => {
          const collapseId = `collapse-${index}`;
          const parentIsActive = pathname.includes(item.sanitizedTitle);
          const childIsActive = item.children?.some((child) =>
            isActivePath(item.sanitizedTitle, child.sanitizedTitle)
          );
          


          
          return (
            <li key={index}   className={item.children.length < 1 && isActiveParent(item.sanitizedTitle)  ? 'active' : ''} >
              {item.children.length > 0 ? (
                <>
                  <a
                    data-bs-toggle="collapse"
                    href={`#${collapseId}`}
                    role="button"
                    aria-expanded={parentIsActive || childIsActive ? 'true' : 'false'}
                    aria-controls={collapseId}
                    className={`${parentIsActive || childIsActive ? 'active' : ''}`}
                  >
                    {item.title} <i className="ri-arrow-down-s-line"></i>
                  </a>
                  <div className={`collapse ${childIsActive ? 'show' : ''}`} id={collapseId}>
                    <ul>
                      {item.children.map((child, childIndex) => {
                        const childActive = isActivePath(item.sanitizedTitle, child.sanitizedTitle);
                        return (
                          <li key={childIndex} className={`${ childActive ? 'active' : ''}`} >
                            <Link
                              href={`/transparencia/${item.sanitizedTitle}/${child.sanitizedTitle}`}
                              className={childActive ? 'active' : ''}
                            >
                              {child.title}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </>
              ) : (
                <Link
                  href={`/transparencia/${item.sanitizedTitle}`}
                  className={parentIsActive ? 'active' : ''}
                >
                  {item.title}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
    <div className="group-submenu" style={{ paddingRight: '10px' }}>
    <ul className>
      <li onClick={ () => setMenuControl(menuControl === 'block' ? 'none' : 'block')}
      className='active-sp'
      >
        <a  aria-controls={menuControl === 'block' ? 'true' : 'false'}
          aria-expanded={menuControl === 'block' ? 'true' : 'false'}
              data-bs-toggle="collapse">Más de esta sección
               <i className="ri-arrow-down-s-line"></i></a>
      </li>
      
    </ul>
  </div>
  <div className="group-submenu second" style={{ display:menuControl }}>
<ul>
<li  className={pathname.split("/").length  < 3 ?'active': '' }><a href="/transparencia">Inicio</a></li>
<li><a href="/">Portal institucional ERD</a></li>
</ul>
  </div>
    <div className="group-submenu second" style={{ paddingRight: '10px', display:menuControl }}>
      <div className="group-submenu-title">Generales</div>
      {renderMenuItems(menuItems)}
    </div>
    </>
  );
};

export default ListMenu;
