import React, { Component } from 'react';



class MegaSena extends Component {
     
    constructor(props){
        super(props);
        
        this.state = {
                      numeros:[],
                      qnt:6
                    };

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
            if( this.state.numeros[i] === num){
                existe = true;
                break;
            }
        }
    
        return existe;
    }


    addNumero = (arr) => {
        console.log(">>>> arr", arr) 
        this.setState({
             numeros: [...arr]
         });
    }

    resetNumeros = () => {
        console.log(">>>> reset")
        this.setState({
            numeros:[]
        });
    }

    ordenaNumeros = (arr) => {
      
        return arr.sort(this.sortfunction);
    }

    gerarNumero = (qtd) => { 
       
        qtd = isNaN(qtd) || qtd <= 6? 6 : qtd;

        console.log(">>> qtd", qtd);
        console.log(">>>>", this.state.numeros.length);

        var newArr = [];
        for(let i=0;i<=qtd; i++){
            let novoNumero = this.geraNumeroAleatorio(60,1) 
            if(!this.verificaSeExisteNumero(novoNumero)){
                 newArr.push(novoNumero);           
             }
        }

        return newArr;
        
    }

    handleSubmit(event) {
        event.preventDefault();
        //this.resetNumeros();  
        var arr = this.gerarNumero(this.state.qnt);
        var ord = this.ordenaNumeros(arr);
        this.addNumero(ord);
    }

    handleChange(event) {
        const value = event.target.value;
        const name =  event.target.name;
        console.log("name", name, "value", value);
        this.setState({qnt: value})
        
    }

    
    render(){
        return(
            <div>
                <h1>Numeros: {this.state.numeros.toString()}</h1>
                <form onSubmit={ (e) => this.handleSubmit(e) }>
                    <label htmlFor="qnt">Numero</label>
                    <input id="qntInput"
                        name="qnt"
                        type="number"
                        value={this.state.qnt}
                        onChange={(e) => this.handleChange(e)}
                        />
                    <input type="submit" value="Evnair"/>
                </form>
            </div>
    
        )        
    }
}

export default MegaSena