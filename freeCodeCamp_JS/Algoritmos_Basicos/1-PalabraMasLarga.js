function findLongestWordLength(str) {
    const palabras = str.trim().split(" ") 
    let mayor = palabras[0];
    for(let palabra of palabras){
      if(palabra.length > mayor.length){
          mayor = palabra;
        }
    }
    return console.log(mayor.length)
  
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");


/*


  function findLongestWordLength(str) {
  let orden = str.split(' ').map((a) => a.length)
  let largo = Math.max(...orden)
  return largo
};
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));

  
*/