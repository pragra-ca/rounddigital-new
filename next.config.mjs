/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy/orphaned routes → canonical pages
      { source: '/jobs', destination: '/careers', permanent: true },
      { source: '/pricing', destination: '/services/engagement-models', permanent: true },
      { source: '/use-cases', destination: '/industries', permanent: true },
      { source: '/blog', destination: '/blogs', permanent: true },
      { source: '/blog/:slug', destination: '/blogs/:slug', permanent: true },
      { source: '/work/:slug', destination: '/works/:slug', permanent: true },
    ];
  },
  images: {
    unoptimized: true,
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  turbopack: {
    root: import.meta.dirname,
    rules: {
      '*.svg': {
        loaders: [
          {
            loader: '@svgr/webpack',
            options: {
              svgo: true,
              svgoConfig: {
                plugins: [
                  { name: 'removeViewBox', active: false },
                  { name: 'removeDimensions', active: true },
                ],
              },
            },
          },
        ],
        as: '*.js',
      },
    },
  },
  webpack(config, { isServer }) {
    // Fix for require-hook module resolution
    if (isServer) {
      config.resolve = config.resolve || {};
      config.resolve.alias = config.resolve.alias || {};
    }
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    )

    // Remove SVG from the existing rule
    fileLoaderRule.exclude = /\.svg$/i

    // Add SVGR loader
    config.module.rules.push({
      test: /\.svg$/i,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
                {
                  name: 'removeDimensions',
                  active: true,
                },
              ],
            },
          },
        },
      ],
    })

    return config;
  },
}

export default nextConfig;
