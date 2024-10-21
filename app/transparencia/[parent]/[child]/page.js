'use client';
import LoadingContent from '@/app/components/Loading';
import { useParams } from 'next/navigation'; // Para obtener los parámetros dinámicos
import { useState, useEffect } from 'react';
import { getOriginalTitle } from '@/app/utils/menuUtils'; 

export default function ChildPage() {
  const { parent, child } = useParams(); // Obtiene los parámetros parent y child de la URL
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para buscar el contenido en la API de WordPress
  const fetchContent = async () => {
    let searchQuery;
    if (child) {
      // Si hay un hijo, buscamos solo por el nombre del hijo
      searchQuery = encodeURIComponent(child);
    } else {
      // Si no hay hijo, buscamos por el nombre del padre
      searchQuery = encodeURIComponent(parent);
    }

    try {
      const response = await fetch(
        `https://apird.mantosoft.com/wp-json/wp/v2/transparencia?search=${searchQuery}&_embed`
      );
      const data = await response.json();
      if (data.length > 0) {
        setContent(data[0]);
        console.log(data[0])
      } else {
        setContent(null);
      }
    } catch (error) {
      console.error('Error fetching content:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, [parent, child]);

  return (
    <div className="entry-content">
      {loading ? (
        <LoadingContent />
      ) : content ? (
        <>
          <h1 className="entry-title">{content.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: content.meta }} />
          </>

      ) : (
        <p>No se encontró contenido para {getOriginalTitle(decodeURIComponent(child || parent))}</p>
      )}
    </div>
  );
}
