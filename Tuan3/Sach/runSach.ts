import SachGiaoKhoa from "./SachGiaoKhoa";
import SachThamKhao from "./SachThamKhao";

let sach1 = new SachGiaoKhoa("1", new Date(), 10000, 5, "Kim Đồng", "mới");
let sach2 = new SachThamKhao("2", new Date(), 10000, 5, "Kim Đồng", 0.1);
console.log(sach1.toString())
console.log(sach2.toString())