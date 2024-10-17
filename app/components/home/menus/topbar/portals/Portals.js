'use client'
import React, { useEffect } from "react";
import Image from 'next/image';
import Link from 'next/link';
import {
    toggleLangDropdown,
    preventMenuGridDropdownClose,
    toggleHamburgerMenu,
    toggleSubMenu,
    closeMenuGrid,
    handleResize,
  } from "@/public/js/main"; 

const Portals = () => {
    useEffect(() => {
        // Inicializa todas las funciones cuando el componente se monta
        toggleLangDropdown();
        preventMenuGridDropdownClose();
        toggleHamburgerMenu();
        toggleSubMenu();
        closeMenuGrid();
    
        // Añadir listener para manejar el resize
        window.onresize = handleResize;
        handleResize(); // Llamar la función una vez al cargar el componente
    
        return () => {
          // Limpia los event listeners al desmontar el componente
          window.onresize = null;
        };
      }, []);
    return ( 
        <>
        <div className="menu-grid dropdown">
                  <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Image src="/img/grid-menu-icon.svg" alt="Menu" width={30} height={30} />
                  </a>
                  <ul className="dropdown-menu">
                    <div className="menu-grid-title">
                      <h3>Enlaces de interés<i className="ri-arrow-right-s-line"></i></h3>
                      <i className="ri-close-circle-line"></i>
                    </div>
                    <div className="menu-grid-content">
                      <a data-bs-toggle="collapse" href="#collapsePortales" role="button" aria-expanded="true" aria-controls="collapse1">
                        <h4>Portales</h4>
                        <i className="ri-arrow-down-s-line"></i>
                      </a>
                      <hr />
                      <div className="dropdown-items collapse show" id="collapsePortales">
                        <div className="row">
                          <div className="menu-item col text-center">
                            <a href="http://www.gob.do/">
                              <Image src="/img/Gob.do.png" alt="Servicios Gob" className="rounded-circle" width={60} height={60} />
                              <h5>Servicios Gob</h5>
                            </a>
                          </div>
                          <div className="menu-item col text-center">
                            <a href="http://www.911.gob.do/">
                              <Image src="/img/Logo 911.png" alt="911" className="rounded-circle" width={60} height={60} />
                              <h5>9 1 1</h5>
                            </a>
                          </div>
                          <div className="menu-item col text-center">
                            <a href="http://www.311.gob.do/">
                              <Image src="/img/Logo 311.png" alt="3-1-1" className="rounded-circle" width={60} height={60} />
                              <h5>3-1-1</h5>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="menu-item col text-center">
                            <a href="http://www.becas.gob.do/">
                              <Image src="/img/Logo BECAS.png" alt="Becas tu Futuro" className="rounded-circle" width={60} height={60} />
                              <h5>Becas tu Futuro</h5>
                            </a>
                          </div>
                          <div className="menu-item col text-center">
                            <a href="http://www.observatorioserviciospublicos.gob.do/">
                              <Image src="/img/Logo observatorio.png" alt="Observatorio MAP" className="rounded-circle" width={60} height={60} />
                              <h5>Observatorio MAP</h5>
                            </a>
                          </div>
                          <div className="menu-item col text-center">
                            <a href="http://www.dominicana.gob.do/">
                              <Image src="/img/Dominicana GOB.png" alt="Dominicana GOB" className="rounded-circle" width={60} height={60} />
                              <h5>Dominicana GOB</h5>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="menu-item col text-center">
                            <a href="http://www.divulgacionresponsable.cncs.gob.do/">
                              <Image src="/img/CNCS.png" alt="CNCS" className="rounded-circle" width={60} height={60} />
                              <h5>CNCS</h5>
                            </a>
                          </div>
                          <div className="menu-item col text-center">
                            <a href="http://www.report.iwf.org.uk/do/">
                              <Image src="/img/IWF.png" alt="Abuso Sexual Infantil en Línea" className="rounded-circle" width={60} height={60} />
                              <h5>Abuso Sexual Infantil en Línea</h5>
                            </a>
                          </div>
                          <div className="menu-item col text-center">
                            <a href="#">
                              <Image src="/img/Insitutcion_Gob.png" alt="E-Tiket" className="rounded-circle" width={60} height={60} />
                              <h5>E-Tiket</h5>
                            </a>
                          </div>
                        </div>
                        <div className="row">
                          <div className="menu-item col-4 text-center">
                            <a href="#">
                              <Image src="/img/Insitutcion_Gob.png" alt="Mejora Regulatorio" className="rounded-circle" width={60} height={60} />
                              <h5>Mejora Regulatorio</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                      <a data-bs-toggle="collapse" href="#collapseInstituciones" role="button" aria-expanded="true" aria-controls="collapse1">
                        <h4>Instituciones</h4>
                        <i className="ri-arrow-down-s-line"></i>
                      </a>
                      <hr />
                      <div className="dropdown-items collapse show" id="collapseInstituciones">
                        <div className="row">
                          <div className="menu-item col text-center">
                            <a href="#">
                              <Image src="/img/Insitutcion_Gob.png" alt="MIMPRE" className="rounded-circle" width={60} height={60} />
                              <h5>MIMPRE</h5>
                            </a>
                          </div>
                          <div className="menu-item col text-center">
                            <a href="#">
                              <Image src="/img/Insitutcion_Gob.png" alt="MAP" className="rounded-circle" width={60} height={60} />
                              <h5>MAP</h5>
                            </a>
                          </div>
                          <div className="menu-item col text-center">
                            <a href="#">
                              <Image src="/img/Logo OGTIC.png" alt="OGTIC" className="rounded-circle" width={60} height={60} />
                              <h5>OGTIC</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                      <a data-bs-toggle="collapse" href="#collapseVentanilla" role="button" aria-expanded="true" aria-controls="collapse1">
                        <h4>Ventanillas Unicas</h4>
                        <i className="ri-arrow-down-s-line"></i>
                      </a>
                      <hr />
                      <div className="dropdown-items collapse show" id="collapseVentanilla">
                        <div className="row">
                          <div className="menu-item col text-center">
                            <a href="#">
                              <Image src="/img/Insitutcion_Gob.png" alt="Construcción" className="rounded-circle" width={60} height={60} />
                              <h5>Construcción</h5>
                            </a>
                          </div>
                          <div className="menu-item col text-center">
                            <a href="#">
                              <Image src="/img/Insitutcion_Gob.png" alt="Inversión" className="rounded-circle" width={60} height={60} />
                              <h5>Inversión</h5>
                            </a>
                          </div>
                          <div className="menu-item col text-center">
                            <a href="#">
                              <Image src="/img/Insitutcion_Gob.png" alt="Educación" className="rounded-circle" width={60} height={60} />
                              <h5>Educación</h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </ul>
                </div>
                {/* <div className="lang-select dropdown-simple"> 
                  <a href="#">
                    <Image src="https://flagcdn.com/do.svg" alt="Idioma" width={20} height={20} />
                    <i className="ri-arrow-down-s-line"></i>
                  </a>
                  <div className="dropdown-list" style={{ display: 'none' }}>
                    <a href="#">
                      <Image src="https://flagcdn.com/do.svg" alt="ES" width={20} height={20} /><span>ES</span>
                    </a>
                    <a href="#">
                      <Image src="https://flagcdn.com/us.svg" alt="EN" width={20} height={20} /><span>EN</span>
                    </a>
                  </div>
                </div>*/}
                <div className="hamburger-menu">
                  <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Image src="/img/menu hamburguesa.svg" alt="Menu" width={30} height={30} />
                  </a>
                </div>
                </>
     );
}
 
export default Portals;