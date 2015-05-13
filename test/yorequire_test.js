'use strict';

var yorequire = require('../lib/yorequire.js');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/


exports['test1'] = {
  setUp: function(done) {
    // setup here
    done();
  },
  'no args': function(test) {
    test.expect(1);
    // tests here
    var myData = { val1: "abc" };
    // var check = 0;
    yorequire.setCB(function(name, o_require, data) {
      if (name === 'xxxx') {
        data.val1 = "xyz";
        return o_require('sys');
      } else {
        return o_require(name);
      }
    }, myData);
    yorequire.enable(true);

    var obj = require('xxxx');
    obj.print(obj.inspect(obj) + "\n");
  },
};
