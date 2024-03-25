"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TamGiac = /** @class */ (function () {
    function TamGiac(ma, mb, mc) {
        this.ma = ma;
        this.mb = mb;
        this.mc = mc;
    }
    TamGiac.prototype.setMa = function (ma) {
        this.ma = ma;
    };
    TamGiac.prototype.getMa = function () {
        return this.ma;
    };
    TamGiac.prototype.setMb = function (mb) {
        this.mb = mb;
    };
    TamGiac.prototype.getMb = function () {
        return this.mb;
    };
    TamGiac.prototype.setMc = function (mc) {
        this.mc = mc;
    };
    TamGiac.prototype.getMc = function () {
        return this.mc;
    };
    TamGiac.prototype.tinhChuVi = function () {
        return (this.ma + this.mb + this.mc);
    };
    TamGiac.prototype.tinhDienTich = function () {
        var p = this.tinhChuVi() / 2;
        var s = Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
        return s;
    };
    TamGiac.prototype.typeTamGiac = function () {
        if (!this.checkTamGiac()) {
            return "Khong Phai Tam Giac";
        }
        else {
            if (this.ma === this.mb && this.mb === this.mc) {
                return "Tam Giac Deu";
            }
            else if ((this.ma === this.mb && this.mb !== this.mc) || (this.mc === this.ma && this.ma !== this.mb)) {
                return "Tam Giac Can";
            }
            else if ((Math.pow(this.ma, 2) + Math.pow(this.mb, 2) === Math.pow(this.mc, 2)) ||
                (Math.pow(this.ma, 2) + Math.pow(this.mc, 2) === Math.pow(this.mb, 2)) ||
                (Math.pow(this.mb, 2) + Math.pow(this.mc, 2) === Math.pow(this.ma, 2))) {
                return "Tam Giac Vuong";
            }
            else {
                return "Tam Giac Thuong";
            }
        }
    };
    TamGiac.prototype.checkTamGiac = function () {
        if ((this.ma + this.mb > this.mc) && (this.ma + this.mc > this.mb) && (this.mb + this.mc > this.ma)) {
            return true;
        }
        return false;
    };
    TamGiac.prototype.toString = function () {
        return "Tam giac abc c\u00F3 a = ".concat(this.ma, " b =  ").concat(this.mb, " c = ").concat(this.mc);
    };
    return TamGiac;
}());
exports.default = TamGiac;
