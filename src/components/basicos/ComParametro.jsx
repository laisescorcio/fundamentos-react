import React from 'react'

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    // Consegue modificar antes de renderizar porém não altera propriedades
    const notaInst = Math.ceil(props.nota)
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p>
                <strong>{ props.aluno } </strong>
                 tem nota 
                <strong> { notaInst } </strong>
                 e está 
                 <strong> { status } </strong>!
            </p>
        </div>
    )
}