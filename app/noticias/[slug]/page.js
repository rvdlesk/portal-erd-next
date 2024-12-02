// app/noticias/[slug]/page.js
import React from 'react';
import NoticiaDetalleClient from './NoticiaDetalleClient';
import Head from 'next/head';

const fetchNoticiaDetalle = async (slug) => {
  const res = await fetch(`https://apird.mantosoft.com/wp-json/wp/v2/posts?slug=${slug}&_embed`);
  if (!res.ok) {
    throw new Error('Error al cargar la noticia');
  }
  const data = await res.json();
  return data.length > 0 ? data[0] : null;
};

const fetchNoticiasRelacionadas = async (excludeId) => {
  const res = await fetch(`https://apird.mantosoft.com/wp-json/wp/v2/posts?per_page=3&exclude=${excludeId}&_embed`);
  if (!res.ok) {
    throw new Error('Error al cargar noticias relacionadas');
  }
  const data = await res.json();
  return data;
};

const NoticiaDetallePage = async ({ params }) => {
  const noticia = await fetchNoticiaDetalle(params.slug);

  if (!noticia) {
    return <p>Noticia no encontrada.</p>;
  }

  const noticiasRelacionadas = await fetchNoticiasRelacionadas(noticia.id);

  return (
    <>
      <Head>
        <title>{noticia.title.rendered}</title>
        <meta name="description" content={noticia.excerpt.rendered} />
      </Head>
      <NoticiaDetalleClient
        noticia={noticia}
        noticiasRelacionadas={noticiasRelacionadas}
      />
    </>
  );
};

export default NoticiaDetallePage;
