
const webpack = require('webpack')

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.experiments = { topLevelAwait: true };
    config.plugins.push(
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
            
        })
    )
    return config;
  },
 
};
//next.config.js

