//Contexto Léxico

const valor = 'Global'

function minhaFuncao(){
    console.log(valor) //A função em js quando for escrita ela carrega o contexto q ela foi escrita.
}

function exec(){
    const valor = 'Local'
    minhaFuncao()
}

 exec()
