function rand([min = 0, max = 1000]){
    if( min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) //43
console.log(rand([992])) //993
console.log(rand([, 10])) //1
console.log(rand([])) //de 0 até 1000
console.log(rand()) //Erro function rand([min = 0, max = 1000]){ --> undefined is not iterable (cannot read property Symbol(Symbol.iterator))
 