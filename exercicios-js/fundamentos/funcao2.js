// Armazenando uma funcão em uma variável

const imprimirSoma = function (a, b) { //função anônima
    console.log(a + b)

}  

imprimirSoma(2, 3)

// Armazendo uma funcao arrow em uma variável
const soma = (a, b) => {
    return a + b    
}

console.log(soma(2, 3))

// retorno implícito
const subtracao = (a, b) => a - b
console.log(subtracao(2, 3))


/*const teste = () => 'retorna qualquer coisa'
const teste2 = function(){return 'retorna qualquer coisa 2'}
console.log(teste())
console.log(teste2())
*/

// com um único parâmetro
const imprimir2 = a => console.log(a)
imprimir2('retorna qualquer coisa 3')


