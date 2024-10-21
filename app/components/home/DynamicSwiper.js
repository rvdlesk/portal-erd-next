'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import ReactPlayer from 'react-player';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { useState, useEffect, useRef } from 'react';

export default function DynamicSwiper({ slidesData, defaultAutoplayDelay }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplayDelay, setAutoplayDelay] = useState(slidesData[0]?.delay || defaultAutoplayDelay);
  const [isZoomActive, setIsZoomActive] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Aseguramos que el zoom ocurra también en el primer slide
    if (slidesData[0]?.type === 'image') {
      setIsZoomActive(true);
    }
  }, [slidesData]);

  useEffect(() => {
    const currentSlide = slidesData[activeIndex];
    setAutoplayDelay(currentSlide.delay || defaultAutoplayDelay);

    if (currentSlide.type === 'image') {
      setIsZoomActive(false);
      const zoomTimer = setTimeout(() => {
        setIsZoomActive(true);
      }, 500); // Aseguramos que el zoom se active después del fade
      return () => clearTimeout(zoomTimer);
    } else {
      setIsZoomActive(false);
    }

    // Control de reproducción de videos
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === activeIndex) {
          video.play();
        } else {
          video.pause();
          video.currentTime = 0; // Reiniciar el tiempo del video
        }
      }
    });
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
          {slide.type === 'youtube' ? (
            <ReactPlayer
              key={`${index}-${activeIndex}`}
              url={slide.url}
              config={{
                youtube: {
                  playerVars: { autoplay: 1, mute: 1, showinfo: 0, rel: 0 },
                },
              }}
              playing={activeIndex === index}
              muted
              loop
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
            <video
              key={index}
              ref={(el) => (videoRefs.current[index] = el)}
              muted
              loop
              style={{ width: '100%', height: '100%' }}
              controls={false}
            >
              <source src={slide.url} type="video/mp4" />
            </video>
          ) : null}
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
