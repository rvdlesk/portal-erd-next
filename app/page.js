'use client';
import { Button } from '@ogticrd/ui-kit';

export default function HomePage() {
  return (
    <main>
      
      <div className="banner">
        <div className="banner_content bg-blue-light">
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          {/* <button className="btn btn-blue">COMENZAR A UTILIZARLO</button> */}
          <Button
          variant="contained"
          size="medium"
           fontWeight onClick={() => console.log('Genial!')}>
          COMENZAR A UTILIZARLO
            </Button>
        </div>
        <img src="https://picsum.photos/500/500" alt="Placeholder image" />
      </div>
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
