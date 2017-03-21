var express = require('express');
var fs = require('fs');
var http = require('http');
var app = express();

app.get('/',function (req,res) {
    if(req.url!=="/favicon.ico")
    res.writeHead(200,{"Content-Type":"text/html"});
    res.end(fs.readFileSync(__dirname + '/mes.html'));
});

app.listen(5010);