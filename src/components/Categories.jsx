import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";

export const Categories = ({ categoria, leyenda }) => {
  return (
    <button className="botones_categorias">
      {" "}
      {categoria}
      <div className="leyenda">{leyenda}</div>
    </button>
  );
};
