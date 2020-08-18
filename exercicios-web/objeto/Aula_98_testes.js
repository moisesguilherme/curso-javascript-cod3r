//criando um objeto e executando ele
(function MeuObjeto() { console.log('olá')})()

function myObj(){}
myObj.prototype.falar = function(){return 'Hello'}
myObj.prototype.nome = "Moisés"

const obj1 = new myObj
console.log(obj1.nome, obj1.falar())

console.log( (new myObj).falar())

