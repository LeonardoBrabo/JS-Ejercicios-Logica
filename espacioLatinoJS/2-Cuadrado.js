const prompt = require('prompt-sync')();
let dato = prompt("Ingrese el valor de un lado del cuadrado:");

const areaPerimetroCuadrado = (lado="")=>{

    if(lado === "") return console.warn("NO ingreso nada");
    if(/[a-z\W]+/ig.test(lado)) return console.error("Lo que ingreso no es un número");
    
    lado = parseInt(lado);

    console.log(typeof lado);
   
    return console.log({
        Area: lado*lado,
        Perimetro: lado*4,
    })
}

areaPerimetroCuadrado(dato);