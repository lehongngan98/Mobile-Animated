"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sach_1 = require("./Sach");
var SachThamKhao = /** @class */ (function (_super) {
    __extends(SachThamKhao, _super);
    function SachThamKhao(maSach, ngayNhap, donGia, soLuong, nhaXuatBan, thue) {
        var _this = _super.call(this, maSach, ngayNhap, donGia, soLuong, nhaXuatBan) || this;
        if (thue !== undefined) {
            _this.thue = thue;
            _this.thanhTien = _this.$soLuong * _this.$donGia + (_this.thue * _this.$soLuong * _this.$donGia);
        }
        else {
            _this.thue = 0.1,
                _this.thanhTien = 0;
        }
        return _this;
    }
    Object.defineProperty(SachThamKhao.prototype, "$thue", {
        /**
         * Getter $thue
         * @return {number}
         */
        get: function () {
            return this.thue;
        },
        /**
         * Setter $thue
         * @param {number} value
         */
        set: function (value) {
            this.thue = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SachThamKhao.prototype, "$thanhTien", {
        /**
         * Getter $thanhTien
         * @return {number}
         */
        get: function () {
            return this.thanhTien;
        },
        /**
         * Setter $thanhTien
         * @param {number} value
         */
        set: function (value) {
            this.thanhTien = value;
        },
        enumerable: false,
        configurable: true
    });
    SachThamKhao.prototype.toString = function () {
        return "masach: ".concat(this.$maSach, ", ngaynhap: ").concat(this.$ngayNhap, ", dongia: ").concat(this.$donGia, ", soluong: ").concat(this.$soLuong, ", nhaxuatban: ").concat(this.$nhaXuatBan, ", thue: ").concat(this.thue, ", thanhtien: ").concat(this.thanhTien);
    };
    return SachThamKhao;
}(Sach_1.default));
exports.default = SachThamKhao;
