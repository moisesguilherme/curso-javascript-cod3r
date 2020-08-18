/* teste
const a = {min: 10, max: 2000}
const {min=0, max = 1000} = a
console.log(min,max)
*/

/*
function rand({ min = 0, max = 1000 } = {min:0, max:10}) { //Setando valores padrão
}*/

function rand({ min = 0, max = 1000 }) { //usando operador destructuring
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
//console.log((Math.random() * (10 - 5)) + 5)
const obj = { max: 50, min: 40}
//console.log(rand(obj)) //44
//console.log(rand({ min: 955})) //990
console.log(rand({})) //De 0 a 1000 //Passando um objeto vazio
//console.log(rand()) //Erro Cannot destructure property `min` of 'undefined' or 'null'.

