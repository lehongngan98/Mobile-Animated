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
var SachGiaoKhoa = /** @class */ (function (_super) {
    __extends(SachGiaoKhoa, _super);
    function SachGiaoKhoa(maSach, ngayNhap, donGia, soLuong, nhaXuatBan, tinhTrang) {
        var _this = _super.call(this, maSach, ngayNhap, donGia, soLuong, nhaXuatBan) || this;
        if (tinhTrang !== undefined) {
            _this.tinhTrang = tinhTrang;
            _this.thanhTien = (tinhTrang === "mới" ? _this.$soLuong * _this.$donGia : _this.$soLuong * _this.$donGia * 0.5);
        }
        else {
            _this.tinhTrang = "mới",
                _this.thanhTien = 0;
        }
        return _this;
    }
    Object.defineProperty(SachGiaoKhoa.prototype, "$tinhTrang", {
        /**
         * Getter $tinhTrang
         * @return {string}
         */
        get: function () {
            return this.tinhTrang;
        },
        /**
         * Setter $tinhTrang
         * @param {string} value
         */
        set: function (value) {
            this.tinhTrang = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SachGiaoKhoa.prototype, "$thanhTien", {
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
    SachGiaoKhoa.prototype.toString = function () {
        return "masach: ".concat(this.$maSach, ", ngaynhap: ").concat(this.$ngayNhap, ", dongia: ").concat(this.$donGia, ", soluong: ").concat(this.$soLuong, ", nhaxuatban: ").concat(this.$nhaXuatBan, ", tinhtrang: ").concat(this.tinhTrang, ", thanhtien: ").concat(this.thanhTien);
    };
    return SachGiaoKhoa;
}(Sach_1.default));
exports.default = SachGiaoKhoa;
