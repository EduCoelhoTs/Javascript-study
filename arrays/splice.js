//remove elementos de um array e (opcionalmente) o substitui, e retorna os itens que foram removidos do array.
// splice(index, quantidade de itens, elemento);

const array = [1, 2, 3, 4, 5];
array.splice(1, 2, 'a', 'b'); // a partir do index 1, vou remover 2 elemento e adicionar 'a' e 'b'. lembrando que a substituição
// é opcional:

console.log(array);