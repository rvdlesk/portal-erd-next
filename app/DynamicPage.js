// components/DynamicPage.js
"use client";

import React from 'react';
import Link from 'next/link';
import useMenuStore from '@/app/store/menuStore';
import LoadingContent from '@/app/components/Loading';
import { usePathname } from 'next/navigation';
import getOriginalPortalTitle from '@/app/utils/menuUtils';
import ContactButtons from '@/app/components/ContactButtons';
import {sanitizeTitle} from '@/app/utils/menuUtils'

const DynamicPage = ({ page }) => {
  const pathname = usePathname();
  const { menuPortalItems } = useMenuStore();

  if (menuPortalItems.length < 1) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', height: "100vh" }}>
        <LoadingContent />
      </div>
    );
  }

  const getOriginalTitle = (sanitizedPart, items = menuPortalItems) => {
    for (let item of items) {
      if (item.sanitizedTitle === sanitizedPart) {
        return item.title;
      }
      if (item.children && item.children.length > 0) {
        const foundTitle = getOriginalTitle(sanitizedPart, item.children);
        if (foundTitle) {
          return foundTitle;
        }
      }
    }
    return sanitizedPart.replace(/-/g, ' ');

  };

  const pathParts = pathname.split('/').filter((part) => part);
  const buildBreadcrumbs = pathParts.map((part, index) => {
    try {
      const decodedPart = decodeURIComponent(part);
      const path = `/${pathParts.slice(0, index + 1).join('/')}`;
      const title = getOriginalTitle(decodedPart) || sanitizeTitle(decodedPart);
      return (
        <span key={index}>
          <Link href={path}>{title.toUpperCase()}</Link>
          {index < pathParts.length - 1 && <span> &gt; </span>}
        </span>
      );
    } catch (error) {
      console.error(`Error decoding URI component: ${part}`, error);
      return null;
    }
  });

  // Determina si la página es independiente (no está en el menú)
  const currentItem = pathParts.reduce((parent, part) => {
    if (!parent) return null;
    return parent.children?.find(child => child.sanitizedTitle === part) || parent;
  }, { children: menuPortalItems });

  const isStandalonePage = !currentItem || currentItem.sanitizedTitle !== pathParts[pathParts.length - 1];

  const renderChildrenGrid = (children) => {
    return (
      <div className="row pt-4">
        {children.map((child) => (
          <div className="col-md-4" key={child.id} style={{ marginBottom: '2rem' }}>
            <div className="card">
              <img
                src={child.image || '/default-image.jpg'}
                alt={child.title}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{child.title}</h5>
                <Link href={`${pathname}/${child.sanitizedTitle}`} className="btn btn-primary">
                  Ver más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <>
      <div className="breadcrumbs">
        <div className="container">
          <div className="breadcrumbs-cont">
            <div className="path">
              <Link href="/">INICIO</Link> <span>{` > `}</span>
              {buildBreadcrumbs}
            </div>
          </div>
          <h1>{page.title.rendered}</h1>
        </div>
      </div>

      <div className="container" style={{ minHeight: "100vh" }}>
        <div className="row pt-4 pl-4 pb-4">
          <ContactButtons />
        </div>

        {/* Si es una página independiente, renderizamos solo el contenido de la página */}
        {isStandalonePage ? (
          <div className="row pt-4 pb-4">
            <div className="col-md-12">
              <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
            </div>
          </div>
        ) : currentItem && currentItem.children && currentItem.children.length > 0 ? (
          renderChildrenGrid(currentItem.children)
        ) : (
          <div className="row pt-4 pb-4">
            <div className="col-md-12">
              <div dangerouslySetInnerHTML={{ __html: page.content.rendered }} />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default DynamicPage;
