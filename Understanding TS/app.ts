function combine(n1: string | number, n2: string | number, resultConversion: string) { // Union type
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    } else {
        result = n1.toString() + n2.toString();
    }

    if (resultConversion === 'as-number') {
        return +result
    } else {
        return result.toString()
    }
}
const combinedAges = combine(30, 20, 'string')
const combinedAgesString = combine("30", "20", 'string')
const combinesNames = combine("Ibrahim ", "Shittu", 'string');
console.log(combinedAges, combinesNames, combinedAgesString);