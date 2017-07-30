//use strict
const EventEmitter = require('events').EventEmitter;
const http = require('http');
const fs = require('fs');

http.get({
    hostname: 'wy-greenriver.civicplus.com',
    port: 80,
    path: '/files/files/island/snap_c1.jpg',
    agent: false  // create a new agent just for this one request
}, (res) => (
    console.log(res)
) );
