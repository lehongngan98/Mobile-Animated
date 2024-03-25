class Account {
    private accountNumber: number;
    private name: string;
    private balance: number;
    private readonly Rate: number = 0.035;

    constructor();

    constructor(accountNumber: number, name: string, balance: number);

    constructor(accountNumber: number, name: string);

    constructor(accountNumber?: number, name?: string, balance?: number) {
        if (accountNumber !== undefined && name !== undefined) {
            this.accountNumber = accountNumber;
            this.name = name;
    
            if (balance !== undefined) {
                this.balance = balance;
            } else {
                this.balance = 50000;
            }
        } else {
            this.accountNumber = 999999;
            this.name = 'chua xac dinh';
            this.balance = 50000;
        }
    }

    public setAccountNumber(accountNumber: number): void{
        if(accountNumber > 0){
            this.accountNumber = accountNumber;
        }else{
            throw new Error("Account number > 0")
        }
    }

    public getAccountNumber(): number{
        return this.accountNumber;
    }

    public setName(name: string): void{
        if(name !== undefined){
            this.name = name;
        }else{
            throw new Error("Name number not null")
        }
    }

    public getName(): string{
        return this.name;
    }

    public setBalance(balance: number) : void{
        if(balance >= 50000){
            this.balance = balance;
        }else{
            throw new Error("Balance >= 50000")
        }
    }

    public getBalance() : number{
        return this.balance;
    }

    public deposit(amount: number): boolean{
        if(amount > 0){
            this.balance = this.balance + amount;
            return true;
        }else{
            return false;
        }
    }

    public withdraw(ammount: number, fee: number): boolean{
        if((ammount > 0) && ((ammount + fee) <= this.balance)){
            this.balance = this.balance - (ammount + fee);
            return true;
        }else{
            return false;
        }
    }

    public addInterest() : void{
        this.balance = this.balance + (this.balance * this.Rate);
    }

    public transfer(acc2 : Account, amount: number) : boolean{
        if(this.balance > amount){
            this.balance = this.balance - amount;
            acc2.setBalance(acc2.getBalance() + amount);
            return true;
        }else{
            return false;
        }
    }

    public toString(): string{
        return `accountNumber: ${this.accountNumber}, name: ${this.name}, balance: ${this.balance}`
    }
}

export default Account