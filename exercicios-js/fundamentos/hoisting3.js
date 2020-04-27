function getValor(){
    function retornarValor(){
        return 1;
    }

    return retornaValor();
    function  retornaValor() {
        return 2;
    }
}

var resultado = getValor();
console.log(resultado)