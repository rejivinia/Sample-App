const path = require('path');


module.exports = {
  // the entry file for the bundle
  entry: path.join(__dirname, '/client/src/app.jsx'),

  // the bundle file we will get in the result
  output: {
    path: path.join(__dirname, '/client/dist/js'),
    filename: 'app.js',
    publicPath: '/'
  },

  module: {

    // apply loaders to files that meet given conditions
    loaders: [{
      test: /\.jsx?$/,
      include: path.join(__dirname, '/client/src'),
      loader: 'babel-loader',
      query: {
        presets: ["react", "es2015"]
      }
    }],
  },

  devServer: {
    historyApiFallback: true,
  },

  // start Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true
};

 // devServer:{
 //    contentBase: 'src/www',  //Relative directory for base of server
 //    devtool: 'eval',
 //    hot: true,        //Live-reload
 //    inline: true,
 //    port: 3000,        //Port Number
 //    host: 'localhost', //Change to '0.0.0.0' for external facing server
 //    proxy: {
 //      '^\/users|sitters|bookings': {
 //        target: 'http://127.0.0.1:3001',
 //        rewrite: function(req) {
 //          req.url = req.url.replace(/^\/api/, '');
 //        }
 //      }
 //    },
 //    historyApiFallback: true
 //  },
