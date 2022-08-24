    function sumaDeLetrasPalabrasCortas(arr){
        let sum = 0;
        for( let elemento of arr){
            if(elemento.length <= 6){
                sum += elemento.length
            }
        }
        return sum;
    }