var Stream = require('stream');

var s = new Stream();
s.readable = true;

s.pipe(process.stdout);

var count = 0;
var id = setInterval(function () {
    s.emit('data', count + '\n');
    if (++count === 5) {
        s.emit('end');
        clearInterval(id);
    }
}, 1000);

