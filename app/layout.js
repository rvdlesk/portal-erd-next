import './globals.css';
import Header from './components/home/parts/Header';
import Footer from './components/home/parts/Footer';
import Head from 'next/head';
import Script from 'next/script';
import ClientThemeProvider from './components/ClientThemeProvider';
export const metadata = {
  title: 'SDD Index',
  description: 'Página principal de SDD',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <ClientThemeProvider>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />

        {/* Scripts globales con manejo optimizado */}
        <Script
          src="https://cdn.jsdelivr.net/gh/opticrd/ssd-lib/main.min.js"
          defer
          strategy="beforeInteractive"
          crossOrigin="anonymous"
        />
        <Script
          src="https://cdn.jsdelivr.net/gh/opticrd/official-header@latest/main.js"
          defer theme="dark"
          strategy="beforeInteractive"
          crossOrigin="anonymous"
          data-theme="dark"
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
        <Script src="/js/main.js" strategy="beforeInteractive" />
       
      </body>
      </ClientThemeProvider>
    </html>
  );
}
