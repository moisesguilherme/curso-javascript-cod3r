//Observe a nova forma de criar um objeto, passando seus valores.
const a = 1
const b = 2
const c = 3

const obj1 = { a: a, b: c, c: c} // Não precia mais dessa duplicidade
const obj2 = { a, b, c}
console.log(obj1, obj2)

const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr
console.log(obj3)

//Notaação criar um atributo dinâmico no objeto, com a notação []
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

// Observe que na nova atualização do ECMA Escript 2015, vc cria a função na forma abaixo: funcao2
const obj5 = {
    funcao1: function() { //Função anônima
        // ....
    },
    funcao2() {
        // ...
    }
}
//Uma forma mais reduzida. 

console.log(obj5)



