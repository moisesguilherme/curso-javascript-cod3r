//teste template string

var nome = "Moisés"
var frase = `Olá! O meu nome é ${nome}`
console.log(frase)

//Criando objeto que retorna com o template string
//const objPessoa = {nome:'Ana', falar:function(){return 'Olá eu sou a' + this.nome}} //passar para template string
const objPessoa = {nome:'Ana', falar:function(){return `Olá eu sou a ${this.nome}`}}
console.log(objPessoa.falar())