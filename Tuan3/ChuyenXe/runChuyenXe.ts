import CongTy from "./CongTy";
import XeNgoaiThanh from "./XeNgoaiThanh";
import XeNoiThanh from "./XeNoiThanh";

let congty = new CongTy("Minh Toan")
let xe1 = new XeNoiThanh("1", "Thien Phu", "1", "1", 1, 10000);
let xe2 = new XeNgoaiThanh("2", "Thien Phu", "2", "HCM", 1, 15000);
congty.addXe(xe1);
congty.addXe(xe2);
console.log(congty.tongDoanhThu())
// let xe1 = new XeNoiThanh();
// let xe2 = new XeNgoaiThanh();
// console.log(xe1.$soXe)
// console.log(xe1.$soTuyen)
// console.log(xe1.$soKmDiDuoc)
// console.log(xe1.$maSoChuyen)
// console.log(xe1.$hoTenTaiXe)
// console.log(xe1.$doanhThu)
// console.log("-------------------------------")
// console.log(xe2.$soXe)
// console.log(xe2.$noiDen)
// console.log(xe2.$soNgayDiDuoc)
// console.log(xe2.$maSoChuyen)
// console.log(xe2.$hoTenTaiXe)
// console.log(xe2.$doanhThu)