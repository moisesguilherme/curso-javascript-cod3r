console.log(soma(3, 4)) // essa função já vai ser carrega previamente. Essa é a vantagem de unsar o function declaration
//console.log(sub(3, 4)) //erro: cannot access 'sib' before initialization

//function declaration
function soma(x, y) {
    return x + y 
} 
 
// function expression
const sub = function(x, y){
    return x - y
}

console.log(sub(3,4))

// named function expression pode ter algum tipo de benefício na hora de debugar
const mult = function mult(x, y) {
    return x * y
}

console.log(mult(3, 4))



