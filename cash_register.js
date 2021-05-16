function checkCashRegister(price, cash, cid) {

    function getCidSum(arr) {
        return arr.reduce(function(total, val){
        total += val[1];
        return total;
    }, 0)
}

    cid = cid.reverse()

    const currencies = [
        ["ONE HUNDRED", 100],
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE", 5],
        ["ONE", 1],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01],
    ]

    
    let change = cash - price;
    let cidSum = getCidSum(cid)

    if (cidSum < change) {
        return {status: 'INSUFFICIENT_FUNDS', change: []}
    }

    let payback = [];

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

            if (payback.includes(unit)) {
                let idx = payback.indexOf(unit);
                payback[idx + 1] += unitVal; 
    
            } else {
                payback.push(unit, unitVal);
            }

            i--;

            if (change === 0) {
                
                change = [];

                for (let i = 0; i < payback.length; i+=2) {
                    change.push(payback.slice(i, i+2));
                }
                console.log(getCidSum(cid))
                if (getCidSum(cid) === 0) {
                    return {status: "CLOSED", change: change};
                } else {
                    return {status: "OPEN", change: change};
                }
                
        }
        
    }
}
}


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
