const path = require('path');

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
  },
  output: {
    path: path.join(__dirname, 'docs'),
    filename: '[name].js'
  }
};
