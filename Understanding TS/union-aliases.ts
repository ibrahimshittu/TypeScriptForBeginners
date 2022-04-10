type combine = string | number; // type aliases
type combineCustom = 'number' | 'string'; // type aliases

function combine(n1: combine, n2: combine, resultConversion: combineCustom) { // Union type and literal (custom) types
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number' || resultConversion === 'number') {
        result = +n1 + +n2;
    } else {
        result = n1.toString() + n2.toString();
    }
    return result;

    // if (resultConversion === 'as-number') {
    //     return +result
    // } else {
    //     return result.toString()
    // }
}
const combinedAges = combine(30, 20, 'number')
const combinedAgesString = combine("30", "20", 'number')
const combinesNames = combine("Ibrahim ", "Shittu", 'string');
console.log(combinedAges, combinesNames, combinedAgesString);