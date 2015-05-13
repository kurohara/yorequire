# yorequire

You can use Your Own 'require' function.  
If you want to hook the 'require' function, you can use yorequire.

## Getting Started
Install the module with: `npm install kurohara/yorequire`

```javascript
var yorequire = require('yorequire');
yorequire.setCB(function(name, o_require, data) {
  // you can do anything you like.
  // 'o_require' is original require function. 
  return o_require(name);
}, yourdata);
yorequire.enable(true);
```

## Documentation
_(Coming soon)_

## Examples
_(Coming soon)_

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

## License
Copyright (c) 2015 Hiroyoshi Kurohara  
Licensed under the MIT license.
