// app/noticias/[slug]/NoticiaDetalleClient.js
'use client';

import React from 'react';
import './noticiasDetalle.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Facebook, Twitter, LinkedIn, Pinterest } from '@mui/icons-material'; // Importar iconos de Material-UI
import ContactButtons from '@/app/components/ContactButtons';
import '@/app/transparencia/wordpress.css';
import { sanitizeTitle } from '@/app/utils/menuUtils';
import useMenuStore from '@/app/store/menuStore';

const NoticiaDetalleClient = ({ noticia, noticiasRelacionadas }) => {
  const pathname = usePathname();
  const { menuPortalItems } = useMenuStore();

  // Acceder al autor, las categorías y la fecha desde _embedded y otros campos
  const authorName = noticia._embedded?.author?.[0]?.name || 'Autor desconocido';
  const categories = noticia._embedded?.['wp:term']?.[0]?.map((cat) => cat.name).join(', ') || 'Sin categoría';
  const featuredImage = noticia._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg';
  const formattedDate = new Date(noticia.date).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const url = typeof window !== 'undefined' ? window.location.href : '';

  // Función para obtener el título original
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

  // Construir breadcrumbs basado en el pathname
  const pathParts = pathname.split('/').filter((part) => part);
  const breadcrumbs = pathParts.map((part, index) => {
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
              {breadcrumbs}
            </div>
          </div>
          <h1>Noticias</h1>
        </div>
      </div>
      <div className="container" style={{ minHeight: "70vh" }}>
        <div className='row pt-4 pl-4'>
          <ContactButtons />
        </div>
        <div className='row pt-4 pl-4'>
            <div className="col-md-12">
          <h1>{noticia.title.rendered}</h1>
          <div className='pt-2 pb-2' style={{display:'block'}}>
            {formattedDate}
          </div>
          <img 
  src={featuredImage} 
  alt={noticia.title.rendered} 
  style={{ 
    width: '100%', 
    maxWidth: '1200px',  // Limita el ancho máximo a 600px
    height: 'auto',     // Ajusta la altura automáticamente para mantener la proporción
    // margin: '0 auto',   // Centra la imagen horizontalmente si es menor que el contenedor
    display: 'block'    // Evita el espacio extra en imágenes en línea
  }} 
/>          
    <div className="wordpress-content" style={{ padding: '0px 0px 2rem 0' }} dangerouslySetInnerHTML={{ __html: noticia.content.rendered }} />

          {/* Sección de compartir en redes sociales */}
          {/* <div className="share-section" style={{ paddingTop: '1rem', borderTop: '1px solid #ddd', marginTop: '1rem' }}>
            <p style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>Compartir</p>
            <div className="share-icons" style={{ display: 'flex', gap: '1rem', color: '#888' }}>
              <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">
                <Facebook fontSize="small" />
              </Link>
              <Link href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(noticia.title.rendered)}`} target="_blank" rel="noopener noreferrer">
                <Twitter fontSize="small" />
              </Link>
              <Link href={`https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}&title=${encodeURIComponent(noticia.title.rendered)}`} target="_blank" rel="noopener noreferrer">
                <LinkedIn fontSize="small" />
              </Link>
              <Link href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&media=${encodeURIComponent(featuredImage)}&description=${encodeURIComponent(noticia.title.rendered)}`} target="_blank" rel="noopener noreferrer">
                <Pinterest fontSize="small" />
              </Link>
            </div>
          </div> */}

          {/* Sección de noticias relacionadas */}
          <h1>Noticias Recientes</h1>
          <div className="related-news" style={{marginBottom:'6rem'}}>
            {noticiasRelacionadas.map((relatedNews) => {
              const relatedImage = relatedNews._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg';
              return (
                <div key={relatedNews.id} className="related-news-item">
                  <Link href={`/noticias/${relatedNews.slug}`}>
                    <img 
                      src={relatedImage}
                      alt={relatedNews.title.rendered}
                      style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                    />
                    <p style={{color:"#003876"}} className='pt-3'>{relatedNews.title.rendered}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default NoticiaDetalleClient;
