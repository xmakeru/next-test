/** @type {import('next').NextConfig} */

import GoogleProvider from 'next-auth/providers/google'

const nextConfig = {
    reactStrictMode: true,
    assetPrefix: '',
    productionBrowserSourceMaps: false,
};

export default nextConfig;