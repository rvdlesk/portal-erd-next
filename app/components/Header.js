'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <official-header></official-header>
      <header className="header-light">
        <div className="topbar">
          <div className="container">
            <div className="topbar-cont">
              <Link href="/" className="logo">
                <div className="logo-icon">
                  <Image src="/img/page-logo.svg" alt="Logo" width={300} height={300} />
                </div>
              </Link>
              <div className="topbar-right">
                <form className="search-bar">
                  <label className="search-bar-toggle" htmlFor="searchMain">
                    <i className="ri-search-line"></i>
                  </label>
                  <input id="searchMain" type="search" placeholder="¿Qué quieres buscar?" />
                  <button type="submit">
                    <i className="ri-search-line"></i><span>Buscar</span>
                  </button>
                </form>
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
                {/* Lenguaje y menú hamburguesa */}
                <div className="lang-select dropdown-simple">
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
                </div>
                <div className="hamburger-menu">
                  <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <Image src="/img/menu hamburguesa.svg" alt="Menu" width={30} height={30} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main-menu">
            <div className="container">
                <div className="main-menu-cont">
                    <div className="menu">
                        <a href="#" className="menu-item">Inicio</a>
                        <div className="dropdown menu-dropdown">
                            <a className="dropdown-toggle menu-item d-flex" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Sobre nosotros <i className="ri-arrow-down-s-line"></i>
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Misión</a>
                              <a className="dropdown-item" href="#">Visión</a>
                              <a className="dropdown-item" href="#">Políticas de Privacidad</a>
                            </div>
                        </div>
                        <a href="#" className="menu-item">Depacho del ministro</a>
                        <a href="#" className="menu-item">Servicios</a>
                        <a href="#" className="menu-item">Marco Legal</a>
                        <a href="transparencia.html" className="menu-item">Transparencia</a>
                        <a href="#" className="menu-item">Noticias</a>
                    </div>
                </div>
            </div>
        </div>
      </header>
    </>
  );
}
