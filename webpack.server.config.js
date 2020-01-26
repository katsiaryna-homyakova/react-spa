const path = require('path');
//const merge = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');
//const baseConfig = require('./webpack.base.js');

const config = {
  // Inform webpack that we're building a bundle
  // for nodeJS, rather than for the browser
  name:'server',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "ignore-loader", // It doesn't embed CSS but only exports the identifier mappings.
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
    alias: {
      Styles: path.resolve(__dirname, "src/styles/"),
      Components: path.resolve(__dirname, "src/components/"),
      App: path.resolve(__dirname, "src/")
    }
  },
  mode: 'production',

  // Tell webpack the root file of our
  // server application
  entry: './src/serverRender.js',
  // We don't serve bundle.js for server, so we can use dynamic external imports
  externals: [webpackNodeExternals()],

  // Tell webpack where to put the output file
  // that is generated
  output: {
    filename: 'serverRender.js',
   
    libraryTarget: 'commonjs2',
  },
};

module.exports = config; //merge(baseConfig, config);