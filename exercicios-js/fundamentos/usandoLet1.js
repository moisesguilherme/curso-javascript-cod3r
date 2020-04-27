//var numero = 1  // variáveis definidas com var tem escopo global e de função, variáveis definidas com let tem escopo global, função e de BLOCO
let numero = 1
{
    let numero = 2 // let tem escopo d bloco
    //let numero2 = 2 
    console.log('dentro =', numero)

}

console.log('fora =', numero)
//Resultado
//dentro = 2
//fora = 1
