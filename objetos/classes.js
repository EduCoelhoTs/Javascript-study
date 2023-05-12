class Animal {
    constructor(especie, tamanho) {
        this.especie = especie;
        this.tamanho = tamanho;
    }

    andar() {
        console.log(this)
    }
}

class Cachorro extends Animal {
    constructor(raca, especie, size) {
        super(especie, size);
        this.raca = raca;
    }
}

let cachorrinho = new Cachorro('Poodle', 'Cachorro', 'Grande');
cachorrinho.andar();

let cachorrinho2 = new Cachorro('Poodle', 'Cachorro', 'Pequeno');

//adicionando propriedades a todas as instancias da classe e nao apenas a uma:
Cachorro.prototype.cor = null;

console.log(cachorrinho)