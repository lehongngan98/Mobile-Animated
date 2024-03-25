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
var ChuyenXe_1 = require("./ChuyenXe");
var XeNgoaiThanh = /** @class */ (function (_super) {
    __extends(XeNgoaiThanh, _super);
    function XeNgoaiThanh(maSoChuyen, hoTenTaiXe, soXe, noiDen, soNgayDiDuoc, doanhThu) {
        var _this = _super.call(this, maSoChuyen, hoTenTaiXe, soXe, doanhThu) || this;
        if (noiDen !== undefined && soNgayDiDuoc !== undefined) {
            _this.noiDen = noiDen;
            _this.soNgayDiDuoc = soNgayDiDuoc;
        }
        else {
            _this.noiDen = "";
            _this.soNgayDiDuoc = 0;
        }
        return _this;
    }
    Object.defineProperty(XeNgoaiThanh.prototype, "$noiDen", {
        /**
         * Getter $noiDen
         * @return {string}
         */
        get: function () {
            return this.noiDen;
        },
        /**
         * Setter $noiDen
         * @param {string} value
         */
        set: function (value) {
            this.noiDen = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XeNgoaiThanh.prototype, "$soNgayDiDuoc", {
        /**
         * Getter $soNgayDiDuoc
         * @return {number}
         */
        get: function () {
            return this.soNgayDiDuoc;
        },
        /**
         * Setter $soNgayDiDuoc
         * @param {number} value
         */
        set: function (value) {
            this.soNgayDiDuoc = value;
        },
        enumerable: false,
        configurable: true
    });
    return XeNgoaiThanh;
}(ChuyenXe_1.default));
exports.default = XeNgoaiThanh;
