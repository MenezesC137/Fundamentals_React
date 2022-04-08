import React, { useState } from "react";
import InDIretaFilho from "./InDiretaFilho";

export default (props) => {
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);

  function fornecerInformacoes(nome, idade, nerd) {
    setNome(nome);
    setIdade(idade);
    setNerd(nerd);
  }
  return (
    <div>
      <div>
        <div>
          <span>{nome} </span>
          <span>
            <strong>{idade}</strong>{" "}
          </span>
          <span>{nerd ? "Verdadeiro" : "Falso"} </span>
        </div>
      </div>

      <InDIretaFilho quandoClicar={fornecerInformacoes}></InDIretaFilho>
    </div>
  );
};
