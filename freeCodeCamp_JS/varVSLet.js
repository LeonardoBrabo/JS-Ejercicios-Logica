
/*
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
*/

let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo());
//console.log(i);  //da error porque no está definida

function checkScope() {
    let i = 'function scope';   //tiene ambito del bloque de la funcion
    if (true) {
      let i = 'block scope';        //tiene ambito del bloque del if.
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }