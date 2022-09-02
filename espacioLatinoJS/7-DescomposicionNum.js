
const descomponerNumero = numero =>{
    let unidad,decena,centena,unidemil;

    unidad = numero % 10;
    decena = Math.trunc(numero / 10);
    centena = Math.trunc(numero / 100);
    unidemil = Math.trunc(numero / 1000);

    (numero < 10)
        ? console.log("unidad: ", numero)
        : (numero < 100)
            ? console.log(`Decena: ${decena}, Unidad: ${unidad}`)  
            :(numero < 1000)
                ? console.log(`Centena: ${centena} Decena: ${decena}, Unidad: ${unidad}`)
                :(numero < 10000)
                    ? console.log(`Unidad de Mil:${unidemil} Centena: ${centena} Decena: ${decena}, Unidad: ${unidad}`)
                    : console.log("se paso de rango numerico");
}

descomponerNumero(1456);

//realiza mal el calculo