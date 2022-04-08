import React from "react";

export default props => {

    function gerarNumeroNaoContido(min, max, array){
        const aleatorio = parseInt(Math.random() * (max-min)) +min
        return array.include(aleatorio) ? 
            gerarNumeroNaoContido(min, max, array) : 
            aleatorio
    }

    function gerarNumeros(qtde) {
        const numero = Array(qtde)
            .fill(0)
            .reduce(nums =>{
                const novoNumero = gerarNumeroNaoContido(1, 60, nums)
                return [...nums, novoNumero]
            }, [])
            .sort((n1, n2) => n1 - n2)

        return numero
    }

    return (
        <div>
           <p>Mega</p>
           <p>{gerarNumeros(7)}</p>
        </div>
    )
}