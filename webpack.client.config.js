const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

module.exports = (env, options) => {
  const isProd = options.mode === "production";
  return {
    name:'client',
    target:'web',
    mode: options ? options.mode : 'development',
    context: path.resolve(__dirname, "src"),
    entry: "./client.js",
    devtool: !isProd ? "source-map" : false,
    plugins: [
      isProd && new CleanWebpackPlugin('./dist', { root: path.resolve(__dirname, './') }),
      !isProd && new webpack.HotModuleReplacementPlugin(),
      /**
       * This plugin extract CSS into separate files.
       * It creates a CSS file per JS file which contains CSS.
       * It supports On-Demand-Loading of CSS and SourceMaps.
       * @link https://webpack.js.org/plugins/mini-css-extract-plugin/#minimizing-for-production
       */
      // new MiniCssExtractPlugin({
      //   filename: 'css/[name].css',
      // }),
    ].filter(Boolean),
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
            'style-loader',
            'css-loader',
            'resolve-url-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.(jpg|png)$/,
          use: [ 'url-loader']
       }
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
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      publicPath: '/'
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()]
    }
  };
};
