const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  devtool: 'inline-source-map',
  output: {
    publicPath: '',
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
};