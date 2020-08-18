//Usando o destructuring retire do objeto itemProduto uma varivável chamada produto com nome do produto
const itemProduto = {
    produto: 'Coca-Cola',
    preco: 2.33
}

const {produto} = itemProduto
console.log(produto)

//Exemplo 2 retire 2 variáveis, produto e preço, identificando o nome da variável para nomeProduto
const {produto : nomeProduto, preco} = itemProduto
console.log(nomeProduto, preco)


//Setando o valor da variável
const {qtdEstoque, possuiNoEstoque = true} = itemProduto
console.log(qtdEstoque, possuiNoEstoque) //undefined true


const pessoa = {
    nome:'Ana',
    idade: 18,
    endereco : {
        rua:"Santos Dummont",
        numero:167
    }
}

const {nome,idade, endereco: {rua : nomeRua, numero}} = pessoa
console.log('Nome: ' + nome, 'idade ' + idade, 'Endereço: ' + nomeRua, numero)
//Nome: Ana idade 18 Endereço: Santos Dummont 167

//Vai gerar erro
//const {conta:{ag, num}} = pessoa
//console.log(ag, num)