import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    logging: {
        level: process.env.NODE_ENV === 'development' ? 'info' : 'error',
        fetches: {
            fullUrl: true,
        },
    },
};

export default nextConfig;