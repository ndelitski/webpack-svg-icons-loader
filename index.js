/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function(source) {
  this.cacheable && this.cacheable();
  if (typeof source === 'string') {
    var value = require('./parser')({path: this.resourcePath});
    this.value = [value];
    return "module.exports = " + JSON.stringify(value, undefined, "\t") + ";";
  }
};