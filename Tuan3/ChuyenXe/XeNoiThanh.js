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
var XeNoiThanh = /** @class */ (function (_super) {
    __extends(XeNoiThanh, _super);
    function XeNoiThanh(maSoChuyen, hoTenTaiXe, soXe, soTuyen, soKmDiDuoc, doanhThu) {
        var _this = _super.call(this, maSoChuyen, hoTenTaiXe, soXe, doanhThu) || this;
        if (soTuyen !== undefined && soKmDiDuoc !== undefined) {
            _this.soTuyen = soTuyen;
            _this.soKmDiDuoc = soKmDiDuoc;
        }
        else {
            _this.soTuyen = "";
            _this.soKmDiDuoc = 0;
        }
        return _this;
    }
    Object.defineProperty(XeNoiThanh.prototype, "$soTuyen", {
        /**
         * Getter $soTuyen
         * @return {string}
         */
        get: function () {
            return this.soTuyen;
        },
        /**
         * Setter $soTuyen
         * @param {string} value
         */
        set: function (value) {
            this.soTuyen = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(XeNoiThanh.prototype, "$soKmDiDuoc", {
        /**
         * Getter $soKmDiDuoc
         * @return {number}
         */
        get: function () {
            return this.soKmDiDuoc;
        },
        /**
         * Setter $soKmDiDuoc
         * @param {number} value
         */
        set: function (value) {
            this.soKmDiDuoc = value;
        },
        enumerable: false,
        configurable: true
    });
    return XeNoiThanh;
}(ChuyenXe_1.default));
exports.default = XeNoiThanh;
