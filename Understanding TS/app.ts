const add = (a: number, b: number): number => { // Function with return type, You dont need to define return type
    return a + b;
}

function printResult(num: number): void { // Function with void return type
    console.log('Result: ' + num);
}

printResult(add(5, 12));

let combinedValues: Function; // Function type

combinedValues = add;

console.log(combinedValues(8, 8));