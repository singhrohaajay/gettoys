const cool  = require('cool-ascii-faces')
const path = require('path')
const PORT = process.env.PORT || 5000
var express = require('express');
var app = express();
var fs = require("fs");




app.get('/listUsers', function (req, res) {
  fs.readFile( "db" + "/" + "data.json", 'utf8', function (err, data) {
     console.log( data );
     res.end( data );
  });

})
app.get('/', (req, res) => res.send(cool()))


app.listen(PORT, () => {
  console.log(`sever running on port ${PORT}`);
});