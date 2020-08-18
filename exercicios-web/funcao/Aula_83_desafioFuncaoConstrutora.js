
function Pessoa(nome){
        this.nome = nome
        this.falar = function() { 
            console.log(`Meu nome é ${this.nome}`) 
        } 
}

const p1 = new Pessoa("Moisés")
p1.falar()

// const falar2 = (nome) => { console.log(`Olá ${nome}`) }
// falar2('moises')