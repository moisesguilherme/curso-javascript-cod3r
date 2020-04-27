//No console do browser
function f1() { console.log(this == window)}
f1() // true

document.getElementsByTagName('body')[0].onclick = f1

//
function f2() { console.log(this === document) }
f2() // false

const body = document.getElementsByTagName('body')[0]
function f2() { console.log(this === body)}
document.getElementsByTagName('body')[0].onclick = f2

//funcção arrow mais reduzida e o this não varia, associada ao contexto léxico
const f3 = () => console.log(this === window)
f3() //true

document.getElementsByTagName('body')[0].onclick = f3
f3()// true

this === window //tue
