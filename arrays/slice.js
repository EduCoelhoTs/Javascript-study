//extrai uma seção do array e retorna um novo array:

const array = [1, 2, 3, 4, 5];
const novoArray = array.slice(1, 2); //inicia no indice 1 e extrai todos os elementos até o indice 2:
console.log(novoArray); //[2] //indice 1 inclui, indice 2 nao inclui;