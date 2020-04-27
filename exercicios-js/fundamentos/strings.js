const escola = "Cod3r"

console.log(escola.charAt(4))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //51 tabela 

console.log(escola.indexOf('3'))

console.log(escola.substring(1)) //ode3r
console.log(escola.substring(0, 3)) //sem o indice 3

console.log('Escola '.concat(escola).concat("!"))
console.log('Escola ' + escola + "!'")
console.log(escola.replace(3, 'e')) //Coder
console.log(escola.replace(/\d/, 'e')) //RegEx -- substitui o digito por e - Cod3r -> Coder
console.log(escola.replace(/\w/g, 'e')) //RegEx -- g = glocal, substitui todas as letras por e Cod3r -> eeeee 
 
console.log('Ana,Maria,Pedro'.split(',')) //gera um array
console.log('Ana,Maria,Pedro'.split(/,/)) //RegEx --

