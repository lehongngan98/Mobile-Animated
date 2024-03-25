"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChuyenXe = /** @class */ (function () {
    function ChuyenXe(maSoChuyen, hoTenTaiXe, soXe, doanhThu) {
        if (maSoChuyen !== undefined && hoTenTaiXe !== undefined && soXe !== undefined && doanhThu !== undefined) {
            this.maSoChuyen = maSoChuyen,
                this.hoTenTaiXe = hoTenTaiXe,
                this.soXe = soXe;
            this.doanhThu = doanhThu;
        }
        else {
            this.maSoChuyen = "";
            this.hoTenTaiXe = "";
            this.soXe = "";
            this.doanhThu = 0;
        }
    }
    Object.defineProperty(ChuyenXe.prototype, "$maSoChuyen", {
        /**
         * Getter $maSoChuyen
         * @return {string}
         */
        get: function () {
            return this.maSoChuyen;
        },
        /**
         * Setter $maSoChuyen
         * @param {string} value
         */
        set: function (value) {
            this.maSoChuyen = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChuyenXe.prototype, "$hoTenTaiXe", {
        /**
         * Getter $hoTenTaiXe
         * @return {string}
         */
        get: function () {
            return this.hoTenTaiXe;
        },
        /**
         * Setter $hoTenTaiXe
         * @param {string} value
         */
        set: function (value) {
            this.hoTenTaiXe = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChuyenXe.prototype, "$soXe", {
        /**
         * Getter $soXe
         * @return {string}
         */
        get: function () {
            return this.soXe;
        },
        /**
         * Setter $soXe
         * @param {string} value
         */
        set: function (value) {
            this.soXe = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ChuyenXe.prototype, "$doanhThu", {
        /**
         * Getter $doanhThu
         * @return {number}
         */
        get: function () {
            return this.doanhThu;
        },
        /**
         * Setter $doanhThu
         * @param {number} value
         */
        set: function (value) {
            this.doanhThu = value;
        },
        enumerable: false,
        configurable: true
    });
    return ChuyenXe;
}());
exports.default = ChuyenXe;
