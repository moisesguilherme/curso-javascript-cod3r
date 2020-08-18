// node faz cache
// quando o objeto já foi criado, ele retorna sempre a mesma instancia.
//singleton
module.exports = {
    valor: 1,
    inc() {
        this.valor++
    }
}

