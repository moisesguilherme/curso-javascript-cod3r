//Função em JS é First-class object (citizens)
//Higher-order function
//Quando a linguagem trata a função como um dado. Pode armazenar em uma variável. Passar como parâmetro ou retornar uma função

//JavaScript é multi-paradigma
//consegue implementar deste procedural, OO e funcional.

//Criar função de forma literal.
function fun1(){
}
//O retorno de uma função em javascript é opcional.
//Toda função em JS retornar pelo menos um valor undefined

// Armazernar em uma variável, aqui  a função é anônima.
const fun2 = function() {  } 

// Armazenar em uma variável com parâmetros.
const fun3 = function(param1, param2) { return param1 + param2}
console.log(fun3(2,2))

// Armazenar em um array
const array = [function(a,b) {return a+b}, fun1, fun2]
console.log(array[0](1,2))

// Armazenar função dentro de atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa'}
console.log(obj.falar())

// Passar função como parâmetro
function run(fun){
    fun() //Invoca a função.
}

run(function() {console.log('Executando....')})

//Uma função pode retornar/conter outra função
function soma(a, b){
    return function(c) {
        console.log(a + b + c )
    }
}

soma(2,3)(4)


const cincoMais = soma(2,3)
cincoMais(5)

