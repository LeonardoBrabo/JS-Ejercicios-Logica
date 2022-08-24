

// forma sin recursividad:

/*function rangeOfNumbers(startNum,endNum){
    arr = [];
    for (let i = startNum; i <= endNum; i++){
        
        arr.push(i);
    }
    return arr;
}

console.log(rangeOfNumbers(8,8));

*/

//con recursividad: Me salio!!

function rangeOfNumbers(startNum,endNum){
    if (endNum <= startNum){
        return [startNum];
    }else{
        const arr = rangeOfNumbers(startNum,endNum - 1);
        arr.push(endNum);
        return arr;
    }
}
console.log(rangeOfNumbers(1,6));

//el unico problema es como seria para que retorne un arreglo en blanco cuando es menor el numero final.

//OTRAS SOLUCIONES:
//https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-use-recursion-to-create-a-range-of-numbers/301180