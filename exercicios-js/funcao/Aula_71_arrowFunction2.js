function pessoa() {
    this.idade = 0
    //usando função arrow o this não vai variar
    setInterval( () => {
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa
