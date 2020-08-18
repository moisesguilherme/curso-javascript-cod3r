
function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
} 

// meuProduto = criarProduto('Coca-Cola', 100)
// console.log(meuProduto.nomeProduto)

console.log(criarProduto('Notebook', 2199.49))
console.log(criarProduto('iPad', 1999.49))
