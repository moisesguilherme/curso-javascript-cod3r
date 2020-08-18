const firstName = "Moises";
const lastName = "Freitas"

const val = 42

const arr = [
    'string',
    42,
    function() { console.log('hi')},
]

arr[2]()

for (let i=0; i < arr.length; i++){
    console.log(arr[i])
}   

const x = 42
const explicit = String(x); // explicit === '42'
const implicit = x + ""; // implicit === '42'

console.log(x, explicit === '42', implicit === '42')

//types
//const x = 42
console.log(typeof x)

console.log(typeof null) //object

//falsos
console.log('1', undefined ? 'Verdadeiro' : 'Falso') //Falso
console.log('2', null ? 'Verdadeiro' : 'Falso') //Falso
console.log('3', false ? 'Verdadeiro' : 'Falso') //Falso
console.log('4', NaN ? 'Verdadeiro' : 'Falso') //Falso
console.log('5', +0 ? 'Verdadeiro' : 'Falso') //Falso
console.log('6', -0 ? 'Verdadeiro' : 'Falso' ) //Falso
console.log('7', '' ? 'Verdadeiro' : 'Falso' ) //Falso

//Verdadeiros
console.log('1', {} ? 'Verdadeiro' : 'Falso' ) //verdadeiro
console.log('2', [] ? 'Verdadeiro' : 'Falso' ) //verdadeiro

/*
const verdadeiroOuFalso = (param) => {return param ? 'Verdadeiro' : 'Falso'}
console.log(verdadeiroOuFalso(null))
*/

//se não é valor primitivo é object
// Objects, Arrays, Functions, Objects, eu coloquei Objects 2 vezes aqui?, não eu coloquei 4 vezes.
var meuObj = {}
var meuArray = ['elemento1','elemeento2']
var minhaFuncao = function(){return 'Olá'}
console.log(typeof meuObj)
console.log(typeof meuArray)
console.log(typeof minhaFuncao) //function
console.log(minhaFuncao())


//primitives vs. Objects
const o = new Object()
o.firstName = 'Moises'
o.lastName = 'Guilherme'
o.isTeaching = true
o.greet = function() {
    console.log('hi!')
}

const o2 = {}
o2.firstName = 'Moises'
o2['lastName'] = "Guilherme"
const key = 'isTeaching'
o2[key] = true
o2['gree'] = function() {
    console.log('hi!')
}

const o3 = {
    1: 'test',
    firstName: 'Moises',
    lastName: 'Guilherme',
    gree: function(){
        console.log('hi!')
    },
    address: {
        street: 'Main St.',
        number: 123
    }
}

console.log(o3[1])


