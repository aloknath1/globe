var express = require('express');
var app = express();
var router = express.Router();

app.use(express.static(__dirname + "/"));
app.use('/',router);

router.get('/',function(req,res) {
    res.send("Hello World");
});

console.log("Server is listening at port 3000.....");
app.listen(3000);