const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Cambia solo el código debajo de esta línea
const atrapa = [];
for(let i =0 ; i < arr.length; i++){
  let actual = arr[i];
  for(let j = 0; j < arr.length; j++){
      let comparado = arr[j+1]
    if(actual + comparado === 10){
        atrapa.push(arr.splice(i,1)) 
       let indiceComparado = arr.indexOf(comparado);
       atrapa.push(arr.splice(indiceComparado,1));
       
    }
  }
}
// Cambia solo el código encima de esta línea
console.log(arr);
console.log(atrapa);
