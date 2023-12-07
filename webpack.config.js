const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');
const debug = process.env.NODE_ENV !== 'production';

module.exports = [
  {
    entry: './src/main.ts',
    devtool: 'inline-source-map',
    mode: debug ? 'development' : 'production',
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 250,
      poll: 1000,
    },
    node: {
      __filename: false,
      __dirname: false,
    },
    externalsPresets: { node: true }, // in order to ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'main.js',
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js'],
    },
    module: {
      rules: [
        {
          use: 'ts-loader',
          test: /\.ts?$/,
        },
        {
          test: /\.node$/,
          use: 'node-loader',
        },
      ],
    },
    plugins: [],
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
  },
];
