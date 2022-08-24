const prompt = require('prompt-sync')();


const saludo = (nombre="")=>{

    if(nombre === "") return console.warn("No ingreso ningun nombre");

    return console.log(`Hola "${nombre.trim()}"`);   
}

saludo(prompt("Escribe tu nombre:"));