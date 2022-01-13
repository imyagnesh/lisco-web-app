module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['tailwindui.com'],
  },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
