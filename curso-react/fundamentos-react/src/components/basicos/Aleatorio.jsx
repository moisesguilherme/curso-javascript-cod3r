import React from 'react'

export default function Aleatorio(props){

    const min = props.min
    const max = props.max

    const numeroAleatorio =  Math.floor( Math.random() * max-min )

    return (

    <h1>O número aleatório é: {numeroAleatorio}</h1>
    )

}