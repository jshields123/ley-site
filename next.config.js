/** @type {import('next').NextConfig} */
module.exports = {
  compress: true,
  env: {
    SOME_EXAMPLE_ENV_VARIABLE: process.env.SOME_EXAMPLE_ENV_VARIABLE,
  },
  headers: () => [
    {
      headers: [
        {
          key: "Content-Security-Policy",
          value: "default-src 'self'",
        },
        {
          key: "Strict-Transport-Security",
          value: "max-age=63072000; includeSubDomains; preload",
        },
        {
          key: "X-XSS-Protection",
          value: "1; mode=block",
        },
        {
          key: "X-Frame-Options",
          value: "SAMEORIGIN",
        },
        {
          key: "X-Content-Type-Options",
          value: "nosniff",
        },
        {
          key: "Referrer-Policy",
          value: "strict-origin-when-cross-origin",
        },
      ],
      source: "/(.*)",
    },
  ],
  images: {
    loader: "akamai",
    path: "/",
  },
  productionBrowserSourceMaps: true,
  reactStrictMode: true,
  swcMinify: true,
};
