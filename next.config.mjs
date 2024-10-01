/** @type {import('next').NextConfig} */
const nextConfig = {
  // webpack: (config, { dev, isServer }) => {
  //   if (dev && !isServer) {
  //     config.watchOptions = {
  //       poll: 100, // Poll every second for changes
  //       aggregateTimeout: 100, // Delay rebuild after first change
  //       ignored: /node_modules/, // Ignore node_modules
  //     };
  //   }
  //   return config;
  // },

  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 100, // Check every second for changes
      aggregateTimeout: 100, // Debounce restarts
      ignored: /node_modules/, // Ignore node_modules
    };
    return config;
  },

  reactStrictMode: true,
};

export default nextConfig;
