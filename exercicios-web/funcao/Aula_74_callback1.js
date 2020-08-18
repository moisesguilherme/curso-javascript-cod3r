const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir) //callback, chama uma função e ela será disparada quando um evento acontecer
fabricantes.forEach( function(fabricante){
    console.log(fabricante)
})
//Substituir para arrow function
fabricantes.forEach( fabricante => console.log(fabricante))
fabricantes.forEach( (fabricante, index) => console.log(fabricante, index))
