import ChuyenXe from "./ChuyenXe";

class CongTy {
    private name : string;
    private danhSachXe : ChuyenXe[];

	constructor($name ?: string ) {
        if($name !== undefined){
            this.name = $name;
            this.danhSachXe = [];
        }else{
            this.name = "",
            this.danhSachXe = []
        }
	}

    /**
     * Getter $name
     * @return {string}
     */
	public get $name(): string {
		return this.name;
	}

    /**
     * Getter $danhSachXe
     * @return {ChuyenXe[]}
     */
	public get $danhSachXe(): ChuyenXe[] {
		return this.danhSachXe;
	}

    /**
     * Setter $name
     * @param {string} value
     */
	public set $name(value: string) {
		this.name = value;
	}

    /**
     * Setter $danhSachXe
     * @param {ChuyenXe[]} value
     */
	public set $danhSachXe(value: ChuyenXe[]) {
		this.danhSachXe = value;
	}

    public tongDoanhThu() : number {
        let sum : number = 0;
        this.danhSachXe.forEach(element => {
            sum += element.$doanhThu;
        });
        return sum;
    }

    public addXe(xe : ChuyenXe){
        this.$danhSachXe.push(xe);
    }

}

export default CongTy