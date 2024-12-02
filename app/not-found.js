// app/404.js
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      height: '70vh',
      padding: '2rem',
      boxSizing: 'border-box'
    }}>
       <img src='/img/logo-new.png' style={{height:'150px'}}></img>
      <h1>404 - Página No Encontrada</h1>
      <p style={{ marginBottom: '2rem' }}>Lo sentimos, la página que estás buscando no existe.</p>
      <Link href="/" style={{
        textDecoration: 'none',
        color: '#0070f3',
        fontWeight: 'bold'
      }}>
        Volver al inicio
      </Link>
    </div>
  );
}
