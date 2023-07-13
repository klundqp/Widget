const webpack = require('webpack')

module.exports = {
    configureWebpack: {
      plugins: [
        new webpack.optimize.LimitChunkCountPlugin({
          maxChunks: 1
        })
      ]
    },
    chainWebpack:
      config => {
        config.optimization.delete('splitChunks');
        const path = require("path");
        config.resolve.alias
          .set("@", path.resolve(__dirname, 'src/'));
      },
      filenameHashing: false
  }