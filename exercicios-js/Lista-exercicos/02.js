function triangulo(tamanho1, tamanho2, tamanho3){

    // Equilátero
    if(tamanho1 == tamanho2 && tamanho2 == tamanho3 && tamanho1 == tamanho3){
        console.log('Triangulo Equilátero')
    }

    //Isóceles
    if( (tamanho1 == tamanho2 && tamanho2 != tamanho3 ) || 
        (tamanho2 == tamanho3 && tamanho1 != tamanho2)  ||
        (tamanho3 == tamanho1 && tamanho2 != tamanho1)    
        ){
        console.log('Triangulo Isósceles')
    }

    //Escaleno
    if( tamanho1 != tamanho2 && tamanho1 != tamanho3 && tamanho2 != tamanho3){
        console.log("Triângulo Escaleno")
    }
}

triangulo(1, 2, 3)
