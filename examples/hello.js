var through = require('through'),
    fs = require('fs');

function quietStream () {
    return through(function (data) {
        this.emit('data', data.toString().toLowerCase());
    }, function () {
        this.emit('end');
    })
}

fs.createReadStream('hello.txt')
    .pipe(quietStream())
    .pipe(process.stdout);