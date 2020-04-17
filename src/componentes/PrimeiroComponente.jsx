import React from 'react'

export default (props) => 
    <div>
        <h1>{props.valor}</h1>
        <h2>{props.aBcD}</h2>
        <div>{Math.random()}</div>

    </div>




// export default () => <h1>Primeiro Componente (Arrow)!</h1>

// export default function primeiro() {
//     return <h1>Primeiro Componente!</h1>
// }