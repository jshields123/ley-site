/** @type {import('next').NextConfig} */
module.exports = {
  compress: true,
  env: {
    SOME_EXAMPLE_ENV_VARIABLE: process.env.SOME_EXAMPLE_ENV_VARIABLE,
    DB_USER: process.env.DB_USER,
    DB_PASSWORD: process.env.DB_PASSWORD,
    MONGODB_URI: process.env.MONGODB_URI,
  },
  images: {
    loader: 'akamai',
    path: '/',
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
};
