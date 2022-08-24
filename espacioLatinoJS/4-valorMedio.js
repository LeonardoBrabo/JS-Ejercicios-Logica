const prompt = require('prompt-sync')();

const valorMedio = (cantidadValores)=>{
        let total = 0;
        for(let i = 0; i < cantidadValores; i++){
            let valor = parseFloat(prompt(`Ingrese el valor n°${i+1}: `));
            total += valor;
            console.log(total)
        }
    let prom = Math.round(total/cantidadValores)    
    return console.log(`El valor medio es: ${prom}`)
}

valorMedio(3);