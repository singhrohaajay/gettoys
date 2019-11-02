const cool = require('cool-ascii-faces')
const path = require('path')
const PORT = process.env.PORT || 5000
var express = require('express');
var app = express();
var fs = require("fs");

var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/get/:id', (req, res) => {
  const id = (req.params.id);
  let products = ""
  fs.readFile("db" + "/" + "data.json", 'utf8', function (err, data) {
    products = JSON.parse(data);

    var productarr = [];
    for (var product in products) {
      productarr.push(products[product]);
    }
    let resProduct=[]
    productarr.map((product) => {
      if (product.id == id) {
        resProduct=[];
        resProduct.push(product);
      }
    });
    if(resProduct.length==0){
      resProduct=["404"]
    }
    return res.status(200).json({
      success: "true",
      message: 'Todo retrieved successfully',
      product: resProduct,
    });
  });

});
app.get('/get/content/:name', (req, res) => {
  const name = String(req.params.name);
  let products = ""
  fs.readFile("db" + "/" + "data.json", 'utf8', function (err, data) {
    products = JSON.parse(data);

    var productarr = [];
    for (var product in products) {
      productarr.push(products[product]);
    }
    let resProducts = [];
    productarr.map((product) => {
      var title = product.title;
      title = title.toLowerCase();
      if (title.indexOf(name) !== -1) {
        resProducts.push(product)

      }
    });
    if(resProducts.length==0){
      resProducts = ["404"];
    }
    return res.status(200).json({
      success: "true",
      message: 'Todo retrieved successfully',
      product: resProducts,
    });
  });
});

app.get('/get/description/:name', (req, res) => {
  const name = String(req.params.name);
  let products = ""
  fs.readFile("db" + "/" + "data.json", 'utf8', function (err, data) {
    products = JSON.parse(data);

    var productarr = [];
    for (var product in products) {
      productarr.push(products[product]);
    }
    let resProducts = [];
    productarr.map((product) => {
      var desc = product.description;
      desc = desc.toLowerCase();
      if (desc.indexOf(name) !== -1) {
        resProducts.push(product)
      }
    });
    if(resProducts.length==0){
      resProducts = ["404"];
    }
    return res.status(200).json({
      success: "true",
      message: 'Todo retrieved successfully',
      product: resProducts,
    });
  });
});

app.get('/get', function (req, res) {
  fs.readFile("db" + "/" + "data.json", 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });

})
app.get('/', (req, res) => res.send(cool()))


app.listen(PORT, () => {
  console.log(`sever running on port ${PORT}`);
});