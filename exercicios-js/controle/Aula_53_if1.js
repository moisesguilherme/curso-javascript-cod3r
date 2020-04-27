function soBoaNoticia( nota ) {
    if( nota >= 7 ){
        console.log('Aprovado com ' + nota)
    }

}

soBoaNoticia(8.1)
soBoaNoticia(6.1)


function seForVerdadeEuFalo(valor) {
    if(valor) {
        console.log('É verdade... ' +  valor + ' tipo ' + typeof valor)
    }else{
        console.log("É falso... " + valor + ' tipo ' + typeof valor)
    }
}

seForVerdadeEuFalo() //undefined é falso
seForVerdadeEuFalo(null) //é falso
seForVerdadeEuFalo(undefined) //é falso
seForVerdadeEuFalo(NaN) //é falso
seForVerdadeEuFalo('') //é falso
seForVerdadeEuFalo(0) //é falso
seForVerdadeEuFalo(-1) //é verdade
seForVerdadeEuFalo(' ') //é verdade
seForVerdadeEuFalo('?') //é verdade
seForVerdadeEuFalo([]) //é verdade
seForVerdadeEuFalo([1, 2])
seForVerdadeEuFalo({})

