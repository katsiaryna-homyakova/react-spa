const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = (env, options) => {
  const isProd = options.mode === "production";
  return {
    context: path.resolve(__dirname, "src"),
    entry: "./index.js",
    devtool: !isProd ? "source-map" : false,
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: "./index.html"
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"]
        }
      ]
    },
    resolve: {
      extensions: [".js"]
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist")
    },
    optimization: {
      minimizer: [new UglifyJsPlugin()]
    }
  };
};
