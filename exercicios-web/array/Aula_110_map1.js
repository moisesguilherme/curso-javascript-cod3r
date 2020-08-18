const nums = [1, 2, 3, 4, 5]

// For com propósito
let resultado = nums.map(function(e) {
    return e * 20
})

console.log(resultado, nums)

const soma10 = e => e + 10 //função arrow já tem um return explicito
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)
