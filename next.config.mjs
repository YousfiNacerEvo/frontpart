/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://back-12ec.onrender.com/:path*',
      },
    ];
  },
};

export default nextConfig;
