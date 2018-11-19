// since an absolute path is needed on the output, use this formula to get it
const path = require("path");

// entry --> output
module.exports = {
  // relative path
  entry: "./src/app.js",
  output: {
    // __dirname = path
    path: path.join(__dirname, "public"),
    filename: "bundle.js"
  },
  // babel loader will run under specific conditions:
  // the file must be a JS file and cannot be from node modules
  module: {
    rules: [
      {
        // which loader to use
        loader: "babel-loader",
        // perform test in all js files
        test: /\.js$/,
        // files to not include in the compiling, not useful
        exclude: /node_modules/
      }
    ]
  },
  // to get source maps. Helpful to see where an error happens
  // (the devtools points at the line of the original file, not the bundle)
  devtool: "cheap-module-eval-source-map",
  // to configure webpack dev server, by providing the path of the public folder
  // (like we did for live server)
  devServer: {
    contentBase: path.join(__dirname, "public")
  }
};
