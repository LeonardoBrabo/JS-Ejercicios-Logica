const prompt = require('prompt-sync')();

const CambioUnidadTiempo = (horas,minutos)=>{
    

    let hours = parseInt(horas) 
    let minutes = parseInt(minutos);
    let cambioASegundos = (hours*60*60)+(minutes*60);

    return ` ${horas}:${minutos} en segundo es: ${cambioASegundos}`

    
}

console.log(CambioUnidadTiempo(prompt("ingrese una hora: "),prompt("ingrese los minutos: ")));

