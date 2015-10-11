var bodyParser = require('body-parser')
var sqlite3 = require('sqlite3').verbose();

var fs = require("fs");
var file = "test.db";
var exists = fs.existsSync(file);

var db = new sqlite3.Database(file);

if(! exists){
    db.run("CREATE TABLE Koshche (x FLOAT,y FLOAT,description TEXT,name TEXT,type INTEGER)");
}

var express = require('express');
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/koshche', function (req, res) {
  var statement = db.prepare("INSERT INTO Koshche VALUES (?,?,?,?,?)");
    statement.run(req.body.x,req.body.y,req.body.description,req.body.name,req.body.type);
});

app.get('/koshche', function (req, res) {
    db.all("SELECT * from Koshche",function(err,rows){
        res.json(rows);
    });
    
    
});
        
app.use(express.static('../Client'));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});


