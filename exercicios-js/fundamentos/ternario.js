const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))

//Operador ternário
//operacaologica ? 'Verdadeiro' : 'False'

console.log(1 > 1 ? "Sim" : 'Não') //Nao


//Arrow function
const status = param1 => 'Olá isso é uma ' + param1
console.log(status('bixona'))

//Outro exemplo de arrow function
const status2 = param1 => {
    return param1 + " que isso!"     
}

console.log(status2('Opa bixo'))

const status3 = (param1, param2) => {
    return param1 + ' ' + param2
}

console.log(status3('Zueeira', 'Never ends!'))