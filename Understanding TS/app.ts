const add = (a: number, b: number): number => { // Function with return type, You dont need to define return type
    return a + b;
}

function printResult(num: number): void { // Function with void return type
    console.log('Result: ' + num);
}

function AddandHandle(a: number, b: number, cb: (num: number) => void) { // Function with callback cb
    const result = a + b;
    cb(result);
}

printResult(add(5, 12));

let combinedValues: Function; // Function type
let combinedValues2: (a: number, b: number) => number; // Function type with return type

combinedValues = add;

console.log(combinedValues(8, 8));

AddandHandle(10, 20, (result) => {
    console.log(result);
}
);