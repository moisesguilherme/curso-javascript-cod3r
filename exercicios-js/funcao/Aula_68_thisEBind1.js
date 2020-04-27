const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar();
const falar = pessoa.falar
falar() //undefined Conflito entre paradigamas: funcional e OO.

const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa()

const falar2 = pessoa.falar
falar2() //undefined