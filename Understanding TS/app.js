var userInput; // diffeent from any, cannot assign to string & must always have an additional ch4eck
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userName = userInput;
}
var generateError = function (message, code) {
    throw {
        message: message,
        errorCode: code
    };
};
generateError('Error!', 500);
