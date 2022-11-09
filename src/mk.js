var fs = require('fs');
var path = require('path');

var file = path.join(__dirname, 'test.txt');

fs.writeFile(file, 'hello world', function(err) {
    if (err) throw err;
    console.log('File saved!');
    }
);
// File saved!
