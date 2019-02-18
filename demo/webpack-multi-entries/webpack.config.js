const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: path.join(__dirname, 'src', 'index.js'),
    index2: path.join(__dirname, 'src', 'index2.js')
  },
  // watch: true,
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "[name].bundle.js"
  },
  resolve: {
    extensions: ['.js', '.json'],
},
  plugins: [
    new HtmlWebpackPlugin({
      template:'index.html',
      filename:'index.html', // output name
      hash:true,
      minify:{
          removeAttributeQuotes:true,
      },
      chunks: ['main', 'vendors'], // inject bundles
      entryPoint: 'main' // used entry point
    }),
    new HtmlWebpackPlugin({
      template:'index.html',
      filename:'index2.html', // output name
      hash:true,
      minify:{
          removeAttributeQuotes:true,
      },
      chunks: ['index2', 'vendors'], // inject bundles
      entryPoint: 'index2' // used entry point
    }),
    new CopyWebpackPlugin([ { from: "./assets", to: 'assets'}])
  ],
  optimization: {
      splitChunks: {
          cacheGroups: {
            commons: {test: /[\\/]node_modules[\\/]/, name: "vendors", chunks: "all"}
        }
      }
  },
  devtool: 'source-map',
  devServer: {
    contentBase: path.join('/dist/'),
    inline: true,
    host: '0.0.0.0',
    port: 8080,
  }
};