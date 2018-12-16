const path = require('path');
const nodeExternals = require('webpack-node-externals');

const APP_DIR = path.resolve(__dirname, './src');

module.exports = {
  entry: ['@babel/polyfill', APP_DIR],
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }]
  }
};
