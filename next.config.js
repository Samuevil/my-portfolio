const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD, PHASE_EXPORT } = require('next/constants');
const repoName = 'my-portfolio';

module.exports = (phase) => {
  const isProdPhase = phase === PHASE_PRODUCTION_BUILD || phase === PHASE_EXPORT;
  const basePath = isProdPhase ? `/${repoName}` : '';

  return {
    output: 'export',
    basePath,
    assetPrefix: isProdPhase ? `/${repoName}/` : '',
    images: {
      unoptimized: true,
    },
    env: {
      NEXT_PUBLIC_BASE_PATH: basePath,
    },
  };
};