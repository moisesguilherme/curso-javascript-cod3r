//console.log('a =', a)

//var a =2 //istada jogada para cima
//console.log('a =',a)

//Código que ele faria:
//var a
//console.log('a = ', a)
//a = 2
//console.log('a = ', a)

//Dentro da função o efeito é o mesmo
/*
function teste(){
    console.log('a =', a)
    var a = 2
    console.log('a =', a)
}

teste()
//console.log('a =', a) //Erro fora da função
*/



console.log('a =', a)
var a = 2
console.log('a =', a)

console.log('b =', b) //Erro Cannot access 'b' before initialization
let b = 2 //O efeito de instamento não ocorre com variáveis let
console.log('b =', b) 