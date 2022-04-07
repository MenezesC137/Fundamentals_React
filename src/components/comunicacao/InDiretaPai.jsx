import React from "react";
import InDIretaFilho from "./InDiretaFilho";

export default (props) => {
    let nome = '?'
    let idade = 0
    let nerd = false
    
    function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
        nome = nomeParam
        idade = idadeParam
        nerd = nerdParam

        console.log(nomeParam, idadeParam, nerdParam);
    }
  return (
    <div>
        <div>
            <div>
                <span>{nome} </span>
                <span><strong>{idade}</strong> </span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'} </span>
            </div>
        </div>

        <InDIretaFilho quandoClicar={fornecerInformacoes}>

        </InDIretaFilho>
    </div>
  );
};
