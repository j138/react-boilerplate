import ManifestPlugin from 'webpack-manifest-plugin';
import ChunkManifestPlugin from 'chunk-manifest-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import merge from 'webpack-merge';

const NODE_ENV = process.env.NODE_ENV || 'dev';

let config = {};
switch (NODE_ENV) {
  case 'prod':
    config = require('./webpack.config.prod.babel.js');
    break;
  case 'dev':
  default:
    config = require('./webpack.config.dev.babel.js');
    break;
}

const common = {
  context: __dirname,
  entry: {
    bundle: './src/index.jsx',
  },
  output: {
    path: `${__dirname}/public`,
    publicPath: '/',
    filename: '[name].js',
  },
  devServer: {
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  module: {
    rules: [
      { test: /\.jsx?$/, enforce: 'pre', exclude: /node_modules/, loader: 'eslint-loader' },
      { test: /\.jsx?$/, exclude: /node_modules/, use: ['react-hot-loader/webpack', 'babel-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(eot|ttf|woff|woff2)$/, loader: 'file-loader?name=material-design-icons/iconfont/[name].[ext]' },
      { test: /\.(jpe?g|png|gif|svg)$/, loader: 'url-loader?limit=10000' },
    ],
  },
  stats: {
    colors: true,
    reasons: false,
  },
  plugins: [
    new ManifestPlugin(),
    new ChunkManifestPlugin({
      filename: 'chunk-manifest.json',
      manifestVariable: 'webpackManifest',
    }),
    new HtmlWebpackPlugin({
      hash: true,
      filename: 'index.html',
      template: './src/index.template.ejs',
      inject: 'body',
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};

module.exports = merge(common, config);
