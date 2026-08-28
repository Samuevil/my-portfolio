/** @type {import('next').NextConfig} */
const repoName = 'my-portfolio';

const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: `/${repoName}`,
  },
};

module.exports = nextConfig;