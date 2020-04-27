let dog = {
    sound: 'woof',
    talk: function() {
        console.log("Ele fala: " + this.sound)
    }
}

dog.talk() //"woof"
let talkFunction = dog.talk
let boundFunction = talkFunction.bind(dog);
talkFunction() // undefined
boundFunction();