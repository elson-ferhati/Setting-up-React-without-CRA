const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const distFolder = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: distFolder,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 9500,
    contentBase: distFolder,
    compress: true, // Enable gzip compression for everything served
    hot: true, // Enable webpack's Hot Module Replacement feature
    open: true, // Tells dev-server to open the browser after server had been started. Set it to true to open your default browser.
    historyApiFallback: true, // Will redirect 404s to /index.html
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Test',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html', // output file
    }),
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    alias: {
      '@Components': path.resolve(__dirname, './src/components/'),
      '@Pages': path.resolve(__dirname, './src/pages/'),
      '@Assets': path.resolve(__dirname, './src/assets/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, './node_modules/'),
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.svg/,
        type: 'asset/inline',
      },
    ],
  },
};
