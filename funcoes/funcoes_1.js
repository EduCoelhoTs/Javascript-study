//observando o hoisting:
console.log(soma(2, 3));
// console.log(sub(2, 3)); //se chamarmos sub antes de sua declaração, vai quebrar, pq ela é uma funcion expression e deve ser
//declarada antes de ser chamada.
// console.log(mult(2, 3)); //o mesmo ocorre para a arrow funcion;


//funcion declaration:
function soma(a, b) {
    return a + b;
}

//function expression:

const sub = function (a, b) {
    return a - b;
}

console.log(sub(2, 3)) //chamando aqui vai funcionar...

//arrow function:
const mult = (a, b) => {
    return a * b;
}

console.log(mult(2, 3)) //chamando aqui vai funcionar...
