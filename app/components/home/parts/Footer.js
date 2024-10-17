'use client';

import Image from 'next/image';
import { getCurrentYear } from '@/public/js/main';
export default function Footer() {
  return (
    <footer className="footer-light">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="logo-cont flex" style={{  display: 'flex',
    alignItems: 'center', gap: '20px' }}>
                <img src="/img/logo-new.png" alt="Erd Logo"  height={70} />
                <img src="/img/gob-text.svg" alt="Gob Logo"  height={70} />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="footer-title">CONÓCENOS</div>
              <ul className="footer-menu-list">
                <li><a href="#">Ejército de Republica Dominicana (ERD)</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-title">CONTÁCTANOS</div>
              <ul className="footer-menu-list">
                <li><a href="#">Tel: (809) 473-8000</a></li>
                {/* <li><a href="#">Fax: (809)-732-5465</a></li> */}
                <li><a href="#">info@ejercito.mil.do</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-title">BÚSCANOS</div>
              <ul className="footer-menu-list">
                <li><span>Autopista Duarte Km. 25 , Campamento Militar 16 de agosto, Municipio Pedro Brand , R.D.</span></li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-title">INFÓRMATE</div>
              <ul className="footer-menu-list">
                <li><a href="#">Términos de Uso</a></li>
                <li><a href="#">Política de Privacidad</a></li>
                <li><a href="#">Preguntas Frecuentes</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-nortic">
        <div className="container">
          <a className="" data-bs-toggle="collapse" href="#collapseSeals" role="button" aria-expanded="true" aria-controls="collapseSeals">
            Certificaciones obtenidas <i className="ri-arrow-right-s-line"></i>
          </a>
          <div className="certifications collapse show" id="collapseSeals">
          <div className="nortic-seals">
            <div className="sellos-footer" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>

<div className="stamp-container">
  <div className="stamp-box">
    <a href="https://nortic.ogtic.gob.do/instituciones/ERD" target="_blank" className="stamp stack-top" title="Norma para el Desarrollo y Gestión de los Medios Web del Estado Dominicano"></a>
    <iframe src="https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/226" height="100" width="100"></iframe>
  </div>
  <div className="stamp-box">
    <a href="https://nortic.ogtic.gob.do/instituciones/ERD" target="_blank" className="stamp stack-top" title="Norma sobre Publicación de Datos Abiertos del Gobierno Dominicano."></a>
    <iframe src="https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/227" height="100" width="100" ></iframe>
  </div>
  <div className="stamp-box">
    <a href="https://nortic.ogtic.gob.do/instituciones/ERD" target="_blank" className="stamp stack-top" title="Norma para la Interoperabilidad entre los Organismos del Gobierno Dominicano."></a>
    <iframe src="https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/229" height="100" width="100" ></iframe>
  </div>
  <div className="stamp-box">
    <a href="https://nortic.ogtic.gob.do/instituciones/ERD" target="_blank" className="stamp stack-top" title="Norma sobre la Prestación y Automatización de los Servicios Públicos del Estado Dominicano."></a>
    <iframe src="https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/231" height="100" width="100" ></iframe>
  </div>
  <div className="stamp-box">
    <a href="https://nortic.ogtic.gob.do/instituciones/ERD" target="_blank" className="stamp stack-top" title="Norma sobre el Desarrollo y Gestión del Software en el Estado Dominicano."></a>
    <iframe src="https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/225" height="100" width="100" ></iframe>
  </div>
  <div className="stamp-box">
    <a href="https://nortic.ogtic.gob.do/instituciones/ERD" target="_blank" className="stamp stack-top" title="Norma para la Seguridad de las Tecnologías de las Información y Comunicación en el Estado Dominicano."></a>
    <iframe src="https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/228" height="100" width="100" ></iframe>
  </div>
  <div className="stamp-box">
    <a href="https://nortic.ogtic.gob.do/instituciones/ERD" target="_blank" className="stamp stack-top" title="Norma para la Gestión de las Redes Sociales en los Organismos Gubernamentales"></a>
    <iframe src="https://be.nortic.ogtic.gob.do/StampProcesses/Stamp/232" height="100" width="100" ></iframe>
  </div>
  </div></div>
</div>

          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-cont">
            <div className="footer-bottom-left">
              <span className="date">© {getCurrentYear()} Todos los Derechos Reservados. </span>
              <span className="logo">&nbsp; Desarrollado por ERD</span>
            </div>
            <div className="footer-bottom-right">
              <span className="follow-text">SÍGUENOS</span>
              <ul className="follow-icons">
                <li><a href="https://www.facebook.com/EjercitoRD/" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill"></i></a></li>
                <li><a href="https://www.youtube.com/user/ejercitord" target="_blank" rel="noopener noreferrer"><i className="ri-youtube-fill"></i></a></li>
                <li><a href="https://twitter.com/ejercitord" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-x-fill"></i></a></li>
                <li><a href="https://www.instagram.com/ejercitord" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-fill"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
