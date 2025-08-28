/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true, // faster builds
  experimental: {
    appDir: true, // enable App Router
  },
  images: {
    domains: ['api.caselist.sg', 'images.unsplash.com'], // add domains you use
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_OPENAI_KEY: process.env.NEXT_PUBLIC_OPENAI_KEY,
  },
};

export default nextConfig;

