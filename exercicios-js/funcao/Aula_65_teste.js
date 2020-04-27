function juntaCaracter(){
    let str = ''
    for(i in arguments){
        str += arguments[i]
    }
    return str
}

console.log(juntaCaracter('O','b','a','!'))



function existeOSegundoArgumento(){
    return a=1 in arguments ? true : false
}

console.log(existeOSegundoArgumento("A")) //false