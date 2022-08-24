const prompt = require('prompt-sync')();

const  litrosYKilometros = (litros="",kilometros="")=>{
    if(litros === "") return console.log(`debe ingresar los litros`);
    if(kilometros === "") return console.log(`Debe ingresar los kilometros.`)

    let consumidos = parseFloat(kilometros/litros)
    return console.log(`Num Litros: ${litros}\nNum de Kilómetros: ${kilometros}\nHas consumido ${consumidos} l/km`);
}

let pedirLitros = prompt("Igrese la cantidad de litros consumidos: ");
let pedirKilometros = prompt ("Ingrese los kilometros recorridos: ");

litrosYKilometros(pedirLitros,pedirKilometros);
