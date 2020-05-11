const num = [1000, 20, 30]

const converterEmReais = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

novoNumero = num.map(converterEmReais)

console.log(novoNumero)

//Desafio mostar reais em R$10.000