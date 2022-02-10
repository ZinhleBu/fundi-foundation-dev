module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.experiments = { topLevelAwait: false };

        return config;
    },
    async redirects() {
        return [{
            source: '/CaseSinglePageR10',
            destination: '/R10GoesALongWay',
            permanent: true,
        }, ]
    },
};