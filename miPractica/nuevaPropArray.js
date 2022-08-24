const productos = [
  {
    name: "Product 1",
    price: 1000,
    stock: 10,
  },
  {
    name: "Product 2",
    price: 2000,
    stock: 20,
  },
];

function solution(array) {
  // for(elemento of array){
  //     elemento.taxes = parseInt(elemento.price*0.19)
  // }
  // return console.log(array);

  return array.map((item) => ({
    ...item,
    taxes: Math.trunc(item.price * 0.19),
  }));
}

console.log(solution(productos));
