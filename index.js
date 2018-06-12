const path = require('path');

module.exports = function nuxtClipboard(moduleOptions) {
  const options = Object.assign({}, this.options.toast, moduleOptions);

  // Register plugin
  this.addPlugin({
    src: path.resolve(__dirname, 'plugin.js'),
    ssr: false,
    fileName: 'clipboard.js',
    options,
  });
};

module.exports.meta = require('./package.json');