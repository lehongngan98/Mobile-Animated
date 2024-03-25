class Vehicle {

    constructor(
        private chuXe: string,
        private loaiXe: string,
        private triGiaXe: number,
        private dungTichXyLanh: number
    ){}

    public setChuXe(tenChuXe: string): void{
        this.chuXe = tenChuXe;
    }

    public getChuXe() : string{
        return this.chuXe;
    }

    public setLoaiXe(loaiXe: string) : void{
        this.loaiXe = loaiXe;
    }

    public getLoaiXe() : string{
        return this.loaiXe;
    }

    public setTriGiaXe(triGiaXe: number): void{
        if(triGiaXe >= 0){
            this.triGiaXe = triGiaXe;
        }else{
            throw new Error("Tri gia xe phai >= 0")
        }
    }

    public getTriGiaXe() : number{
        return this.triGiaXe;
    }

    public setDungTichXyLanh(dungTichXyLanh: number) : void{
        if(dungTichXyLanh >= 0){
            this.dungTichXyLanh = dungTichXyLanh;
        }else{
            throw new Error("Dung tich xy lanh >= 0")
        }
    }

    public getDungTichXyLanh() : number{
        return this.dungTichXyLanh;
    }

    public tinhThueXe() : number{
        if(this.dungTichXyLanh < 100 && this.dungTichXyLanh >= 0){
            return this.triGiaXe * 0.01;
        }else if(this.dungTichXyLanh >= 100 && this.dungTichXyLanh <= 200){
            return this.triGiaXe * 0.03;
        }else{
            return this.triGiaXe * 0.05;
        }
    }

    public toString() : string{
        return `Tên chủ xe: ${this.chuXe}, Loại xe: ${this.loaiXe}, Dung tích: ${this.dungTichXyLanh}, Trị giá: ${this.triGiaXe}, Thuế phải nộp: ${this.tinhThueXe()}`;
    }
}

export default Vehicle