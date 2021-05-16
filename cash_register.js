

function checkCashRegister(price, cash, cid) {
    // Cloning the cash-in-drawer for later use
    // You can see it being used on the line: 86
    let myClonedArray = [] 
    cid.map(val => myClonedArray.push(Object.assign([], val)));

    // Cash in drawer sum
    function getCidSum(arr) {
        return arr.reduce(function(total, val){
        total += val[1];
        return total;
    }, 0)}

    // Reversing the CID list to match the values with array currencies
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

    // If total amount of cash in drawer is less than we have to give change back
    if (cidSum < change) {
        console.log('here');
        return {status: 'INSUFFICIENT_FUNDS', change: []}
    }

    // At first we will store our change here
    let payback = [];

    for (let i = 0; i < currencies.length; i++) {
        if (change >= currencies[i][1]) {
            // If we have ran out of that currency in cash-in-drawer
            if (cid[i][1] === 0) {
                continue;
            }

            // Currency unit -> ["ONE"], ["FIVE"]
            let unit = currencies[i][0];
            // The unit value -> "ONE" has a value of 1.
            let unitVal = currencies[i][1];

            
            // Updating cash in drawer values accordingly
            cid[i][1] -= unitVal;
            cid[i][1] = Math.round(cid[i][1] * 100) / 100; // Round to 2 decimal places
            

            change -= unitVal;
            change = Math.round(change * 100) / 100; // Round to 2 decimal places

            // We push each change unit into payback array
            // If the (currency)unit exists, we add the value to that currency unit
            // ["ONE", 1] -> ["ONE", 2]
            if (payback.includes(unit)) {
                let idx = payback.indexOf(unit);
                payback[idx + 1] += unitVal; 
    
            } else {
                payback.push(unit, unitVal);
            }

            i--;
        }
    }

            if (change === 0) {
                change = [];

                // We push payback items to change to get a 2D array
                // which would look like this -> [[currency unit, total val], [...], [...]]
                for (let i = 0; i < payback.length; i+=2) {
                    change.push(payback.slice(i, i+2));
                }

                // If the amount in cash drawer is 0;
                if (getCidSum(cid) === 0) {
                    return {status: "CLOSED", change: myClonedArray};
                } else {
                    return {status: "OPEN", change: change};
                }

            } else {
                return {status: 'INSUFFICIENT_FUNDS', change: []}
            }
        }


console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
