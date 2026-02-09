import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? '/saroyan-lesson' : '',
  assetPrefix: isProd ? '/saroyan-lesson/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
