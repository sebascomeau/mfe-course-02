const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack").container
  .ModuleFederationPlugin;
const path = require("path");
const commonConfig = require("./webpack.common");
const { dependencies } = require("../package.json");

const port = 8081;

const devConfig = {
  mode: "development",
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port,
    historyApiFallback: {
      index: "index.html",
    },
    open: true,
  },
  output: {
    publicPath: "auto",
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarketingApp": "./src/bootstrap",
      },
      shared: dependencies,
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
