'use client';

import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer-light">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="logo-cont">
                <Image src="/img/gob-text.svg" alt="Gob Logo" width={300} height={150} />
              </div>
            </div>
            <div className="col-6 col-md-2">
              <div className="footer-title">CONÓCENOS</div>
              <ul className="footer-menu-list">
                <li><a href="#">Oficina Gubernamental de Tecnologías de la Información y Comunicación</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-title">CONTÁCTANOS</div>
              <ul className="footer-menu-list">
                <li><a href="#">Tel: (809)-286-1009</a></li>
                <li><a href="#">Fax: (809)-732-5465</a></li>
                <li><a href="#">info@ogtic.gob.do</a></li>
              </ul>
            </div>
            <div className="col-md-2 col-6">
              <div className="footer-title">BÚSCANOS</div>
              <ul className="footer-menu-list">
                <li><span>Av. 27 de Febrero #419 casi esquina Núñez de Cáceres, Santo Domingo, R.D.</span></li>
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
              <Image src="/img/A1.svg" alt="Certificación A1" width={50} height={50} />
              <Image src="/img/A2.svg" alt="Certificación A2" width={50} height={50} />
              <Image src="/img/A3.svg" alt="Certificación A3" width={50} height={50} />
              <Image src="/img/A4.svg" alt="Certificación A4" width={50} height={50} />
              <Image src="/img/A5.svg" alt="Certificación A5" width={50} height={50} />
              <Image src="/img/A6.svg" alt="Certificación A6" width={50} height={50} />
              <Image src="/img/A7.svg" alt="Certificación A7" width={50} height={50} />
              <Image src="/img/B1.svg" alt="Certificación B1" width={50} height={50} />
              <Image src="/img/E1.svg" alt="Certificación E1" width={50} height={50} />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-cont">
            <div className="footer-bottom-left">
              <span className="date">© 2023 Todos los Derechos Reservados.</span>
              <span className="logo"> Desarrollado por <Image src="/img/ogtic-logo-white.svg" alt="OGTIC Logo" width={80} height={30} /></span>
            </div>
            <div className="footer-bottom-right">
              <span className="follow-text">SÍGUENOS</span>
              <ul className="follow-icons">
                <li><a href="https://www.facebook.com/Ogticrd" target="_blank" rel="noopener noreferrer"><i className="ri-facebook-fill"></i></a></li>
                <li><a href="https://www.youtube.com/OGTICRD" target="_blank" rel="noopener noreferrer"><i className="ri-youtube-fill"></i></a></li>
                <li><a href="https://twitter.com/OGTICRDO" target="_blank" rel="noopener noreferrer"><i className="ri-twitter-fill"></i></a></li>
                <li><a href="https://www.instagram.com/ogticrd/" target="_blank" rel="noopener noreferrer"><i className="ri-instagram-fill"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
