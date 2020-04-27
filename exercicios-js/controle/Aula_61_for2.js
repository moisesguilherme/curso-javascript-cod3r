//Pegar os valores de um array através do indice.
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let i in notas) {
    console.log(i, notas[i])
}

//Pegar os atributos de um objeto
const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silvia',
    idade:29,
    preso:69
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
//let atributo, se não usar o let, vai mostrar fora do escopo