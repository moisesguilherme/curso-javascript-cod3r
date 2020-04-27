let a = 3
global.b = 123 //Global é equivalente ao window
this.c = 456
this.d = 'teste'

console.log(a)
console.log(global.b)
console.log(this.c)  //456
console.log(module.exports.c) //456
console.log(module.exports == this) //true
console.log(module.exports)

//module.exports = {e:456, f:false, g:teste}

abc = 3
console.log(global.abc)