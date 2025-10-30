/** @type {import('next').NextConfig} */

// definir imagens externas e tamanhos
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'dogsapi.origamid.dev'
            }
        ]
    }
};

export default nextConfig;
