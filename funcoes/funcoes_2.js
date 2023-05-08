//passando uma funcao como parametro:

function fazOperacao(valor1, valor2, funcao) {
    return funcao(valor1, valor2);
}

soma = (a, b) => a + b;

console.log(fazOperacao(2, 3, soma));