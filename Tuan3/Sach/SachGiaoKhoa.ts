import Sach from "./Sach";

class SachGiaoKhoa extends Sach{
    private tinhTrang : string;
    private thanhTien : number;
    constructor(maSach ?: string, ngayNhap ?: Date, donGia ?: number, soLuong ?: number, nhaXuatBan ?: string, tinhTrang ?: string){
        super(maSach, ngayNhap, donGia, soLuong, nhaXuatBan)
        if(tinhTrang !== undefined){
            this.tinhTrang = tinhTrang;
            this.thanhTien = (tinhTrang === "mới" ? this.$soLuong*this.$donGia : this.$soLuong*this.$donGia*0.5)
        }else{
            this.tinhTrang = "mới",
            this.thanhTien = 0;
        }
    }

    /**
     * Getter $tinhTrang
     * @return {string}
     */
	public get $tinhTrang(): string {
		return this.tinhTrang;
	}

    /**
     * Setter $tinhTrang
     * @param {string} value
     */
	public set $tinhTrang(value: string) {
		this.tinhTrang = value;
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
        return `masach: ${this.$maSach}, ngaynhap: ${this.$ngayNhap}, dongia: ${this.$donGia}, soluong: ${this.$soLuong}, nhaxuatban: ${this.$nhaXuatBan}, tinhtrang: ${this.tinhTrang}, thanhtien: ${this.thanhTien}`
    }

}

export default SachGiaoKhoa