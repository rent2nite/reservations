const path = require('path');

module.exports = {
    // mode: "production", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: path.resolve(__dirname, "client/src/index.jsx"), // string | object | array
    // defaults to ./src
    // Here the application starts executing
    // and webpack starts bundling
    output: {
      // options related to how webpack emits results
      path: path.resolve(__dirname, "client/dist"), // string
      // the target directory for all output files
      // must be an absolute path (use the Node.js path module)
      filename: "bundle.js", // string
      // the filename template for entry chunks
      // publicPath: "/assets/", // string
      // the url to the output directory resolved relative to the HTML page
      // library: "MyLibrary", // string,
      // the name of the exported library
      // libraryTarget: "umd", // universal module definition
      // the type of the exported library

    },
    module : {
        rules : [
          {
            test : /\.jsx?/,
            include: [
                path.resolve(__dirname, "client/src/")
            ],
            loader : "babel-loader",      
            query: {
              presets: ["@babel/react", "@babel/env"]
            }
          }
        ]
      }
    };