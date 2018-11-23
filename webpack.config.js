var path = require("path");
var webpack = require("webpack");
var WebpackBuildNotifierPlugin = require("webpack-build-notifier");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const PATHS = {
  src: path.join(__dirname, './src'),
  build: path.join(__dirname, './build')
};

module.exports = {

  entry: {
    "export-csv": PATHS.src + '/exportToCSV.ts'
  },
  output: {
    path: PATHS.build,
    filename: '[name].js',
    library: 'ExportToCSV',
    libraryTarget: 'umd'
  },
  devtool: "source-map",
  module: {
    loaders: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      },
      {
        test: /\.p?css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader?importLoaders=1,url=false!postcss-loader"
        })
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "My Project Webpack Build"
    })
  ]
};