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

  devServer: {
    historyApiFallback: true,
  },
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
