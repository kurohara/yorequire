# yorequire

You can use Your Own 'require' function.  
If you want to hook the 'require' function, you can use yorequire.

## Getting Started
Install the module with: `npm install kurohara/yorequire`

```javascript
var yorequire = require('yorequire');
yorequire.set(function(name, o_require, data) {
  // you can do anything you like.
  // 'name' is the module name which have requested.
  // 'o_require' is original require function. 
  // 'data' argument is the data that have passed to yorequire.set() as second argument.
  return o_require(name);
}, yourdata);
// calling 'set' function enables inner flag by default, so you do not have to call enable(true);
yorequire.enable(true);
```

## Documentation
### API
#### set(f, data)
Set your own require hook.

f - function object will be called.  
data - data will be passed to 'f' as 3r'd argument.  


#### enable(fEnable)
Enable/disable calling your function.  

#### reset()
Remove this hooking facility.

## Examples
```javascript
var yor = require('yorequire');
yor.set(function(name, o_require, data) {
  if (name === 'mymodule') {
    return o_require(name + '_old');
  } else {
    return o_require(name);
  }
}, {} );

// call require somewhere else...
//   you will get the module object of 'mymodule_old'.
var module = require('mymodule');

// after you get your result, you can completely remove this hooking facility.
yor.restore();

```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
1.0.0  May 20 2015

## License
Copyright (c) 2015 Hiroyoshi Kurohara  
Licensed under the MIT license.
