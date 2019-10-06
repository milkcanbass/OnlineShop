const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const { GenerateSW } = require('workbox-webpack-plugin');

const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: {
    main: ['webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000', './src/index.js'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'main.bundle.js',
    chunkFilename: '[name].bundle.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'imgs',
            },
          },
        ],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
          failOnError: false,
          failOnWarning: false,
          fix: true,
        },
      },
    ],
  },
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom$': 'react-dom/profiling',
      'scheduler/tracing': 'scheduler/tracing-profiling',
    },
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './public/index.html',
      filename: './index.html',
      excludeChunks: ['server'],
    }),
    new WebpackPwaManifest({
      name: 'ShinCat and HanDog',
      short_name: 'S and H',
      description: 'ShinCat and HanDog web store',
      background_color: '#ffffff',
      theme_color: '#2196F3',
      inject: true,
      crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
      ios: true,
      destination: path.join('/manifest'),
      icons: [
        {
          src: path.resolve('public/pngicon.png'),
          sizes: [120, 152, 167, 180, 1024],
          destination: path.join('/manifest/icons/ios'),
          ios: true,
        },
        {
          src: path.resolve('public/pngicon.png'),
          size: 1024,
          destination: path.join('/manifest/icons/ios'),
          ios: 'startup',
        },
        {
          src: path.resolve('public/pngicon.png'),
          sizes: [36, 48, 72, 96, 144, 192, 512],
          destination: path.join('/manifest/icons/android'),
        },
      ],
    }),
    new GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      importScripts: ['./workboxInject.js'],
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
};
