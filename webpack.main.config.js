/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  entry: './src/main/main.ts',
  module: {
    rules: require('./webpack.rules').concat([
      {
        // https://webpack.js.org/guides/asset-management/
        test: /\.(ico|png|svg|jpe?g|gif)$/ui,
        type: 'asset/resource',
      },
    ]),
  },
  resolve: { extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'] },
};