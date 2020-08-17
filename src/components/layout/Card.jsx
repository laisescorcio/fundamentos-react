import React from "react";
import "./Card.css";


// props.children: as props dos filhos no corpo do componente Card 

export default (props) => {

    const cardStyle = {
        // estabelece uma cor padrão na props, OU quando não é definido, usar '#F00'
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00'
    }

  return (
    <div className="Card" style={cardStyle}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
