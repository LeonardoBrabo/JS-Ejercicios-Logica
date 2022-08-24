
function largestOfFour(arr) {
    const arrFinal = [];
    for(let subArr of arr){
      arrFinal.push(Math.max(...subArr)) 
    }
    return console.log(arrFinal)
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



