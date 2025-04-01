/** @type {import('next').NextConfig} */



const nextConfig = {
    reactStrictMode: true,
    assetPrefix: '',
    productionBrowserSourceMaps: false,
    experimental: {
        optimizePackageImports: [
            'heroicons',
            "framer-motion",
            "mongoose",
            "@headlessui/react",
            "next-auth"
        ]
    }
};

export default nextConfig;