let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global) //true
comparaComThis(this)  //false --veja que o 'this não é o this'

/*
No console chrome
let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(window) //true
*/

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //false
comparaComThis(obj) //true

let comparaComThisArrow = param => console.log(this === param) //aponta para o módulo no node
comparaComThisArrow(global) //false
comparaComThisArrow(module.exports) //true
comparaComThisArrow(this) //true

comparaComThisArrow = comparaComThisArrow.bind(obj) //não muda, mantém, arrow function ganha do bind
comparaComThisArrow(obj) //false
comparaComThisArrow(module.exports) //true

