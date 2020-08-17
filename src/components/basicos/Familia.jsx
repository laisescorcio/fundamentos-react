import React, { cloneElement } from "react";
//Se não inserisse {cloneElement}, na div teria que usar {React.cloneElement}

// Pedro recebe apenas a props sobrenome da tag Familia do App.jsx
//         <FamiliaMembro nome="Pedro" sobrenome={props.sobrenome}/>
// Ana recebe todas as props que estao na tag Familia do App.jsx (operador Spread)
//         <FamiliaMembro nome="Ana" {...props}/>
// Gustavo recebe diretamente o sobrenome
//        <FamiliaMembro nome="Gustavo" sobrenome="Ferreira"/>

// Para passar as props de pai para filho (no App.jsx)

export default (props) => {
  return (
    <div>
      {
        //recebe a lista de todos os filhos pelo props.children
        // e pra cada um dos filhos (child), fazer com que cada um tenha as propriedades do pai (child, props)
        // React.Children.map(props.children, (child) => {
        //   return cloneElement(child, props);
        // })
        props.children.map((child, i) => {
              return cloneElement(child, {...props, key: i });
             })
      }
    </div>
  );
};
