import './globals.css';
import Header from './components/home/parts/Header';
import Footer from './components/home/parts/footer/Footer';
import Script from 'next/script';
import ClientThemeProvider from './components/ClientThemeProvider';
import Head from 'next/head'
import ClientWrapper from './components/ClientWrapper';

export const metadata = {
  title: 'Ejército de República',
  description: 'Página principal de SDD',
};
import ScrollToTop from './components/home/scroll-top/ScrollToTop';
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <ClientThemeProvider>
      <body>
     
      <official-header></official-header>
     <ClientWrapper>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        </ClientWrapper>
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
         <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(d){var s = d.createElement('script');s.setAttribute('data-account', 'GMHeeIiu3r');s.src = 'https://cdn.userway.org/widget.js';(d.head || d.body).appendChild(s);})(document)`,
          }}
        />
        {/* <Script src="/js/main.js" strategy="beforeInteractive" /> */}
     
      </body>
     
      </ClientThemeProvider>
    </html>
  );
}
