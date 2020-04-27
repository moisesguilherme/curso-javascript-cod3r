// par nome/valor  chave/valor    identificador/valor


const saudacao = 'Opa' // contexto léxico 1

function exec(){
    const saudacao = 'Falaaaa' // contexto léxico 2
    return saudacao
}

/*

var a = 'teste'
function pegaA(){
    console.log(a) //pega no contexto a var a
}

pegaA()
*/


// Objetos são grupos aninhados de pares nome/valor
const cliente = {
   nome: 'Pedro',
   idade: 32,
   peso: 90,
   endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
   }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
