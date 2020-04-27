let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

//forma mais reduzida, com um único parâmetro
dobro = a => 2 * a // return implícito
console.log(dobro(Math.PI))

let ola = function() {
    return 'Olá'
}
//Uso da função arrow, com a sintaxe mais reduzida
ola = () => 'Olá'
ola = _ => 'Olá' //Aqui tem um parâmentro o _ no caso pode usar ignorando ele.
console.log(ola())

