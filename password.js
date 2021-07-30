const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the Password Validator Tool.");

const requestPassword = function() {
    reader.question("Please enter you password: ",function(password){
        if (password.length >= 10) {
            console.log("Your password is long enough.");
            reader.close();
        } else {
            console.log("Try again, sonny. Your password should be at least ten characters long.");
            requestPassword();
        }
    });
};

requestPassword();
