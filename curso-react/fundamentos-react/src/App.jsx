import React from 'react'
import Aleatorio from './components/basicos/Aleatorio'
import Fragmento from './components/basicos/Fragmento'
import ComParametro from './components/basicos/ComParametro'
import Primeiro from './components/basicos/Primeiro'

//arrow function 
// (props) => {}
// () => {}
// _ => {}
// props => {}


export default () =>
    <div id="app">
        <h1>Fundamentos React</h1>
        <Aleatorio
            min={1}
            max={60}
        />
        <Fragmento />
        <ComParametro
            titulo="Situação do Aluno"
            aluno="Pedro Silva"
            nota={8.7}
        />
        <Primeiro></Primeiro>
    </div>
