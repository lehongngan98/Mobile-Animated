import ChuyenXe from "./ChuyenXe";

class XeNoiThanh extends ChuyenXe {

    private soTuyen : string;
    private soKmDiDuoc : number;

    /**
     * Getter $soTuyen
     * @return {string}
     */
	public get $soTuyen(): string {
		return this.soTuyen;
	}

    /**
     * Getter $soKmDiDuoc
     * @return {number}
     */
	public get $soKmDiDuoc(): number {
		return this.soKmDiDuoc;
	}

    /**
     * Setter $soTuyen
     * @param {string} value
     */
	public set $soTuyen(value: string) {
		this.soTuyen = value;
	}

    /**
     * Setter $soKmDiDuoc
     * @param {number} value
     */
	public set $soKmDiDuoc(value: number) {
		this.soKmDiDuoc = value;
	}

	constructor(maSoChuyen ?: string, hoTenTaiXe ?: string, soXe ?: string, soTuyen?: string, soKmDiDuoc?: number,doanhThu ?: number) {
        super(maSoChuyen, hoTenTaiXe, soXe, doanhThu);
		if(soTuyen !== undefined && soKmDiDuoc !== undefined){
            this.soTuyen = soTuyen;
            this.soKmDiDuoc = soKmDiDuoc;
        }else{
            this.soTuyen = "";
            this.soKmDiDuoc = 0;
        }
	}
    
}

export default XeNoiThanh