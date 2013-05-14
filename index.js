var fs = require("fs");
var path = require("path");

module.exports = wrap;

function relative(filename){
  return path.resolve(__dirname, filename);
}

function wrap(inFile, outFile) {
  var UTF8 = "utf8";
  var templateStartContents = fs.readFileSync(relative("src/template-start.js"), UTF8);
  var templateEndContents = fs.readFileSync(relative("src/template-end.js"), UTF8);
  var inFileContents = fs.readFileSync(inFile, UTF8);
  fs.writeFileSync(outFile, templateStartContents + inFileContents + templateEndContents);
}
