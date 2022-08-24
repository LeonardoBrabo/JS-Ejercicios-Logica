const Obj1 = {};
const llenardorDeObjetos = (nombreObjeto,propiedad,valor)=>{
    nombreObjeto[propiedad] = valor;
}

console.log(Obj1)
llenardorDeObjetos(Obj1,"nombre","Leonardo")
console.log(Obj1)
llenardorDeObjetos(Obj1,"edad",26)
console.log(Obj1)