
const descomponerNumero = (numero= undefined) =>{
    let unidad,decena,centena,unidemil;

    unidad = Math.trunc(numero % 10);
    decena = Math.trunc(numero / 10);
    centena = Math.trunc(numero / 100);
    unidemil = Math.trunc(numero / 1000);

    if(numero === undefined) return console.log("No ingreso ningun número");
    if(typeof numero != "number") return console.log(`Lo ingresado no es un número`);
    if(Math.sign(numero) === -1) return console.log("ingrese solo numeros positivos");

    (numero < 10)
        ? console.log(`Unidad: ${unidad}`)
        : (numero < 100)
            ? console.log(`Decena: ${decena}, Unidad: ${unidad}`)  
            :(numero < 1000)
                ? console.log(`Centena: ${centena} Decena: ${decena%10}, Unidad: ${unidad}`)
                :(numero < 10000)
                    ? console.log(`Unidad de Mil:${unidemil} Centena: ${centena%10} Decena: ${decena%10}, Unidad: ${unidad}`)
                    : console.log("se paso de rango numerico, solo analiza hasta unidades de mil");

    if(numero % 1 !== 0){
        console.log(`Parte decimal: ${(numero - (Math.trunc(numero))).toFixed(2)}`); //muestra la parte decimal si es que tiene.
    }
}

descomponerNumero(1254.894);

