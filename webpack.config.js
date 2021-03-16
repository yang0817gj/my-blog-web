const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".js"], // 指定文件的后缀，告诉webpack 这些文件是引入不需要写后缀的，在webpack工作的时候  发现引入文件没有后缀， 就会遍历extensions 去找在这个目录下没有没有匹配的文件，找到 webpack就会给你加载进来
  },
  // 输出 source-map 方便直接调试 ES6 源码
  devtool: "source-map",

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },

  devServer: {
    contentBase: path.resolve(__dirname, "public"),
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public/index.html"),
      filename: "index.html",
    }),
    new CleanWebpackPlugin(),

    // 启动热更新
    new webpack.HotModuleReplacementPlugin(),
  ],
};
