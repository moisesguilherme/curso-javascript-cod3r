import React, { Component } from 'react';

class MegaSena extends Component {

    state = {
        numeros: [],
    }

    sortfunction = (a, b) => {
        return (a-b)
    }
    
    geraNumeroAleatorio = (max, min) => {
        const numero = Math.random() * (max-min) + min;
        return Math.floor(numero);
    }
    
    verificaSeExisteNumero = (num) => {
        let existe = false;
        for(let i=0; i< this.state.numeros.length;i++){
            if( this.state.numeros[i] == num){
                existe = true;
                break;
            }
        }
    
        return existe;
    }


    addNumero = (num) => {
        
        this.state.numeros.push(num)

        this.setState({
            numeros: [...this.state.numeros]
        });

    }

    resetNumeros = () => {
        this.setState({
            numeros: []
        });
    }

    ordenaNumeros = () => {
        this.setState({
            numeros: [...this.state.numeros.sort(this.sortfunction)]
        });
    }

    gerarNumero = (qtd) => { 
        
        this.resetNumeros();        

        while(this.state.numeros.length <= 5){
            let novoNumero = this.geraNumeroAleatorio(60,1) 
            if(!this.verificaSeExisteNumero(novoNumero)){
               this.addNumero(novoNumero);           
            }
        }
        
        this.ordenaNumeros()
    }

    

    render(){
        return(
            <div>
                <h1>Numeros: {this.state.numeros.toString()}</h1>
                <button onClick={this.gerarNumero}>Gerar</button>
            </div>
    
        )        
    }
}

export default MegaSena