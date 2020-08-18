//função é o presidente e o vice presidente é o objeto

console.log(typeof Object) //function
console.log(typeof new Object) // object  pode omitir o Object() -> typeof new Object()

const Cliente = function() {}
console.log(typeof Cliente) //function
console.log(typeof new Cliente) //se criar a instancia da função vira objeto

class Produto {} // ES 2015 (ES6)
console.log(typeof Produto) //Sintax sugar atalho de função
console.log(typeof new Produto())

