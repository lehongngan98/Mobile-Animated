"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order_1 = require("./Order");
var Product_1 = require("./Product");
var product4 = new Product_1.default("Nuoc tuong", "sp4", 8000);
var product1 = new Product_1.default("Gao", "sp1", 18000);
var product3 = new Product_1.default("Duong", "sp3", 10000);
var order = new Order_1.default(1, new Date());
order.addLineItem(product4, 10);
order.addLineItem(product1, 6);
order.addLineItem(product3, 1);
console.log(order.toString());
