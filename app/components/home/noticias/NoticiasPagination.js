// components/NoticiasPagination.js
"use client";

import { useState, useEffect } from 'react';
import NewsSection from './NewsSection';
import NewsListSection from './NewsListSection';
import { Pagination } from '@ogticrd/ui-kit';
import { usePathname } from 'next/navigation';
import {sanitizeTitle} from '@/app/utils/menuUtils'
import useMenuStore from '@/app/store/menuStore';
import Link from 'next/link';
import ContactButtons from '@/app/components/ContactButtons'
const fetchNoticias = async (page = 1) => {
 
  const res = await fetch(`https://apird.mantosoft.com/wp-json/wp/v2/posts?per_page=6&page=${page}&_embed`);
  if (!res.ok) {
    throw new Error('Error al cargar las noticias');
  }
  const data = await res.json();
  
  // Extraemos el total de páginas desde los headers de la respuesta
  const totalPages = parseInt(res.headers.get('X-WP-TotalPages'), 10) || 1;

  return { data, totalPages };
};



const NoticiasPagination = () => {
  const pathname = usePathname();
  const [newsItems, setNewsItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { menuPortalItems } = useMenuStore();

  useEffect(() => {
    const loadNoticias = async () => {
      try {
        const { data, totalPages } = await fetchNoticias(currentPage);
        setNewsItems(data);
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error al cargar las noticias:", error);
      }
    };
    loadNoticias();
  }, [currentPage]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

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
          <h1>Noticias</h1>
        </div>
      </div>
      
      <div className="container" style={{ minHeight: "70vh" }}>
      <div className='row pt-4 pl-4'>
      <ContactButtons />
      </div>
      <div className='row  pl-4'>
      <NewsListSection newsItems={newsItems} />

      <Pagination
        color="primary"
        currentPage={currentPage}
        onChange={(event, newPage) => handlePageChange(newPage)}
        shape="circular"
        totalPages={totalPages}
        variant="text"
      />
      </div>
    </div>
    </>
  );
};

export default NoticiasPagination;
