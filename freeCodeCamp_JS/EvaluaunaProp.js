let users = {
    Alan: {
      age: 27,
      online: true
    },
    Jeff: {
      age: 32,
      online: true
    },
    Sarah: {
      age: 48,
      online: true
    },
    Ryan: {
      age: 19,
      online: true
    }
  };
  
  function isEveryoneHere(userObj) {
    // Cambia solo el código debajo de esta línea
    /*
    const permitidos = ["Alan","Jeff","Sarah","Ryan"];
    let result = true;
    for (let prop in userObj){
      if(!(prop in permitidos)){
        result = false
      }
    }
    return result;
    */
   /*
    let cont = 0;
    if(userObj.hasOwnProperty('Alan')) cont++;
    if(userObj.hasOwnProperty('Jeff')) cont++;
    if(userObj.hasOwnProperty('Sarah')) cont++;
    if(userObj.hasOwnProperty('Ryan')) cont++;
    
    if(cont >= 4){
      return true
    }else{
      return false
    }
    */
    
    if("Alan" in userObj &&
        "Jeff" in userObj &&
        "Sarah" in userObj &&
        "Ryan" in userObj){
            return true;
        }else{
            return false;
        }
    // Cambia solo el código encima de esta línea
  }
  
  console.log(isEveryoneHere(users));