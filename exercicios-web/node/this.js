console.log(this === global) //False, ele aponta para module.exports
console.log(this === module) //nao this e um objeto referencia de module.exports

console.log(this === module.exports) //true
console.log(this === exports) //true pq referencia ao mesmo objeto == module.exports

function logThis(){
    console.log('Dentro de uma funcao');
    console.log(this === exports) //Dentro de uma funcao o this nao aponta para exports
    console.log(this === module.exports) // tb nao
    console.log(this === global); //true

    this.perigo = ' ...' //vc esta coloca isso dentro do escopo global
}

logThis()
console.log(global.perigo)