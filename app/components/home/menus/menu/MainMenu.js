

const MainMenu = () => {
    return ( 
<div className="main-menu">
            <div className="container">
                <div className="main-menu-cont">
                    <div className="menu">
                        <a href="/" className="menu-item">Inicio</a>
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
                        <a href="#" className="menu-item">Servicios</a>
                        <a href="/transparencia" className="menu-item">Transparencia</a>
                        <a href="#" className="menu-item">Noticias</a>
                        <a href="#" className="menu-item">Multimedia</a>
                        <div className="dropdown menu-dropdown">
                            <a className="dropdown-toggle menu-item d-flex" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Publicaciones <i className="ri-arrow-down-s-line"></i>
                            </a>
                            <div className="dropdown-menu">
                              <a className="dropdown-item" href="#">Revista Guarnición</a>
                              <a className="dropdown-item" href="#">Boletín Informativo</a>
                              <a className="dropdown-item" href="#">Uniformes</a>
                              {/* <a className="dropdown-item" href="#">Licitaciones</a> */}
                              
                            </div>
                        </div>
                        <a href="#" className="menu-item">Contactos</a>
                        <a href="#" className="menu-item">Comunidad ayuda</a>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default MainMenu;