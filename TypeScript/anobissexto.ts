function anobissexto(ano:number):void{
    if(ano%4 == 0 && ano%100 != 0 || ano%400 == 0){
        console.log(`${ano} é bissexto`);
    }
    else{
        console.log(`${ano} não é bissexto`);
    }
}

import libInput = require('readline-sync');
let ano:string = libInput.question("Digite um ano aleatorio: ");
anobissexto(parseInt(ano));