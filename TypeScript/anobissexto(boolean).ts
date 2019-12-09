function anobissexto(ano:number):Boolean{
    let bissexto:Boolean;
    if(ano%4 == 0 && ano%100 != 0 || ano%400 == 0){
        bissexto = true;
    }
    else{
        bissexto = false;
    }
    return bissexto;
}

import libInput = require('readline-sync');
let ano:string = libInput.question("Digite um ano aleatorio: ");
console.log(anobissexto(parseInt(ano)));