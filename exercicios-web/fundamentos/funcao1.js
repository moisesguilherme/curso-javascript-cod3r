// Função é o verbo, ela executa algo

//Função sem retorn
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //NaN
imprimirSoma(2, 10, 4, 5, 6, 7, 8) //Imprime 5 e Ignora o resto
imprimirSoma() //NaN


// Funcao copm retonr
function soma(a , b = 1){ //novidade no ecmascript 2015
    return a + b
}

console.log(soma(2,3))
console.log(soma(2))
console.log(soma()) // NaN se o a = undefined