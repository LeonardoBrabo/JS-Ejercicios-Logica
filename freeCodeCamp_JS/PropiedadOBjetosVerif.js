function checkObj(obj, checkProp) {
    // Cambia solo el código debajo de esta línea
   const valor = obj.hasOwnProperty(checkProp);
   if(valor){
     return obj[checkProp];
   }else{
     return "Not Found";
   }
    
    // Cambia solo el código encima de esta línea
  }

  console.log(checkObj({gift: "pony", pet: "kitten", bed: "sleigh"}, "bed"));