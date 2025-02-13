function calculateElectricityBill(units) {
    let billAmount = 0;

    if (units <= 50) {
        billAmount = units * 2.5;
    } else if (units <= 100) {
        billAmount = (50 * 2.5) + ((units - 50) * 4);
    } else if (units <= 200) {
        billAmount = (50 * 2.5) + (50 * 4) + ((units - 100) * 6);
    } else {
        billAmount = (50 * 2.5) + (50 * 4) + (100 * 6) + ((units - 200) * 8);
    }

    return billAmount;
}


let unitsConsumed = 250;
let finalBill = calculateElectricityBill(unitsConsumed);
console.log(`The final bill for ${unitsConsumed} units is Rs. ${finalBill}`);
