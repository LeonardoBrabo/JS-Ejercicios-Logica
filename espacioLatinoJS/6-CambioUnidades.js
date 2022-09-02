const prompt = require('prompt-sync')();

const CambioUnidadTiempo = (horas,minutos)=>{

    //evitar que ingrese otros tipos de caracteres
    if(!(/^[0-9]{1,2}$/g.test(horas))) return console.log(`las horas: ${horas} está en un formato erroneo, ingrese solo numeros enteros.`);
    if(!(/^[0-9]{1,2}$/g.test(minutos))) return console.log(`Los minutos: ${minutos} está en un formato erroneo, ingrese solo numeros enteros.`);
    
    let hours = parseInt(horas) 
    let minutes = parseInt(minutos);
    let cambioASegundos = (hours*60*60)+(minutes*60);

    return console.log(` ${horas}:${minutos} en segundo es: ${cambioASegundos}`)

    
}

CambioUnidadTiempo(prompt("ingrese una hora: "),prompt("ingrese los minutos: "));

