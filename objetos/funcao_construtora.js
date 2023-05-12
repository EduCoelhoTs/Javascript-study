//para especificar um tipo de objeto, podemos utilizar uma função construtora que especifique
//seus atributos e método. ex:

function Carro(marca, modelo, ano, dono) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.dono = dono;
}

//passando um objeto como parametro para um objeto:
function Pessoa(nome, idade, genero) {
    this.nome = nome;
    this.idade = idade;
    this.genero = genero;
} 

let pedro = new Pessoa('Pedro', 30, 'Masculino');
let carro = new Carro('Fiat', 'Palio', 2018, pedro);

console.log(carro);

//Também podemos definir um objeto, passando seu prototipo, sem usar uma função construtora, usando o metodo:
let carro2 = Object.create(Carro);
console.log(carro2);

//Herança
// Todos os objetos em JavaScript herdam de pelo menos um outro objeto. O objeto "pai" é conhecido como o protótipo, e as propriedades herdadas podem ser encontradas no objeto prototype do construtor
