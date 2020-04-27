function getInteirosAleatorios(max, min){
    const valor = Math.random() * (max - min) + min
    return Math.floor( valor )
}



let opcao = 0;

do {
    opcao =  getInteirosAleatorios(-1,10)
    console.log(`A opção escolhida foir ${opcao}`)
}while(opcao != -1)

console.log("Até a próxima")

