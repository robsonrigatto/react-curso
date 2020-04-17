import React from 'react'
import ReactDOM from 'react-dom'
// import Primeiro from './componentes/PrimeiroComponente'
// import {CompA, CompB as B} from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'
// import FamiliaSilva from './componentes/FamiliaSilva'
// import Familia from './componentes/Familia'
// import Membro from './componentes/Membro'
// import ComponenteComFuncao from './componentes/ComponenteComFuncao'
// import Pai from './componentes/Pai'
// import ComponenteClasse from './componentes/ComponenteClasse'
import Contador from './componentes/Contador'

const elemento = document.getElementById('root')
//ReactDOM.render(<h1>Olá React</h1>, elemento)
// const jsx = <ul>
//     <li>1) Pedro</li>
//     <li>2) Maria</li>
//     <li>3) Ana</li>
//     </ul>

ReactDOM.render(
    <div>
        {/* <ComponenteClasse valor="sou uma propridade da classe"/> */}

        <Contador numero={0}/>

        {/* <Pai /> */}

        {/* <ComponenteComFuncao /> */}

        {/* <Familia sobrenome="Pereira">
            <Membro nome="Andre" /> */}
            {/* <Membro nome="Mariana" /> */}
        {/* </Familia> */}
        {/* <Familia sobrenome="Arruda">
            <Membro nome="Bia" /> */}
            {/* <Membro nome="Gustavo" /> */}
        {/* </Familia> */}
        {/* <FamiliaSilva sobrenome="Silva"/> */}
        {/* <MultiElementos /> */}
        {/* <CompA valor="sou o A"/>
        <B valor="B na área"/> */}
        {/* <Primeiro valor="Bom dia!" aBcD={123}/> */}
    </div>, 
    elemento)