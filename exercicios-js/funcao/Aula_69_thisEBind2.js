//Dentro de uma função em JS tem outras funções e uma delas é a função bind.
function Pessoa(){
    this.idade = 0 

    const self = this
    setInterval( function(){
        self.idade++
        console.log(self.idade)
    }/*.bind(this)*/, 1000) 
}

new Pessoa      
