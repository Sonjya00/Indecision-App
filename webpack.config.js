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
  // ex, 1st set of rules: the file must be a JS file and cannot be from node modules
  module: {
    rules: [
      // 1st --> js files
      {
        // set which loader to use
        loader: "babel-loader",
        // perform test in all js files
        test: /\.js$/,
        // files to not include in the compiling, not useful
        exclude: /node_modules/
      },
      // 2nd --> css files
      {
        // use allows to add an array of loaders
        // sass-loader runs node-sass behind the scene
        use: ["style-loader", "css-loader", "sass-loader"],
        // perform test in all css files
        // by adding a ? in front of "s", the "s" becomes optional,
        // so both .css and .scss files are supported
        test: /\.s?css$/
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
