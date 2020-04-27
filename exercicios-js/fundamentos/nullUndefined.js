//ver arquivo aula_26_Null&Undefined.txt

let valor // não inicializada
console.log(valor) //undefined
//console.log(valor2) //is not defined

valor = null // ausência de valor
console.log(valor)
//console.log(valor.toString()) //Erro! You cannot read property 'toString' of null

const produto = {}
console.log(produto.preco) //undefined
//console.log(produto.preco.a) //Error cannot read property 'a' of undefined
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evite atribuir undefined

console.log(!!produto.preco)
// delete produto.preco  //tirar um atributo
console.log(produto)

produto.preco = null // sem preço
console.log(!!produto.preco)
console.log(produto)
