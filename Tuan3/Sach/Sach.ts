abstract class Sach{
    private maSach : string;
    private ngayNhap : Date;
    private donGia : number;
    private soLuong : number;
    private nhaXuatBan : string;

    constructor(maSach ?: string, ngayNhap ?: Date, donGia ?: number, soLuong ?: number, nhaXuatBan ?: string) {
        if(maSach !== undefined && ngayNhap !== undefined && donGia !== undefined && soLuong !== undefined && nhaXuatBan !== undefined){
            this.maSach = maSach;
            this.ngayNhap = ngayNhap;
            this.donGia = donGia;
            this.soLuong = soLuong;
            this.nhaXuatBan = nhaXuatBan;
        }else{
            this.maSach = "";
            this.ngayNhap = new Date();
            this.donGia = 0;
            this.soLuong = 0;
            this.nhaXuatBan = "";
        }
    }

    /**
     * Getter $maSach
     * @return {string}
     */
	public get $maSach(): string {
		return this.maSach;
	}

    /**
     * Getter $ngayNhap
     * @return {Date}
     */
	public get $ngayNhap(): Date {
		return this.ngayNhap;
	}

    /**
     * Getter $donGia
     * @return {number}
     */
	public get $donGia(): number {
		return this.donGia;
	}

    /**
     * Getter $soLuong
     * @return {number}
     */
	public get $soLuong(): number {
		return this.soLuong;
	}

    /**
     * Getter $nhaXuatBan
     * @return {string}
     */
	public get $nhaXuatBan(): string {
		return this.nhaXuatBan;
	}

    /**
     * Setter $maSach
     * @param {string} value
     */
	public set $maSach(value: string) {
		this.maSach = value;
	}

    /**
     * Setter $ngayNhap
     * @param {Date} value
     */
	public set $ngayNhap(value: Date) {
		this.ngayNhap = value;
	}

    /**
     * Setter $donGia
     * @param {number} value
     */
	public set $donGia(value: number) {
		this.donGia = value;
	}

    /**
     * Setter $soLuong
     * @param {number} value
     */
	public set $soLuong(value: number) {
		this.soLuong = value;
	}

    /**
     * Setter $nhaXuatBan
     * @param {string} value
     */
	public set $nhaXuatBan(value: string) {
		this.nhaXuatBan = value;
	}

}

export default Sach