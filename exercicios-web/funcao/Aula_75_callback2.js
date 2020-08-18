const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

const notasBaixas1 = []
for(let i in notas){
    if( notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

// Com callback
const notasBaixa2 = notas.filter(function (nota) {
    return nota < 7
}) 
//o resultado da função callback for verdadeiro ou falso. Se for verdadeiro vai retornar o elemento no array de resposta;
console.log(notasBaixa2)
//usando arrow function
const notasBaixa3 = notas.filter(nota => nota < 7)
console.log(notasBaixa3)


//teste
const nomes = ['moises', 'guilherme', 'maria', 'claudia', 'moises']
const nomes1 = nomes.filter( nome => nome == 'moises')
console.log(nomes1)