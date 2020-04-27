const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'

//backsheep ` backship?
const template = `
    Olá
    ${nome}!`  //interpolação

console.log(concatenacao, template) //Olá Rebeca! 
                                          //Olá
                                          //Rebeca!

// expressoes....
console.log(`1 + 1 = ${1+1}`) //1 + 1 = 2

//arrow function
const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)
