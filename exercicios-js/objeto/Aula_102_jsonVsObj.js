//interoperabilidadde

const obj = {a: 1, b: 2, c: 3, soma() { return a + b +c  }}
console.log(JSON.stringify(obj)) //gera formato textual -- exclui as funções


//console.log( JSON.parse("{a: 1, b: 2, c: 3}") ) //Erro token
//console.log( JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}" )) //Erro token
console.log( JSON.parse('{ "a": 1, "b": 2, "c": 3}' )) //Precisa ter ""
console.log( JSON.parse('{ "a" : 1.7, "b": "string", "C":true, "d": {}, "e":[] }'))

console.log('teste\'aspa\'') //scape
console.log("teste\"aspa\"")

console.log( JSON.parse('{"objeto": {"chave" : "valor"} }' ))