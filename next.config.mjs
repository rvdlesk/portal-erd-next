// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          source: '/(.*)', // Aplica el CSP a todas las rutas
          headers: [
            {
              key: 'Content-Security-Policy',
             value: "connect-src *;"
            },
          ],
        },
      ];
    },
  };
  
  export default nextConfig;
  