const prompt = require('prompt-sync')();

const precioTotal = (precio=undefined)=>{
    const iva = 1.21;
    return console.info({
        precio: precio,
        iva: "21%",
        total: `$ ${(Math.floor(precio*iva)).toFixed(2)}`,
    })
}

let precioIngresado = prompt("Ingrese un precio: ");

precioTotal(precioIngresado);

//-------------
