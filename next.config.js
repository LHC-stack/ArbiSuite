/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
      return [
        {
          // Используем регулярное выражение для match любого google*.html файла
          source: '/google([a-zA-Z0-9]+).html',
          headers: [
            {
              key: 'Cache-Control',
              value: 'no-cache, no-store, must-revalidate',
            },
            {
              key: 'Content-Type',
              value: 'text/html; charset=utf-8',
            },
          ],
        },
      ];
    },
  };
  
  module.exports = nextConfig;