const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log (String.raw`
 __      __       .__                               
/  \    /  \ ____ |  |   ____  ____   _____   ____  
\   \/\/   // __ \|  | _/ ___\/  _ \ /     \_/ __ \ 
 \        /\  ___/|  |_\  \__(  <_> )  Y Y  \  ___/ 
  \__/\  /  \___  >____/\___  >____/|__|_|  /\___  >
       \/       \/          \/            \/     \/ 
`);

reader.question("Please enter a password:", function(input){
	tokens = input.split(' ');
	
	password = tokens[0];

    if (password.length >= 10 && password.includes('%') && password.length <= 20) {
        console.log("Password successful!");
    } else if (password === "password" || password === "Password") {
        console.log("That is a terrible password");
    }  else {console.log("Password failed. Please enter between 10-20 characters with atleast one % sign")};

    reader.close();
});