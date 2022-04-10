var add = function (a, b) {
    return a + b;
};
function printResult(num) {
    console.log('Result: ' + num);
}
function AddandHandle(a, b, cb) {
    var result = a + b;
    cb(result);
}
printResult(add(5, 12));
var combinedValues; // Function type
var combinedValues2; // Function type with return type
combinedValues = add;
console.log(combinedValues(8, 8));
AddandHandle(10, 20, function (result) {
    console.log(result);
});
