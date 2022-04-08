import "./App.css"
import React from "react";

import Card from "./components/layout/Card";

import Contador from "./components/contador/Contador";
import Input from "./components/formulario/Input";
import InDiretaPai from "./components/comunicacao/InDiretaPai";
import DiretaPai from "./components/comunicacao/DiretaPai";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import ParOuImpar from "./components/condicional/ParOuImpar";
import Produto from './components/repeticao/Produto'
import ListaAlunos from "./components/repeticao/ListaAlunos";
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

        <Card titulo="#12 - Contador" color="#8300ff">
            < Contador numeroInicial={0}/>
        </Card>

        <Card titulo="#11 - Componente controlado (Input)" color="#ff00c1">
            <Input />
        </Card>

        <Card titulo="#10 - Comunicação indireta" color="#0004ff">
            <InDiretaPai></InDiretaPai>
        </Card>

        <Card titulo="#09 - Comunicação Direta" color="#5f6075">
            <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#08 - Renderização Condicional" color="#c8cb0b">
            <ParOuImpar numero={21}></ParOuImpar>
            <UsuarioInfo usuario={{ nome: 'Fernando'}} ></UsuarioInfo>
            <UsuarioInfo usuario={{}}></UsuarioInfo>
        </Card>

        <Card titulo="#07 - Desafio Repetição" color="#0b5345">
            <Produto />
        </Card>

        <Card titulo="#06 - Repetição" color="  #2471a3  ">
            <ListaAlunos></ListaAlunos>
        </Card>

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

        <Card titulo="#01 - Primeiro comp">
            <Primeiro></Primeiro>
        </Card>
        
    </div>
  </div>
);
