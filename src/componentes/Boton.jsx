import React from "react";
import styles from "../hojas-de-estilo/Boton.module.css";

function Boton({ texto, esBotonDeClick, manejarClick }) {
  return (
    <button
      className={esBotonDeClick ? styles.botonClick : styles.botonReiniciar}
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
