//Função Anônima

const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(3, 4)
imprimirResultado(3, 4, soma)
imprimirResultado(3, 4, function (x,y){
    return x - y
})

imprimirResultado(3, 4, (x,y) => x * y) //Quanto tem  uma arrow function tem de fato uma função anônima

const pessoa = {
    falar: function() {
        console.log('Opa')
    },
    falar2(){
        console.log('teste')
    }
}

pessoa.falar2()