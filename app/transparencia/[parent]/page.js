'use client';
import LoadingContent from '@/app/components/Loading';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { ClockLoader } from 'react-spinners'; 
import { getOriginalTitle } from '@/app/utils/menuUtils'; 
export default function ParentPage() {
  const { parent } = useParams(); // Obtiene el parámetro "parent" desde la URL
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  // Función para buscar el contenido en la API de WordPress basado en el nombre del padre
  const fetchContent = async () => {
    try {
      const response = await fetch(
        `https://apird.mantosoft.com/wp-json/wp/v2/transparencia?search=${encodeURIComponent(parent)}&_embed`
      );
      const data = await response.json();
      if (data.length > 0) {
        setContent(data[0]);
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
  }, [parent]);

  return (
    <div className="entry-content">
      {loading ? (
       <LoadingContent />
      ) : content ? (
        <div>
          <h1>{content.title.rendered}</h1>
          <div dangerouslySetInnerHTML={{ __html: content.content.rendered }} />
        </div>
      ) : (
        <p>No se encontró contenido para {getOriginalTitle(decodeURIComponent(parent))}</p>
      )}
    </div>
  );
}
