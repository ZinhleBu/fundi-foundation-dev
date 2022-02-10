module.exports = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.experiments = { topLevelAwait: true };

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