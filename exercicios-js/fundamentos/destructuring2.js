const [a] = [10] //usando o destructuring
console.log(a) //10

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]
console.log(n1, n3, n5, n6) //10 9 undefined 0

const [, [, nota]] = [[, 8, 8], [9, 6, 8]]
console.log(nota) //Qual o valor? //6


//teste
const [nome, sobrenome, telefone] = ['Moisés','Guilherme','99633-1303']
console.log(nome, sobrenome, telefone)