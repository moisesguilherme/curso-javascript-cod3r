function exibeValor(valor){
    console.log( `R$ ${valor.toFixed(2).toString().replace('.',',') }` )
}

exibeValor(0.30000000000000004)