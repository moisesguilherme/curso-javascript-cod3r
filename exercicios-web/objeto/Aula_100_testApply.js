// Oq o apply faz.
const func1 = function(nome){
    console.log(`Olá ${nome}`)
}

const obj1 = {
    nome: "Patrícia"
}
func1.apply(obj1, ['Moises'])

// Exemplo w3s
// https://www.w3schools.com/js/js_function_apply.asp

const person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}

var person1 = {
    firstName: "Mary",
    lastName: "Doe"
}
console.log( person.fullName.apply(person1) );

//Exemplo 2
var personObj = {
    fullName: function(city, country) {
        return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

var person1 = {
    firstName: "John",
    lastName: "Doe"
}
console.log( personObj.fullName.apply(person1, ["Oslo", "Norway"]) );


///Compared with the call() method:
var personObj2 = {
    fullName: function(city, country) {
        return this.firstName + " "  + this.lastName + "," + city + "," + country;
    }
}

var person1 = {
    firstName:"Zé",
    lastName:"Pequeno"
}
console.log( personObj2.fullName.call(person1, "Rio", "Brazil") )