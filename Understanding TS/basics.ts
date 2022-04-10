// Core TS types - number, string, boolean, object, array, Tuple, Enum, Any

function add (n1: number, n2: number, showResult: boolean, phrase: string) {
    if (showResult) {
        console.log(phrase + (n1 + n2));
    } else {
        return n1 + n2;
    }
}

const n1 = 10;
const n2 = 20.1;
const showResult = true;
const resultPhrase = 'Result is: ';

console.log(add(n1, n2, showResult, resultPhrase));