var webpack = require ('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/Main.jsx',
      SearchForm: 'app/components/SearchForm.jsx',
      Input: 'app/components/shared/Input.jsx',
    },
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
     inline: false,
     contentBase: "./dist",
 },
  module: {
    loaders: [
      {
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.scss$/,
        include: path.appSrc,
        loaders: ["style", "css", "sass"]
      },
    ]
  },
  devtool: 'cheap-module-eval-source-map'
};
