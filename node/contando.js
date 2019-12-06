var libInput = require('readline-sync');
var num = libInput.question("Ate que numero contar? ");
console.log("Contando.....")
for(i=1; i<=num; i++){
    console.log(i)
}