/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['api.viloxapp.com', "https://","img.freepik.com","tots.literesults.net","tots.robinsontotstech.com"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.viloxapp.com',
            },
        ],
    }
};

export default nextConfig;
