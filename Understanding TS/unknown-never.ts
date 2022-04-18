let userInput: unknown; // diffeent from any, cannot assign to string & must always have an additional ch4eck
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}


const generateError = (message: string, code: number): never => { // a function that will never return anything, different from void 
    throw {
        message: message,
        errorCode: code
    }

}

generateError('Error!', 500)