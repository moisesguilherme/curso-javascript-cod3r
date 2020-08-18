//Usando o operador destructuring
const [a, b, c, d] = [3, 5, 1, 15]
//sintaxe conhecida como infix (infixed operators"—such as the plus sign in 2 + 2.)
const soma = a + b + c + d //24
/*
d++ //operando d e o operador ++ --> operador postfixed --> depois do operando
++d //pré fixado prefix vem antes do operando
op1 + op2 //operando 1 + operando 2 // infixed operador binário
-a // torna negativo, operador unário, opera em cima de um único operando
*/

const subtracao = d - b //10
const multiplicacao = a * b //15
const divisao = d / a //5
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo)


