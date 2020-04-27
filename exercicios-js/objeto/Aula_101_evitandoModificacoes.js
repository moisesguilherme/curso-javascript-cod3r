// Object.preventExtensions - não consegue adicionar nenhum atributo
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = "Borracha escolar branca"
delete produto.tag
console.log(produto)

// Object.seal -> Vc consegue modificar os valores, mas não adicionar ou deletar
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Seelado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome 
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores consantes
Object.freeze(pessoa)
pessoa.nome = "Moisés"
pessoa.idade = 40
delete pessoa.nome
console.log(pessoa) //continua a mesma coisa, no freeze é como se fosse uma constante, não altera.

