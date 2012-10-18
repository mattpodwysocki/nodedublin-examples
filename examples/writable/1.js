var Stream = require('stream');

var s = new Stream();
s.writable = true;

var count = 0;
var bytes = 0;

s.write = function (buf) {
    count++;
    bytes += buf.length;
};

s.end = function (buf) {
    if (arguments.length) s.write(buf);
    
    s.writable = false;
    console.log('Average length: ' + bytes / count);
};

s.destroy = function () {
    s.writable = false;
};

var fs = require('fs');
fs.createReadStream('log.txt').pipe(s);