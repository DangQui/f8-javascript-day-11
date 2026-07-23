let soKwh = 150;

let baseChange = 100 * 1500;
let excessChange = (soKwh - 100) * 2000;

let totalElectricityBill = baseChange + excessChange;
console.log("Tổng số tiền điện là:", totalElectricityBill + "đ");
