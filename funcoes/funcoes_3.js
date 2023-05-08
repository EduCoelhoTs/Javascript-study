//aplicando currying:

function recebefuncao(funcao) {
    return function (a) {
        return function (b) {
            return funcao(a, b);
        }
    }
}

const soma = (a,b) => a + b;

console.log(recebefuncao(soma)(2)(3));

const data = soma(1, 2);
console.log(data);

const sub = () => 2 - 1;
const result = sub();
console.log(result);