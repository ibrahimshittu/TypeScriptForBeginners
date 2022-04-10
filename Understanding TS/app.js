var add = function (a, b) {
    return a + b;
};
function printResult(num) {
    console.log('Result: ' + num);
}
printResult(add(5, 12));
var combinedValues; // Function type
combinedValues = add;
console.log(combinedValues(8, 8));
