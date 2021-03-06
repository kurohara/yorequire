/*
 * yorequire
 * https://github.com/kurohara/yorequire
 *
 * Copyright (c) 2015 Hiroyoshi Kurohara
 * Licensed under the MIT license.
 */

'use strict';

var oldRequire;
var newRequire;
var aData;
var bEnabled = false;
var Module = require('module');

module.exports = {
  set: function(f, data) {
    newRequire = f;
    aData = data;
    bEnabled = true;
  },
  enable: function(bEnable) {
    bEnabled = bEnable;
  },
  reset: function() {
    Module.prototype.require = oldRequire;
  }
};

if (! oldRequire) {
  oldRequire = Module.prototype.require;
}

Module.prototype.require = function (name) {
  if (bEnabled && newRequire) {
    return newRequire.call(this, name, oldRequire.bind(this), aData);
  } else {
    return oldRequire.call(this, name);
  }
};


