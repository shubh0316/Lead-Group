import type { NextConfig } from "next";
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const nextConfig: NextConfig = {
  /* config options here */
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};

export default nextConfig;
