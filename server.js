var express = require('express');
var app = express();
app.use(express.static("m3kht1.github.io")); // will be the same with folder name.
app.get('/', function (req, res,next) {
    res.sendFile('/index.html');
});app.listen(8080, 'localhost');
console.log("MyProject Server is Listening on port 8080");
