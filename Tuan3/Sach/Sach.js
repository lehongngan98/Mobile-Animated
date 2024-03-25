"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sach = /** @class */ (function () {
    function Sach(maSach, ngayNhap, donGia, soLuong, nhaXuatBan) {
        if (maSach !== undefined && ngayNhap !== undefined && donGia !== undefined && soLuong !== undefined && nhaXuatBan !== undefined) {
            this.maSach = maSach;
            this.ngayNhap = ngayNhap;
            this.donGia = donGia;
            this.soLuong = soLuong;
            this.nhaXuatBan = nhaXuatBan;
        }
        else {
            this.maSach = "";
            this.ngayNhap = new Date();
            this.donGia = 0;
            this.soLuong = 0;
            this.nhaXuatBan = "";
        }
    }
    Object.defineProperty(Sach.prototype, "$maSach", {
        /**
         * Getter $maSach
         * @return {string}
         */
        get: function () {
            return this.maSach;
        },
        /**
         * Setter $maSach
         * @param {string} value
         */
        set: function (value) {
            this.maSach = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sach.prototype, "$ngayNhap", {
        /**
         * Getter $ngayNhap
         * @return {Date}
         */
        get: function () {
            return this.ngayNhap;
        },
        /**
         * Setter $ngayNhap
         * @param {Date} value
         */
        set: function (value) {
            this.ngayNhap = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sach.prototype, "$donGia", {
        /**
         * Getter $donGia
         * @return {number}
         */
        get: function () {
            return this.donGia;
        },
        /**
         * Setter $donGia
         * @param {number} value
         */
        set: function (value) {
            this.donGia = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sach.prototype, "$soLuong", {
        /**
         * Getter $soLuong
         * @return {number}
         */
        get: function () {
            return this.soLuong;
        },
        /**
         * Setter $soLuong
         * @param {number} value
         */
        set: function (value) {
            this.soLuong = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sach.prototype, "$nhaXuatBan", {
        /**
         * Getter $nhaXuatBan
         * @return {string}
         */
        get: function () {
            return this.nhaXuatBan;
        },
        /**
         * Setter $nhaXuatBan
         * @param {string} value
         */
        set: function (value) {
            this.nhaXuatBan = value;
        },
        enumerable: false,
        configurable: true
    });
    return Sach;
}());
exports.default = Sach;
