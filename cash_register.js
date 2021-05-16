function checkCashRegister(price, cash, cid) {
    cid = cid.reverse()

    const currencies = [
        ["One-hundred dollars", 100],
        ["Twenty dollars", 20],
        ["Ten dollars", 10],
        ["Five dollars", 5],
        ["Dollar", 1],
        ["Quarter", 0.25],
        ["Dime", 0.1],
        ["Nickel", 0.05],
        ["Penny", 0.01],
    ]

    let payback = [];
    let change = cash - price;

    for (let i = 0; i < currencies.length; i++) {
        if (change >= currencies[i][1]) {
            // If we dont have that currency in our cash-in-drawer
            if (cid[i][1] === 0) {
                continue;
            }

            let unit = currencies[i][0];
            let unitVal = currencies[i][1];

            
            // Cash-in-drawer currency value
            cid[i][1] -= unitVal;
            cid[i][1] = Math.round(cid[i][1] * 100) / 100;
            

            change -= unitVal;
            change = Math.round(change * 100) / 100; // Round to 2 decimal places

            payback.push([unit, unitVal])

            if (change === 0) {
                return payback;

            } else {
                i--;
            }
        }
    }
}


console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
/*
QUARTER - 4.25
*/