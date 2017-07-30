//use strict
const EventEmitter = require('events').EventEmitter;
const http = require('http');
const fs = require('fs');


http.get('http://wy-greenriver.civicplus.com/files/files/island/snap_c1.jpg', (result) => {
    const jpgDest = fs.createWriteStream('img/snap.jpg');
    result.pipe(jpgDest);
}).on('error', (e) => {
    console.error(`Got error: ${e.message}`);
});
