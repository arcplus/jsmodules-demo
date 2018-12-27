const {VueLoaderPlugin} = require('vue-loader');
const path = require('path');

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
    module: {
       rules: [
         {
           test: /\.js$/,
           exclude: /node_modules/,
           use: {
             loader: "babel-loader"
           }
         },
         {
             test: /\.vue$/,
             loader: 'vue-loader'
         },
         {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader'
          ]
        }
       ]
    },
    resolve: {
        alias: {
          'vue$': 'vue/dist/vue.esm.js',
          '@': resolve('src')
        },
        extensions: ['*', '.js', '.vue', '.json']
      },
      plugins: [
          new VueLoaderPlugin()
      ]
 }