/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin';
const nextConfig = {
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          require('postcss-import'),
          require('tailwindcss'),
          require('autoprefixer'),
        ],
      },
    },
  images: {
    domains: ['localhost', 'lh3.googleusercontent.com'], // اضافه کردن دامنه مورد نظر
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "**/*",
      },
      {
        protocol: "https",
        hostname: "s3-console.noghlenab.com",
        port: "",
        pathname: "**/*",
      },
      {
        protocol: 'http',
        hostname: 'localhost', 
        port: '', 
      },
    ],
  },
};
const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);

