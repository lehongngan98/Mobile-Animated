import Account from "./bai3";

let acc1 = new Account(72345,"Ted Murphy", 120000)
let acc2 = new Account(69713,"Jane Smith", 50000)
let acc3 = new Account(93757,"Edward Demsey", 800000)

acc3.transfer(acc1, 100000);
acc3.transfer(acc2, 500000);
acc3.addInterest();
console.log(acc1.toString())
console.log(acc2.toString())
console.log(acc3.toString())
acc2.transfer(acc1, 100000)
console.log(acc1.toString())
console.log(acc2.toString())