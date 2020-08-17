import React from "react";
import produtos from "../../data/produtos";

export default (props) => {
  const produtosTab = produtos.map((produto) => {
      console.log(produto)
    return (
      <tr key={produto.id}>
        <td>{produto.id}</td>
        <td>{produto.product}</td>
        <td>{produto.price}</td>
      </tr>
    );
  });

  return (
    <table>
      <tr>
        <td>Id</td>
        <td>Produto</td>
        <td>Preço</td>
      </tr>
      {produtosTab}
    </table>
  );
};
