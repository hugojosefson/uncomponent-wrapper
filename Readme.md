
# uncomponent-wrapper

  Wraps a non-component js file, so it can be kept as is, and be exported as a CommonJS module / component.

  Quite useful for wrapping AngularJS modules.

## Installation

    $ component install hugojosefson/uncomponent-wrapper

## Usage in Makefile

See [update-bower-from-component](https://github.com/hugojosefson/update-bower-from-component#example-usage-in-makefile)
for example usage.

## API

    var wrap = require("uncomponent-wrapper");
    var inFile = "image-url-for-angular.js";
    var outFile = "index.js";
    wrap(inFile, outFile);

## License

  MIT
