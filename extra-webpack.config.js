const path = require('path');
const lessPluginGlob = require('less-plugin-glob');

module.exports = {
  module: {
    rules: [{
      test: /\.less$/,
      loader: "less-loader",
      options: {
        plugins: [lessPluginGlob],
        paths: [path.resolve(__dirname, "./src/app/*")]
      }
    }]
  }
};
