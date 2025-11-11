/** @type {import('next').NextConfig} */
const nextConfig = {
  // ADICIONAMOS ESTE BLOCO 'images'
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**', // Permite qualquer imagem desse site
      },
    ],
  },
};

export default nextConfig;