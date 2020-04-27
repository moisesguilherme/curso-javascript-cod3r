function getPreco(imposto = 0, moeda = 'R$'){
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco
}

global.preco = 20
global.desc = 0.1
console.log(getPreco()) //Acessa global

console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20}
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$')) //carro é o contexto, o resto é parâmetros
//console.log(getPreco.apply(carro, [0.17, '$'])) //A diferença entre o call e o aplly, é que no apply vc passar por array os parâmetros []
console.log(getPreco.apply(global, [0.17, '$'])) 