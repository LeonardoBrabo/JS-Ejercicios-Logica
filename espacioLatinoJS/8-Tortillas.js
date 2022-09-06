/*
Una tortilla de patatas lleva 200 gramos de patatas por persona. Por cada kilo de patatas se necesitan 5 huevos y 300 gramos de cebolla. Escribe un script que dado el número de comensales calcule las cantidades de ingredientes necesarias
*/

const tortillasPorPersona = (cantPersonas= undefined) => {
    let patatas = (0.2 * cantPersonas).toFixed(2) ;
    let huevos = 1 * cantPersonas;
    let cebolla = (0.06 * cantPersonas).toFixed(3)  ;

    return console.log(`necesita ${patatas}kg de patatas, ${huevos} huevos y ${cebolla}gr de cebolla`);
   

}
tortillasPorPersona(5);