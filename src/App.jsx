import React from "react";

import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";

export default (_) => (
  <div id="app">
    <h1>Fundamentos React</h1>
    <Fragmento />
    <ComParametro titulo="Situação do estudante" aluno="Carlos" nota={8} />
    <Primeiro></Primeiro>
  </div>
);
