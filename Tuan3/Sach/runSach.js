"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SachGiaoKhoa_1 = require("./SachGiaoKhoa");
var SachThamKhao_1 = require("./SachThamKhao");
var sach1 = new SachGiaoKhoa_1.default("1", new Date(), 10000, 5, "Kim Đồng", "mới");
var sach2 = new SachThamKhao_1.default("2", new Date(), 10000, 5, "Kim Đồng", 0.1);
console.log(sach1.toString());
console.log(sach2.toString());
