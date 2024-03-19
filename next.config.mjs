/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
          {
            source: '/deleted',
            destination: '/',
            permanent: true,
          },
        ]
      },
};

export default nextConfig;
