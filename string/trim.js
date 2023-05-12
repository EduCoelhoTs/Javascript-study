//trim remove espaços vazios no inicio e no final da string:
let texto = '    Aqui tem espaços vazios    ';
console.log(texto.trim());

//utilizando o split e o join para remover todos os espaços:

let novoTexto = texto.trim().split(' ').join('');
console.log(novoTexto);