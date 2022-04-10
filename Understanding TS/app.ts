function combine(n1: string | number, n2: string | number) { // Union type

    if (typeof n1 === 'number' && typeof n2 === 'number') {
        return n1 + n2;
    } else {
        return n1.toString() + n2.toString();
    }
}
const combinedAges = combine(30, 20)
const combinesNames = combine("Ibrahim ", "Shittu")
console.log(combinedAges, combinesNames);