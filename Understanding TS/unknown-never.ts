let userInput: unknown; // different from any, cannot assign to string & must always have an additional check
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
// userName = userInput; type unknown is not assignable to type string

const generateError = (message: string, code: number): never => { // a function that will never return anything, different from void 
    throw {
        message: message,
        errorCode: code
    }

}

generateError('Error!', 500)