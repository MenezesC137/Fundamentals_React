import './Produto.css'
import React from "react";
import produtos from "../../data/produtos";

export default function ProductTable(props) {

    const product = props;

    return (
        <div className='Produto'>
            <table>
                <caption>Tabela de produtos</caption>
                <thead>
                    <tr>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((product, i) => (
                        <tr key={product.id} >
                            <td>{product.id}</td>
                            <td>{product.prod}</td>
                            <td>R$ {product.preco.toFixed(2)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}