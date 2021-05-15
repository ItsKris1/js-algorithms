const romanSymbols = [
    {number: 1000, roman: 'M'},
    {number: 900, roman: 'CM'},
    {number: 500, roman: 'D'},
    {number: 400, roman: 'CD'},
    {number: 100, roman: 'C'},
    {number: 90, roman: 'XC'},
    {number: 50, roman: 'L'},
    {number: 40, roman: 'XL'},
    {number: 10, roman: 'X'},
    {number: 9, roman: 'IX'},
    {number: 5, roman: 'V'},
    {number: 4, roman: 'IV'},
    {number: 1, roman: 'I'}
]

function convertToRoman(num) {
    let romanNumber = '';
    let arabicNumber = num;
    for (let i = 0; i < romanSymbols.length; i++) {
        if (romanSymbols[i].number <= arabicNumber) {
            arabicNumber -= romanSymbols[i].number;
            romanNumber += romanSymbols[i].roman;

            if (arabicNumber === 0) {
                return romanNumber;
            }
            i--;
        }
    }
}

console.log(convertToRoman(4));
