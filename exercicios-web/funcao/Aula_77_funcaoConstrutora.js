function Carro(velocidadeMaxima = 200, delta = 5){
    // atributo privado
    let velocidadeAtual = 0

    // metodo público uso do this, informa que é algo público
    this.acelerar = function() {
        if(velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new Carro //nao usa parênteses pois não está passando nenhum parâmetro
//pode chamar assim tb: 
//const uno = new Carro()
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350, 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro) //function
console.log(typeof ferrari) //object