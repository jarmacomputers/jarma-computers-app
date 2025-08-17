import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
   webpack: (config, { isServer }) => {
    // Evitar que handlebars se incluya en el cliente
    if (!isServer) {
      config.resolve.fallback = {
        ...(config.resolve.fallback || {}),
        handlebars: false,
      };
    }

    // Si en algún momento manejas .handlebars, añade loader
    config.module.rules.push({
      test: /\.handlebars$/,
      loader: 'handlebars-loader',
    });

    return config;
  },
};

export default nextConfig;
