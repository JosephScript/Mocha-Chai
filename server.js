#!/usr/bin/env node

var express = require('express');
var app = express();

/* Serves all the static files in the public folder. */
app.use(express.static(__dirname + '/public'));

/* Serves up node modules files for mocha and chai */
app.use('/node_modules/chai', express.static(__dirname + '/node_modules/chai'));
app.use('/node_modules/mocha', express.static(__dirname + '/node_modules/mocha'));

var server = app.listen(3000, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);

});