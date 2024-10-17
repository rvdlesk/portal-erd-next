'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import DynamicSwiper from './components/home/DynamicSwiper';
// Import Swiper styles
import 'swiper/css';

import { Autoplay } from 'swiper';

import { Button } from '@ogticrd/ui-kit';

export default function HomePage() {

  const [hideOverlay, setHideOverlay] = useState(false);
  const [slidesData, setSlidesData] = useState([
    { "type": "image", "url": "https://picsum.photos/1600/900", "delay": 6000 },
    { "type": "video", "url": "https://www.ejercito.mil.do/wp-content/uploads/2021/11/CORTO-4.mp4", "delay": 6000 },
    { "type": "video", "url": "https://www.w3schools.com/html/mov_bbb.mp4", "delay": 6000 },
    { "type": "video", "url": "https://www.ejercito.mil.do/wp-content/uploads/2021/11/CORTO-3.mp4", "delay": 6000 },
  ]);

  

  useEffect(() => {
    // Ocultar la capa después de 3 segundos
    const timer = setTimeout(() => setHideOverlay(true), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <main>
   <div>
      {slidesData.length > 0 ? (
        <DynamicSwiper slidesData={slidesData} autoplayDelay={10000} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
      {/* <div className="banner">
        <div className="banner_content bg-blue-light">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          {/* <button className="btn btn-blue">COMENZAR A UTILIZARLO</button> 
          <Button
          variant="contained"
          size="medium"
           fontWeight onClick={() => console.log('Genial!')}>
          COMENZAR A UTILIZARLO
            </Button>
        </div>
        <img src="https://picsum.photos/500/500" alt="Placeholder image" />
      </div> */}
      <div className="container">
        <h1>Servicios</h1>
        <hr className="separator" />
        <div className="row">
          <div className="col-md">
            <div className="card top">
              <div className="card-body">
                <h3 className="card-title">Nombre tarjeta</h3>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <a href="#" className="card-link">MÁS DETALLES <i className="ri-arrow-right-s-line"></i></a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
