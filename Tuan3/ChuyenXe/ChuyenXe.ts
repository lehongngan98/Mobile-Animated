abstract class ChuyenXe{
    
    private maSoChuyen : string;
    private hoTenTaiXe : string;
    private soXe : string;
    private doanhThu : number;


	constructor(maSoChuyen ?: string, hoTenTaiXe ?: string, soXe ?: string, doanhThu ?: number) {
        if(maSoChuyen !== undefined && hoTenTaiXe !== undefined && soXe !== undefined && doanhThu !== undefined){
            this.maSoChuyen = maSoChuyen,
            this.hoTenTaiXe = hoTenTaiXe,
            this.soXe = soXe;
            this.doanhThu = doanhThu;
        }else{
            this.maSoChuyen = "";
            this.hoTenTaiXe = "";
            this.soXe = "";
            this.doanhThu = 0;
        }
	}


    /**
     * Getter $maSoChuyen
     * @return {string}
     */
	public get $maSoChuyen(): string {
		return this.maSoChuyen;
	}

    /**
     * Getter $hoTenTaiXe
     * @return {string}
     */
	public get $hoTenTaiXe(): string {
		return this.hoTenTaiXe;
	}

    /**
     * Getter $soXe
     * @return {string}
     */
	public get $soXe(): string {
		return this.soXe;
	}

    /**
     * Getter $doanhThu
     * @return {number}
     */
	public get $doanhThu(): number {
		return this.doanhThu;
	}

    /**
     * Setter $maSoChuyen
     * @param {string} value
     */
	public set $maSoChuyen(value: string) {
		this.maSoChuyen = value;
	}

    /**
     * Setter $hoTenTaiXe
     * @param {string} value
     */
	public set $hoTenTaiXe(value: string) {
		this.hoTenTaiXe = value;
	}

    /**
     * Setter $soXe
     * @param {string} value
     */
	public set $soXe(value: string) {
		this.soXe = value;
	}

    /**
     * Setter $doanhThu
     * @param {number} value
     */
	public set $doanhThu(value: number) {
		this.doanhThu = value;
	}
}

export default ChuyenXe