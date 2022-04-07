import "./App.css"
import React from "react";

import Card from "./components/layout/Card";

import Familia from "./components/basicos/Familia";
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import Aleatorio from "./components/basicos/Aleatorio";
import Fragmento from "./components/basicos/Fragmento";
import ComParametro from "./components/basicos/ComParametro";
import Primeiro from "./components/basicos/Primeiro";


export default () => (
  <div className="App">
    <h1>Fundamentos React</h1>

    <div className="Cards">

        <Card titulo="#05 - Comp. com filhos" color="#FF4500">
            <Familia sobrenome="Silva">
                <FamiliaMembro nome="Pedro " />
                <FamiliaMembro nome="José"  />
                <FamiliaMembro nome="Maria"  />

            </Familia>
        </Card>

        <Card titulo="#04 - Desafio aleatorio" color="#080">
            <Aleatorio min={1} max={60}/>
        </Card>

        <Card titulo="#03 - Fragmento" color="#9E4DB9">
            <Fragmento />
        </Card>

        <Card titulo="#02 - Com Parametro" color="#0CC2CD">
            <ComParametro titulo="Situação do estudante" aluno="Carlos" nota={8} />
        </Card>

        <Card titulo="#01 - Fragmento">
            <Primeiro></Primeiro>
        </Card>
        
    </div>
  </div>
);
