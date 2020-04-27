function exibeMsgErro(erro){
    throw 'Erro 1'
}


function aumentarNome(nome){   
    try{
        return nome.toUpperCase()
    }catch (e){
        exibeMsgErro(e)
    }finally{
        console.log('Essa mensagem sempre será exibida')
    }
}


console.log(aumentarNome(11232))