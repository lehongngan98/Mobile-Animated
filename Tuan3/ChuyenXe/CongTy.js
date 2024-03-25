"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CongTy = /** @class */ (function () {
    function CongTy($name) {
        if ($name !== undefined) {
            this.name = $name;
            this.danhSachXe = [];
        }
        else {
            this.name = "",
                this.danhSachXe = [];
        }
    }
    Object.defineProperty(CongTy.prototype, "$name", {
        /**
         * Getter $name
         * @return {string}
         */
        get: function () {
            return this.name;
        },
        /**
         * Setter $name
         * @param {string} value
         */
        set: function (value) {
            this.name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CongTy.prototype, "$danhSachXe", {
        /**
         * Getter $danhSachXe
         * @return {ChuyenXe[]}
         */
        get: function () {
            return this.danhSachXe;
        },
        /**
         * Setter $danhSachXe
         * @param {ChuyenXe[]} value
         */
        set: function (value) {
            this.danhSachXe = value;
        },
        enumerable: false,
        configurable: true
    });
    CongTy.prototype.tongDoanhThu = function () {
        var sum = 0;
        this.danhSachXe.forEach(function (element) {
            sum += element.$doanhThu;
        });
        return sum;
    };
    CongTy.prototype.addXe = function (xe) {
        this.$danhSachXe.push(xe);
    };
    return CongTy;
}());
exports.default = CongTy;
