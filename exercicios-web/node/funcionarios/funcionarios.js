const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual   
}

axios.get(url).then(response => {
    const funcionarios = response.data

    const resultado = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)
    //console.log(funcionarios.filter(pais).filter(mulher))
    //console.log(resultado)
})






    //const pais = funcionario => funcionario.pais === 'China'
    //const mulher = funcionario => funcionario.genero === 'F'
    
    /*
    let funcionarioComMenorSalario = null

    const menorSalario = (funcionario, index, arr) => {
        
        if( funcionarioComMenorSalario === null ) funcionarioComMenorSalario = arr[0];

        if(funcionario.salario < funcionarioComMenorSalario.salario ){
            
            funcionarioComMenorSalario = funcionario;
        }
    }
*/





