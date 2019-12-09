function geraDivs(... parametros:string[]):string{
    let result: string = "";
    for(let i=0; i<parametros.length; i++){
        result+=`<div id='id${i+1}'</div> ${parametros[i]} </div>\n`
    }
    return result;
}
console.log(geraDivs('valorA', 'valorB', 'valorC', 'valorD', 'valorE', 'valorF', 'valorG', 'valorH', 'valorI'))