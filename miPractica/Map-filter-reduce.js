
//probemos forEach

const usuario1 = {
    nombre:"leonardo",
    edad: 26
}

const usuario2 = {
    nombre: "sabrina",
    edad: 23
}
const usuario3 = {
    nombre: "marcos",
    edad: 16
}

const arr = [usuario1,usuario2,usuario3];

arr.forEach((val,index)=>{
    console.log(`en la posicion ${index} se encuentra el usuario de nombre "${val.nombre}"`)
    
})

console.log("_________________________");


 let arrFilter = arr.filter(item => item.edad > 20);
console.log(arrFilter)

const arrMap = arr.map((item)=> item.nombre += " Hermoso");
console.log(arrMap);

const arrReduce = arr.reduce((sum,actual)=> sum + actual.edad,);
console.log(arrReduce);

arr.forEach(val => {
    if(val.nombre === "sabrina Hermoso"){
        val.nombre = "sabrina Hermosa"
    }
})

console.log(arr)