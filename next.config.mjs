/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // domains: ['images.unsplash.com']
        remotePatterns: [
            {
                protocol: 'http',
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '**',
            }
        ]
    }
};

export default nextConfig;
