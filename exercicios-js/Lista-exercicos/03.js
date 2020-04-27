function expoente(base, expoente){
    
    if(expoente == 0) return 0
    let n=base

    //1^3 1*1*3
    for(i=1;i<expoente;i++){
        console.log(n)
        n = n*base
    }
    console.log('----')
    return n
    
}

console.log(expoente(2,8))