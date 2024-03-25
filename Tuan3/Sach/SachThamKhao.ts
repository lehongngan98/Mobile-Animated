import Sach from "./Sach";

class SachThamKhao extends Sach{
    private thue : number;
    private thanhTien : number;
    constructor(maSach ?: string, ngayNhap ?: Date, donGia ?: number, soLuong ?: number, nhaXuatBan ?: string, thue ?: number){
        super(maSach, ngayNhap, donGia, soLuong, nhaXuatBan)
        if(thue !== undefined){
            this.thue = thue;
            this.thanhTien = this.$soLuong*this.$donGia+(this.thue*this.$soLuong*this.$donGia)
        }else{
            this.thue = 0.1,
            this.thanhTien = 0;
        }
    }

    /**
     * Getter $thue
     * @return {number}
     */
	public get $thue(): number {
		return this.thue;
	}

    /**
     * Setter $thue
     * @param {number} value
     */
	public set $thue(value: number) {
		this.thue = value;
	}

    /**
     * Getter $thanhTien
     * @return {number}
     */
	public get $thanhTien(): number {
		return this.thanhTien;
	}

    /**
     * Setter $thanhTien
     * @param {number} value
     */
	public set $thanhTien(value: number) {
		this.thanhTien = value;
	}

    public toString() : string {
        return `masach: ${this.$maSach}, ngaynhap: ${this.$ngayNhap}, dongia: ${this.$donGia}, soluong: ${this.$soLuong}, nhaxuatban: ${this.$nhaXuatBan}, thue: ${this.thue}, thanhtien: ${this.thanhTien}`
    }
}

export default SachThamKhao