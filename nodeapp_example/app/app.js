var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello, world!");
});

app.listen(80, () => console.log("Express listening on port 80"));