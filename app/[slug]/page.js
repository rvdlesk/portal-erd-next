// app/[[...slug]]/page.js
import DynamicPage from '@/app/DynamicPage';
import { notFound } from 'next/navigation';

// Función para obtener los datos desde WordPress
async function fetchPageData(slug) {
  const res = await fetch(`https://apird.mantosoft.com/wp-json/wp/v2/pages?slug=${slug}&_embed`);
  if (!res.ok) {
    throw new Error('Error al cargar la página');
  }
  const page = await res.json();
  return page.length > 0 ? page[0] : null;
}

// Server Component
const SlugPage = async ({ params }) => {
 
  const page = await fetchPageData(params.slug);
  if (!page) {
    notFound(); // Redirige a la página 404 si no se encuentran datos
    return null;
  }
  return (
    <>
      <DynamicPage page={page} slug={params.slug} />
    </>
  );
};

export default SlugPage;