function fun1() {}
console.log(fun1());

const fun2 = function() {}
console.log(fun2())


const array = [function(a, b){ return a + b}, fun1, fun2]
console.log(array[0](1, 2))

const obj = {}
obj.falar  = function(){ return 'opa'}
console.log(obj.falar())

function run(fun){
    if( typeof(fun) == 'function'){
        console.log("Sim é uma função")
         fun();
    }else{
        console.log("Não é uma função")
    }

}

run( function(){console.log("oi!")});
run( 'teste');


function soma(a, b){
    return function(c) { 
        return a + b +c
    } 
}

console.log(soma(1,2)(3))


function juntaNome(primeiro, segundo){
    return function(sobrenome){
        console.log( "Olá, " , primeiro , segundo, sobrenome)
    }
}

juntaNome('Moisés','Guilherme')('Paschoalick')