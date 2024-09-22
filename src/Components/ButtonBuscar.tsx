import React from "react";

interface ButtonBuscarProps {
  onClick: () => void;
}

const ButtonBuscar: React.FC<ButtonBuscarProps> = ({ onClick }) => {
  return (
    <button className="btn btn-primary" onClick={onClick}>
      Consultar
    </button>
  );
};

export default ButtonBuscar;

