// pessoa -> 123 -> {...} -- 123 - é o endereço de memória
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'

console.log(pessoa)
// pessoa -> 456 -> {...} -- tentar acessar outro endereço de memória
//pessoa = { nome: 'Ana'} // Assignment to constant variable.

 Object.freeze(pessoa)

 pessoa.nome = 'Maria'
 pessoa.end = 'Rua ABC'
delete pessoa.nome

 console.log(pessoa.nome)
 console.log(pessoa)

 const pessoaConstante = Object.freeze({nome: 'Joao'})
 pessoaConstante.nome = 'Maria'
 console.log(pessoaConstante)


