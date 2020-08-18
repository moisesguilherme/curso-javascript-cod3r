//Função Factory #01

// const prod1 = {
//     nome: '...',
//     preco: 45
// }

// const prod2 = {
//     nome: '...',
//     preco: 2222
// }

// Factory simples
// Uma função factory é uma função que retorna um objeto
function criarPessoa() {
    return {
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())
