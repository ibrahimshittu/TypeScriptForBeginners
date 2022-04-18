let userInput: unknown; // diffeent from any, cannot assign to string & must always have an additional ch4eck
let userName: string;

userInput = 5;
userInput = 'Max';
if (typeof (userInput) === 'string') {
    userName = userInput;
}
