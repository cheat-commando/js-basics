const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("---Welcome to the Password Validator Tool---");

const requestPassword = function() {
    reader.question("Please enter your password: ", function(password){
        let cleanPass = password.trim()
        // startWithCapOrNum = (cleanPass[0] === cleanPass[0].toUpperCase); 
        // lessthan10 = (cleanPass.length < 10);
        // hasWeirdCharacterss = !!cleanPass.match(/\W/g);
        // isNullOrUndefined = (!cleanPass);
        if (!cleanPass || cleanPass[0] === cleanPass[0].toUpperCase() || !!cleanPass.match(/\W/g) || cleanPass.length < 10) {
            console.log(`\n**ALARM NOISES**\n\nTry again! Here are some of our guidelines that I didn't bother to tell you before:\n\nYour password must have the following details:\n\n\t-at least 10 characters\n\t-cannot BEGIN with a capital letter, a number, or the underscore\n\t-can only include letters (a-z), numbers (0-9), and/or the underscore (_)\n`);
            requestPassword();
        } else {
            console.log('\nYour password is good enough, I suppose.');
            reader.close();
        }
    });
};

requestPassword();
