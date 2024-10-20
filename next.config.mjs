/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ivory-quickest-perch-460.mypinata.cloud',
        port: '', // leave blank unless there's a custom port
        pathname: '/ipfs/**', // Allow images from any IPFS hash
      },
    ],
  },
};

export default nextConfig;
