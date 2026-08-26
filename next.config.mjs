/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      // Legacy/orphaned routes → canonical pages
      { source: '/jobs', destination: '/careers', permanent: true },
      { source: '/pricing', destination: '/government/teaming', permanent: true },
      { source: '/use-cases', destination: '/industries', permanent: true },
      { source: '/blog', destination: '/blogs', permanent: true },
      { source: '/blog/:slug', destination: '/blogs/:slug', permanent: true },
      { source: '/work/:slug', destination: '/works/:slug', permanent: true },

      // Service consolidation — eight SMB-era service pages collapse into the
      // five pillars. Each 301 goes to the closest surviving match so the
      // indexed authority on round.digital transfers rather than being lost.
      { source: '/services/cloud-solutions', destination: '/services/it-services', permanent: true },
      { source: '/services/custom-software', destination: '/services/it-services', permanent: true },
      { source: '/services/cybersecurity', destination: '/services/it-services', permanent: true },
      { source: '/services/digital-transformation', destination: '/services/it-services', permanent: true },
      { source: '/services/ai-machine-learning', destination: '/services/ai-enablement', permanent: true },
      { source: '/services/data-analytics', destination: '/services/research-data', permanent: true },
      { source: '/services/global-talent', destination: '/services/staffing', permanent: true },
      { source: '/services/engagement-models', destination: '/government/teaming', permanent: true },

      // Retired case studies. The originals paired anonymous clients
      // ("a Fortune 500 client") with precise invented metrics and attributed
      // testimonials. None of it could be evidenced, so it cannot appear on a
      // site used for bid evaluation. The URLs redirect to the verified record.
      { source: '/works/ai-customer-service-automation', destination: '/works', permanent: true },
      { source: '/works/banking-digital-transformation', destination: '/works', permanent: true },
      { source: '/works/ai-document-processing', destination: '/works', permanent: true },
    ];
  },
  images: {
    // Image optimisation is ON. It was previously disabled with
    // `unoptimized: true`, which forced full-size originals to every device
    // and is a direct LCP cost on a content-heavy site.
    formats: ['image/avif', 'image/webp'],
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
