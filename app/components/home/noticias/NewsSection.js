// import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
// import { useEffect, useState } from 'react';
// import './noticias.css'


// function truncateTitle(title, maxLength) {
//   if (title.length > maxLength) {
//     return title.slice(0, maxLength) + '...';
//   }
//   return title;
// }

// export default function NewsSection() {
//   const [newsItems, setNewsItems] = useState([]);

//   useEffect(() => {
//     // Simulación de noticias con imágenes de picsum.photos
//     const fetchNews = () => {
//       const newsData = Array.from({ length: 4 }).map((_, index) => ({
//         title: `Comandante General sostiene encuentro con el Director de Departamento de justicia y sus agraciados mas competitivos de veras que asi seria muy cool`,
//         description: `Descripción de la noticia ${index + 1}`,
//         image: `https://picsum.photos/600/400?random=${index + 1}`,
//         category: 'Actualidad', // Etiqueta de categoría
//         date: '12 de octubre de 2024', // Fecha fija de ejemplo
//       }));
//       setNewsItems(newsData);
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div className="row">
//       {newsItems.length > 0 ? (
//         <>
//           <div className="col-md-7 mb-4 d-flex flex-column justify-content-top">
//             <Card sx={{height:'530px'}}>
//               <Box sx={{ position: 'relative' }}>
//                 <CardMedia
//                   className="zoom-image"
//                   component="img"
//                   height="400"
//                   image={newsItems[0].image}
//                   alt={newsItems[0].title}
//                 />
//                 <Box
//                   sx={{
//                     position: 'absolute',
//                     top: 10,
//                     left: 10,
//                     backgroundColor: '#000',
//                     opacity:'0.4',
//                     padding: '5px 10px',
//                     color: '#fff',
//                     fontWeight: 'bold',
//                   }}
//                 >
//                   {newsItems[0].category}
//                 </Box>
//               </Box>
//               <CardContent>
//                 <Typography sx={{fontSize:'14pt'}} variant="h5">{truncateTitle(newsItems[0].title, 100)}</Typography>
//                 <Typography variant="caption" color="textSecondary">
//                   {newsItems[0].date}
//                 </Typography>
//               </CardContent>
//             </Card>
//           </div>

//           <div className="col-md-5">
//             {newsItems.slice(1).map((news, index) => (
//               <Card key={index} sx={{ display: 'flex', marginBottom: 2, height:'166px' }}>
//                  <Box sx={{ position: 'relative' }}>
//                 <CardMedia
//                   component="img"
//                   sx={{ width: 250}}
//                   image={news.image}
//                   alt={news.title}
//                   className="zoom-image"
//                 />
//                  <Box
//                   sx={{
//                     position: 'absolute',
//                     top: 5,
//                     left: 5,
//                     backgroundColor: '#000',
//                     opacity:'0.4',
//                     padding: '5px 10px',
//                     color: '#fff',
//                     fontWeight: 'bold',
//                     fontSize:'7pt'
//                   }}
//                 >
//                   {newsItems[0].category}
//                 </Box>
//                 </Box>
//                 <CardContent style={{paddingBottom:'0'}}>
//                   <Typography sx={{fontSize:'10pt'}} variant="h6">{truncateTitle(news.title, 100)}</Typography>
//                   {/* <Typography variant="body2" gutterBottom>
//                     {news.description}
//                   </Typography> */}
//                   <Typography variant="caption" color="textSecondary">
//                     {news.date}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </>
//       ) : (
//         <p>Cargando noticias...</p>
//       )}
//     </div>
//   );
// }

// components/NewsSection.js
// components/NewsSection.js
import { Card, CardContent, Typography, CardMedia, Box } from '@mui/material';
import Link from 'next/link';
import { truncateTitle } from '@/app/utils/utils'; // Mueve la función de truncado a un archivo de utilidades

const NewsSection = ({ newsItems = [] }) => {

  return (
    <div className="row pt-4 pb-4">
      {newsItems.length > 0 ? (
        <>
          <div className="col-md-7 mb-4 d-flex flex-column justify-content-top">
            <Card sx={{ height: '530px' }}>
              <Link href={`/noticias/${newsItems[0].slug}`}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    className="zoom-image"
                    component="img"
                    height="400"
                    image={
                      newsItems[0]._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg'
                    } // Cambia a la propiedad de imagen que recibes de la API
                    alt={newsItems[0].title.rendered}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 10,
                      left: 10,
                      backgroundColor: '#000',
                      opacity: '0.4',
                      padding: '5px 10px',
                      color: '#fff',
                      fontWeight: 'bold',
                    }}
                  >
                   {newsItems[0]._embedded['wp:term'][0].map(cat => cat.name).join(', ')}
                  </Box>
                </Box>
              </Link>
              <CardContent>
                <Typography sx={{ fontSize: '14pt' }} variant="h5">
                  {truncateTitle(newsItems[0].title.rendered, 100)}
                </Typography>
                <Typography variant="caption" color="textSecondary">
                  {newsItems[0].date}
                </Typography>
              </CardContent>
            </Card>
          </div>
          {/* Noticias adicionales */}
          <div className="col-md-5">
            {newsItems.slice(1).map((news, index) => (
              <Link key={index} href={`/noticias/${news.slug}`}>
                <Card sx={{ display: 'flex', marginBottom: 2, height: '166px' }}>
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 250 }}
                      image={
                        news._embedded?.['wp:featuredmedia']?.[0]?.source_url || '/default-image.jpg'
                      } // Cambia a la propiedad de imagen que recibes de la API
                      alt={news.title.rendered}
                      className="zoom-image"
                    />
                    <Box
                      sx={{
                        position: 'absolute',
                        top: 5,
                        left: 5,
                        backgroundColor: '#000',
                        opacity: '0.4',
                        padding: '5px 10px',
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: '7pt',
                      }}
                    >
                      {news._embedded['wp:term'][0].map(cat => cat.name).join(', ')}
                    </Box>
                  </Box>
                  <CardContent style={{ paddingBottom: '0' }}>
                    <Typography sx={{ fontSize: '10pt' }} variant="h6">
                      {truncateTitle(news.title.rendered, 100)}
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      {news.date}
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </>
      ) : (
        <p>Cargando noticias...</p>
      )}
    </div>
  );
};

export default NewsSection;
