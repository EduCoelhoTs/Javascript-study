//Um método nada mais é que uma função definida no contexto de um objeto/classe:
//definindo um método em uma classe e em um objeto:

//objeto:

const objeto = {
    nome: 'Pedro',
    metodo: function() {
        console.log(this)
    }
}

objeto.metodo();

//classe:

class Pessoa {
    constructor(nome, idade) { 
        this.nome = nome;
        this.idade = idade;
    }

    metodo() {
        console.log(this)
    }
}

const pessoa = new Pessoa('Pedro', 30);
pessoa.metodo();
console.log(typeof pessoa)