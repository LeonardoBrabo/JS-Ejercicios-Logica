const personas = [
    {
        name: "leonardo",
        lastName: "Brabo",
        age: 26,

    },

    {
        name: "Sabrina",
        lastName: "Lopez",
        age: 23,

    },

    {
        name: "Sofia",
        lastName: "Martinez",
        age: 23,

    },
];

function solution(array){
    const newArray = [];
    array.forEach(item =>{
        newArray.push(item.name)
    })
    return console.log(newArray)
}

solution(personas);
