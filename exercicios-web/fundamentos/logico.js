/// ver operadoresLogicos.txt

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 //| pipe comparação bitwise
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //operardor unário

    /*
    return { 
        comprarSorvete: comprarSorvete, 
        comprarTv50: comprarTv50, 
        comprarTv32: comprarTv32, 
        manterSaudavel: manterSaudavel 
    }
    */

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel } /// quando omite a chave, exemplo {sorver:comprarSorvete}
}

console.log(compras(true, true)) /*{
    comprarSorvete: true,
    comprarTv50: true,
    comprarTv32: false,
    manterSaudavel: false
  } */