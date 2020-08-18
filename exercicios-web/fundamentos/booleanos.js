let isAtivo = false

console.log(isAtivo)

isAtivo = true  //let padrão para alterar a variável
console.log(isAtivo)


isAtivo = 1
//console.log(!!isAtivo)
//console.log(!!true)
console.log(!true)


console.log('os verdadeiros.....')
console.log(!!3)
console.log(!!-1) //todos os numeros são verdadeiros tirando o zero
console.log(!!' ') //espaços é verdadeiro
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true)) // se colocar zero da false, pega o resultado

console.log('\nos falsos....')
console.log(!!0)
console.log(!!'')
let teste = ''
console.log(!!teste)
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('\npara finalizar.....')
console.log(!!('' || null || 0 || ' ')) //pq a ultima é verdadeira
console.log(('' || null || 0 || 'epa')) //retorna o único valor verdadeiro ou o primeiro valor verdadeiro
console.log(('' || null || 0 || '' || 123))

let nome = ''
console.log(nome || 'Desconhecido')

