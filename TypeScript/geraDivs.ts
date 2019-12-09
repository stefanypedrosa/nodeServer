function geraDivs(... parametros:string[]):void{
    for(let i=0; i<parametros.length; i++){
        console.log(`<div id='id${i+1}'> ${parametros[i]} </div>`);
    }
}
geraDivs('valorA', 'valorB', 'valorC', 'valorD', 'valorE');