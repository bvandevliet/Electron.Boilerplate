/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
  module: {
    rules: require('./webpack.rules').concat([
      {
        // https://webpack.js.org/guides/asset-management/
        test: /\.(ico|png|svg|jpe?g|gif)$/ui,
        type: 'asset/resource',
      },
      {
        // https://webpack.js.org/loaders/#styling
        test: /\.css$/ui,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
      {
        // https://webpack.js.org/loaders/#styling
        test: /\.s[ac]ss$/ui,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ]),
  },
  plugins: require('./webpack.plugins'),
  resolve: { extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'] },
};