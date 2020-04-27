class Pessoa {
    constructor(nome) {
        this.nome = nome

    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()

/// no browser
// document.getElementsByTagName('body')[0].onclick = p1.falar
// por ter o this, vai dar undefined
// não acontece isso na função arrow

const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('João')
p2.falar()



