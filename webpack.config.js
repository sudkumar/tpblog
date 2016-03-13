const path = require("path");

module.exports = {
  context: __dirname + "/src/app",
  entry: "./app.module.js",
  output: {
    path: __dirname + "/src/app/",
    filename: "app.js"
  },
  module:{
    loaders:[
      {
        test: /.\js$/,
        loader: 'babel',
        exclude: /node_modules/
      },
      {
        test: /.\html$/,
        loader: 'raw'
      }
    ]
  },
  plugins:[
    // Only emit files when there are no errors
    // new webpack.NoErrorsPlugin(),

    // Dedupe modules in the output
    // new webpack.optimize.DedupePlugin(),

    // Minify all javascript, switch loaders to minimizing mode
    // new webpack.optimize.UglifyJsPlugin(),
  ],
  // externals:[
  //   {
  //     "angular": true,
  //     "angular-ui-router": "ui.router"
  //   }
  // ]
};
