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
        // files to not include in the compiling
        exclude: /node_modules/
      }
    ]
  }
};
