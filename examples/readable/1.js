var Stream = require('stream');

var s = new Stream();
s.readable = true;

s.pipe(process.stdout);

s.emit('data', 'Hello\n');
s.emit('data', 'World\n');

s.emit('end');