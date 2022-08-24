
//devuelve un arreglo de 1 a n
function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5));

//cuenta regresiva devuelve un arreglo de n a 1:

  /*
  function countdown(n){
  if(n < 1){
    return [];
  }else{
    const myArray = countdown(n-1);
    myArray.unshift(n);
    return myArray;
  }
  
}
console.log(countdown(5));
  
  */
  