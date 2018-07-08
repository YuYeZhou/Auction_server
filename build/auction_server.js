"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, categories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Product;
}());
exports.Product = Product;
var Comment = /** @class */ (function () {
    function Comment(id, productId, timestamp, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.timestamp = timestamp;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
var products = [
    new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品", ["电子产品", "硬件设备"]),
    new Product(2, "第二个商品", 2.99, 2.5, "这是第二个商品", ["图书"]),
    new Product(3, "第三个商品", 3.99, 4.5, "这是第三个商品", ["硬件设备"]),
    new Product(4, "第四个商品", 4.99, 1.5, "这是第四个商品", ["电子产品", "硬件设备"]),
    new Product(5, "第五个商品", 5.99, 3.5, "这是第五个商品", ["电子产品"]),
    new Product(6, "第六个商品", 6.99, 2.5, "这是第六个商品", ["图书"])
];
var comments = [
    new Comment(1, 1, "2018-02-02 22: 22: 22", "张三", 3, "东西不错"),
    new Comment(2, 1, "2018-03-03 23: 22: 22", "李四", 4, "东西是不错"),
    new Comment(3, 1, "2018-04-04 21: 22: 22", "王五", 2, "东西挺不错"),
    new Comment(4, 2, "2018-05-05 20: 22: 22", "赵六", 4, "东西还不错")
];
app.get('/', function (req, res) {
    res.send("Hello");
});
app.get('/api/products', function (req, res) {
    res.json(products);
});
app.get('/api/product/:id', function (req, res) {
    res.json(products.find(function (product) { return product.id == req.params.id; }));
});
app.get('/api/product/:id/comments', function (req, res) {
    res.json(comments.filter(function (comment) { return comment.productId == req.params.id; }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("服务器已经启用");
});
