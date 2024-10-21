"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DynamicSwiper from "./components/home/DynamicSwiper";
import ServiceCard from "./components/home/cards/ServiceCard";
import Image from "next/image";
import NewsSection from  "./components/home/noticias/NewsSection";
// Import Swiper styles
import "swiper/css";

import { Autoplay } from "swiper";

import { Button, Typography } from "@ogticrd/ui-kit";

export default function HomePage() {
  const [hideOverlay, setHideOverlay] = useState(false);
  const [slidesData, setSlidesData] = useState([
    // { type: "image", url: "https://picsum.photos/1600/900", delay: 6000 },
    {
      type: "video",
      url: "https://www.ejercito.mil.do/wp-content/uploads/2021/11/CORTO-4.mp4",
      delay: 8000,
    },

    // { "type": "video", "url": "https://www.ejercito.mil.do/wp-content/uploads/2021/11/CORTO-7.mp4", "delay": 6000 },
    {
      type: "video",
      url: "https://www.ejercito.mil.do/wp-content/uploads/2021/11/CORTO-3.mp4",
      delay: 6000,
    },
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
      <div
        className="container-fluid"
        style={{
          backgroundImage: "linear-gradient(#0F3118, #064516, #0F3118)"
        }}
      >
        <div
          className="container"
          style={{ paddingTop: "4rem", paddingBottom: "4rem" }}
        >
          <h1 style={{ color: "#FFFFFF" }}>Servicios</h1>
          {/* <hr className="separator" /> */}
          <div className="row">
            <div className="col-md-4">
              <ServiceCard
                backgroundImage="https://www.ejercito.mil.do/wp-content/themes/ejercito/images/fondo4.png"
                iconClass="ri-edit-box-line" // Clase del ícono de Remix Icon
                text="Actualización de Datos y Consulta"
                link="/publicaciones/de-interes-general/actualizacion-de-datos"
              />{" "}
            </div>
            <div className="col-md-4">
              <ServiceCard
                backgroundImage="https://www.ejercito.mil.do/wp-content/themes/ejercito/images/fondo5.png"
                iconClass="ri-file-paper-line" // Clase del ícono de Remix Icon
                text="Solicitud de certificaciones de G1"
                link="/publicaciones/de-interes-general/actualizacion-de-datos"
              />
            </div>
            <div className="col-md-4">
              <ServiceCard
                backgroundImage="https://www.ejercito.mil.do/wp-content/themes/ejercito/images/fondo7.png"
                iconClass="ri-group-line" // Clase del ícono de Remix Icon
                text="Solicitud de Reclutamiento"
                link="/publicaciones/de-interes-general/actualizacion-de-datos"
              />
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ paddingTop: "8rem", paddingBottom: "8rem" }}
      >
        <div className="row align-items-top">
          <div className="col-md-5 d-flex flex-column justify-content-center">
            <h1 style={{ paddingBottom: "2rem" }} className="mb-0">
              Conoce el Ejército
            </h1>
            <Typography variant="body1">
              El Ejército de República Dominicana (ERD) es una de las tres ramas
              del Ministerio de Defensa de la República Dominicana,
              conjuntamente con la Armada y la Fuerza Aérea.
            </Typography>
            <br />
            <Typography variant="body1">
              Su visión es “Ser un Ejército moderno, profesional, organizado y
              entrenado para cumplir su misión en forma eficiente, en base a la
              excelencia del personal...
            </Typography>
            <div
              className=""
              style={{ paddingTop: "2rem", paddingBottom: "2rem" }}
            >
              {/* <h1 className="mb-0">Conoce el Ejército</h1> */}
              <Button fontWeight onClick={() => {}} className="btn-primary">
                Descubra
              </Button>
            </div>
          </div>
          <div className="col-md-7  d-flex flex-column justify-content-center">
            <img
              src="/img/about_comandancia.jpg"
              alt="about comandancia"
              className="img-fluid"
              style={{
                height: "400px",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row custom-section">
          <div className="col-md-6 custom-left-box d-flex flex-column justify-content-center align-items-start">
            <h6>VISITA</h6>
            <h2>
              La <strong>Galería de Ex-Comandante</strong> del Ejército de
              República Dominicana
            </h2>
            <Button
              id="klk"
              variant="outlined"
              fontWeight
              onClick={() => {}}
              className="btn-custom-section"
            >
              Visitar Galería
            </Button>
          </div>
          <div className="col-md-6 custom-right-box d-flex flex-column justify-content-center align-items-start">
            <h6>CONSULTA</h6>
            <h2>
              En el Ejército de República Dominicana Somos{" "}
              <strong>ejemplo de Transparencia</strong>
            </h2>
            <Button
              variant="outlined"
              fontWeight
              onClick={() => {}}
              className="btn-custom-section"
            >
              Consultar
            </Button>
          </div>
        </div>
      </div>
      <div
        className="container-fluid"
        style={{
          backgroundColor: "#F5F5F5",
        }}
      >
      <div
          className="container"
          style={{ paddingTop: "4rem", paddingBottom: "8rem" }}
        ><div className="d-flex justify-content-between align-items-center" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
        <h1>Noticias</h1>
        <Button fontWeight onClick={() => {}} className="btn-primary">
                Ver todas
              </Button>
      </div>
      
          <NewsSection/>
      
      </div>
      </div>
    </main>
  );
}
