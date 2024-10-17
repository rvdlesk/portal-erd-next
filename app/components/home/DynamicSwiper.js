'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import ReactPlayer from 'react-player';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useState, useEffect } from 'react';

export default function DynamicSwiper({ slidesData, defaultAutoplayDelay }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayDelay, setAutoplayDelay] = useState(slidesData[0]?.delay || defaultAutoplayDelay);
  const [isZoomActive, setIsZoomActive] = useState(false);
  const [isClient, setIsClient] = useState(false); // Para verificar si estamos en el cliente

  // Activar el modo cliente después de la hidratación
  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    const currentSlide = slidesData[activeIndex];
    setAutoplayDelay(currentSlide.delay || defaultAutoplayDelay);

    if (currentSlide.type === 'image') {
      setIsZoomActive(false); 
      const zoomTimer = setTimeout(() => {
        setIsZoomActive(true); 
      }, 500); 
      return () => clearTimeout(zoomTimer); 
    } else {
      setIsZoomActive(false);
    }
  }, [activeIndex, slidesData, defaultAutoplayDelay]);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Swiper
      className="full-width-swiper"
      spaceBetween={30}
      slidesPerView={1}
      speed={1500}
      effect="fade"
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      onSlideChange={handleSlideChange}
      modules={[Autoplay, EffectFade]}
    >
      {slidesData.map((slide, index) => (
        <SwiperSlide key={index} className="full-width-slide">
          {slide.type === 'youtube' && isClient ? ( // Solo renderizar en cliente
            <ReactPlayer
              key={`${index}-${activeIndex}`}
              url={slide.url}
              config={{
                youtube: {
                  playerVars: { showinfo: 0, rel: 0 }
                },
              }}
              playing={activeIndex === index}
              muted
              loop
              playsinline={false}
              controls={false}
              width="100%"
              height="100%"
            />
          ) : slide.type === 'image' ? (
            <img
              src={slide.url}
              className={`zoom-image ${isZoomActive ? 'active' : ''}`}
              alt={`Slide ${index}`}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : slide.type === 'video' ? (
            <video key={index} autoPlay muted loop style={{ width: '100%', height: '100%' }}>
              <source src={slide.url} type="video/mp4" />
            </video>
          ) : null}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
