/* eslint-disable no-undef,@typescript-eslint/no-var-requires */
const path = require('path');

const rootPath = path.join(__dirname, '.');
const srcPath = path.join(rootPath, 'src');
const distPath = path.join(rootPath, 'dist');

module.exports = {
  rootPath,
  srcPath,
  distPath
};
