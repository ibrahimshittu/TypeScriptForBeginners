function combine(n1, n2, resultConversion) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number') {
        result = n1 + n2;
    }
    else {
        result = n1.toString() + n2.toString();
    }
    if (resultConversion === 'as-number') {
        return +result;
    }
    else {
        return result.toString();
    }
}
var combinedAges = combine(30, 20, 'string');
var combinedAgesString = combine("30", "20", 'string');
var combinesNames = combine("Ibrahim ", "Shittu", 'string');
console.log(combinedAges, combinesNames, combinedAgesString);
