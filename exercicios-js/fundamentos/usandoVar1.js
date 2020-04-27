{ 
    { 
        { 
            { 
                var sera = 'Será??? ' 
                console.log(sera) //Escopo
            } 
        } 
    } 
}
console.log(sera) //variável sera é visível em todo código


function teste() {
    var local = 123
    console.log(local) //está dentro do escopo da função
}

teste()
console.log(local) //Erro local is not defined

// var variáveis tem 2 escopos possíveis
// ou ele é global ou no escopo de função

// Parte da aula no terminal.
// Escopo
// var a = 123
// window
// window.avar a = 'teste'
// window.a
// 'teste'



