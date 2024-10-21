'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useMenuStore from '../store/menuStore';

const ListMenu = () => {
  const { menuItems } = useMenuStore(); // Ya no es necesario el fetch, solo usamos los datos del store
  const pathname = usePathname();

  const isActivePath = (parent, child = '') => {
    const encodedParent = encodeURIComponent(parent);
    const encodedChild = encodeURIComponent(child);
    return pathname.includes(`/${encodedParent}/${encodedChild}`);
  };

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
            <li key={index}>
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
                          <li key={childIndex}>
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
    <div className="group-submenu second" style={{ paddingRight: '10px' }}>
      <div className="group-submenu-title">Generales</div>
      {renderMenuItems(menuItems)}
    </div>
  );
};

export default ListMenu;
