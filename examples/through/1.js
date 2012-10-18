var Stream = require('stream'),
    fs = require('fs');

function quietStream () {
    var ts = new Stream();
    ts.readable = true;
    ts.writable = true;

    ts.write = function (buf) {
        this.emit('data', buf.toString().toLowerCase());
    };

    ts.end = function (buf) {
        if (arguments.length) this.write(buf);
        this.emit('end');
    };

    return ts;
}

fs.createReadStream('hello.txt')
    .pipe(quietStream())
    .pipe(process.stdout);

